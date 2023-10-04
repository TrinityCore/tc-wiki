---
title: LfgDungeonGroup.dbc
description: 
published: true
date: 2023-10-04T13:08:34.261Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:05:00.544Z
---

<a href="https://trinitycore.info/files/DBC/335/lfgdungeonexpansion" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LFGDungeonExpansion'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lfgdungeons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LfgDungeons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# LfgDungeonGroup.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=lfgdungeongroup&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LfgDungeonGroup)
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
| 18 | [OrderIndex](#orderindex) | uint32 |  |
| 19 | [ParentGroupID](#parentgroupid) | uint32 |  |
| 20 | [TypeID](#typeid) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 1 &ndash; 17 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### OrderIndex
:x: <code>Col: 18 (uint32)</code>

*- no description -*
&nbsp;

### ParentGroupID
:x: <code>Col: 19 (uint32)</code>

*- no description -*
&nbsp;

### TypeID
:x: <code>Col: 20 (uint32)</code>

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

<a href="https://trinitycore.info/files/DBC/335/lfgdungeonexpansion" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LFGDungeonExpansion'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lfgdungeons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LfgDungeons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
