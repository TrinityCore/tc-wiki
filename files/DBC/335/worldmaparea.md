---
title: WorldMapArea.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/worldchunksounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldChunkSounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldmapcontinent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldMapContinent'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# WorldMapArea.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=worldmaparea&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WorldMapArea)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [AreaID](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 3 | [AreaName](#areaname) | string |  |
| 4 | [LocLeft](#loc) | float |  |
| 5 | [LocRight](#loc) | float |  |
| 6 | [LocTop](#loc) | float |  |
| 7 | [LocBottom](#loc) | float |  |
| 8 | [DisplayMapID](#displaymapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 9 | [DefaultDungeonFloor](#defaultdungeonfloor) | int32 | [DungeonMap.dbc/2](/files/DBC/335/dungeonmap#floorindex) |
| 10 | [ParentWorldMapID](#parentworldmapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
&nbsp;
## Description of fields

### ID
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

<a href="https://trinitycore.info/files/DBC/335/worldchunksounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldChunkSounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldmapcontinent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldMapContinent'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
