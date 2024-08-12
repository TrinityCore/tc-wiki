---
title: Trinitycore Wiki
description: 
published: true
date: 2024-08-12T19:01:25.512Z
tags: 
editor: markdown
dateCreated: 2021-08-13T17:47:17.543Z
---

# What is Trinitycore?
TrinityCore is a MMORPG Framework based mostly in C++.

It is derived from MaNGOS, the Massive Network Game Object Server, and is based on the code of that project with extensive changes over time to optimize, improve and cleanup the codebase at the same time as improving the in-game mechanics and functionality.

It is completely open source; community involvement is highly encouraged.

If you wish to contribute ideas or code, please visit our site linked below or make pull requests to our [Github repository](https://github.com/TrinityCore/).

ATM Trinitycore supports 3 main branches:

- 3.3.5 targeting original 2010 wow 3.3.5a, you need wow 3.3.5a.12340 client to run it, wotlk 3.4 client won't work with it. **best for starters**
- cata_classic targeting 2024 wow 4.4 retail cata classic, you need wow 4.4.x client to run it, cata 4.3.4 client won't work with it. **very beta**
- master ussually targeting retail version **a lot of missing content**

there is also wotlk_classic targeting 2023 wow 3.4 but no developement is active with it. **not recommended**

For further information on the TrinityCore project, please visit our project website at TrinityCore.org.

# Installation Guide

#### Installation Guide (Linux, macOS and Windows)

1. Requirements 
- [Linux](/install/requirements/linux) 
- [MacOS](/install/requirements/macos)
- [Windows](/install/requirements/windows)
2. Core Installation By Platform
- [Linux Core Installation](/install/Core-Installation/linux-core-installation)
- [macOS Core Installation](/install/Core-Installation/macOS-core-installation)
- [Windows Core Installation](/install/Core-Installation/windows-core-installation)
- [Docker Core Installation](/install/Core-Installation/Docker)
3. [Server Setup](/install/Server-Setup)
4. [Database Installation](/install/Database-Installation)
5. [Networking](/install/Networking)
6. [Final Server Steps](/install/Final-Server-Steps)
7. [Client Setup](/install/Client-Setup)

# Description of the Trinity Database Structures
#### Master database
- [Auth](/database/master/auth/home)
- [Characters](/database/master/characters/home)
- [Hotfixes](/database/master/hotfixes/home)
- [World](/database/master/world/home)

#### 3.3.5a database
- [Auth](/database/335/auth/home)
- [Characters](/database/335/characters/home)
- [World](/database/335/world/home)

# How-to
1. [Use ASan to debug trinitycore](/how-to/asan)
2. [Send console commands via SOAP](/how-to/SOAP)
3. [GM Commands](/how-to/gm-commands)
4. [Role-based Access Controls (RBAC)](/how-to/RBAC)

5. [Aowow Trinitycore wowhead like](https://aowow.trinitycore.info/)
