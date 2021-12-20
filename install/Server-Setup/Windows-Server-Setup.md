---
title: Windows Server Setup
description: Extracting Cameras, DBC, Maps, VMaps & MMaps
published: true
date: 2021-12-20T19:17:37.572Z
tags: 
editor: markdown
dateCreated: 2021-12-20T19:17:37.572Z
---

# Windows Server Setup

> Compile tools in **release** mode. 
> Debug or RelWithDebInfo are way slower for extraction and only suggested if you have specific crashes to report.
{.is-warning}

This guide assumes you followed the suggested folder structure. 

## Step 1
Browse into your (Drive):\Build\bin\Release* (or Debug* or RelWithDebInfo*) folder and copy these files into your root World of Warcraft folder

- For 3.3.5, this is where Wow.exe and the Data folder are located
- For master, this where 'World of Warcraft Launcher.exe' and the Data folder are located

> mapextractor.exe
> mmaps_generator.exe
> vmap4extractor.exe
> vmap4assembler.exe
{.is-info}

## Step 2
Browse into your (Drive):\TrinityCore\contrib and copy "**extractor.bat**" into your root World of Warcraft folder (with the previous files).

## Step 3
Launch "**extractor.bat**" and select your extractor option. For a fresh setup, this should be option 4 - extract all.

The time this takes highly depends on the mode where the tools have been builded in and also on the amount of available cpu cores.
For a full extraction, this can be anything from below 15 minutes up to several hours depening on your hardware. (Master takes way longer than 335)

Important Notes:

- dbc/db2, maps AND vmaps are needed to make server work properly!
- Do not attempt to stop vmaps exctraction process. It is finished when it prints "Press any key...". It will create two new folders: buildings and vmaps. The buildings folder is completely useless post-running and can be safely deleted.
- If, out of whatever reason, you run the files manually (not using extractor.bat), don't run another task before the 1st is finished or you will have errors.
- If you stop vmap4extractor before finish you will need to delete the Buildings directory before start again.

Additional note:
mmaps & vmaps are not needed to start the server but the config has to be edited to start without them. This is not suggested at all as this will lead to creatures running through walls and other unwanted problems.

## Step 4
Move the vmaps, maps, dbc, cameras (and gt (master Branch only)) folders to the same directory as the TrinityCore binaries.
You could also put them somewhere else and point there in your worldserver.conf