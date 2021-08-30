---
title: creature
description: 
published: true
date: 2021-08-30T09:24:17.473Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/conversation_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conversation_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [id](#id) | mediumint(8) | unsigned | MUL | NO | 0 |  | Creature Identifier |
| [map](#map) | smallint(5) | unsigned | MUL | NO | 0 |  | Map Identifier |
| [zoneId](#zoneId) | smallint(5) | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaId) | smallint(5) | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnDifficulties](#spawnDifficulties) | varchar(100) | signed |  | NO | 0 |  |  |
| [phaseUseFlags](#phaseUseFlags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PhaseId](#PhaseId) | int(10) | signed |  | YES | 0 |  |  |
| [PhaseGroup](#PhaseGroup) | int(10) | signed |  | YES | 0 |  |  |
| [terrainSwapMap](#terrainSwapMap) | int(11) | signed |  | NO | -1 |  |  |
| [modelid](#modelid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint(3) | signed |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [spawntimesecs](#spawntimesecs) | int(10) | unsigned |  | NO | 120 |  |  |
| [spawndist](#spawndist) | float |  |  | NO | 0 |  |  |
| [currentwaypoint](#currentwaypoint) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [curhealth](#curhealth) | int(10) | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int(10) | unsigned |  | NO | 0 |  |  |
| [MovementType](#MovementType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [unit_flags](#unit_flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [unit_flags2](#unit_flags2) | int(10) | unsigned |  | NO | 0 |  |  |
| [unit_flags3](#unit_flags3) | int(10) | unsigned |  | NO | 0 |  |  |
| [dynamicflags](#dynamicflags) | int(10) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#ScriptName) | char(64) | signed |  | YES | '' |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
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

### spawndist
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
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/conversation_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conversation_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

