---
title: creature
description: 
published: true
date: 2021-08-30T21:53:39.738Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/conditions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int(10) | unsigned | PRI | NO |  | auto_increment | Global Unique Identifier |
| [id](#id) | mediumint(8) | unsigned | MUL | NO | 0 |  | Creature Identifier |
| [map](#map) | smallint(5) | unsigned | MUL | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint(5) | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaid) | smallint(5) | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnMask](#spawnmask) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [phaseMask](#phasemask) | int(10) | unsigned |  | NO | 1 |  |  |
| [modelid](#modelid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint(3) | signed |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [spawntimesecs](#spawntimesecs) | int(10) | unsigned |  | NO | 120 |  |  |
| [wander_distance](#wander_distance) | float |  |  | NO | 0 |  |  |
| [currentwaypoint](#currentwaypoint) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [curhealth](#curhealth) | int(10) | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int(10) | unsigned |  | NO | 0 |  |  |
| [MovementType](#movementtype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | int(10) | unsigned |  | NO | 0 |  |  |
| [unit_flags](#unit_flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [dynamicflags](#dynamicflags) | int(10) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) | signed |  | YES | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | YES | 0 |  |  |
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

### spawnMask
*- no description -*
&nbsp;

### phaseMask
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

### dynamicflags
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/conditions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

