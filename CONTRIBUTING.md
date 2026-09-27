# Contributing to the TrinityCore Wiki

Thanks for helping keep the wiki accurate. Every page on
[trinitycore.info](https://trinitycore.info) is a markdown file in this
repository, and every change goes in as a pull request.

Questions? Ask on [Discord](https://discord.trinitycore.org/).

## Editing a page

### In the browser (easiest)

1. Open the page on [trinitycore.info](https://trinitycore.info) and click
   **Edit this page** at the bottom.
2. Log in with GitHub. The editor forks the wiki to your account the first
   time.
3. Make your change and click **Save**. This opens a draft pull request.
4. Set the status to **In review** when you are done. This takes the pull
   request out of draft so it gets checked.

The editor edits the raw markdown, so the format rules below still apply.

### On GitHub or locally

Fork the repository, edit the markdown file (the "Edit on GitHub instead" link on
each page goes straight to it), and open a pull request against `main`.

To preview your change locally you need Node.js (version in `.node-version`):

```bash
npm ci
npm run docs:dev     # dev server with hot reload
npm run docs:build   # full build, the same check CI runs
```

## What happens to your pull request

1. CI builds the whole site. The build fails on links to pages that do not
   exist and on broken HTML or Vue template syntax.
2. If the build passes, the pull request merges on its own when:
   - it only changes markdown pages and images in `public/`,
   - the changed pages contain no scripts, styles, iframes, event handlers,
     Vue syntax (including `{{ }}` in inline code) or front matter keys
     beyond the standard ones, and
   - your GitHub account is at least 7 days old.
3. Anything else waits for a maintainer to review it.

Once merged, the live site updates within a few minutes.

## Where pages live

The file path is the URL. `database/335/world/creature_template.md` is served
at `/database/335/world/creature_template`, so renaming or moving a file
breaks existing links to it.

| Folder | Contents |
| --- | --- |
| `install/` | Installation guides |
| `database/335/`, `database/master/` | SQL table docs per branch (`335` is 3.3.5a/WotLK), split into `auth`, `characters`, `world` and, on master, `hotfixes` |
| `files/DBC/335/` | Client DBC file docs |
| `files/configuration/` | Server config file docs |
| `how-to/` | Guides for specific tasks |
| `troubleshooting-articles/` | Fixes for common problems |
| `contributing/` | Coding standards and project process for TrinityCore itself |
| `public/` | Images, linked by root path (`/quest_poi.png`) |

Each section's index page is `home.md`. The sidebar is built from the folder
tree, so a new file shows up there on its own.

## Page format

Pages start with front matter carried over from the old Wiki.js site. Keep
it, and fill in `title` for new pages:

```yaml
---
title: creature_template
description:
published: true
tags: database, world, 3.3.5
editor: markdown
---
```

- `title` is shown as the page heading, so the body does not need an H1.
- Quote a title that starts with `*` or contains `: `.
- `published: false` hides a page from the site.

Every page is compiled as a Vue template, which means:

- Raw HTML must be well formed. Close every tag you open.
- Put things that look like tags, such as `<placeholder>`, inside backticks.
- `{{ }}` outside a code span is treated as code. Put it in backticks too.

Callouts use the Wiki.js syntax on the line after a blockquote:

```markdown
> Back up your database before running this.
{.is-warning}
```

The classes are `{.is-info}`, `{.is-success}`, `{.is-warning}` and
`{.is-danger}`. You can also add `{.links-list}` after a list and
`{#custom-id}` after a heading. Custom ids must be unique within a page.

### Database and DBC pages

These follow a fixed shape. Copy an existing page in the same folder:

1. A short description of the table or file.
2. `## Structure`: a table with the columns
   `Field | Type | Attributes | Key | Null | Default | Extra | Comment`, each
   field name linking to its section below.
3. `## Description of the fields`: one `###` heading per column.

335 and master pages for the same table are separate files. If a change
applies to both branches, update both.

## License

By contributing you agree that your work is published under the
[CC BY-NC-SA 4.0](LICENSE) license.
