---
title: AreaPOI.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/areagroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AreaGroup'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/areatable" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AreaTable'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# AreaPOI.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=areapoi&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/AreaPOI)
&nbsp;

Points of Interest (POI) on the overhead map (including battleground map). Including text, icons, positioning and other miscellaneous things related to POI.

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Importance](#importance) | uint32 |  |
| 2 | [Icon_0](#icon) | uint32 |  |
| 3 | [Icon_1](#icon) | uint32 |  |
| 4 | [Icon_2](#icon) | uint32 |  |
| 5 | [Icon_3](#icon) | uint32 |  |
| 6 | [Icon_4](#icon) | uint32 |  |
| 7 | [Icon_5](#icon) | uint32 |  |
| 8 | [Icon_6](#icon) | uint32 |  |
| 9 | [Icon_7](#icon) | uint32 |  |
| 10 | [Icon_8](#icon) | uint32 |  |
| 11 | [FactionID](#factionid) | uint32 | [FactionTemplate.dbc/0](/files/DBC/335/factiontemplate#id) |
| 12 | [Pos_X](#pos) | float |  |
| 13 | [Pos_Y](#pos) | float |  |
| 14 | [Pos_Z](#pos) | float |  |
| 15 | [ContinentID](#continentid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 16 | [Flags](#flags) | uint32 |  |
| 17 | [AreaID](#areaid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 18 | [Name_0](#name) | string |  |
| 19 | [Name_1](#name) | string |  |
| 20 | [Name_2](#name) | string |  |
| 21 | [Name_3](#name) | string |  |
| 22 | [Name_4](#name) | string |  |
| 23 | [Name_5](#name) | string |  |
| 24 | [Name_6](#name) | string |  |
| 25 | [Name_7](#name) | string |  |
| 26 | [Name_8](#name) | string |  |
| 27 | [Name_9](#name) | string |  |
| 28 | [Name_10](#name) | string |  |
| 29 | [Name_11](#name) | string |  |
| 30 | [Name_12](#name) | string |  |
| 31 | [Name_13](#name) | string |  |
| 32 | [Name_14](#name) | string |  |
| 33 | [Name_15](#name) | string |  |
| 34 | [Name_lang_mask](#name) | uint32 |  |
| 35 | [Description_0](#description) | string |  |
| 36 | [Description_1](#description) | string |  |
| 37 | [Description_2](#description) | string |  |
| 38 | [Description_3](#description) | string |  |
| 39 | [Description_4](#description) | string |  |
| 40 | [Description_5](#description) | string |  |
| 41 | [Description_6](#description) | string |  |
| 42 | [Description_7](#description) | string |  |
| 43 | [Description_8](#description) | string |  |
| 44 | [Description_9](#description) | string |  |
| 45 | [Description_10](#description) | string |  |
| 46 | [Description_11](#description) | string |  |
| 47 | [Description_12](#description) | string |  |
| 48 | [Description_13](#description) | string |  |
| 49 | [Description_14](#description) | string |  |
| 50 | [Description_15](#description) | string |  |
| 51 | [Description_lang_mask](#description) | uint32 |  |
| 52 | [WorldStateID](#worldstateid) | uint32 |  |
| 53 | [WorldMapLink](#worldmaplink) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Importance
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Icon
<code>Col: 2 &ndash; 10 (uint32)</code>

| Col | Name | Comment |
|-----|------|---------|
| 2 | NormalIcon | This is getting displayed normally. |
| 3 | NormalIcon50% | Destructible building being neutral at 50%. |
| 4 | NormalIcon0% | Destroyed neutral building. |
| 5 | HordeIcon | Building at 100% captured by the horde. |
| 6 | HordeIcon50% | Destructible building being neutral at 50%. |
| 7 | HordeIcon0% | Destroyed horde building. |
| 8 | AllianceIcon | Building at 100% captured by the alliance. |
| 9 | AllianceIcon50% | Destructible building being neutral at 50%. |
| 10 | AllianceIcon0% | Destroyed alliance building. |
{.dense}

The icons are not referenced somewhere but are in the `Interface\Minimap\POIICONS.BLP` file which is a 256\*265px file with 16\*16px icons.
Indexed from left to right, then top to bottom.
![POIICONS.png](/POIICONS.png)

&nbsp;

### FactionID
<code>Col: 11 (uint32)</code>

*- no description -*
&nbsp;

### Pos
<code>Col: 12 &ndash; 14 ([DBCPosition3D](/how-to/worldposition))</code>

*- no description -*
&nbsp;

### ContinentID
<code>Col: 15 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 16 (uint32)</code>

Flags defining, where this icon is shown.
| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x0001 | show on minimap |
| 2 | 0x0002 | show minimap icon |
| 4 | 0x0004 | worldmap zone zoom |
| 8 | 0x0008 | worldmap continent zoom |
| 16 | 0x0010 | worldmap world zoom |
| 32 | 0x0020 | worldmap city zoom |
| 128 | 0x0080 | always draw icon (world map) |
| 256 | 0x0100 | show when indoors |
| 512 | 0x0200 | show in battlemap |
| 1024 | 0x0400 | only show in current area |
{.dense}

&nbsp;

### AreaID
<code>Col: 17 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 18 &ndash; 34 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Description
:x: <code>Col: 35 &ndash; 51 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### WorldStateID
<code>Col: 52 (uint32)</code>

[WorldState Examples](https://trinitycore.info/en/database/335/characters/worldstates#examples)
&nbsp;

### WorldMapLink
:x: <code>Col: 53 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/areagroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'AreaGroup'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/areatable" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AreaTable'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
