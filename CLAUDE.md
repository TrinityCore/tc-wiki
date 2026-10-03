# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The TrinityCore wiki (https://trinitycore.info), built as a static VitePress site and deployed on Cloudflare Pages. It was migrated from Wiki.js; the pages still carry Wiki.js front matter and some Wiki.js markup. Contributors edit through GitHub (every page has an "Edit this page on GitHub" link → fork + PR). Content is licensed CC BY-NC-SA 4.0.

## Commands

```bash
npm ci                   # install
npm run docs:dev         # local dev server with hot reload
npm run docs:build       # full build into .vitepress/dist (~1 min); fails on dead links and Vue template errors
npm run docs:preview     # serve the built site
```

`/edit` is a Decap CMS page editor (`public/edit/`). Users log in with GitHub through the Pages Functions in `functions/api/` (secrets `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`, OAuth callback `https://trinitycore.info/api/callback`), and each save becomes a pull request from their fork. Its collections must match the section list in the `editLink` pattern in `.vitepress/config.mts`. `/contribute` (`public/contribute/`) runs Sveltia CMS on trial with its own copy of `config.yml`; keep its collections in sync with `/edit` until one editor replaces the other.

Pull requests to `main` are built by `.github/workflows/pr-checks.yml`. `.github/workflows/auto-merge.yml` then squash-merges them without review when `scripts/check-pr.mjs` passes (only pages and `public/` images changed, nothing that can run code) and the author's account is at least 7 days old. The check renders each changed page in full with the site's markdown config and rejects anything Vue compiles into code, so it follows new markdown plugins on its own; update its front matter allowlist and blocked tags when pages legitimately need more. Run its tests with `node --test scripts/*.test.mjs`.

Cloudflare Pages settings: build command `npm run docs:build`, output directory `.vitepress/dist`, Node version from `.node-version`.

## Layout

- The markdown source lives at the repo root (`srcDir: '.'`). The file path is the page URL: `database/335/world/creature_template.md` → `/database/335/world/creature_template`. Renaming or moving a file changes the URL.
- Section index pages are `home.md`; the root `home.md` is rewritten to `/`.
- `database/` documents SQL tables per branch (`335` = 3.3.5a/WotLK, `master`), split by DB (`auth`, `characters`, `world`, plus `hotfixes` on master). 335 and master pages for the same table are separate files.
- `files/DBC/335/` documents client DBC files; `files/configuration/` documents config files.
- Images live in `public/` and are referenced by root-relative path (`/quest_poi.png`).
- Text shared by several pages lives in `partial/` (not published as pages) and is pulled in with `<!--@include: @/partial/name.md-->`. The auto-merge check accepts only that exact form, with no front matter or nested includes in the partial, and re-renders every including page when a partial changes.
- `.vitepress/config.mts` builds the sidebar from the directory tree (per section listed in `sections`), excludes pages with `published: false`, writes `_redirects` for old `/en/...` URLs at build end, and adds the front matter `title` as an H1 when a page has none (Wiki.js showed the title in its header, so most pages lack one).

## Page format gotchas

- Every page is compiled as a Vue template: raw HTML must be well-formed (close every tag), and bare `<placeholder>` text outside code spans breaks the build. `{{ }}` outside code is interpolated.
- Front matter must be valid YAML — quote titles that start with `*` or contain `: `.
- Wiki.js attribute syntax still works via VitePress's built-in markdown-it-attrs: `{.is-info}` / `{.is-warning}` / `{.is-danger}` / `{.is-success}` on the line after a blockquote, `{.links-list}` after a list, `{#custom-id}` after a heading. Styles are in `.vitepress/theme/wikijs.css`. `{.dense}` on tables and `{.tabset}` headings are accepted but have no effect.
- Custom heading ids must be unique within a page, or the build fails.
- Database/DBC pages follow a fixed shape: short description, `## Structure` table (`Field | Type | Attributes | Key | Null | Default | Extra | Comment`, field names linking to anchors), then `## Description of the fields` with one `###` heading per column.
- Links to pages that don't exist fail the build. Known-missing targets are allowlisted in `ignoreDeadLinks` in the config.
