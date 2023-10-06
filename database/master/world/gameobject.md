---
title: gameobject
description: 
published: true
date: 2023-10-06T19:27:10.493Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:38.234Z
---

<a href="https://trinitycore.info/en/database/master/world/game_weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_weather'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [id](#id) | int | unsigned |  | NO | 0 |  | Gameobject Identifier |
| [map](#map) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaid) | smallint | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnDifficulties](#spawndifficulties) | varchar(100) |  |  | NO | 0 |  |  |
| [phaseUseFlags](#phaseuseflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [PhaseId](#phaseid) | int | signed |  | YES | 0 |  |  |
| [PhaseGroup](#phasegroup) | int | signed |  | YES | 0 |  |  |
| [terrainSwapMap](#terrainswapmap) | int | signed |  | NO | -1 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [rotation0](#rotation0) | float |  |  | NO | 0 |  |  |
| [rotation1](#rotation1) | float |  |  | NO | 0 |  |  |
| [rotation2](#rotation2) | float |  |  | NO | 0 |  |  |
| [rotation3](#rotation3) | float |  |  | NO | 0 |  |  |
| [spawntimesecs](#spawntimesecs) | int | signed |  | NO | 0 |  |  |
| [animprogress](#animprogress) | tinyint | unsigned |  | NO | 0 |  |  |
| [state](#state) | tinyint | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [StringId](#stringid) | varchar(64) |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid

The global unique identifier for the game object. This field must be unique among all game objects.
If a new gameobject will be spawned it should be within the GUID range of the current expansion when gameobject was added initially on retail.

For example a gameobject in Orgrimmar and Stormwind was added in Shadowlands (9.x) on retail (expansion 8), so it would get a GUID between 8000000 and 8999999 assigned.

The GUID ranges are defined as followed:
|                    Expansion | GUID range start | GUID range end |
| ---------------------------- | ---------------- | -------------- |
| Vanilla (1.x)                |                1 |         249999 |
| The Burning Crusade (2.x)    |                1 |         249999 |
| Wrath of the Lich King (3.x) |          2000000 |        2999999 |
| Cataclysm (4.x)              |          3000000 |        3999999 |
| Mists of Pandaria (5.x)      |          4000000 |        4999999 |
| Warlords of Draenor (6.x)    |          5000000 |        5999999 |
| Legion (7.x)                 |          6000000 |        6999999 |
| Battle for Azeroth (8.x)     |          7000000 |        7999999 |
| Shadowlands (9.x)            |          8000000 |        8999999 |
| Dragonflight (10.x)          |          9000000 |        9999999 |
| :warning: Wrath of the Lich King (3.x)        |                1 |         249999 |
| :warning: Legacy Cataclysm (4.x)              |           200000 |         299999 |
| :warning: Legacy Mists of Pandaria (5.x)      |           200000 |         299999 |
| :warning: Legacy Warlords of Draenor (6.x)    |           300000 |         399999 |
| :warning: Legacy Legion (7.x)                 |           400000 |         499999 |
| :warning: Legacy Battle for Azeroth (8.x)     |           500000 |         599999 |
| :warning: Legacy Shadowlands (9.x)            |           600000 |         699999 |
> Because the limit of several old ranges was reached, new ranges have been defined with the nomenclature **{ExpID}000000 - {ExpID}999999**. The old ranges should not be used.
{.is-warning}

### id
This links to [gameobject_template_entry](/en/database/master/world/gameobject_template#entry)
&nbsp;

### map
The ID of the map that the gameobject is spawned on.
&nbsp;

### zoneId
The ID of the zone that the gameobject is spawned on.
&nbsp;

### areaId
The ID of the area that the gameobject is spawned on.
&nbsp;

### spawnDifficulties
Comma separated list of difficulties.

| Name | Value
| --- | :---: |
| DIFFICULTY_NONE | 0 |
| DIFFICULTY_NORMAL | 1 |
| DIFFICULTY_HEROIC | 2 |
| DIFFICULTY_10_N | 3 |
| DIFFICULTY_25_N | 4 |
| DIFFICULTY_10_HC | 5 |
| DIFFICULTY_25_HC | 6 |
| DIFFICULTY_LFR | 7 |
| DIFFICULTY_MYTHIC_KEYSTONE | 8 |
| DIFFICULTY_40 | 9 |
| DIFFICULTY_3_MAN_SCENARIO_HC | 11 |
| DIFFICULTY_3_MAN_SCENARIO_N | 12 |
| DIFFICULTY_NORMAL_RAID | 14 |
| DIFFICULTY_HEROIC_RAID | 15 |
| DIFFICULTY_MYTHIC_RAID | 16 |
| DIFFICULTY_LFR_NEW | 17 |
| DIFFICULTY_EVENT_RAID | 18 |
| DIFFICULTY_EVENT_DUNGEON | 19 |
| DIFFICULTY_EVENT_SCENARIO | 20 |
| DIFFICULTY_MYTHIC | 23 |
| DIFFICULTY_TIMEWALKING | 24 |
| DIFFICULTY_WORLD_PVP_SCENARIO | 25 |
| DIFFICULTY_5_MAN_SCENARIO_N | 26 |
| DIFFICULTY_20_MAN_SCENARIO_N | 27 |
| DIFFICULTY_PVEVP_SCENARIO | 29 |
| DIFFICULTY_EVENT_SCENARIO_6 | 30 |
| DIFFICULTY_WORLD_PVP_SCENARIO_2 | 32 |
| DIFFICULTY_TIMEWALKING_RAID | 33 |
| DIFFICULTY_PVP | 34 |
| DIFFICULTY_NORMAL_ISLAND | 38 |
| DIFFICULTY_HEROIC_ISLAND | 39 |
| DIFFICULTY_MYTHIC_ISLAND | 40 |
| DIFFICULTY_PVP_ISLAND | 45 |
| DIFFICULTY_NORMAL_WARFRONT | 147 |
| DIFFICULTY_HEROIC_WARFRONT | 149 |
| DIFFICULTY_LFR_15TH_ANNIVERSARY | 151 |
| DIFFICULTY_VISIONS_OF_NZOTH | 152 |
| DIFFICULTY_TEEMING_ISLAND | 153 |
&nbsp;

### phaseUseFlags
| Name | Value |
| --- | :---: |
| PHASE_USE_FLAGS_NONE            | 0x0 |
| PHASE_USE_FLAGS_ALWAYS_VISIBLE  | 0x1 |
| PHASE_USE_FLAGS_INVERSE         | 0x2 |
&nbsp;

### PhaseId
Determines in which phase the gameobject is in.
Available phases can be found in Phase.db2
&nbsp;

### PhaseGroup
Determines in which PhaseGroup the gameobject is in.
A PhaseGroup sets a gameobject in multiple phases at once.
PhaseGroups can contain more Phases than you actually need.
Available PhaseGroups can be found in PhaseGroup.db2
&nbsp;

### terrainSwapMap
*- no description -*
&nbsp;

### position_x
The X position of the gameobject spawn point.
&nbsp;

### position_y
The Y position of the gameobject spawn point.
&nbsp;

### position_z
The Z position of the gameobject spawn point.
&nbsp;

### orientation
The orientation of the gameobject spawn point. (North = 0.0; South = pi (3.14159))
&nbsp;

### rotation0
*- no description -*
&nbsp;

### rotation1
*- no description -*
&nbsp;

### rotation2
*- no description -*
&nbsp;

### rotation3
*- no description -*
&nbsp;

### spawntimesecs
The respawn time, in seconds, of the gameobject.
&nbsp;

### animprogress
*- no description -*
&nbsp;

### state
For chests and doors.
| State | Value |
| --- | :---: |
| open | 0 |
| closed | 1 |
&nbsp;

### ScriptName
The name of the script that this gameobject uses, if any. This ties a script from a scripting engine to this creature.
&nbsp;

### StringId
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/game_weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_weather'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
