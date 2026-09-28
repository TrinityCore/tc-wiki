#!/usr/bin/env node
// Decides whether a pull request is safe to merge without a human review.
// Reads a unified diff (`gh pr diff <n>`) on stdin and the pull request's head
// commit as the first argument, prints every problem it finds, and exits 0
// only when there are none. The head commit must be fetched, never checked out:
// changed pages are read with `git show` as data.
//
// Pages are compiled as Vue components, so markdown can run code at build
// time and in readers' browsers. Each changed page is rendered with the site's
// own markdown config and parsed with Vue's compiler, and anything Vue would
// treat as code goes to a human, as does anything outside page and image content.

import { execFileSync } from 'node:child_process'
import { text } from 'node:stream/consumers'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createMarkdownRenderer, resolveConfig } from 'vitepress'
import { parse } from 'vue/compiler-sfc'

const IMAGE = /\.(png|jpe?g|gif|webp|svg)$/i
const REPO_FILES = new Set(['README.md', 'CONTRIBUTING.md', 'CLAUDE.md'])
const FRONTMATTER = new Set(['title', 'description', 'published', 'date', 'tags', 'editor', 'dateCreated'])
const BLOCKED_TAGS = /^(script|style|iframe|frame|frameset|object|embed|applet|link|meta|base|form|foreignobject)$/i

// Browsers drop whitespace inside URLs and decode entities in attributes, so
// schemes are checked on the decoded, whitespace-free text of the whole page.
const SCHEME = /(javascript|vbscript):|data:text\/html/i
// VitePress pastes included files into the page before rendering it.
const INCLUDE = /<!--\s*@include:/

const NODE = { ELEMENT: 1, INTERPOLATION: 5, ATTRIBUTE: 6, DIRECTIVE: 7 }
const PLAIN_ELEMENT = 0

function decodeEntities(text) {
  return text
    .replace(/&#x([0-9a-f]+);?/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);?/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&(colon|tab|newline);/gi, (_, name) => ({ colon: ':', tab: '\t', newline: '\n' })[name.toLowerCase()])
}

export function parseDiff(diff) {
  const files = []
  let file
  let inHunk = false
  for (const line of diff.split('\n')) {
    if (line.startsWith('diff --git ')) {
      const m = /^diff --git a\/(.+) b\/(.+)$/.exec(line)
      file = { paths: m && m[1] === m[2] ? [m[1]] : [], modes: [], deleted: false }
      files.push(file)
      inHunk = false
    } else if (!file || inHunk) {
      continue
    } else if (line.startsWith('@@')) {
      inHunk = true
    } else if (/^(rename|copy) (from|to) /.test(line)) {
      file.paths.push(line.replace(/^\S+ \S+ /, ''))
    } else if (/mode \d+$/.test(line)) {
      file.modes.push(line.split(' ').pop())
      if (line.startsWith('deleted file mode')) file.deleted = true
    }
  }
  return files
}

export function pathProblem(path) {
  if (path.split('/').some((part) => part.startsWith('.'))) return 'hidden or config path'
  if (REPO_FILES.has(path)) return 'repository file'
  if (path.endsWith('.md')) return null
  if (path.startsWith('public/') && IMAGE.test(path)) return null
  return 'not a page or an image'
}

let renderer
async function render(source, path) {
  if (!renderer) {
    const root = fileURLToPath(new URL('..', import.meta.url))
    const config = await resolveConfig(root, 'build', 'production')
    renderer = await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base, config.logger)
  }
  const env = { path, relativePath: path, cleanUrls: true }
  const html = renderer.render(source, env)
  return { html, frontmatter: env.frontmatter ?? {}, blocks: env.sfcBlocks }
}

// Everything Vue would compile into code: directives, {{ }}, and components.
function templateProblems(node, found) {
  for (const child of node.children ?? []) {
    if (child.type === NODE.INTERPOLATION) found.push(`Vue interpolation: {{${child.content.loc.source}}}`)
    if (child.type !== NODE.ELEMENT) continue
    if (child.tagType !== PLAIN_ELEMENT) found.push(`component or template tag: <${child.tag}>`)
    if (BLOCKED_TAGS.test(child.tag)) found.push(`raw HTML tag: <${child.tag}>`)
    let vPre = false
    for (const prop of child.props) {
      if (prop.type === NODE.DIRECTIVE && prop.name === 'pre') vPre = true
      else if (prop.type === NODE.DIRECTIVE) found.push(`Vue directive: ${prop.loc.source}`)
      else if (/^on/i.test(prop.name)) found.push(`event handler attribute: ${prop.loc.source}`)
    }
    // v-pre (code blocks) makes Vue treat everything inside as plain text.
    if (!vPre) templateProblems(child, found)
  }
  return found
}

export async function pageProblems(source, path) {
  const found = []
  if (INCLUDE.test(source)) found.push('file include')
  const scheme = SCHEME.exec(decodeEntities(source).replace(/[\s\x00-\x1f]/g, ''))
  if (scheme) found.push(`script URL (${scheme[0]})`)

  const { html, frontmatter, blocks } = await render(source, path)
  for (const key of Object.keys(frontmatter)) {
    if (!FRONTMATTER.has(key)) found.push(`front matter key: ${key}`)
  }
  // VitePress lifts <script> and <style> blocks out of the page into the SFC,
  // then compiles the rest of the rendered HTML as the SFC's template.
  if (blocks?.scripts.length || blocks?.styles.length || blocks?.customBlocks.length) found.push('script or style block')
  const { descriptor, errors } = parse(`<template><div>${html}</div></template>`)
  if (errors.length) found.push(`not a valid Vue template: ${errors[0].message ?? errors[0]}`)
  if (descriptor.script || descriptor.scriptSetup || descriptor.styles.length || descriptor.customBlocks.length) {
    found.push('block outside the page template')
  }
  if (descriptor.template?.ast) templateProblems(descriptor.template.ast, found)
  return found
}

// readFile(path) returns a changed file's content at the pull request's head.
export async function problems(diff, readFile) {
  const files = parseDiff(diff)
  if (files.length === 0) return ['empty diff']
  const found = []
  for (const file of files) {
    const name = file.paths.at(-1) ?? '(unknown path)'
    if (file.paths.length === 0) found.push(`${name}: path could not be read`)
    // A moved page changes its URL, which nav links and outside links still use.
    if (file.paths.length > 1) found.push(`${name}: renamed or copied`)
    for (const path of file.paths) {
      const problem = pathProblem(path)
      if (problem) found.push(`${path}: ${problem}`)
    }
    for (const mode of file.modes) {
      if (mode !== '100644') found.push(`${name}: file mode ${mode}`)
    }
    if (file.deleted || !name.endsWith('.md') || found.length) continue
    for (const problem of await pageProblems(readFile(name), name)) found.push(`${name}: ${problem}`)
  }
  return found
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const head = process.argv[2]
  if (!/^[0-9a-f]{40}$/.test(head ?? '')) {
    console.log('usage: gh pr diff <n> | node scripts/check-pr.mjs <head commit sha>')
    process.exit(2)
  }
  const readFile = (path) => execFileSync('git', ['show', `${head}:${path}`], { encoding: 'utf8' })
  const found = await problems(await text(process.stdin), readFile)
  for (const problem of found) console.log(problem)
  process.exit(found.length === 0 ? 0 : 1)
}
