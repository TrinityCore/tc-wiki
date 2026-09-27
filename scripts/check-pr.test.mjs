import { test } from 'node:test'
import assert from 'node:assert/strict'
import { problems } from './check-pr.mjs'

const FRONT = '---\ntitle: A page\ndescription:\npublished: true\ndate: 2024-01-01T00:00:00.000Z\ntags:\neditor: markdown\ndateCreated: 2024-01-01T00:00:00.000Z\n---\n'

const edit = (path) => [
  `diff --git a/${path} b/${path}`,
  'index 1111111..2222222 100644',
  `--- a/${path}`,
  `+++ b/${path}`,
  '@@ -1,1 +1,1 @@',
  '+x',
].join('\n')

// Checks a one-page pull request whose page is `body` under normal front matter.
const page = (body, front = FRONT) => problems(edit('how-to/a.md'), () => front + body)

test('accepts plain page edits, images and deletions', async () => {
  assert.deepEqual(await page('| guid | int |\n\nSET @GUID := 1;\n'), [])
  assert.deepEqual(await page('> Note\n{.is-info}\n\n`<placeholder>` and <br/> <kbd>Ctrl</kbd>\n\n## Id {#custom-id}\n'), [])
  assert.deepEqual(await page('```sql\nSELECT \'{{ x }}\' FROM t; -- <script>\n```\n'), [])
  assert.deepEqual(await problems('diff --git a/public/x.png b/public/x.png\nnew file mode 100644\nBinary files /dev/null and b/public/x.png differ'), [])
  const deleted = 'diff --git a/a.md b/a.md\ndeleted file mode 100644\n--- a/a.md\n+++ /dev/null\n@@ -1 +0,0 @@\n-x'
  assert.deepEqual(await problems(deleted, () => assert.fail('read a deleted file')), [])
})

test('rejects files outside content', async () => {
  for (const path of ['.vitepress/config.mts', '.github/workflows/x.yml', 'package.json', 'CLAUDE.md', 'CONTRIBUTING.md', 'public/_redirects', 'functions/api/auth.ts']) {
    assert.notDeepEqual(await problems(edit(path), () => 'x'), [], path)
  }
})

test('rejects renames out of content, symlinks and empty diffs', async () => {
  const rename = 'diff --git a/a.md b/.vitepress/a.md\nsimilarity index 100%\nrename from a.md\nrename to .vitepress/a.md'
  assert.notDeepEqual(await problems(rename), [])
  assert.notDeepEqual(await problems('diff --git a/a.md b/a.md\nnew file mode 120000\n@@ -0,0 +1 @@\n+.vitepress/config.mts'), [])
  assert.notDeepEqual(await problems(''), [])
})

test('rejects code in pages', async () => {
  for (const body of [
    '<script setup>\nconsole.log(1)\n</script>',
    '<ScRiPt>x</ScRiPt>',
    '<img src=x onerror=alert(1)>',
    'Text {onclick="alert(1)"}',
    '{{ alert(1) }}',
    // VitePress only escapes Vue syntax in fenced code, not in inline code.
    '`{{ alert(1) }}`',
    '<div :title="evil()">x</div>',
    '<div\n  v-html="x">\n</div>',
    '<button @click="x()">x</button>',
    '[x](javascript:alert(1))',
    '<a href="&#106;avascript&#58;alert(1)">x</a>',
    '<a href="java\nscript:alert(1)">x</a>',
    '<iframe src="https://example.com"></iframe>',
    // Found in review: directive arguments, dynamic arguments and markdown-it-attrs.
    '<button v-on:click="console.log(1)">x</button>',
    '<div v-bind:title="String(1)">x</div>',
    '<div :[\'title\']="String(1)">x</div>',
    '## Heading {:title="String(1)"}',
    '## Heading {@click="console.log(1)"}',
    'Text {v-on:click="console.log(1)"}',
    // Components, slots and SFC blocks.
    '<Badge>x</Badge>',
    '<div is="vue:Badge">x</div>',
    '<component is="Badge">x</component>',
    '</div></template><script setup>console.log(1)</script><template><div>',
    '<!--@include: ../.vitepress/theme/GitHubEditLink.vue-->',
  ]) {
    assert.notDeepEqual(await page(body), [], body)
  }
})

test('checks the whole page, not only added lines', async () => {
  // Removing a fence elsewhere in the page turns unchanged text into code.
  assert.notDeepEqual(await page('Some text\n\n{{ constructor }}\n'), [])
})

test('rejects code in front matter', async () => {
  assert.notDeepEqual(await page('x', '---\ntitle: "{{ alert(1) }}"\n---\n'), [])
  assert.notDeepEqual(await page('x', '---\ntitle: A\nhead:\n  - - script\n    - src: https://example.com/x.js\n---\n'), [])
})
