# TrinityCore Wiki

[![Build](https://img.shields.io/github/actions/workflow/status/TrinityCore/tc-wiki/pr-checks.yml?branch=main&event=push&label=build)](https://github.com/TrinityCore/tc-wiki/actions/workflows/pr-checks.yml?query=branch%3Amain)
[![Discord](https://img.shields.io/badge/chat-Discord-5865F2?logo=discord&logoColor=white)](https://discord.trinitycore.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](LICENSE)

Source for **[trinitycore.info](https://trinitycore.info)**, the documentation
for [TrinityCore](https://github.com/TrinityCore/TrinityCore): installation
guides, database table and DBC file references, how-tos and troubleshooting.

## Fix or add a page

Anyone with a GitHub account can edit the wiki.

1. Click **Edit this page** at the bottom of any page on
   [trinitycore.info](https://trinitycore.info).
2. Log in with GitHub, make your change and save.
3. Your edit becomes a pull request. Page-only changes that pass the build
   merge on their own.

See [CONTRIBUTING.md](CONTRIBUTING.md) for page layout, format rules and what
the automatic checks look for.

## Run it locally

The site is built with [VitePress](https://vitepress.dev) and needs the
Node.js version in `.node-version`.

```bash
npm ci
npm run docs:dev     # dev server with hot reload
npm run docs:build   # full build into .vitepress/dist
```

## Get help

Questions about TrinityCore itself or about the wiki: join the
[TrinityCore Discord](https://discord.trinitycore.org/).
Bugs in the core go to the
[TrinityCore issue tracker](https://github.com/TrinityCore/TrinityCore/issues).

## License

The wiki content is licensed under
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0](LICENSE).
