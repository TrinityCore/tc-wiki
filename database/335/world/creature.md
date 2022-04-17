---
title: creature
description: 
published: true
date: 2022-04-17T21:01:59.119Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/335/world/conditions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  | auto_increment | Global Unique Identifier |
| [id](#id) | mediumint | unsigned | MUL | NO | 0 |  | Creature Identifier |
| [map](#map) | smallint | unsigned | MUL | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaid) | smallint | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnMask](#spawnmask) | tinyint | unsigned |  | NO | 1 |  |  |
| [phaseMask](#phasemask) | int | unsigned |  | NO | 1 |  |  |
| [modelid](#modelid) | mediumint | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint | signed |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [spawntimesecs](#spawntimesecs) | int | unsigned |  | NO | 120 |  |  |
| [wander_distance](#wander_distance) | float |  |  | NO | 0 |  |  |
| [currentwaypoint](#currentwaypoint) | mediumint | unsigned |  | NO | 0 |  |  |
| [curhealth](#curhealth) | int | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int | unsigned |  | NO | 0 |  |  |
| [MovementType](#movementtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [npcflag](#npcflag) | int | unsigned |  | NO | 0 |  |  |
| [unit_flags](#unit_flags) | int | unsigned |  | NO | 0 |  |  |
| [dynamicflags](#dynamicflags) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | YES | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | 0 |  |  |
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

<a href="https://trinitycore.info/en/database/335/world/conditions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
