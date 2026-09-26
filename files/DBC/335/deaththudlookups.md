---
title: DeathThudLookups.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# DeathThudLookups.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DeathThudLookups)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SizeClass](#type) | uint32 | [CreatureDisplayInfo.dbc/10](/files/DBC/335/creaturedisplayinfo#sizeclass) |
| 2 | [TerrainTypeSoundID](#type) | uint32 | [TerrainType.dbc/0](/files/DBC/335/terraintype#id-alt) |
| 3 | [SoundEntryID](#type) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 4 | [SoundEntryIDWater](#type) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SizeClass
:x: <code>Col: 1 (uint32)</code>

* 0: Small
* 1: Medium
* 3: Large
* 4: Giant
&nbsp;

### TerrainTypeSoundID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### SoundEntryID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SoundEntryIDWater
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

