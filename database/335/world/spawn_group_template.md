---
title: spawn_group_template
description: 
published: true
date: 2023-07-20T21:00:45.012Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:15.324Z
---

This table contains Spawn Group names and flags.
Spawn Groups are collections of creatures / gameobjects, linked to scripted events or boss fights.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [groupId](#groupid) | int | unsigned | PRI | NO |  |  |  |
| [groupName](#groupname) | varchar(100) |  |  | NO |  |  |  |
| [groupFlags](#groupflags) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### groupId
This is the ID for the group. It must be a unique number.
> Groups 0 – 4 are reserved for system tasks.
{.is-warning}

&nbsp;

### groupName
This is a descriptive name for the group, like: `[zone] - [related event] - [group content]`
e.g.: `Halls of Lightning - General Bjarngrim - Stormforged Lieutenants`
&nbsp;

### groupFlags
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | SPAWNGROUP_FLAG_SYSTEM | reserved groups 0 – 4 |
| 2 | 0x02 | SPAWNGROUP_FLAG_COMPATIBILITY_MODE |  |
| 4 | 0x04 | SPAWNGROUP_FLAG_MANUAL_SPAWN | group not active by default |
| 8 | 0x08 | SPAWNGROUP_FLAG_DYNAMIC_SPAWN_RATE | group is affected by config setting: `Respawn.DynamicMode` |
| 16 | 0x10 | SPAWNGROUP_FLAG_ESCORTQUESTNPC | group is affected by config setting: `Respawn.DynamicEscortNPC` |
{.dense}

&nbsp;

