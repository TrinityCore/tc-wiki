---
title: GameObjectDisplayInfo.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/gameobjectartkit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'GameObjectArtKit'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/gametables" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'GameTables'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# GameObjectDisplayInfo.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=gameobjectdisplayinfo&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GameObjectDisplayInfo)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [ModelName](#modelname) | string |  |
| 2 | [Sound_0](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 3 | [Sound_1](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 4 | [Sound_2](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 5 | [Sound_3](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 6 | [Sound_4](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 7 | [Sound_5](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 8 | [Sound_6](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 9 | [Sound_7](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 10 | [Sound_8](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 11 | [Sound_9](#sound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 12 | [GeoBoxMin_X](#geoboxmin) | float |  |
| 13 | [GeoBoxMin_Y](#geoboxmin) | float |  |
| 14 | [GeoBoxMin_Z](#geoboxmin) | float |  |
| 15 | [GeoBoxMax_X](#geoboxmax) | float |  |
| 16 | [GeoBoxMax_Y](#geoboxmax) | float |  |
| 17 | [GeoBoxMax_Z](#geoboxmax) | float |  |
| 18 | [ObjectEffectPackageID](#objecteffectpackageid) | uint32 | [ObjectEffectPackage.dbc/0](/files/DBC/335/objecteffectpackage#id-alt) |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ModelName
<code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### Sound
:x: <code>Col: 2 &ndash; 11 (uint32)</code>

| column | comment |
| :--: | -- |
| 2 | stand |
| 3 | open |
| 4 | loop |
| 5 | close |
| 6 | destroy |
| 7 | opened |
| 8 | custom0 |
| 9 | custom1 |
| 10 | custom2 |
| 11 | custom3 |
{.dense}

&nbsp;

### GeoBoxMin
<code>Col: 12 &ndash; 14 ([DBCPosition3D](/how-to/worldposition))</code>

*- no description -*
&nbsp;

### GeoBoxMax
<code>Col: 15 &ndash; 17 ([DBCPosition3D](/how-to/worldposition))</code>

*- no description -*
&nbsp;

### ObjectEffectPackageID
:x: <code>Col: 18 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/gameobjectartkit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'GameObjectArtKit'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/gametables" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'GameTables'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
