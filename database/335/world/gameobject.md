---
title: gameobject
description:
published: true
date: 2023-07-09T20:49:04.818Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:11.495Z
---

<a href="https://trinitycore.info/en/database/335/world/game_weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_weather'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gameobject_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Contains individual gameobject spawn data. Spawn of an object is an instance of the gameobject object in the world.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  | auto_increment | Global Unique Identifier |
| [id](#id) | mediumint | unsigned |  | NO | 0 |  | Gameobject Identifier |
| [map](#map) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint | unsigned |  | NO | 0 |  | Zone Identifier |
| [areaId](#areaid) | smallint | unsigned |  | NO | 0 |  | Area Identifier |
| [spawnMask](#spawnmask) | tinyint | unsigned |  | NO | 1 |  |  |
| [phaseMask](#phasemask) | int | unsigned |  | NO | 1 |  |  |
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
| [ScriptName](#scriptname) | char(64) |  |  | YES | '' |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### guid
A unique identifier given to each gameobject to distinguish one from another. Two gameobjects can NOT have same GUID.
&nbsp;

### id
The [entry](../world/gameobject_template#entry) of the template that is used when instantiating this gameobject.
&nbsp;

### map
The [Map ID](/files/DBC/335/map#id) where this object is spawned.
&nbsp;

### zoneId
calculated by the core if `Calculate.Gameoject.Zone.Area.Data` is enabled
&nbsp;

### areaId
calculated by the core if `Calculate.Gameoject.Zone.Area.Data` is enabled
&nbsp;

### spawnMask
Controls under which difficulties the gameobject is spawned.
| Value | Comment |
|-------|---------|
| 0x00 | Not spawned |
| 0x01 | Spawned only in 10-man-normal versions of map (includes maps without a heroic mode) |
| 0x02 | Spawned only in 25-man-normal versions of map (or heroics pre 3.2) |
| 0x04 | Spawned only in 10-man-heroic versions of map |
| 0x08 | Spawned only in 25-man-heroic versions of map |
| 0x0F | Spawned in all versions of map |
{.dense}

&nbsp;

### phaseMask
This is a bitmask field that describes all the phases that a gameobject will appear in. Aura 261 determines the phase you can see. For example, if you had this aura https://aowow.trinitycore.info/?spell=55782, you would be able to see gameobjects in phase 2. If you wanted the gameobject to be visible in both phase 1 and phase 2, you would set the phaseMask to 3.
&nbsp;

### position_x
*- no description -*
&nbsp;

### position_y
The Y position of the gameobject.
&nbsp;

### position_z
The Z position of the gameobject.
&nbsp;

### orientation
The orientation of the gameobject. (North = 0.0; South = pi (3.14159))
&nbsp;

### rotation0
rotation.x
-1 <= x <= 1
&nbsp;

### rotation1
rotation.y
-1 <= y <= 1
&nbsp;

### rotation2
rotation.z
-1 <= z <= 1
&nbsp;

### rotation3
rotation.w
-1 <= w <= 1
&nbsp;

### spawntimesecs
The respawn time of the gameobject in seconds.
&nbsp;

### animprogress
Not really known what this is used for at this time. However, always set it to 100 for chests.
&nbsp;

### state
For chests or doors.
* 0: open
* 1: closed
&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/game_weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_weather'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gameobject_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
