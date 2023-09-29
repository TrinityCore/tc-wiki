---
title: CreatureDisplayInfo.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/cinematicsequences" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CinematicSequences'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturedisplayinfoextra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureDisplayInfoExtra'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CreatureDisplayInfo.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=creaturedisplayinfo&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CreatureDisplayInfo)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ModelID](#modelid) | uint32 | [CreatureModelData.dbc/0](/files/DBC/335/creaturemodeldata#id) |
| 2 | [SoundID](#soundid) | uint32 | [CreatureSoundData.dbc/0](/files/DBC/335/creaturesounddata#id) |
| 3 | [ExtendedDisplayInfoID](#extendeddisplayinfoid) | uint32 | [CreatureDisplayInfoExtra.dbc/0](/files/DBC/335/creaturedisplayinfoextra#id) |
| 4 | [CreatureModelScale](#creaturemodelscale) | float |  |
| 5 | [CreatureModelAlpha](#creaturemodelalpha) | uint32 |  |
| 6 | [TextureVariation_0](#texturevariation) | string |  |
| 7 | [TextureVariation_1](#texturevariation) | string |  |
| 8 | [TextureVariation_2](#texturevariation) | string |  |
| 9 | [PortraitTextureName](#portraittexturename) | string |  |
| 10 | [SizeClass](#sizeclass) | uint32 |  |
| 11 | [BloodID](#bloodid) | uint32 | [UnitBloodLevels.dbc/0](/files/DBC/335/unitbloodlevels#id) |
| 12 | [NPCSoundID](#npcsoundid) | uint32 | [NPCSounds.dbc/0](/files/DBC/335/npcsounds#id) |
| 13 | [ParticleColorID](#particlecolorid) | uint32 | [ParticleColor.dbc/0](/files/DBC/335/particlecolor#id) |
| 14 | [CreatureGeosetData](#creaturegeosetdata) | uint32 | M2/.skin#MeshPartID |
| 15 | [ObjectEffectPackageID](#objecteffectpackageid) | uint32 | [ObjectEffectPackage.dbc/0](/files/DBC/335/objecteffectpackage#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ModelID
<code>Col: 1 (uint32)</code>

A model to be used.
&nbsp;

### SoundID
:x: <code>Col: 2 (uint32)</code>

If 0 - CreatureModelData information is used. Otherwise, overrides generic model settings for this displayID.
&nbsp;

### ExtendedDisplayInfoID
<code>Col: 3 (uint32)</code>

Applies only to NPCs with character model (hair/facial feature/... and equipment settings). Not used for creatures.
&nbsp;

### CreatureModelScale
<code>Col: 4 (float)</code>

Default scale. Stacks (by multiplying) with other scale settings (in creature_template, applied auras...).
&nbsp;

### CreatureModelAlpha
:x: <code>Col: 5 (uint32)</code>

0 (transparent) to 255 (opaque).
&nbsp;

### TextureVariation
:x: <code>Col: 6 &ndash; 8 (string)</code>

Name of texture for 1st - 3rd geoset with type 2.
&nbsp;

### PortraitTextureName
:x: <code>Col: 9 (string)</code>

Holding an icon like INV_Misc_Food_59. Only on a few.
&nbsp;

### SizeClass
:x: <code>Col: 10 (uint32)</code>

* 0: Small
* 1: Medium
* 3: Large
* 4: Giant
&nbsp;

### BloodID
:x: <code>Col: 11 (uint32)</code>

If 0, this is read from CreatureModelData.
&nbsp;

### NPCSoundID
:x: <code>Col: 12 (uint32)</code>

Sounds used when interacting with the NPC (on-left-click said hello talk).
&nbsp;

### ParticleColorID
:x: <code>Col: 13 (uint32)</code>

*- no description -*
&nbsp;

### CreatureGeosetData
:x: <code>Col: 14 (uint32)</code>

With this one, you can select a geoset out of the first 8 groups. 0x00200000 will select geoset 2 out of group 600 and therefore 602.
&nbsp;

### ObjectEffectPackageID
:x: <code>Col: 15 (uint32)</code>

Set for gyrocopters, catapults, rocketmounts and siegevehicles. (WotLK)
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/cinematicsequences" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CinematicSequences'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturedisplayinfoextra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureDisplayInfoExtra'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
