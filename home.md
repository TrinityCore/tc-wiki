---
title: TrinityCore Wiki
description: Documentation for the TrinityCore MMORPG framework
published: true
date: 2026-09-26T00:00:00.000Z
tags: 
editor: markdown
dateCreated: 2021-08-13T17:47:17.543Z
layout: home
hero:
  name: TrinityCore Wiki
  text: Build and run your own server
  tagline: Documentation for the open-source MMORPG framework, written in C++.
  image:
    src: /tc_logo.png
    alt: TrinityCore logo
  actions:
    - theme: brand
      text: Install a server
      link: /install/requirements
    - theme: alt
      text: Database reference
      link: /database/335/world/home
    - theme: alt
      text: Get help on Discord
      link: https://discord.trinitycore.org/
features:
  - title: Install
    details: Requirements, compiling the core, and setting up the databases, network and client.
    link: /install/requirements
  - title: Databases
    details: Every table and column in the auth, characters, world and hotfixes databases.
    link: /database/335/world/home
  - title: Files
    details: Client DBC file structures and server configuration options.
    link: /files/configuration/home
  - title: How-to
    details: GM commands, RBAC, SOAP, logging, debugging with GDB and ASan.
    link: /how-to/gm-commands
  - title: Troubleshooting
    details: Fixes for common build, database and connection errors.
    link: /troubleshooting-articles/home
  - title: Contributing
    details: Coding standards, the issue tracker, and how to send a pull request.
    link: /contributing/standard-operating-procedures
---

## Pick your branch

| Branch | Client | Status |
|---|---|---|
| **3.3.5** | 3.3.5a.12340 (the 3.4 WotLK Classic client does not work) | Recommended for new users |
| **master** | Current retail | Active, but a lot of content is missing |
| cata_classic | 4.4.x (the 4.3.4 client does not work) | Abandoned |
| wotlk_classic | 3.4.4.61581 (Chinese client) | Abandoned |

## Install path

1. [Requirements](/install/requirements): [Linux](/install/requirements/linux), [macOS](/install/requirements/macos), [Windows](/install/requirements/windows)
2. Core installation: [Linux](/install/Core-Installation/linux-core-installation), [macOS](/install/Core-Installation/macOS-core-installation), [Windows](/install/Core-Installation/windows-core-installation), [Docker](/install/Core-Installation/Docker)
3. [Server Setup](/install/Server-Setup)
4. [Database Installation](/install/Database-Installation)
5. [Networking](/install/Networking)
6. [Final Server Steps](/install/Final-Server-Steps)
7. [Client Setup](/install/Client-Setup)

## Database reference

- **3.3.5a:** [Auth](/database/335/auth/home) · [Characters](/database/335/characters/home) · [World](/database/335/world/home)
- **master:** [Auth](/database/master/auth/home) · [Characters](/database/master/characters/home) · [Hotfixes](/database/master/hotfixes/home) · [World](/database/master/world/home)

Frequently used 3.3.5a world tables:
[creature_template](/database/335/world/creature_template) ·
[creature](/database/335/world/creature) ·
[gameobject_template](/database/335/world/gameobject_template) ·
[quest_template](/database/335/world/quest_template) ·
[item_template](/database/335/world/item_template) ·
[smart_scripts](/database/335/world/smart_scripts) ·
[conditions](/database/335/world/conditions) ·
[creature_loot_template](/database/335/world/creature_loot_template)

## More

- [TrinityCore on GitHub](https://github.com/TrinityCore/TrinityCore) · [Forum](https://talk.trinitycore.org/) · [Discord](https://discord.trinitycore.org/)
- [Aowow](https://aowow.trinitycore.info/), a Wowhead-style database browser for TrinityCore
- Prefer the previous layout? See the [old home page](/old-home).
