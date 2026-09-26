---
title: DungeonMap.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# DungeonMap.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DungeonMap)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id-alt) |
| 2 | [FloorIndex](#floorindex) | uint32 |  |
| 3 | [MinX](#minx) | float |  |
| 4 | [MaxX](#maxx) | float |  |
| 5 | [MinY](#miny) | float |  |
| 6 | [MaxY](#maxy) | float |  |
| 7 | [ParentWorldMapID](#parentworldmapid) | uint32 | [WorldMapArea.dbc/0](/files/DBC/335/worldmaparea#id-alt) |
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

### FloorIndex
:x: <code>Col: 2 (uint32)</code>

for instances with multiple floors
&nbsp;

### MinX
:x: <code>Col: 3 (float)</code>

In which range in x and y is this shown. used for scaling.
&nbsp;

### MaxX
:x: <code>Col: 4 (float)</code>

*- no description -*
&nbsp;

### MinY
:x: <code>Col: 5 (float)</code>

*- no description -*
&nbsp;

### MaxY
:x: <code>Col: 6 (float)</code>

*- no description -*
&nbsp;

### ParentWorldMapID
:x: <code>Col: 7 (uint32)</code>

If only used in a specific area. see the northrend one.
&nbsp;

