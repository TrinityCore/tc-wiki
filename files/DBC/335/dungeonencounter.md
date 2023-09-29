---
title: DungeonEncounter.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/destructiblemodeldata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DestructibleModelData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/dungeonmap" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DungeonMap'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# DungeonEncounter.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=dungeonencounter&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DungeonEncounter)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [MapDifficulty.dbc/0](/files/DBC/335/mapdifficulty#id); [Map/0](/files/DBC/335/map#id) |
| 2 | [Difficulty](#difficulty) | uint32 | [MapDifficulty.dbc/2](/files/DBC/335/mapdifficulty#difficulty) |
| 3 | [OrderIndex](#orderindex) | int32 |  |
| 4 | [Bit](#bit) | uint32 |  |
| 5 | [Name_0](#name) | string |  |
| 6 | [Name_1](#name) | string |  |
| 7 | [Name_2](#name) | string |  |
| 8 | [Name_3](#name) | string |  |
| 9 | [Name_4](#name) | string |  |
| 10 | [Name_5](#name) | string |  |
| 11 | [Name_6](#name) | string |  |
| 12 | [Name_7](#name) | string |  |
| 13 | [Name_8](#name) | string |  |
| 14 | [Name_9](#name) | string |  |
| 15 | [Name_10](#name) | string |  |
| 16 | [Name_11](#name) | string |  |
| 17 | [Name_12](#name) | string |  |
| 18 | [Name_13](#name) | string |  |
| 19 | [Name_14](#name) | string |  |
| 20 | [Name_15](#name) | string |  |
| 21 | [Name_lang_mask](#name) | uint32 |  |
| 22 | [SpellIconID](#spelliconid) | uint32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Difficulty
<code>Col: 2 (uint32)</code>

The Difficulty of the map in which the encounter takes place
&nbsp;

### OrderIndex
:x: <code>Col: 3 (int32)</code>

*- no description -*
&nbsp;

### Bit
<code>Col: 4 (uint32)</code>

Encounter index for creating completed mask.
&nbsp;

### Name
<code>Col: 5 &ndash; 21 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### SpellIconID
:x: <code>Col: 22 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/destructiblemodeldata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DestructibleModelData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/dungeonmap" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DungeonMap'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
