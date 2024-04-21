---
title: creature_display_info
description: 
published: true
date: 2022-12-19T18:37:55.293Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:16.929Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/creature_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_difficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/creature_display_info_extra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_display_info_extra'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ModelID](#modelid) | smallint | unsigned |  | NO | 0 |  |  |
| [SoundID](#soundid) | smallint | unsigned |  | NO | 0 |  |  |
| [SizeClass](#sizeclass) | tinyint | signed |  | NO | 0 |  |  |
| [CreatureModelScale](#creaturemodelscale) | float |  |  | NO | 0 |  |  |
| [CreatureModelAlpha](#creaturemodelalpha) | tinyint | unsigned |  | NO | 0 |  |  |
| [BloodID](#bloodid) | tinyint | unsigned |  | NO | 0 |  |  |
| [ExtendedDisplayInfoID](#extendeddisplayinfoid) | int | signed |  | NO | 0 |  |  |
| [NPCSoundID](#npcsoundid) | smallint | unsigned |  | NO | 0 |  |  |
| [ParticleColorID](#particlecolorid) | smallint | unsigned |  | NO | 0 |  |  |
| [PortraitCreatureDisplayInfoID](#portraitcreaturedisplayinfoid) | int | signed |  | NO | 0 |  |  |
| [PortraitTextureFileDataID](#portraittexturefiledataid) | int | signed |  | NO | 0 |  |  |
| [ObjectEffectPackageID](#objecteffectpackageid) | smallint | unsigned |  | NO | 0 |  |  |
| [AnimReplacementSetID](#animreplacementsetid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [StateSpellVisualKitID](#statespellvisualkitid) | int | signed |  | NO | 0 |  |  |
| [PlayerOverrideScale](#playeroverridescale) | float |  |  | NO | 0 |  |  |
| [PetInstanceScale](#petinstancescale) | float |  |  | NO | 0 |  |  |
| [UnarmedWeaponType](#unarmedweapontype) | tinyint | signed |  | NO | 0 |  |  |
| [MountPoofSpellVisualKitID](#mountpoofspellvisualkitid) | int | signed |  | NO | 0 |  |  |
| [DissolveEffectID](#dissolveeffectid) | int | signed |  | NO | 0 |  |  |
| [Gender](#gender) | tinyint | signed |  | NO | 0 |  |  |
| [DissolveOutEffectID](#dissolveouteffectid) | int | signed |  | NO | 0 |  |  |
| [CreatureModelMinLod](#creaturemodelminlod) | tinyint | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID1](#texturevariationfiledataid1) | int | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID2](#texturevariationfiledataid2) | int | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID3](#texturevariationfiledataid3) | int | signed |  | NO | 0 |  |  |
| [TextureVariationFileDataID4](#texturevariationfiledataid4) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
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

### TextureVariationFileDataID4
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/creature_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_difficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/creature_display_info_extra" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_display_info_extra'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
