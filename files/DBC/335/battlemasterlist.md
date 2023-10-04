---
title: BattlemasterList.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/barbershopstyle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'BarberShopStyle'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/camerashakes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CameraShakes'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# BattlemasterList.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=battlemasterlist&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/BattlemasterList)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MapID_0](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [MapID_1](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 3 | [MapID_2](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 4 | [MapID_3](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 5 | [MapID_4](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 6 | [MapID_5](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 7 | [MapID_6](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 8 | [MapID_7](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 9 | [InstanceType](#instancetype) | uint32 |  |
| 10 | [GroupsAllowed](#groupsallowed) | uint32 |  |
| 11 | [Name_0](#name) | string |  |
| 12 | [Name_1](#name) | string |  |
| 13 | [Name_2](#name) | string |  |
| 14 | [Name_3](#name) | string |  |
| 15 | [Name_4](#name) | string |  |
| 16 | [Name_5](#name) | string |  |
| 17 | [Name_6](#name) | string |  |
| 18 | [Name_7](#name) | string |  |
| 19 | [Name_8](#name) | string |  |
| 20 | [Name_9](#name) | string |  |
| 21 | [Name_10](#name) | string |  |
| 22 | [Name_11](#name) | string |  |
| 23 | [Name_12](#name) | string |  |
| 24 | [Name_13](#name) | string |  |
| 25 | [Name_14](#name) | string |  |
| 26 | [Name_15](#name) | string |  |
| 27 | [Name_lang_mask](#name) | uint32 |  |
| 28 | [MaxGroupSize](#maxgroupsize) | uint32 |  |
| 29 | [HolidayWorldState](#holidayworldstate) | uint32 |  |
| 30 | [MinLevel](#minlevel) | uint32 |  |
| 31 | [MaxLevel](#maxlevel) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
<code>Col: 1 &ndash; 8 (int32)</code>

* -1: unused
&nbsp;

### InstanceType
<code>Col: 9 (uint32)</code>

[`enum MapTypes`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L333-L340)
| ID | Name | Comment |
|----|------|---------|
| 0 | MAP_COMMON | none |
| 1 | MAP_INSTANCE | party |
| 2 | MAP_RAID | raid |
| 3 | MAP_BATTLEGROUND | pvp |
| 4 | MAP_ARENA | arena |
{.dense}

&nbsp;

### GroupsAllowed
:x: <code>Col: 10 (bool)</code>

*- no description -*
&nbsp;

### Name
<code>Col: 11 &ndash; 27 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### MaxGroupSize
<code>Col: 28 (uint32)</code>

Used for checking if queue as group.
&nbsp;

### HolidayWorldState
<code>Col: 29 (uint32)</code>

[WorldState Examples](https://trinitycore.info/en/database/335/characters/worldstates#examples)
&nbsp;

### MinLevel
:x: <code>Col: 30 (uint32)</code>

*- no description -*
&nbsp;

### MaxLevel
:x: <code>Col: 31 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/barbershopstyle" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'BarberShopStyle'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/camerashakes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CameraShakes'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
