import { test } from 'node:test'
import assert from 'node:assert/strict'
import { problems } from './check-pr.mjs'

const edit = (path, ...lines) => [
  `diff --git a/${path} b/${path}`,
  'index 1111111..2222222 100644',
  `--- a/${path}`,
  `+++ b/${path}`,
  `@@ -1,1 +1,${lines.length} @@`,
  ...lines.map((line) => `+${line}`),
].join('\n')

test('accepts plain page edits and images', () => {
  assert.deepEqual(problems(edit('database/335/world/creature.md', '| guid | int |', 'SET @GUID := 1;')), [])
  assert.deepEqual(problems('diff --git a/public/x.png b/public/x.png\nnew file mode 100644\nBinary files /dev/null and b/public/x.png differ'), [])
  assert.deepEqual(problems(edit('how-to/a.md', '> Note', '{.is-info}', '`<placeholder>` and <br/>')), [])
})

test('rejects files outside content', () => {
  for (const path of ['.vitepress/config.mts', '.github/workflows/x.yml', 'package.json', 'CLAUDE.md', 'public/_redirects', 'functions/api/auth.ts']) {
    assert.notDeepEqual(problems(edit(path, 'x')), [], path)
  }
})

test('rejects renames out of content, symlinks and empty diffs', () => {
  const rename = 'diff --git a/a.md b/.vitepress/a.md\nsimilarity index 100%\nrename from a.md\nrename to .vitepress/a.md'
  assert.notDeepEqual(problems(rename), [])
  assert.notDeepEqual(problems('diff --git a/a.md b/a.md\nnew file mode 120000\n@@ -0,0 +1 @@\n+.vitepress/config.mts'), [])
  assert.notDeepEqual(problems(''), [])
})

test('rejects code in pages', () => {
  for (const line of [
    '<script setup>',
    '<ScRiPt>',
    '<img src=x onerror=alert(1)>',
    '{onclick="alert(1)"}',
    '{{ alert(1) }}',
    '<div :title="evil()">',
    '  v-html="x"',
    '<button @click="x()">',
    'head:',
    '[x](javascript:alert(1))',
    '<a href="&#106;avascript&#58;alert(1)">',
    '<iframe src="https://example.com"></iframe>',
  ]) {
    assert.notDeepEqual(problems(edit('a.md', line)), [], line)
  }
})

test('catches a script URL split across lines', () => {
  assert.notDeepEqual(problems(edit('a.md', '<a href="java', 'script:alert(1)">x</a>')), [])
})

test('reads added lines that look like diff headers', () => {
  assert.notDeepEqual(problems(edit('a.md', '++ <script>')), [])
})
