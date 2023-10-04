---
title: Map.dbc
description: 
published: true
date: 2023-10-04T13:09:03.698Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:05:31.322Z
---

<a href="https://trinitycore.info/files/DBC/335/mailtemplate" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'MailTemplate'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/mapdifficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'MapDifficulty'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Map.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=map&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Map)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Directory](#directory) | string |  |
| 2 | [InstanceType](#instancetype) | uint32 |  |
| 3 | [Flags](#flags) | uint32 |  |
| 4 | [MapType](#maptype) | uint32 |  |
| 5 | [MapName_0](#mapname) | string |  |
| 6 | [MapName_1](#mapname) | string |  |
| 7 | [MapName_2](#mapname) | string |  |
| 8 | [MapName_3](#mapname) | string |  |
| 9 | [MapName_4](#mapname) | string |  |
| 10 | [MapName_5](#mapname) | string |  |
| 11 | [MapName_6](#mapname) | string |  |
| 12 | [MapName_7](#mapname) | string |  |
| 13 | [MapName_8](#mapname) | string |  |
| 14 | [MapName_9](#mapname) | string |  |
| 15 | [MapName_10](#mapname) | string |  |
| 16 | [MapName_11](#mapname) | string |  |
| 17 | [MapName_12](#mapname) | string |  |
| 18 | [MapName_13](#mapname) | string |  |
| 19 | [MapName_14](#mapname) | string |  |
| 20 | [MapName_15](#mapname) | string |  |
| 21 | [MapName_lang_mask](#mapname) | uint32 |  |
| 22 | [AreaTableID](#areatableid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 23 | [MapDescription0_0](#mapdescription0) | string |  |
| 24 | [MapDescription0_1](#mapdescription0) | string |  |
| 25 | [MapDescription0_2](#mapdescription0) | string |  |
| 26 | [MapDescription0_3](#mapdescription0) | string |  |
| 27 | [MapDescription0_4](#mapdescription0) | string |  |
| 28 | [MapDescription0_5](#mapdescription0) | string |  |
| 29 | [MapDescription0_6](#mapdescription0) | string |  |
| 30 | [MapDescription0_7](#mapdescription0) | string |  |
| 31 | [MapDescription0_8](#mapdescription0) | string |  |
| 32 | [MapDescription0_9](#mapdescription0) | string |  |
| 33 | [MapDescription0_10](#mapdescription0) | string |  |
| 34 | [MapDescription0_11](#mapdescription0) | string |  |
| 35 | [MapDescription0_12](#mapdescription0) | string |  |
| 36 | [MapDescription0_13](#mapdescription0) | string |  |
| 37 | [MapDescription0_14](#mapdescription0) | string |  |
| 38 | [MapDescription0_15](#mapdescription0) | string |  |
| 39 | [MapDescription0_lang_mask](#mapdescription0) | uint32 |  |
| 40 | [MapDescription1_0](#mapdescription1) | string |  |
| 41 | [MapDescription1_1](#mapdescription1) | string |  |
| 42 | [MapDescription1_2](#mapdescription1) | string |  |
| 43 | [MapDescription1_3](#mapdescription1) | string |  |
| 44 | [MapDescription1_4](#mapdescription1) | string |  |
| 45 | [MapDescription1_5](#mapdescription1) | string |  |
| 46 | [MapDescription1_6](#mapdescription1) | string |  |
| 47 | [MapDescription1_7](#mapdescription1) | string |  |
| 48 | [MapDescription1_8](#mapdescription1) | string |  |
| 49 | [MapDescription1_9](#mapdescription1) | string |  |
| 50 | [MapDescription1_10](#mapdescription1) | string |  |
| 51 | [MapDescription1_11](#mapdescription1) | string |  |
| 52 | [MapDescription1_12](#mapdescription1) | string |  |
| 53 | [MapDescription1_13](#mapdescription1) | string |  |
| 54 | [MapDescription1_14](#mapdescription1) | string |  |
| 55 | [MapDescription1_15](#mapdescription1) | string |  |
| 56 | [MapDescription1_lang_mask](#mapdescription1) | uint32 |  |
| 57 | [LoadingScreenID](#loadingscreenid) | uint32 | [LoadingScreens.dbc/0](/files/DBC/335/loadingscreens#id) |
| 58 | [MinimapIconScale](#minimapiconscale) | float |  |
| 59 | [CorpseMapID](#corpsemapid) | int32 | [Map.dbc/0](#id) |
| 60 | [Corpse_X](#corpse) | float |  |
| 61 | [Corpse_Y](#corpse) | float |  |
| 62 | [TimeOfDayOverride](#timeofdayoverride) | int32 |  |
| 63 | [ExpansionID](#expansionid) | uint32 |  |
| 64 | [RaidOffset](#raidoffset) | uint32 |  |
| 65 | [MaxPlayers](#maxplayers) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Directory
:x: <code>Col: 1 (string)</code>

reference to World\Map\ \[...\] \
&nbsp;

### InstanceType
<code>Col: 2 (uint32)</code>

[`enum MapType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L333-L340)
| ID | Name | Comment |
|----|------|---------|
| 0 | MAP_COMMON | none |
| 1 | MAP_INSTANCE | party |
| 2 | MAP_RAID | raid |
| 3 | MAP_BATTLEGROUND | pvp |
| 4 | MAP_ARENA | arena |
{.dense}

&nbsp;

### Flags
<code>Col: 3 (uint32)</code>

[`enum MapType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L342-L345)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 |  | Optimize |
| 2 | 0x0002 |  | Development Map |
| 4 | 0x0004 |  | Weighted Blend |
| 8 | 0x0008 |  | Vertex Coloring |
| 16 | 0x0010 |  | Sort Objects |
| 32 | 0x0020 |  | Limit to players from one realm |
| 256 | 0x0100 | MAP_FLAG_DYNAMIC_DIFFICULTY | Dynamic Difficulty. |
{.dense}

&nbsp;

### MapType
:x: <code>Col: 4 (uint32)</code>

0 or 1 for battlegrounds (not arenas)
&nbsp;

### MapName
<code>Col: 5 &ndash; 21 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### AreaTableID
<code>Col: 22 (uint32)</code>

Common zone for instance and continent map.
&nbsp;

### MapDescription0
:x: <code>Col: 23 &ndash; 39 ([Loc](/how-to/localization))</code>

Text for PvP Zones (Horde).
&nbsp;

### MapDescription1
:x: <code>Col: 40 &ndash; 56 ([Loc](/how-to/localization))</code>

Text for PvP Zones (Alliance).
&nbsp;

### LoadingScreenID
<code>Col: 57 (uint32)</code>

*- no description -*
&nbsp;

### MinimapIconScale
:x: <code>Col: 58 (float)</code>

*- no description -*
&nbsp;

### CorpseMapID
<code>Col: 59 (int32)</code>

MapID of entrance map.
&nbsp;

### Corpse
<code>Col: 60 &ndash; 61 ([DBCPosition2D](/how-to/worldposition))</code>

Entrance coordinate (if exist single entry).
&nbsp;

### TimeOfDayOverride
:x: <code>Col: 62 (int32)</code>

-1, 0 and 720
&nbsp;

### ExpansionID
<code>Col: 63 (uint32)</code>

| Value | Expansion |
| :---: | :---: |
| 0 | Vanilla |
| 1 | The Burning Crusade (TBC) |
| 2 | Wrath of the Lich King (WotLK) |
{.dense}

&nbsp;

### RaidOffset
<code>Col: 64 (uint32)</code>

*- no description -*
&nbsp;

### MaxPlayers
<code>Col: 65 (uint32)</code>

Max players, fallback if not present in [MapDifficulty.dbc](/files/DBC/335/mapdifficulty).
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/mailtemplate" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'MailTemplate'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/mapdifficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'MapDifficulty'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
