---
title: areatrigger
description: 
published: true
date: 2021-12-15T18:54:24.264Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/world/achievement_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_reward_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnId](#spawnid) | bigint(20) | unsigned | PRI | NO |  |  |  |
| [AreaTriggerId](#areatriggerid) | int(10) | unsigned |  | NO |  |  |  |
| [IsServerSide](#isserverside) | tinyint(1) | unsigned |  | NO |  |  |  |
| [MapId](#mapid) | int(10) | unsigned |  | NO |  |  |  |
| [PosX](#posx) | float |  |  | NO |  |  |  |
| [PosY](#posy) | float |  |  | NO |  |  |  |
| [PosZ](#posz) | float |  |  | NO |  |  |  |
| [Orientation](#orientation) | float |  |  | NO |  |  |  |
| [PhaseUseFlags](#phaseuseflags) | tinyint(3) | unsigned |  | YES | 0 |  |  |
| [PhaseId](#phaseid) | int(10) | unsigned |  | YES | 0 |  |  |
| [PhaseGroup](#phasegroup) | int(10) | unsigned |  | YES | 0 |  |  |
| [Shape](#shape) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ShapeData0](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData1](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData2](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData3](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData4](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ShapeData5](#shapedata0-5) | float |  |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) | signed |  | NO | '' |  |  |
| [Comment](#comment) | varchar(255) | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### SpawnId
A unique identifier given to each areatrigger to distinguish one areatrigger from another. Two areatriggers can NOT have same SpawnId.
&nbsp;

### AreaTriggerId
The ID of the [areatrigger_template](/database/master/world/areatrigger_template) that is used when instantiating this areatrigger.
&nbsp;

### IsServerSide
0 = False
1 = True

If `True` then the spawn is not sent to client via `SMGS_UPDATE_OBJECT` packet (e.g. instance entries/exists)

Nevertheless there are still clientsided areatriggers for content before Legion addon.
You can see them inside [AreaTrigger.db2](https://wow.tools/dbc/?dbc=areatrigger){target=_blank}
&nbsp;

### MapId
The [ID](https://wow.tools/dbc/?dbc=map){target=_blank} of the map that the areatrigger is spawned on.
&nbsp;

### PosX
The X position of the areatrigger spawn point.
&nbsp;

### PosY
*- no description -*
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

### Shape
Shape determines the general design of an areatrigger.

|ID|Name|
|:---:|:---: |
|0|AREATRIGGER_TYPE_SPHERE|
|1|AREATRIGGER_TYPE_BOX|
|2|AREATRIGGER_TYPE_UNK|
|3|AREATRIGGER_TYPE_POLYGON|
|4|AREATRIGGER_TYPE_CYLINDER|
|5|AREATRIGGER_TYPE_MAX|
&nbsp;

### ShapeData0-5
The data changes depending on the Shape.
| |SPHERE|BOX|UNK|POLYGON|CYLINDER|
|:---:|:---:|:---:|:---:|:---:|:---:|
|ShapeData0| Radius | ExtentsX | | Height | Radius |
|ShapeData1| RadiusTarget | ExtentsY | | HeightTarget | RadiusTarget |
|ShapeData2| - | ExtentsZ | | - | Height |
|ShapeData3| - | ExtentsTargetX | | - | HeightTarget |
|ShapeData4| - | ExtentsTargetY | | - | LocationZOffset |
|ShapeData5| - | ExtentsTargetZ | | - | LocationZOffsetTarget |
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### Comment
This field is for any comment you want to make about the requirements. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/achievement_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_reward_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/areatrigger_create_properties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'areatrigger_create_properties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

