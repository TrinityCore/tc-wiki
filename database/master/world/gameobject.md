---
title: gameobject
description: 
published: true
date: 2021-10-07T15:09:20.782Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:38.234Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/game_weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_weather'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/gameobject_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [id](#id) | mediumint(8) | unsigned |  | NO | 0 |  | Gameobject Identifier |
| [map](#map) | smallint(5) | unsigned |  | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint(5) | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaid) | smallint(5) | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnDifficulties](#spawndifficulties) | varchar(100) | signed |  | NO | 0 |  |  |
| [phaseUseFlags](#phaseuseflags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PhaseId](#phaseid) | int(10) | signed |  | YES | 0 |  |  |
| [PhaseGroup](#phasegroup) | int(10) | signed |  | YES | 0 |  |  |
| [terrainSwapMap](#terrainswapmap) | int(11) | signed |  | NO | -1 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [rotation0](#rotation0) | float |  |  | NO | 0 |  |  |
| [rotation1](#rotation1) | float |  |  | NO | 0 |  |  |
| [rotation2](#rotation2) | float |  |  | NO | 0 |  |  |
| [rotation3](#rotation3) | float |  |  | NO | 0 |  |  |
| [spawntimesecs](#spawntimesecs) | int(11) | signed |  | NO | 0 |  |  |
| [animprogress](#animprogress) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [state](#state) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) | signed |  | YES | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid

The global unique identifier for the game object. This field must be unique among all game objects.
If a new gameobject will be spawned it should be within the GUID range of the current expansion when creature was added initially on retail. For example a gameobject in Orgrimmar and Stormwind was added in Shadowlands (9.x) on retail, so it would get a GUID between 600000 and 699999 assigned.
The GUID ranges are defined as followed:
|                    Expansion | GUID range start | GUID range end |
| ---------------------------- | ---------------- | -------------- |
| Vanilla (1.x)                |                1 |         199999 |
| The Burning Crusade (2.x)    |                1 |         199999 |
| Wrath of the Lich King (3.x) |                1 |         199999 |
| Cataclysm (4.x)              |           200000 |         299999 |
| Mists of Pandaria (5.x)      |           200000 |         299999 |
| Warlords of Draenor (6.x)    |           300000 |         399999 |
| Legion (7.x)                 |           400000 |         499999 |
| Battle for Azeroth (8.x)     |           500000 |         599999 |
| Shadowlands (9.x)            |           600000 |         699999 |

[18:00] <Aokromes> 4.3.4 spawns 
[18:00] <Aokromes> gameobject guids starts at guid 200000
[18:00] <Aokromes> 6.x spawns
[18:00] <Aokromes> gameobject guids starts at 300000
[18:00] <Aokromes> 7.x spawns
[18:00] <Aokromes> gameobject guids starts at 400000
[18:00] <Aokromes> 8.x
[18:00] <Aokromes> gameobject guids starts at 500000
[18:00] <Aokromes> 9.x
[18:00] <Aokromes> gameobject guids starts at 600000
&nbsp;

### id
*- no description -*
&nbsp;

### map
*- no description -*
&nbsp;

### zoneId
*- no description -*
&nbsp;

### areaId
*- no description -*
&nbsp;

### spawnDifficulties
*- no description -*
&nbsp;

### phaseUseFlags
*- no description -*
&nbsp;

### PhaseId
*- no description -*
&nbsp;

### PhaseGroup
*- no description -*
&nbsp;

### terrainSwapMap
*- no description -*
&nbsp;

### position_x
*- no description -*
&nbsp;

### position_y
*- no description -*
&nbsp;

### position_z
*- no description -*
&nbsp;

### orientation
*- no description -*
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
*- no description -*
&nbsp;

### animprogress
*- no description -*
&nbsp;

### state
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/game_weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_weather'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/gameobject_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

