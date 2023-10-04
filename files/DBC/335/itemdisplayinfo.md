---
title: ItemDisplayInfo.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itemcondextcosts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemCondExtCosts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemextendedcost" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemExtendedCost'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemDisplayInfo.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=itemdisplayinfo&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemDisplayInfo)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ModelName_0](#modelname) | string |  |
| 2 | [ModelName_1](#modelname) | string |  |
| 3 | [ModelTexture_0](#modeltexture) | string |  |
| 4 | [ModelTexture_1](#modeltexture) | string |  |
| 5 | [InventoryIcon_0](#inventoryicon) | string |  |
| 6 | [InventoryIcon_1](#inventoryicon) | string |  |
| 7 | [GeosetGroup_0](#geosetgroup) | uint32 |  |
| 8 | [GeosetGroup_1](#geosetgroup) | uint32 |  |
| 9 | [GeosetGroup_2](#geosetgroup) | uint32 |  |
| 10 | [Flags](#flags) | uint32 |  |
| 11 | [SpellVisualID](#spellvisualid) | uint32 | [SpellVisual.dbc/0](/files/DBC/335/spellvisual#id) |
| 12 | [GroupSoundIndex](#groupsoundindex) | uint32 | [ItemGroupSounds.dbc/0](/files/DBC/335/itemgroupsounds#id) |
| 13 | [HelmetGeosetVisID_0](#helmetgeosetvisid) | uint32 | [HelmetGeosetVisData.dbc/0](/files/DBC/335/helmetgeosetvisdata#id) |
| 14 | [HelmetGeosetVisID_1](#helmetgeosetvisid) | uint32 | [HelmetGeosetVisData.dbc/0](/files/DBC/335/helmetgeosetvisdata#id) |
| 15 | [Texture_0](#texture) | string |  |
| 16 | [Texture_1](#texture) | string |  |
| 17 | [Texture_2](#texture) | string |  |
| 18 | [Texture_3](#texture) | string |  |
| 19 | [Texture_4](#texture) | string |  |
| 20 | [Texture_5](#texture) | string |  |
| 21 | [Texture_6](#texture) | string |  |
| 22 | [Texture_7](#texture) | string |  |
| 23 | [ItemVisual](#itemvisual) | int32 | [ItemVisuals.dbc/0](/files/DBC/335/itemvisuals#classid) |
| 24 | [ParticleColorID](#particlecolorid) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ModelName
:x: <code>Col: 1 &ndash; 2 (string)</code>

* col 1: Left
* col 2: Right
&nbsp;

### ModelTexture
:x: <code>Col: 3 &ndash; 4 (string)</code>

* col 3: Left
* col 4: Right
&nbsp;

### InventoryIcon
:x: <code>Col: 5 &ndash; 6 (string)</code>

*- no description -*
&nbsp;

### GeosetGroup
:x: <code>Col: 7 &ndash; 9 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 10 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x1 | Emblazoned Tabard - Apply guild tabard texture on the char select screen |
| 2 | 0x2 | Hides underwear |
| 4 | 0x4 | Hides Pants and Belt |
{.dense}

&nbsp;

### SpellVisualID
:x: <code>Col: 11 (uint32)</code>

*- no description -*
&nbsp;

### GroupSoundIndex
:x: <code>Col: 12 (uint32)</code>

*- no description -*
&nbsp;

### HelmetGeosetVisID
:x: <code>Col: 13 &ndash; 14 (uint32)</code>

* col 13: Male
* col 14: Female
&nbsp;

### Texture
:x: <code>Col: 15 &ndash; 22 (string)</code>

* col 15: Upper Arm
* col 16: Lower Arm
* col 17: Hand
* col 18: Upper Torso
* col 19: Lower Torso
* col 20: Upper Leg
* col 21: Lower Leg
* col 22: Foot
&nbsp;

### ItemVisual
:x: <code>Col: 23 (int32)</code>

*- no description -*
&nbsp;

### ParticleColorID
:x: <code>Col: 24 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itemcondextcosts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemCondExtCosts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemextendedcost" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemExtendedCost'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
