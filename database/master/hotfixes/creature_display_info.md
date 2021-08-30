---
title: creature_display_info
description: 
published: true
date: 2021-08-30T19:58:43.033Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/creature_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_difficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/creature_display_info_extra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_display_info_extra'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ModelID](#modelid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SoundID](#soundid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SizeClass](#sizeclass) | tinyint(4) | signed |  | NO | 0 |  |  |
| [CreatureModelScale](#creaturemodelscale) | float |  |  | NO | 0 |  |  |
| [CreatureModelAlpha](#creaturemodelalpha) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BloodID](#bloodid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ExtendedDisplayInfoID](#extendeddisplayinfoid) | int(11) | signed |  | NO | 0 |  |  |
| [NPCSoundID](#npcsoundid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ParticleColorID](#particlecolorid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PortraitCreatureDisplayInfoID](#portraitcreaturedisplayinfoid) | int(11) | signed |  | NO | 0 |  |  |
| [PortraitTextureFileDataID](#portraittexturefiledataid) | int(11) | signed |  | NO | 0 |  |  |
| [ObjectEffectPackageID](#objecteffectpackageid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AnimReplacementSetID](#animreplacementsetid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [StateSpellVisualKitID](#statespellvisualkitid) | int(11) | signed |  | NO | 0 |  |  |
| [PlayerOverrideScale](#playeroverridescale) | float |  |  | NO | 0 |  |  |
| [PetInstanceScale](#petinstancescale) | float |  |  | NO | 0 |  |  |
| [UnarmedWeaponType](#unarmedweapontype) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MountPoofSpellVisualKitID](#mountpoofspellvisualkitid) | int(11) | signed |  | NO | 0 |  |  |
| [DissolveEffectID](#dissolveeffectid) | int(11) | signed |  | NO | 0 |  |  |
| [Gender](#gender) | tinyint(4) | signed |  | NO | 0 |  |  |
| [DissolveOutEffectID](#dissolveouteffectid) | int(11) | signed |  | NO | 0 |  |  |
| [CreatureModelMinLod](#creaturemodelminlod) | tinyint(4) | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID1](#texturevariationfiledataid1) | int(11) | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID2](#texturevariationfiledataid2) | int(11) | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID3](#texturevariationfiledataid3) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### ModelID
*- no description -*
&nbsp;

### SoundID
*- no description -*
&nbsp;

### SizeClass
*- no description -*
&nbsp;

### CreatureModelScale
*- no description -*
&nbsp;

### CreatureModelAlpha
*- no description -*
&nbsp;

### BloodID
*- no description -*
&nbsp;

### ExtendedDisplayInfoID
*- no description -*
&nbsp;

### NPCSoundID
*- no description -*
&nbsp;

### ParticleColorID
*- no description -*
&nbsp;

### PortraitCreatureDisplayInfoID
*- no description -*
&nbsp;

### PortraitTextureFileDataID
*- no description -*
&nbsp;

### ObjectEffectPackageID
*- no description -*
&nbsp;

### AnimReplacementSetID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### StateSpellVisualKitID
*- no description -*
&nbsp;

### PlayerOverrideScale
*- no description -*
&nbsp;

### PetInstanceScale
*- no description -*
&nbsp;

### UnarmedWeaponType
*- no description -*
&nbsp;

### MountPoofSpellVisualKitID
*- no description -*
&nbsp;

### DissolveEffectID
*- no description -*
&nbsp;

### Gender
*- no description -*
&nbsp;

### DissolveOutEffectID
*- no description -*
&nbsp;

### CreatureModelMinLod
*- no description -*
&nbsp;

### TextureVariationFileDataID1
*- no description -*
&nbsp;

### TextureVariationFileDataID2
*- no description -*
&nbsp;

### TextureVariationFileDataID3
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/creature_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_difficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/creature_display_info_extra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_display_info_extra'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

