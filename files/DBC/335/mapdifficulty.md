---
title: MapDifficulty.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/map" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Map'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/material" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Material'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# MapDifficulty.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=mapdifficulty&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/MapDifficulty)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [Difficulty](#difficulty) | uint32 |  |
| 3 | [Message_0](#message) | string |  |
| 4 | [Message_1](#message) | string |  |
| 5 | [Message_2](#message) | string |  |
| 6 | [Message_3](#message) | string |  |
| 7 | [Message_4](#message) | string |  |
| 8 | [Message_5](#message) | string |  |
| 9 | [Message_6](#message) | string |  |
| 10 | [Message_7](#message) | string |  |
| 11 | [Message_8](#message) | string |  |
| 12 | [Message_9](#message) | string |  |
| 13 | [Message_10](#message) | string |  |
| 14 | [Message_11](#message) | string |  |
| 15 | [Message_12](#message) | string |  |
| 16 | [Message_13](#message) | string |  |
| 17 | [Message_14](#message) | string |  |
| 18 | [Message_15](#message) | string |  |
| 19 | [Message_lang_mask](#message) | uint32 |  |
| 20 | [RaidDuration](#raidduration) | uint32 |  |
| 21 | [MaxPlayers](#maxplayers) | uint32 |  |
| 22 | [Difficultystring](#difficultystring) | string |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Difficulty
<code>Col: 2 (uint32)</code>

for arenas: arena slot
 [`enum Difficulty`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L278-L290)
| ID | Name |
|----|------|
| 0 | RAID_DIFFICULTY_10MAN_NORMAL / DUNGEON_DIFFICULTY_NORMAL |
| 1 | RAID_DIFFICULTY_25MAN_NORMAL / DUNGEON_DIFFICULTY_HEROIC |
| 2 | RAID_DIFFICULTY_10MAN_HEROIC |
| 3 | RAID_DIFFICULTY_25MAN_HEROIC |
{.dense}

&nbsp;

### Message
<code>Col: 3 &ndash; 19 ([Loc](/how-to/localization))</code>

Text shown when transfer to map failed (missing requirements).
&nbsp;

### RaidDuration
<code>Col: 20 (uint32)</code>

Instance lockout period in seconds.
&nbsp;

### MaxPlayers
<code>Col: 21 (uint32)</code>

*- no description -*
&nbsp;

### Difficultystring
:x: <code>Col: 22 (string)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/map" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Map'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/material" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Material'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
