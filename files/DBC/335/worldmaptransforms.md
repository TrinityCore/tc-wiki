---
title: WorldMapTransforms.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/worldmapoverlay" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldMapOverlay'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldsafelocs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldSafeLocs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# WorldMapTransforms.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=worldmaptransforms&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WorldMapTransforms)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [RegionBottom](#region) | float |  |
| 3 | [RegionRight](#region) | float |  |
| 4 | [RegionTop](#region) | float |  |
| 5 | [RegionLeft](#region) | float |  |
| 6 | [NewMapID](#newmapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 7 | [RegionOffset_X](#regionoffset) | float |  |
| 8 | [RegionOffset_Y](#regionoffset) | float |  |
| 9 | [NewDungeonMapID](#newdungeonmapid) | uint32 | [DungeonMap.dbc/0](/files/DBC/335/dungeonmap#id) |

&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
:x: <code>Col: 1 (uint32)</code>

Real map.
&nbsp;

### Region
:x: <code>Col: 2 &ndash; 5 (float)</code>

Transformation boundary. See [World Position](/how-to/worldposition).
&nbsp;

### NewMapID
:x: <code>Col: 6 (uint32)</code>

Target display map.
&nbsp;

### RegionOffset
:x: <code>Col: 7 &ndash; 8 ([DBCPosition2D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### NewDungeonMapID
:x: <code>Col: 9 (uint32)</code>

Override with DungeonMap transforms?
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/worldmapoverlay" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldMapOverlay'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldsafelocs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldSafeLocs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
