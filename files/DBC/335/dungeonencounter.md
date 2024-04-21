---
title: DungeonEncounter.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/destructiblemodeldata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DestructibleModelData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/dungeonmap" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DungeonMap'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# DungeonEncounter.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=dungeonencounter&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DungeonEncounter)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [MapDifficulty.dbc/0](/files/DBC/335/mapdifficulty#id-alt); [Map/0](/files/DBC/335/map#id-alt) |
| 2 | [Difficulty](#difficulty) | uint32 | [MapDifficulty.dbc/2](/files/DBC/335/mapdifficulty#difficulty) |
| 3 | [OrderIndex](#orderindex) | int32 |  |
| 4 | [Bit](#bit) | uint32 |  |
| 5 | [Name_0](#name-alt) | string |  |
| 6 | [Name_1](#name-alt) | string |  |
| 7 | [Name_2](#name-alt) | string |  |
| 8 | [Name_3](#name-alt) | string |  |
| 9 | [Name_4](#name-alt) | string |  |
| 10 | [Name_5](#name-alt) | string |  |
| 11 | [Name_6](#name-alt) | string |  |
| 12 | [Name_7](#name-alt) | string |  |
| 13 | [Name_8](#name-alt) | string |  |
| 14 | [Name_9](#name-alt) | string |  |
| 15 | [Name_10](#name-alt) | string |  |
| 16 | [Name_11](#name-alt) | string |  |
| 17 | [Name_12](#name-alt) | string |  |
| 18 | [Name_13](#name-alt) | string |  |
| 19 | [Name_14](#name-alt) | string |  |
| 20 | [Name_15](#name-alt) | string |  |
| 21 | [Name_lang_mask](#name-alt) | uint32 |  |
| 22 | [SpellIconID](#spelliconid) | uint32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id-alt) |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
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

### Name <!-- {#name-alt} -->
<code>Col: 5 &ndash; 21 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### SpellIconID
:x: <code>Col: 22 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/destructiblemodeldata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DestructibleModelData'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/dungeonmap" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DungeonMap'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
