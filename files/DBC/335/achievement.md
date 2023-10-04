---
title: Achievement.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/zonemusic" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ZoneMusic'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/achievement_category" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Achievement_Category'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Achievement.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=achievement&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Achievement)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Faction](#faction) | int32 |  |
| 2 | [InstanceID](#instanceid) | int32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 3 | [Supercedes](#supercedes) | uint32 | [Achievement.dbc/0](#id); [achievement Id](/database/335/world/achievement_dbc#id) |
| 4 | [Title_0](#title) | string |  |
| 5 | [Title_1](#title) | string |  |
| 6 | [Title_2](#title) | string |  |
| 7 | [Title_3](#title) | string |  |
| 8 | [Title_4](#title) | string |  |
| 9 | [Title_5](#title) | string |  |
| 10 | [Title_6](#title) | string |  |
| 11 | [Title_7](#title) | string |  |
| 12 | [Title_8](#title) | string |  |
| 13 | [Title_9](#title) | string |  |
| 14 | [Title_10](#title) | string |  |
| 15 | [Title_11](#title) | string |  |
| 16 | [Title_12](#title) | string |  |
| 17 | [Title_13](#title) | string |  |
| 18 | [Title_14](#title) | string |  |
| 19 | [Title_15](#title) | string |  |
| 20 | [Title_lang_mask](#title) | uint32 |  |
| 21 | [Description_0](#description) | string |  |
| 22 | [Description_1](#description) | string |  |
| 23 | [Description_2](#description) | string |  |
| 24 | [Description_3](#description) | string |  |
| 25 | [Description_4](#description) | string |  |
| 26 | [Description_5](#description) | string |  |
| 27 | [Description_6](#description) | string |  |
| 28 | [Description_7](#description) | string |  |
| 29 | [Description_8](#description) | string |  |
| 30 | [Description_9](#description) | string |  |
| 31 | [Description_10](#description) | string |  |
| 32 | [Description_11](#description) | string |  |
| 33 | [Description_12](#description) | string |  |
| 34 | [Description_13](#description) | string |  |
| 35 | [Description_14](#description) | string |  |
| 36 | [Description_15](#description) | string |  |
| 37 | [Description_lang_mask](#description) | uint32 |  |
| 38 | [Category](#category) | uint32 | [Achievement_Category.dbc/0](/files/DBC/335/achievement_category#id) |
| 39 | [Points](#points) | uint32 |  |
| 40 | [UiOrder](#uiorder) | uint32 |  |
| 41 | [Flags](#flags) | uint32 |  |
| 42 | [IconID](#iconid) | uint32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id) |
| 43 | [Reward_0](#reward) | string |  |
| 44 | [Reward_1](#reward) | string |  |
| 45 | [Reward_2](#reward) | string |  |
| 46 | [Reward_3](#reward) | string |  |
| 47 | [Reward_4](#reward) | string |  |
| 48 | [Reward_5](#reward) | string |  |
| 49 | [Reward_6](#reward) | string |  |
| 50 | [Reward_7](#reward) | string |  |
| 51 | [Reward_8](#reward) | string |  |
| 52 | [Reward_9](#reward) | string |  |
| 53 | [Reward_10](#reward) | string |  |
| 54 | [Reward_11](#reward) | string |  |
| 55 | [Reward_12](#reward) | string |  |
| 56 | [Reward_13](#reward) | string |  |
| 57 | [Reward_14](#reward) | string |  |
| 58 | [Reward_15](#reward) | string |  |
| 59 | [Reward_lang_mask](#reward) | uint32 |  |
| 60 | [MinimumCriteria](#minimumcriteria) | uint32 |  |
| 61 | [SharesCriteria](#sharescriteria) | uint32 | [Achievement.dbc/0](#id); [achievement Id](/database/335/world/achievement_dbc#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Faction
<code>Col: 1 (int32)</code>

[`enum AchievementFaction`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L73-L78)
| ID | Name |
|----|------|
| 0 | ACHIEVEMENT_FACTION_HORDE |
| 1 | ACHIEVEMENT_FACTION_ALLIANCE |
| -1 | ACHIEVEMENT_FACTION_ANY |
{.dense}

&nbsp;

### InstanceID
<code>Col: 2 (int32)</code>

Only set if achievement is related to a zone.
* -1: none
&nbsp;

### Supercedes
:x: <code>Col: 3 (uint32)</code>

Its Achievement parent (can't start while parent incomplete, use its Criteria if don't have own, use its progress on begin)
&nbsp;

### Title
<code>Col: 4 &ndash; 20 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Description
:x: <code>Col: 21 &ndash; 37 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Category
<code>Col: 38 (uint32)</code>

*- no description -*
&nbsp;

### Points
<code>Col: 39 (uint32)</code>

Reward points
&nbsp;

### UiOrder
:x: <code>Col: 40 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 41 (uint32)</code>

[`enum AchievementFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L80-L92)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | ACHIEVEMENT_FLAG_COUNTER | Just count statistic (never stop and complete) |
| 2 | 0x0002 | ACHIEVEMENT_FLAG_HIDDEN | Not sent to client - internal use only |
| 4 | 0x0004 | ACHIEVEMENT_FLAG_STORE_MAX_VALUE | Store only max value? used only in "Reach level xx" |
| 8 | 0x0008 | ACHIEVEMENT_FLAG_SUMM | Use summ criteria value from all requirements (and calculate max value) |
| 16 | 0x0010 | ACHIEVEMENT_FLAG_MAX_USED | Show max criteria (and calculate max value ??) |
| 32 | 0x0020 | ACHIEVEMENT_FLAG_REQ_COUNT | Use not zero req count (and calculate max value) |
| 64 | 0x0040 | ACHIEVEMENT_FLAG_AVERAGE | Show as average value (value / time_in_days) depend from other flag (by def use last criteria value) |
| 128 | 0x0080 | ACHIEVEMENT_FLAG_BAR | Show as progress bar (value / max vale) depend from other flag (by def use last criteria value) |
| 256 | 0x0100 | ACHIEVEMENT_FLAG_REALM_FIRST_REACH |  |
| 512 | 0x0200 | ACHIEVEMENT_FLAG_REALM_FIRST_KILL |  |
{.dense}

&nbsp;

### IconID
:x: <code>Col: 42 (uint32)</code>

*- no description -*
&nbsp;

### Reward
:x: <code>Col: 43 &ndash; 59 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### MinimumCriteria
<code>Col: 60 (uint32)</code>

Need this count of completed criterias. (own or referenced achievement criterias)
&nbsp;

### SharesCriteria
<code>Col: 61 (uint32)</code>

Referenced achievement (counting of all completed criterias)
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/zonemusic" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ZoneMusic'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/achievement_category" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Achievement_Category'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
