#!/usr/bin/env node
// Decides whether a pull request is safe to merge without a human review.
// Reads a unified diff (`gh pr diff <n>`) on stdin, prints every problem it
// finds, and exits 0 only when there are none.
//
// Pages are compiled as Vue components, so markdown can run code at build
// time and in readers' browsers. Anything that could do that, or anything
// outside page and image content, goes to a human.

import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const IMAGE = /\.(png|jpe?g|gif|webp|svg)$/i
const REPO_FILES = new Set(['README.md', 'CONTRIBUTING.md', 'CLAUDE.md'])

// ponytail: line-based denylist. It errs toward "needs review"; a real HTML
// and Vue template parse over the whole new file is the upgrade path.
const LINE_RULES = [
  [/<\s*\/?\s*(script|style|iframe|frame|frameset|object|embed|applet|link|meta|base|form|foreignobject)\b/i, 'raw HTML tag'],
  [/\bon[a-z]{3,}\s*=/i, 'event handler attribute'],
  [/\{\{/, 'Vue interpolation'],
  [/(^|[\s<])(v-[a-z-]+|:[a-z][\w.:-]*)\s*=/i, 'Vue binding'],
  [/(^|[\s<])@[a-z][\w.:-]*\s*=/, 'Vue event listener'],
  [/^\s*head\s*:/i, 'front matter head'],
]

// Browsers drop whitespace inside URLs and decode entities in attributes, so
// schemes are checked on the decoded, whitespace-free text of all added lines.
const SCHEME = /(javascript|vbscript):|data:text\/html/i

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
      file = { paths: m && m[1] === m[2] ? [m[1]] : [], modes: [], added: [] }
      files.push(file)
      inHunk = false
    } else if (!file) {
      continue
    } else if (inHunk) {
      if (line.startsWith('+')) file.added.push(line.slice(1))
    } else if (line.startsWith('@@')) {
      inHunk = true
    } else if (/^(rename|copy) (from|to) /.test(line)) {
      file.paths.push(line.replace(/^\S+ \S+ /, ''))
    } else if (/mode \d+$/.test(line)) {
      file.modes.push(line.split(' ').pop())
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

export function problems(diff) {
  const files = parseDiff(diff)
  if (files.length === 0) return ['empty diff']
  const found = []
  for (const file of files) {
    const name = file.paths.at(-1) ?? '(unknown path)'
    if (file.paths.length === 0) found.push(`${name}: path could not be read`)
    for (const path of file.paths) {
      const problem = pathProblem(path)
      if (problem) found.push(`${path}: ${problem}`)
    }
    for (const mode of file.modes) {
      if (mode !== '100644') found.push(`${name}: file mode ${mode}`)
    }
    for (const line of file.added) {
      for (const [rule, reason] of LINE_RULES) {
        if (rule.test(line)) found.push(`${name}: ${reason}: ${line.trim().slice(0, 120)}`)
      }
    }
    const flat = decodeEntities(file.added.join('\n')).replace(/[\s\x00-\x1f]/g, '')
    const scheme = SCHEME.exec(flat)
    if (scheme) found.push(`${name}: script URL (${scheme[0]})`)
  }
  return found
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const found = problems(readFileSync(0, 'utf8'))
  for (const problem of found) console.log(problem)
  process.exit(found.length === 0 ? 0 : 1)
}
