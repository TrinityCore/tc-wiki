---
title: chr_classes
description: 
published: true
date: 2021-08-30T09:44:29.504Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_class_ui_display" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_class_ui_display'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_classes_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_classes_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#Name) | text |  |  | YES | NULL |  |  |
| [Filename](#Filename) | text |  |  | YES | NULL |  |  |
| [NameMale](#NameMale) | text |  |  | YES | NULL |  |  |
| [NameFemale](#NameFemale) | text |  |  | YES | NULL |  |  |
| [PetNameToken](#PetNameToken) | text |  |  | YES | NULL |  |  |
| [Description](#Description) | text |  |  | YES | NULL |  |  |
| [RoleInfoString](#RoleInfoString) | text |  |  | YES | NULL |  |  |
| [DisabledString](#DisabledString) | text |  |  | YES | NULL |  |  |
| [HyphenatedNameMale](#HyphenatedNameMale) | text |  |  | YES | NULL |  |  |
| [HyphenatedNameFemale](#HyphenatedNameFemale) | text |  |  | YES | NULL |  |  |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [CreateScreenFileDataID](#CreateScreenFileDataID) | int(10) | unsigned |  | NO | 0 |  |  |
| [SelectScreenFileDataID](#SelectScreenFileDataID) | int(10) | unsigned |  | NO | 0 |  |  |
| [IconFileDataID](#IconFileDataID) | int(10) | unsigned |  | NO | 0 |  |  |
| [LowResScreenFileDataID](#LowResScreenFileDataID) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#Flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellTextureBlobFileDataID](#SpellTextureBlobFileDataID) | int(10) | unsigned |  | NO | 0 |  |  |
| [RolesMask](#RolesMask) | int(10) | unsigned |  | NO | 0 |  |  |
| [ArmorTypeMask](#ArmorTypeMask) | int(10) | unsigned |  | NO | 0 |  |  |
| [CharStartKitUnknown901](#CharStartKitUnknown901) | int(11) | signed |  | NO | 0 |  |  |
| [MaleCharacterCreationVisualFallback](#MaleCharacterCreationVisualFallback) | int(11) | signed |  | NO | 0 |  |  |
| [MaleCharacterCreationIdleVisualFallback](#MaleCharacterCreationIdleVisualFallback) | int(11) | signed |  | NO | 0 |  |  |
| [FemaleCharacterCreationVisualFallback](#FemaleCharacterCreationVisualFallback) | int(11) | signed |  | NO | 0 |  |  |
| [FemaleCharacterCreationIdleVisualFallback](#FemaleCharacterCreationIdleVisualFallback) | int(11) | signed |  | NO | 0 |  |  |
| [CharacterCreationIdleGroundVisualFallback](#CharacterCreationIdleGroundVisualFallback) | int(11) | signed |  | NO | 0 |  |  |
| [CharacterCreationGroundVisualFallback](#CharacterCreationGroundVisualFallback) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormCharacterCreationIdleVisualFallback](#AlteredFormCharacterCreationIdleVisualFallback) | int(11) | signed |  | NO | 0 |  |  |
| [CharacterCreationAnimLoopWaitTimeMsFallback](#CharacterCreationAnimLoopWaitTimeMsFallback) | int(11) | signed |  | NO | 0 |  |  |
| [CinematicSequenceID](#CinematicSequenceID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [DefaultSpec](#DefaultSpec) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PrimaryStatPriority](#PrimaryStatPriority) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [DisplayPower](#DisplayPower) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RangedAttackPowerPerAgility](#RangedAttackPowerPerAgility) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AttackPowerPerAgility](#AttackPowerPerAgility) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AttackPowerPerStrength](#AttackPowerPerStrength) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SpellClassSet](#SpellClassSet) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ChatColorR](#ChatColorR) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ChatColorG](#ChatColorG) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ChatColorB](#ChatColorB) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
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

### ChatColorR
*- no description -*
&nbsp;

### ChatColorG
*- no description -*
&nbsp;

### ChatColorB
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_class_ui_display" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_class_ui_display'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_classes_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_classes_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

