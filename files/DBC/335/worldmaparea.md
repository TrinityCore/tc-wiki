---
title: WorldMapArea.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# WorldMapArea.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WorldMapArea)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id-alt) |
| 2 | [AreaID](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id-alt) |
| 3 | [AreaName](#areaname) | string |  |
| 4 | [LocLeft](#loc) | float |  |
| 5 | [LocRight](#loc) | float |  |
| 6 | [LocTop](#loc) | float |  |
| 7 | [LocBottom](#loc) | float |  |
| 8 | [DisplayMapID](#displaymapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id-alt) |
| 9 | [DefaultDungeonFloor](#defaultdungeonfloor) | int32 | [DungeonMap.dbc/2](/files/DBC/335/dungeonmap#floorindex) |
| 10 | [ParentWorldMapID](#parentworldmapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### AreaID
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### AreaName
:x: <code>Col: 3 (string)</code>

*- no description -*
&nbsp;

### Loc
<code>Col: 4 &ndash; 7 (float)</code>

Displayed area boundary. See [World Position](/how-to/worldposition).
&nbsp;

### DisplayMapID
<code>Col: 8 (int32)</code>

-1 (map_id have correct map) other: virtual map where zone show (map_id - where zone in fact internally)
&nbsp;

### DefaultDungeonFloor
:x: <code>Col: 9 (int32)</code>

Pointer to DungeonMap.dbc (override x1, x2, y1, y2 coordinates)
&nbsp;

### ParentWorldMapID
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

