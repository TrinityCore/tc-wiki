---
title: WorldMapOverlay.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/worldmapcontinent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldMapContinent'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldmaptransforms" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldMapTransforms'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# WorldMapOverlay.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=worldmapoverlay&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WorldMapOverlay)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MapAreaID](#mapareaid) | uint32 | [WorldMapArea.dbc/0](/files/DBC/335/worldmaparea#id) |
| 2 | [AreaID_0](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 3 | [AreaID_1](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 4 | [AreaID_2](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 5 | [AreaID_3](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 6 | [MapPoint_X](#mappoint) | uint32 |  |
| 7 | [MapPoint_Y](#mappoint) | uint32 |  |
| 8 | [TextureName](#texturename) | string |  |
| 9 | [TextureWidth](#texturewidth) | uint32 |  |
| 10 | [TextureHeight](#textureheight) | uint32 |  |
| 11 | [Offset_X](#offset) | uint32 |  |
| 12 | [Offset_Y](#offset) | uint32 |  |
| 13 | [HitRectTop](#hitrect) | uint32 |  |
| 14 | [HitRectLeft](#hitrect) | uint32 |  |
| 15 | [HitRectBottom](#hitrect) | uint32 |  |
| 16 | [HitRectRight](#hitrect) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapAreaID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### AreaID
<code>Col: 2 &ndash; 5 (uint32)</code>

*- no description -*
&nbsp;

### MapPoint
:x: <code>Col: 6 &ndash; 7 ([DBCPosition2D](/how-to/worldposition))</code>

Some offset? Always 0.
&nbsp;

### TextureName
:x: <code>Col: 8 (string)</code>

*- no description -*
&nbsp;

### TextureWidth
:x: <code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

### TextureHeight
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### Offset
:x: <code>Col: 11 &ndash; 12([DBCPosition2D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### HitRect
:x: <code>Col: 13 &ndash; 16 (uint32)</code>

Overlay boundary on Area map.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/worldmapcontinent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldMapContinent'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldmaptransforms" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldMapTransforms'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
