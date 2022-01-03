---
title: creature
description: 
published: true
date: 2022-01-03T11:24:59.084Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/world/conversation_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conversation_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [id](#id) | int(10) | unsigned | MUL | NO | 0 |  | Creature Identifier |
| [map](#map) | smallint(5) | unsigned | MUL | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint(5) | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaid) | smallint(5) | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnDifficulties](#spawndifficulties) | varchar(100) | signed |  | NO | 0 |  |  |
| [phaseUseFlags](#phaseuseflags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PhaseId](#phaseid) | int(11) | signed |  | YES | 0 |  |  |
| [PhaseGroup](#phasegroup) | int(11) | signed |  | YES | 0 |  |  |
| [terrainSwapMap](#terrainswapmap) | int(11) | signed |  | NO | -1 |  |  |
| [modelid](#modelid) | int(10) | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint(4) | signed |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [spawntimesecs](#spawntimesecs) | int(10) | unsigned |  | NO | 120 |  |  |
| [wander_distance](#wander_distance) | float |  |  | NO | 0 |  |  |
| [currentwaypoint](#currentwaypoint) | int(10) | unsigned |  | NO | 0 |  |  |
| [curhealth](#curhealth) | int(10) | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int(10) | unsigned |  | NO | 0 |  |  |
| [MovementType](#movementtype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [unit_flags](#unit_flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [unit_flags2](#unit_flags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [unit_flags3](#unit_flags3) | int(10) | unsigned |  | NO | 0 |  |  |
| [dynamicflags](#dynamicflags) | int(10) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) | signed |  | NO | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
A unique identifier given to each creature to distinguish one creature from another. Two creatures can NOT have same GUID.
If a new creature will be spawned it should be within the GUID range of the current expansion when creature was added first on retail.
For example [Chromie](https://www.wowhead.com/npc=167032/chromie) is spawned in Orgrimmar and Stormwind, but was added in Shadowlands (9.x) on retail, so we would assign a GUID between 1050000 and 1249999. 
The GUID ranges are defined as followed:
|                    Expansion | GUID range start | GUID range end |
| ---------------------------- | ---------------- | -------------- |
| Vanilla (1.x)                |                1 |         249999 |
| The Burning Crusade (2.x)    |                1 |         249999 |
| Wrath of the Lich King (3.x) |                1 |         249999 |
| Cataclysm (4.x)              |           250000 |         449999 |
| Mists of Pandaria (5.x)      |           250000 |         449999 |
| Warlords of Draenor (6.x)    |           450000 |         649999 |
| Legion (7.x)                 |           650000 |         849999 |
| Battle for Azeroth (8.x)     |           850000 |        1049999 |
| Shadowlands (9.x)            |          1050000 |        1249999 |
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

### modelid
*- no description -*
&nbsp;

### equipment_id
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

### spawntimesecs
*- no description -*
&nbsp;

### wander_distance
*- no description -*
&nbsp;

### currentwaypoint
*- no description -*
&nbsp;

### curhealth
*- no description -*
&nbsp;

### curmana
*- no description -*
&nbsp;

### MovementType
*- no description -*
&nbsp;

### npcflag
*- no description -*
&nbsp;

### unit_flags
*- no description -*
&nbsp;

### unit_flags2
*- no description -*
&nbsp;

### unit_flags3
*- no description -*
&nbsp;

### dynamicflags
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/conversation_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conversation_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

