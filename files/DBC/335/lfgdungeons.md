---
title: LfgDungeons.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/lfgdungeongroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LfgDungeonGroup'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/light" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Light'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# LfgDungeons.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=lfgdungeons&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LfgDungeons)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Name_0](#name) | string |  |
| 2 | [Name_1](#name) | string |  |
| 3 | [Name_2](#name) | string |  |
| 4 | [Name_3](#name) | string |  |
| 5 | [Name_4](#name) | string |  |
| 6 | [Name_5](#name) | string |  |
| 7 | [Name_6](#name) | string |  |
| 8 | [Name_7](#name) | string |  |
| 9 | [Name_8](#name) | string |  |
| 10 | [Name_9](#name) | string |  |
| 11 | [Name_10](#name) | string |  |
| 12 | [Name_11](#name) | string |  |
| 13 | [Name_12](#name) | string |  |
| 14 | [Name_13](#name) | string |  |
| 15 | [Name_14](#name) | string |  |
| 16 | [Name_15](#name) | string |  |
| 17 | [Name_lang_mask](#name) | uint32 |  |
| 18 | [MinLevel](#minlevel) | uint32 |  |
| 19 | [MaxLevel](#maxlevel) | uint32 |  |
| 20 | [TargetLevel](#targetlevel) | uint32 |  |
| 21 | [TargetLevelMin](#targetlevelmin) | uint32 |  |
| 22 | [TargetLevelMax](#targetlevelmax) | uint32 |  |
| 23 | [MapID](#mapid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 24 | [Difficulty](#difficulty) | uint32 |  |
| 25 | [Flags](#flags) | uint32 |  |
| 26 | [TypeID](#typeid) | uint32 |  |
| 27 | [Faction](#faction) | int32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 28 | [TextureFilename](#texturefilename) | string |  |
| 29 | [ExpansionLevel](#expansionlevel) | uint32 |  |
| 30 | [OrderIndex](#orderindex) | uint32 |  |
| 31 | [GroupID](#groupid) | uint32 | [LfgDungeonGrouo.dbc/0](/files/DBC/335/lfgdungeongroup#id) |
| 32 | [Description_0](#description) | string |  |
| 33 | [Description_1](#description) | string |  |
| 34 | [Description_2](#description) | string |  |
| 35 | [Description_3](#description) | string |  |
| 36 | [Description_4](#description) | string |  |
| 37 | [Description_5](#description) | string |  |
| 38 | [Description_6](#description) | string |  |
| 39 | [Description_7](#description) | string |  |
| 40 | [Description_8](#description) | string |  |
| 41 | [Description_9](#description) | string |  |
| 42 | [Description_10](#description) | string |  |
| 43 | [Description_11](#description) | string |  |
| 44 | [Description_12](#description) | string |  |
| 45 | [Description_13](#description) | string |  |
| 46 | [Description_14](#description) | string |  |
| 47 | [Description_15](#description) | string |  |
| 48 | [Description_lang_mask](#description) | uint32 |  |&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
<code>Col: 1 &ndash; 17 ([Loc](/files/DBC/localization))</code>

*- no description -*
&nbsp;

### MinLevel
<code>Col: 18 (uint32)</code>

*- no description -*
&nbsp;

### MaxLevel
<code>Col: 19 (uint32)</code>

*- no description -*
&nbsp;

### TargetLevel
<code>Col: 20 (uint32)</code>

*- no description -*
&nbsp;

### TargetLevelMin
<code>Col: 21 (uint32)</code>

*- no description -*
&nbsp;

### TargetLevelMax
<code>Col: 22 (uint32)</code>

*- no description -*
&nbsp;

### MapID
<code>Col: 23 (int32)</code>

*- no description -*
&nbsp;

### Difficulty
<code>Col: 24 (uint32)</code>

[`enum Difficulty`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L278-L290)
| ID | Name |
|----|------|
| 0 | RAID_DIFFICULTY_10MAN_NORMAL / DUNGEON_DIFFICULTY_NORMAL |
| 1 | RAID_DIFFICULTY_25MAN_NORMAL / DUNGEON_DIFFICULTY_HEROIC |
| 2 | RAID_DIFFICULTY_10MAN_HEROIC |
| 3 | RAID_DIFFICULTY_25MAN_HEROIC |
{.dense}

&nbsp;

### Flags
<code>Col: 25 (int32)</code>

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x1 | XREALM | Allows players from different servers to form the group. |
| 2 | 0x2 | GLOBAL |  |
| 4 | 0x4 | HOLIDAY | Headless Horseman, Brewfest, etc. |
| 8 | 0x8 | SPECIFIC_REWARD |  |
{.dense}

&nbsp;

### TypeID
<code>Col: 26 (uint32)</code>

[`enum LfgType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/DungeonFinding/LFGMgr.h#L67-L74)
| ID | Name |
|----|------|
| 0 | LFG_TYPE_NONE |
| 1 | LFG_TYPE_DUNGEON |
| 2 | LFG_TYPE_RAID |
| 5 | LFG_TYPE_HEROIC |
| 6 | LFG_TYPE_RANDOM |
{.dense}
&nbsp;

### Faction
:x: <code>Col: 27 (int32)</code>

*- no description -*
&nbsp;

### TextureFilename
:x: <code>Col: 28 (string)</code>

*- no description -*
&nbsp;

### ExpansionLevel
<code>Col: 29 (uint32)</code>

| Value | Expansion |
| :---: | :---: |
| 0 | Vanilla |
| 1 | The Burning Crusade (TBC) |
| 2 | Wrath of the Lich King (WotLK) |
{.dense}

&nbsp;

### OrderIndex
:x: <code>Col: 30 (uint32)</code>

*- no description -*
&nbsp;

### GroupID
<code>Col: 31 (uint32)</code>

*- no description -*
&nbsp;

### Description
:x: <code>Col: 32 &ndash; 48 ([Loc](/files/DBC/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/lfgdungeongroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LfgDungeonGroup'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/light" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Light'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
