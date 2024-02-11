---
title: areatrigger
description: 
published: true
date: 2024-02-11T20:06:05.753Z
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
| [SpellForVisuals](#spellforvisuals) | int | signed |  | YES | NULL |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### SpawnId
A unique identifier given to each areatrigger to distinguish one areatrigger from another. Two areatriggers can NOT have same SpawnId.
&nbsp;

### AreaTriggerCreatePropertiesId
*- no description -*
&nbsp;

### IsCustom
*- no description -*
&nbsp;

### MapId
The [ID](https://wow.tools/dbc/?dbc=map){target=_blank} of the map that the areatrigger is spawned on.
&nbsp;

### SpawnDifficulties
*- no description -*
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

A full list of available phases can be taken from [Phase.db2](https://wow.tools/dbc/?dbc=phase){target=_blank}.
&nbsp;

### PhaseGroup
Works similar as PhaseId, but the areatrigger can be placed inside multiple Phases this way.

The taken PhaseGroup might contains phases not needed, but are unused inside the phased area anyway.

A full list of available PhaseGroups can be taken from [PhaseXPhaseGroup.db2](https://wow.tools/dbc/?dbc=phasexphasegroup){target=_blank}'s PhaseGroupID field.
&nbsp;

### SpellForVisuals
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### Comment
This field is for any comment you want to make about the requirements. It is arbitrary text.
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/achievement_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
