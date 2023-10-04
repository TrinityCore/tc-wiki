---
title: Faction.dbc
description: 
published: true
date: 2023-10-04T13:08:14.955Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:02:56.984Z
---

<a href="https://trinitycore.info/files/DBC/335/exhaustion" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Exhaustion'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/factiongroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'FactionGroup'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Faction.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=faction&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Faction)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ReputationIndex](#reputationindex) | int32 |  |
| 2 | [ReputationRaceMask_0](#reputationracemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 3 | [ReputationRaceMask_1](#reputationracemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 4 | [ReputationRaceMask_2](#reputationracemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 5 | [ReputationRaceMask_3](#reputationracemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 6 | [ReputationClassMask_0](#reputationclassmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 7 | [ReputationClassMask_1](#reputationclassmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 8 | [ReputationClassMask_2](#reputationclassmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 9 | [ReputationClassMask_3](#reputationclassmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 10 | [ReputationBase_0](#reputationbase) | int32 |  |
| 11 | [ReputationBase_1](#reputationbase) | int32 |  |
| 12 | [ReputationBase_2](#reputationbase) | int32 |  |
| 13 | [ReputationBase_3](#reputationbase) | int32 |  |
| 14 | [ReputationFlags_0](#reputationflags) | uint32 |  |
| 15 | [ReputationFlags_1](#reputationflags) | uint32 |  |
| 16 | [ReputationFlags_2](#reputationflags) | uint32 |  |
| 17 | [ReputationFlags_3](#reputationflags) | uint32 |  |
| 18 | [ParentFactionID](#parentfactionid) | uint32 | [Faction.dbc/0](/files/DBC/335/faction#id) |
| 19 | [ParentFactionMod_0](#parentfactionmod) | float |  |
| 20 | [ParentFactionMod_1](#parentfactionmod) | float |  |
| 21 | [ParentFactionCap_0](#parentfactioncap) | uint32 |  |
| 22 | [ParentFactionCap_1](#parentfactioncap) | uint32 |  |
| 23 | [Name_0](#name) | string |  |
| 24 | [Name_1](#name) | string |  |
| 25 | [Name_2](#name) | string |  |
| 26 | [Name_3](#name) | string |  |
| 27 | [Name_4](#name) | string |  |
| 28 | [Name_5](#name) | string |  |
| 29 | [Name_6](#name) | string |  |
| 30 | [Name_7](#name) | string |  |
| 31 | [Name_8](#name) | string |  |
| 32 | [Name_9](#name) | string |  |
| 33 | [Name_10](#name) | string |  |
| 34 | [Name_11](#name) | string |  |
| 35 | [Name_12](#name) | string |  |
| 36 | [Name_13](#name) | string |  |
| 37 | [Name_14](#name) | string |  |
| 38 | [Name_15](#name) | string |  |
| 39 | [Name_lang_mask](#name) | uint32 |  |
| 40 | [Description_0](#description) | string |  |
| 41 | [Description_1](#description) | string |  |
| 42 | [Description_2](#description) | string |  |
| 43 | [Description_3](#description) | string |  |
| 44 | [Description_4](#description) | string |  |
| 45 | [Description_5](#description) | string |  |
| 46 | [Description_6](#description) | string |  |
| 47 | [Description_7](#description) | string |  |
| 48 | [Description_8](#description) | string |  |
| 49 | [Description_9](#description) | string |  |
| 50 | [Description_10](#description) | string |  |
| 51 | [Description_11](#description) | string |  |
| 52 | [Description_12](#description) | string |  |
| 53 | [Description_13](#description) | string |  |
| 54 | [Description_14](#description) | string |  |
| 55 | [Description_15](#description) | string |  |
| 56 | [Description_lang_mask](#description) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ReputationIndex
<code>Col: 1 (int32)</code>

Each faction that has gainable rep has a unique number. All factions that you can not gain rep with have -1. Max value 127.
&nbsp;

### ReputationRaceMask
<code>Col: 2 &ndash; 5 (uint32)</code>

Mask of races using cols 10 &nbsp; 13 as base reputation.

| Value | Flag   | Name      |  | Value | Flag   | Name      |
|-------|--------|-----------|--|-------|--------|-----------|
|     1 | 0x0001 | Human     |  |     2 | 0x0002 | Orc       |
|     4 | 0x0004 | Dwarf     |  |    16 | 0x0010 | Undead    |
|     8 | 0x0008 | Night Elf |  |    32 | 0x0020 | Tauren    |
|    64 | 0x0040 | Gnome     |  |   128 | 0x0080 | Troll     |
|  1024 | 0x0400 | Draenei   |  |   512 | 0x0200 | Blood Elf |
|  1101 | 0x044D | *_Alliance_* |  |   690 | 0x02B2 | *_Horde_* |
{.dense}

&nbsp;

### ReputationClassMask
<code>Col: 6 &ndash; 9 (uint32)</code>

Mask of classes using cols 10 &nbsp; 13 as base reputation.

| Value | Flag   | Name      |  | Value | Flag   | Name         |
|-------|--------|-----------|--|-------|--------|--------------|
|     1 | 0x0001 | Warrior   |  |    32 | 0x0020 | Death Knight |
|     2 | 0x0002 | Paladin   |  |    64 | 0x0040 | Shaman       |
|     4 | 0x0004 | Hunter    |  |   128 | 0x0080 | Mage         |
|     8 | 0x0008 | Rogue     |  |   256 | 0x0100 | Warlock      |
|    16 | 0x0010 | Priest    |  |  1024 | 0x0400 | Druid        |
{.dense}

&nbsp;

### ReputationBase
<code>Col: 10 &ndash; 13 (int32)</code>

-42000 &ndash; 42999 (0 neutral);
Used by races specified in mask in cols 2 &ndash; 5, 6 &ndash; 9.
&nbsp;

### ReputationFlags
<code>Col: 14 &ndash; 17 (uint32)</code>

[`enum FactionFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Reputation/ReputationMgr.h#L34-L45)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | FACTION_FLAG_VISIBLE | makes visible in client (set or can be set at interaction with target of this faction) |
| 2 | 0x02 | FACTION_FLAG_AT_WAR | enable AtWar-button in client. player controlled (except opposition team always war state), Flag only set on initial creation |
| 4 | 0x04 | FACTION_FLAG_HIDDEN | hidden faction from reputation pane in client (player can gain reputation, but this update not sent to client) |
| 8 | 0x08 | FACTION_FLAG_INVISIBLE_FORCED | always overwrite FACTION_FLAG_VISIBLE and hide faction in rep.list, used for hide opposite team factions |
| 16 | 0x10 | FACTION_FLAG_PEACE_FORCED | always overwrite FACTION_FLAG_AT_WAR, used for prevent war with own team factions |
| 32 | 0x20 | FACTION_FLAG_INACTIVE | player controlled, state stored in characters.data (CMSG_SET_FACTION_INACTIVE) |
| 64 | 0x40 | FACTION_FLAG_RIVAL | flag for the two competing outland factions |
| 128 | 0x80 | FACTION_FLAG_SPECIAL | horde and alliance home cities and their northrend allies have this flag |
{.dense}

&nbsp;

### ParentFactionID
<code>Col: 18 (uint32)</code>

Recursive. i.e. Undercity lists ID 67, which is Horde.
&nbsp;

### ParentFactionMod
<code>Col: 19 &ndash; 20 (float)</code>

* Col 19: Faction gains incoming rep * spilloverRateIn
* Col 20: Faction outputs rep * spilloverRateOut as spillover reputation
&nbsp;

### ParentFactionCap
<code>Col: 21 &ndash; 22 (uint32)</code>

* Col 21: The highest rank the faction will profit from incoming spillover
* Col 22: :x: It does not seem to be the max standing at which a faction outputs spillover ...so no idea
&nbsp;

### Name
<code>Col: 23 &ndash; 39 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Description
:x: <code>Col: 40 &ndash; 56 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/exhaustion" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Exhaustion'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/factiongroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'FactionGroup'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
