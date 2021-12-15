---
title: chr_classes
description: 
published: true
date: 2021-11-14T19:41:35.082Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_class_ui_display" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_class_ui_display'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_classes_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_classes_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [Filename](#filename) | text |  |  | YES | NULL |  |  |
| [NameMale](#namemale) | text |  |  | YES | NULL |  |  |
| [NameFemale](#namefemale) | text |  |  | YES | NULL |  |  |
| [PetNameToken](#petnametoken) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [RoleInfoString](#roleinfostring) | text |  |  | YES | NULL |  |  |
| [DisabledString](#disabledstring) | text |  |  | YES | NULL |  |  |
| [HyphenatedNameMale](#hyphenatednamemale) | text |  |  | YES | NULL |  |  |
| [HyphenatedNameFemale](#hyphenatednamefemale) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [CreateScreenFileDataID](#createscreenfiledataid) | int(10) | unsigned |  | NO | 0 |  |  |
| [SelectScreenFileDataID](#selectscreenfiledataid) | int(10) | unsigned |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int(10) | unsigned |  | NO | 0 |  |  |
| [LowResScreenFileDataID](#lowresscreenfiledataid) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellTextureBlobFileDataID](#spelltextureblobfiledataid) | int(10) | unsigned |  | NO | 0 |  |  |
| [RolesMask](#rolesmask) | int(10) | unsigned |  | NO | 0 |  |  |
| [ArmorTypeMask](#armortypemask) | int(10) | unsigned |  | NO | 0 |  |  |
| [CharStartKitUnknown901](#charstartkitunknown901) | int(11) | signed |  | NO | 0 |  |  |
| [MaleCharacterCreationVisualFallback](#malecharactercreationvisualfallback) | int(11) | signed |  | NO | 0 |  |  |
| [MaleCharacterCreationIdleVisualFallback](#malecharactercreationidlevisualfallback) | int(11) | signed |  | NO | 0 |  |  |
| [FemaleCharacterCreationVisualFallback](#femalecharactercreationvisualfallback) | int(11) | signed |  | NO | 0 |  |  |
| [FemaleCharacterCreationIdleVisualFallback](#femalecharactercreationidlevisualfallback) | int(11) | signed |  | NO | 0 |  |  |
| [CharacterCreationIdleGroundVisualFallback](#charactercreationidlegroundvisualfallback) | int(11) | signed |  | NO | 0 |  |  |
| [CharacterCreationGroundVisualFallback](#charactercreationgroundvisualfallback) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormCharacterCreationIdleVisualFallback](#alteredformcharactercreationidlevisualfallback) | int(11) | signed |  | NO | 0 |  |  |
| [CharacterCreationAnimLoopWaitTimeMsFallback](#charactercreationanimloopwaittimemsfallback) | int(11) | signed |  | NO | 0 |  |  |
| [CinematicSequenceID](#cinematicsequenceid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [DefaultSpec](#defaultspec) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PrimaryStatPriority](#primarystatpriority) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [DisplayPower](#displaypower) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RangedAttackPowerPerAgility](#rangedattackpowerperagility) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AttackPowerPerAgility](#attackpowerperagility) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AttackPowerPerStrength](#attackpowerperstrength) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SpellClassSet](#spellclassset) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ClassColorR](#classcolorr) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ClassColorG](#classcolorg) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ClassColorB](#classcolorb) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name
*- no description -*
&nbsp;

### Filename
*- no description -*
&nbsp;

### NameMale
*- no description -*
&nbsp;

### NameFemale
*- no description -*
&nbsp;

### PetNameToken
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### RoleInfoString
*- no description -*
&nbsp;

### DisabledString
*- no description -*
&nbsp;

### HyphenatedNameMale
*- no description -*
&nbsp;

### HyphenatedNameFemale
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### CreateScreenFileDataID
*- no description -*
&nbsp;

### SelectScreenFileDataID
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### LowResScreenFileDataID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SpellTextureBlobFileDataID
*- no description -*
&nbsp;

### RolesMask
*- no description -*
&nbsp;

### ArmorTypeMask
*- no description -*
&nbsp;

### CharStartKitUnknown901
*- no description -*
&nbsp;

### MaleCharacterCreationVisualFallback
*- no description -*
&nbsp;

### MaleCharacterCreationIdleVisualFallback
*- no description -*
&nbsp;

### FemaleCharacterCreationVisualFallback
*- no description -*
&nbsp;

### FemaleCharacterCreationIdleVisualFallback
*- no description -*
&nbsp;

### CharacterCreationIdleGroundVisualFallback
*- no description -*
&nbsp;

### CharacterCreationGroundVisualFallback
*- no description -*
&nbsp;

### AlteredFormCharacterCreationIdleVisualFallback
*- no description -*
&nbsp;

### CharacterCreationAnimLoopWaitTimeMsFallback
*- no description -*
&nbsp;

### CinematicSequenceID
*- no description -*
&nbsp;

### DefaultSpec
*- no description -*
&nbsp;

### PrimaryStatPriority
*- no description -*
&nbsp;

### DisplayPower
*- no description -*
&nbsp;

### RangedAttackPowerPerAgility
*- no description -*
&nbsp;

### AttackPowerPerAgility
*- no description -*
&nbsp;

### AttackPowerPerStrength
*- no description -*
&nbsp;

### SpellClassSet
*- no description -*
&nbsp;

### ClassColorR
*- no description -*
&nbsp;

### ClassColorG
*- no description -*
&nbsp;

### ClassColorB
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_class_ui_display" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_class_ui_display'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_classes_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_classes_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

