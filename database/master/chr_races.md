---
title: chr_races
description: 
published: true
date: 2021-08-30T09:42:08.145Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_race_x_chr_model" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_race_x_chr_model'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_races_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_races_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ClientPrefix](#ClientPrefix) | text |  |  | YES | NULL |  |  |
| [ClientFileString](#ClientFileString) | text |  |  | YES | NULL |  |  |
| [Name](#Name) | text |  |  | YES | NULL |  |  |
| [NameFemale](#NameFemale) | text |  |  | YES | NULL |  |  |
| [NameLowercase](#NameLowercase) | text |  |  | YES | NULL |  |  |
| [NameFemaleLowercase](#NameFemaleLowercase) | text |  |  | YES | NULL |  |  |
| [NameS](#NameS) | text |  |  | YES | NULL |  |  |
| [NameFemaleS](#NameFemaleS) | text |  |  | YES | NULL |  |  |
| [NameLowercaseS](#NameLowercaseS) | text |  |  | YES | NULL |  |  |
| [NameFemaleLowercaseS](#NameFemaleLowercaseS) | text |  |  | YES | NULL |  |  |
| [RaceFantasyDescription](#RaceFantasyDescription) | text |  |  | YES | NULL |  |  |
| [NameL](#NameL) | text |  |  | YES | NULL |  |  |
| [NameFemaleL](#NameFemaleL) | text |  |  | YES | NULL |  |  |
| [NameLowercaseL](#NameLowercaseL) | text |  |  | YES | NULL |  |  |
| [NameFemaleLowercaseL](#NameFemaleLowercaseL) | text |  |  | YES | NULL |  |  |
| [Flags](#Flags) | int(11) | signed |  | NO | 0 |  |  |
| [FactionID](#FactionID) | int(11) | signed |  | NO | 0 |  |  |
| [CinematicSequenceID](#CinematicSequenceID) | int(11) | signed |  | NO | 0 |  |  |
| [ResSicknessSpellID](#ResSicknessSpellID) | int(11) | signed |  | NO | 0 |  |  |
| [SplashSoundID](#SplashSoundID) | int(11) | signed |  | NO | 0 |  |  |
| [Alliance](#Alliance) | int(11) | signed |  | NO | 0 |  |  |
| [RaceRelated](#RaceRelated) | int(11) | signed |  | NO | 0 |  |  |
| [UnalteredVisualRaceID](#UnalteredVisualRaceID) | int(11) | signed |  | NO | 0 |  |  |
| [DefaultClassID](#DefaultClassID) | int(11) | signed |  | NO | 0 |  |  |
| [CreateScreenFileDataID](#CreateScreenFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [SelectScreenFileDataID](#SelectScreenFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [NeutralRaceID](#NeutralRaceID) | int(11) | signed |  | NO | 0 |  |  |
| [LowResScreenFileDataID](#LowResScreenFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormStartVisualKitID1](#AlteredFormStartVisualKitID1) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormStartVisualKitID2](#AlteredFormStartVisualKitID2) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormStartVisualKitID3](#AlteredFormStartVisualKitID3) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormFinishVisualKitID1](#AlteredFormFinishVisualKitID1) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormFinishVisualKitID2](#AlteredFormFinishVisualKitID2) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormFinishVisualKitID3](#AlteredFormFinishVisualKitID3) | int(11) | signed |  | NO | 0 |  |  |
| [HeritageArmorAchievementID](#HeritageArmorAchievementID) | int(11) | signed |  | NO | 0 |  |  |
| [StartingLevel](#StartingLevel) | int(11) | signed |  | NO | 0 |  |  |
| [UiDisplayOrder](#UiDisplayOrder) | int(11) | signed |  | NO | 0 |  |  |
| [MaleModelFallbackRaceID](#MaleModelFallbackRaceID) | int(11) | signed |  | NO | 0 |  |  |
| [FemaleModelFallbackRaceID](#FemaleModelFallbackRaceID) | int(11) | signed |  | NO | 0 |  |  |
| [MaleTextureFallbackRaceID](#MaleTextureFallbackRaceID) | int(11) | signed |  | NO | 0 |  |  |
| [FemaleTextureFallbackRaceID](#FemaleTextureFallbackRaceID) | int(11) | signed |  | NO | 0 |  |  |
| [PlayableRaceBit](#PlayableRaceBit) | int(11) | signed |  | NO | 0 |  |  |
| [HelmetAnimScalingRaceID](#HelmetAnimScalingRaceID) | int(11) | signed |  | NO | 0 |  |  |
| [TransmogrifyDisabledSlotMask](#TransmogrifyDisabledSlotMask) | int(11) | signed |  | NO | 0 |  |  |
| [UnalteredVisualCustomizationRaceID](#UnalteredVisualCustomizationRaceID) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormCustomizeOffsetFallback1](#AlteredFormCustomizeOffsetFallback1) | float |  |  | NO | 0 |  |  |
| [AlteredFormCustomizeOffsetFallback2](#AlteredFormCustomizeOffsetFallback2) | float |  |  | NO | 0 |  |  |
| [AlteredFormCustomizeOffsetFallback3](#AlteredFormCustomizeOffsetFallback3) | float |  |  | NO | 0 |  |  |
| [AlteredFormCustomizeRotationFallback](#AlteredFormCustomizeRotationFallback) | float |  |  | NO | 0 |  |  |
| [Unknown910_11](#Unknown910_11) | float |  |  | NO | 0 |  |  |
| [Unknown910_12](#Unknown910_12) | float |  |  | NO | 0 |  |  |
| [Unknown910_13](#Unknown910_13) | float |  |  | NO | 0 |  |  |
| [Unknown910_21](#Unknown910_21) | float |  |  | NO | 0 |  |  |
| [Unknown910_22](#Unknown910_22) | float |  |  | NO | 0 |  |  |
| [Unknown910_23](#Unknown910_23) | float |  |  | NO | 0 |  |  |
| [BaseLanguage](#BaseLanguage) | tinyint(11) | signed |  | NO | 0 |  |  |
| [CreatureType](#CreatureType) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MaleModelFallbackSex](#MaleModelFallbackSex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [FemaleModelFallbackSex](#FemaleModelFallbackSex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MaleTextureFallbackSex](#MaleTextureFallbackSex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [FemaleTextureFallbackSex](#FemaleTextureFallbackSex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### ClientPrefix
*- no description -*
&nbsp;

### ClientFileString
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### NameFemale
*- no description -*
&nbsp;

### NameLowercase
*- no description -*
&nbsp;

### NameFemaleLowercase
*- no description -*
&nbsp;

### NameS
*- no description -*
&nbsp;

### NameFemaleS
*- no description -*
&nbsp;

### NameLowercaseS
*- no description -*
&nbsp;

### NameFemaleLowercaseS
*- no description -*
&nbsp;

### RaceFantasyDescription
*- no description -*
&nbsp;

### NameL
*- no description -*
&nbsp;

### NameFemaleL
*- no description -*
&nbsp;

### NameLowercaseL
*- no description -*
&nbsp;

### NameFemaleLowercaseL
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### FactionID
*- no description -*
&nbsp;

### CinematicSequenceID
*- no description -*
&nbsp;

### ResSicknessSpellID
*- no description -*
&nbsp;

### SplashSoundID
*- no description -*
&nbsp;

### Alliance
*- no description -*
&nbsp;

### RaceRelated
*- no description -*
&nbsp;

### UnalteredVisualRaceID
*- no description -*
&nbsp;

### DefaultClassID
*- no description -*
&nbsp;

### CreateScreenFileDataID
*- no description -*
&nbsp;

### SelectScreenFileDataID
*- no description -*
&nbsp;

### NeutralRaceID
*- no description -*
&nbsp;

### LowResScreenFileDataID
*- no description -*
&nbsp;

### AlteredFormStartVisualKitID1
*- no description -*
&nbsp;

### AlteredFormStartVisualKitID2
*- no description -*
&nbsp;

### AlteredFormStartVisualKitID3
*- no description -*
&nbsp;

### AlteredFormFinishVisualKitID1
*- no description -*
&nbsp;

### AlteredFormFinishVisualKitID2
*- no description -*
&nbsp;

### AlteredFormFinishVisualKitID3
*- no description -*
&nbsp;

### HeritageArmorAchievementID
*- no description -*
&nbsp;

### StartingLevel
*- no description -*
&nbsp;

### UiDisplayOrder
*- no description -*
&nbsp;

### MaleModelFallbackRaceID
*- no description -*
&nbsp;

### FemaleModelFallbackRaceID
*- no description -*
&nbsp;

### MaleTextureFallbackRaceID
*- no description -*
&nbsp;

### FemaleTextureFallbackRaceID
*- no description -*
&nbsp;

### PlayableRaceBit
*- no description -*
&nbsp;

### HelmetAnimScalingRaceID
*- no description -*
&nbsp;

### TransmogrifyDisabledSlotMask
*- no description -*
&nbsp;

### UnalteredVisualCustomizationRaceID
*- no description -*
&nbsp;

### AlteredFormCustomizeOffsetFallback1
*- no description -*
&nbsp;

### AlteredFormCustomizeOffsetFallback2
*- no description -*
&nbsp;

### AlteredFormCustomizeOffsetFallback3
*- no description -*
&nbsp;

### AlteredFormCustomizeRotationFallback
*- no description -*
&nbsp;

### Unknown910_11
*- no description -*
&nbsp;

### Unknown910_12
*- no description -*
&nbsp;

### Unknown910_13
*- no description -*
&nbsp;

### Unknown910_21
*- no description -*
&nbsp;

### Unknown910_22
*- no description -*
&nbsp;

### Unknown910_23
*- no description -*
&nbsp;

### BaseLanguage
*- no description -*
&nbsp;

### CreatureType
*- no description -*
&nbsp;

### MaleModelFallbackSex
*- no description -*
&nbsp;

### FemaleModelFallbackSex
*- no description -*
&nbsp;

### MaleTextureFallbackSex
*- no description -*
&nbsp;

### FemaleTextureFallbackSex
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_race_x_chr_model" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_race_x_chr_model'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_races_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_races_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

