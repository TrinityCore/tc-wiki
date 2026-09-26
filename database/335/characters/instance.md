---
title: instance
description:
published: true
date: 2023-07-31T15:58:26.626Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:21.703Z
---

> This table holds static information on all current instances that have not yet been reset.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [map](#map) | smallint | unsigned | MUL | NO | 0 |  |  |
| [resettime](#resettime) | bigint | unsigned | MUL | NO | 0 |  |  |
| [difficulty](#difficulty) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [completedEncounters](#completedencounters) | int | unsigned |  | NO | 0 |  |  |
| [data](#data) | tinytext |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
The instance ID. This number is unique to every instance.
&nbsp;

### map
The [Map ID](/files/DBC/335/map#id) the instance is in.
&nbsp;

### resettime
The Unix timestamp when the instance will be reset. This field is zero for raid and heroic instances.
The resettime of raid and heroic instances for every specific group is stored in [instance_reset](../characters/instance_reset).
&nbsp;

### difficulty
| ID | Name |
|----|------|
| 0 | RAID_DIFFICULTY_10MAN_NORMAL / DUNGEON_DIFFICULTY_NORMAL |
| 1 | RAID_DIFFICULTY_25MAN_NORMAL / DUNGEON_DIFFICULTY_HEROIC |
| 2 | RAID_DIFFICULTY_10MAN_HEROIC |
| 3 | RAID_DIFFICULTY_25MAN_HEROIC |
{.dense}

&nbsp;

### completedEncounters
Bitmask of completed encounters, where EncounterBit is [DungeonEncounter OrderIndex](/files/DBC/335/dungeonencounter#orderindex) of the matching entry.
`completedEncounters |= 1 << EncounterBit;`
&nbsp;

### data
String of space separated values in 3 parts
1. Header: space separated chars of `DataHeader` from InstanceMapScript header file (usually instance shorthand)
2. BossState: encounterState in order of encounters
3. MiscData (optional): state of doors, timers, events unique to this instance, manually defined in InstanceMapScript.
&nbsp;

