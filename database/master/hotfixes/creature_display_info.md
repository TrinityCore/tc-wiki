---
title: creature_display_info
description: 
published: true
date: 2021-08-30T09:44:29.515Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/creature_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_difficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/creature_display_info_extra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_display_info_extra'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ModelID](#ModelID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SoundID](#SoundID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SizeClass](#SizeClass) | tinyint(4) | signed |  | NO | 0 |  |  |
| [CreatureModelScale](#CreatureModelScale) | float |  |  | NO | 0 |  |  |
| [CreatureModelAlpha](#CreatureModelAlpha) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BloodID](#BloodID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ExtendedDisplayInfoID](#ExtendedDisplayInfoID) | int(11) | signed |  | NO | 0 |  |  |
| [NPCSoundID](#NPCSoundID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ParticleColorID](#ParticleColorID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PortraitCreatureDisplayInfoID](#PortraitCreatureDisplayInfoID) | int(11) | signed |  | NO | 0 |  |  |
| [PortraitTextureFileDataID](#PortraitTextureFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [ObjectEffectPackageID](#ObjectEffectPackageID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AnimReplacementSetID](#AnimReplacementSetID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Flags](#Flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [StateSpellVisualKitID](#StateSpellVisualKitID) | int(11) | signed |  | NO | 0 |  |  |
| [PlayerOverrideScale](#PlayerOverrideScale) | float |  |  | NO | 0 |  |  |
| [PetInstanceScale](#PetInstanceScale) | float |  |  | NO | 0 |  |  |
| [UnarmedWeaponType](#UnarmedWeaponType) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MountPoofSpellVisualKitID](#MountPoofSpellVisualKitID) | int(11) | signed |  | NO | 0 |  |  |
| [DissolveEffectID](#DissolveEffectID) | int(11) | signed |  | NO | 0 |  |  |
| [Gender](#Gender) | tinyint(4) | signed |  | NO | 0 |  |  |
| [DissolveOutEffectID](#DissolveOutEffectID) | int(11) | signed |  | NO | 0 |  |  |
| [CreatureModelMinLod](#CreatureModelMinLod) | tinyint(4) | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID1](#TextureVariationFileDataID1) | int(11) | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID2](#TextureVariationFileDataID2) | int(11) | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID3](#TextureVariationFileDataID3) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
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

