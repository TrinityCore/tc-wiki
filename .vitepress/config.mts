import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type DefaultTheme } from 'vitepress'

const root = path.resolve(__dirname, '..')
const skipDirs = new Set(['.git', '.vitepress', 'node_modules', 'public', '.claude', '.code-review-graph'])

function frontmatter(file: string): Record<string, string> {
  const m = fs.readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/)
  const out: Record<string, string> = {}
  for (const line of m?.[1].split('\n') ?? []) {
    const kv = line.match(/^(\w+):\s*(.*)$/)
    if (kv) out[kv[1]] = kv[2].trim()
  }
  return out
}

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) return skipDirs.has(e.name) ? [] : walk(p)
    return e.name.endsWith('.md') ? [path.relative(root, p)] : []
  })
}

const unpublished = walk(root).filter((f) => frontmatter(path.join(root, f)).published === 'false')

function sidebarFor(dir: string): DefaultTheme.SidebarItem[] {
  const abs = path.join(root, dir)
  const entries = fs.readdirSync(abs, { withFileTypes: true })
    .filter((e) => (e.isDirectory() && !skipDirs.has(e.name)) || (e.name.endsWith('.md') && e.name !== 'home.md'))
    .filter((e) => !unpublished.includes(path.join(dir, e.name)))
    .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))
  // A directory and a same-named page (install/Server-Setup + Server-Setup.md) merge into one group.
  const pages = new Set(entries.filter((e) => e.isFile()).map((e) => e.name.slice(0, -3)))
  return entries.flatMap((e): DefaultTheme.SidebarItem[] => {
    const rel = path.join(dir, e.name)
    if (e.isDirectory()) {
      const home = fs.existsSync(path.join(root, rel, 'home.md'))
      const link = home ? `/${rel}/home` : pages.has(e.name) ? `/${rel}` : undefined
      return [{ text: e.name, link, collapsed: true, items: sidebarFor(rel) }]
    }
    const name = e.name.slice(0, -3)
    if (entries.some((d) => d.isDirectory() && d.name === name)) return []
    return [{ text: frontmatter(path.join(root, rel)).title || name, link: `/${rel.slice(0, -3)}` }]
  })
}

const sections: Record<string, string> = {
  'install': 'Install',
  'how-to': 'How-to',
  'database/335': 'Databases (3.3.5a)',
  'database/master': 'Databases (master)',
  'files': 'Files',
  'troubleshooting-articles': 'Troubleshooting',
  'contributing': 'Contributing',
}

// The old Wiki.js left-hand menu. Shown as the top nav and at the head of every sidebar.
const menu = [
  { text: 'Install', items: [
    { text: 'Requirements', link: '/install/requirements' },
    { text: 'Core Installation', link: '/install/Core-Installation' },
    { text: 'Server Setup', link: '/install/Server-Setup' },
    { text: 'Databases Installation', link: '/install/Database-Installation' },
    { text: 'Networking', link: '/install/Networking' },
    { text: 'Final Server Steps', link: '/install/Final-Server-Steps' },
    { text: 'Client Setup', link: '/install/Client-Setup' },
  ] },
  { text: 'Databases', items: [
    { text: 'Databases (master)', link: '/database/master/world/home' },
    { text: 'Databases (3.3.5a)', link: '/database/335/world/home' },
  ] },
  { text: 'Files', items: [
    { text: 'Configuration', link: '/files/configuration/home' },
    { text: 'DBC', link: '/files/DBC/335/home' },
  ] },
  { text: 'How-to', link: '/how-to/gm-commands' },
  { text: 'Troubleshooting', link: '/troubleshooting-articles/home' },
  { text: 'Contributing', link: '/contributing/standard-operating-procedures' },
  { text: 'Links', items: [
    { text: 'TrinityCore Forum', link: 'https://talk.trinitycore.org/' },
    { text: 'TrinityCore GitHub', link: 'https://github.com/TrinityCore/TrinityCore' },
    { text: 'Doxygen Master', link: 'https://trinitycore.net/' },
    { text: 'Doxygen 3.3.5a', link: 'https://335.trinitycore.net/' },
  ] },
]

export default defineConfig({
  title: 'TrinityCore Wiki',
  description: 'Documentation for the TrinityCore MMORPG framework',
  cleanUrls: true,
  // Ship sidebar + page hash map once as a cached chunk instead of inlining ~350 KB into every page.
  metaChunk: true,
  srcExclude: ['README.md', 'CLAUDE.md', ...unpublished],
  rewrites: { 'home.md': 'index.md' },
  // Links to pages that are unpublished or were never written (already dead in Wiki.js).
  ignoreDeadLinks: [
    /^https?:\/\/localhost\b/,
    ...unpublished.map((f) => `/${f.slice(0, -3)}`),
    /^\/contributing\/(creating-a-pull-request|sql-guidelines)$/,
    /^(\/database\/master|\.\/\.\.)\/world\/(broadcast_text|item_template|scripts|spell_ranks|waypoint_data)$/,
  ],
  // Exact redirects for old Wiki.js /en/ URLs. A `/en/* /:splat` rule would allow `/en//evil.com` open redirects.
  buildEnd({ outDir, pages }) {
    const rules = ['/en / 301', '/home / 301', ...['/IRC', '/en/IRC'].map((p) => `${p} https://discord.trinitycore.org/ 301`), ...pages.map((p) => {
      const page = p.slice(0, -3)
      return `/en/${page} /${page === 'home' ? '' : page} 301`
    })]
    fs.writeFileSync(path.join(outDir, '_redirects'), rules.join('\n') + '\n')
  },
  head: [
    ['link', { rel: 'icon', href: '/tc_logo.png' }],
    ['script', { defer: '', src: 'https://tr.kpsn.dev/script.js', 'data-website-id': 'eaecc4a9-c766-4563-8ef6-500085fd579f' }],
  ],
  markdown: {
    config(md) {
      // Wiki.js rendered the front matter title as the page header, so most pages have no H1 of their own.
      md.core.ruler.push('frontmatter_h1', (state) => {
        const title = state.env.frontmatter?.title
        const hasH1 = state.tokens.some((t) =>
          (t.type === 'heading_open' && t.tag === 'h1') || (t.type === 'html_block' && /<h1[\s>]/i.test(t.content)))
        if (!title || hasH1 || state.env.frontmatter?.layout === 'home') return
        const text = new state.Token('text', '', 0)
        text.content = title
        const inline = new state.Token('inline', '', 0)
        inline.content = title
        inline.children = [text]
        state.tokens.unshift(new state.Token('heading_open', 'h1', 1), inline, new state.Token('heading_close', 'h1', -1))
      })
    },
  },
  themeConfig: {
    logo: '/tc_logo.png',
    nav: menu,
    sidebar: {
      '/': menu,
      ...Object.fromEntries(Object.entries(sections).map(([dir, text]) =>
        [`/${dir}/`, [...menu, { text, items: sidebarFor(dir) }]])),
    },
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/TrinityCore/tc-wiki/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.trinitycore.org/' },
      { icon: 'github', link: 'https://github.com/TrinityCore/tc-wiki' },
    ],
    outline: 'deep',
  },
})
