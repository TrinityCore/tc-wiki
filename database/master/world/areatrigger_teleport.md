---
title: areatrigger_teleport
description: Contains all the teleport triggers definition. This table is used to complete .db2 file information.
published: true
date: 2022-11-21T21:03:17.251Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:56.867Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [PortLocID](#portlocid) | int | unsigned |  | NO | 0 |  |  |
| [Name](#name-alt) | mediumtext |  | MUL | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
This is the trigger identifier from [AreaTrigger.db2](https://wago.tools/db2/areatrigger){target=_blank}.
&nbsp;

### PortLocID
This is the ID from [world_safe_locs](/database/master/world/world_safe_locs).
&nbsp;

### Name {#name-alt}
Name of the trigger. This can be an arbitrary name, and is for descriptive purposes only.
&nbsp;

