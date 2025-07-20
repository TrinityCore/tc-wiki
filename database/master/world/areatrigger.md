---
title: areatrigger
description:
published: true
date: 2024-08-05T15:30:38.528Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:46.460Z
---

<a href="https://trinitycore.info/en/database/master/world/achievement_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnId](#spawnid) | bigint | unsigned | PRI | NO |  |  |  |
| [AreaTriggerCreatePropertiesId](#areatriggercreatepropertiesid) | int | unsigned |  | NO |  |  |  |
| [IsCustom](#iscustom) | tinyint | unsigned |  | NO |  |  |  |
| [MapId](#mapid) | int | unsigned |  | NO |  |  |  |
| [SpawnDifficulties](#spawndifficulties) | varchar(100) |  |  | NO | 0 |  |  |
| [PosX](#posx) | float |  |  | NO |  |  |  |
| [PosY](#posy) | float |  |  | NO |  |  |  |
| [PosZ](#posz) | float |  |  | NO |  |  |  |
| [Orientation](#orientation) | float |  |  | NO |  |  |  |
| [PhaseUseFlags](#phaseuseflags) | tinyint | unsigned |  | YES | 0 |  |  |
| [PhaseId](#phaseid) | int | unsigned |  | YES | 0 |  |  |
| [PhaseGroup](#phasegroup) | int | unsigned |  | YES | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### SpawnId
A unique identifier given to each areatrigger to distinguish one areatrigger from another. Two areatriggers can NOT have same SpawnId.
&nbsp;

### AreaTriggerCreatePropertiesId
References [`areatrigger_create_properties.Id`](/database/master/world/areatrigger_create_properties#Id)
&nbsp;

### IsCustom
Describes whether referenced `AreaTriggerCreatePropertiesId` is a custom id or not.
&nbsp;

### MapId
The [ID](https://wago.tools/db2/map){target=_blank} of the map that the areatrigger is spawned on.
&nbsp;

### SpawnDifficulties
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

### PosX
The X position of the areatrigger spawn point.
&nbsp;

### PosY
The Y position of the areatrigger spawn point.

### PosZ
The Z position of the areatrigger spawn point.
&nbsp;

### Orientation
The orientation of the areatrigger spawn point. (North = 0.0; South = pi (3.14159))
&nbsp;

### PhaseUseFlags
Mask value. Part of the phasing system

```bash
PHASE_USE_FLAGS_NONE            = 0x0,
PHASE_USE_FLAGS_ALWAYS_VISIBLE  = 0x1,
PHASE_USE_FLAGS_INVERSE         = 0x2,
```
&nbsp;

### PhaseId
If set the areatrigger is placed in the specific phase.

Only players in the same phase are able to "see" the areatrigger (if PhaseUseFlags does not contain `PHASE_USE_FLAGS_ALWAYS_VISIBLE`)

A full list of available phases can be taken from [Phase.db2](https://wago.tools/db2/phase){target=_blank}.
&nbsp;

### PhaseGroup
Works similar as PhaseId, but the areatrigger can be placed inside multiple Phases this way.

The taken PhaseGroup might contains phases not needed, but are unused inside the phased area anyway.

A full list of available PhaseGroups can be taken from [PhaseXPhaseGroup.db2](https://wago.tools/db2/phasexphasegroup){target=_blank}'s PhaseGroupID field.
&nbsp;

### ScriptName
The name of the script that this areatrigger uses, if any. This ties a script from a scripting engine to this areatrigger.
&nbsp;

### Comment
This field is for any comment you want to make about the requirements. It is arbitrary text.
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/achievement_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
