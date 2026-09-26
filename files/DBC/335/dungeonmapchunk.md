---
title: DungeonMapChunk.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# DungeonMapChunk.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DungeonMapChunk)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id-alt) |
| 2 | [WMOGroupID](#wmogroupid) | uint32 | [WMOAreaTable/3](/files/DBC/335/wmoareatable#wmogroupid) |
| 3 | [DungeonMapID](#dungeonmapid) | uint32 | [DungeonMap.dbc/0](/files/DBC/335/dungeonmap#id-alt) |
| 4 | [MinZ](#minz) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### WMOGroupID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### DungeonMapID
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### MinZ
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

