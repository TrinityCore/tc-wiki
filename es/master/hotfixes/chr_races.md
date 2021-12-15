---
title: chr_races
description: 
published: true
date: 2021-11-14T19:41:35.086Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_race_x_chr_model" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_race_x_chr_model'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_races_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_races_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ClientPrefix](#clientprefix) | text |  |  | YES | NULL |  |  |
| [ClientFileString](#clientfilestring) | text |  |  | YES | NULL |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [NameFemale](#namefemale) | text |  |  | YES | NULL |  |  |
| [NameLowercase](#namelowercase) | text |  |  | YES | NULL |  |  |
| [NameFemaleLowercase](#namefemalelowercase) | text |  |  | YES | NULL |  |  |
| [LoreName](#lorename) | text |  |  | YES | NULL |  |  |
| [LoreNameFemale](#lorenamefemale) | text |  |  | YES | NULL |  |  |
| [LoreNameLower](#lorenamelower) | text |  |  | YES | NULL |  |  |
| [LoreNameLowerFemale](#lorenamelowerfemale) | text |  |  | YES | NULL |  |  |
| [LoreDescription](#loredescription) | text |  |  | YES | NULL |  |  |
| [ShortName](#shortname) | text |  |  | YES | NULL |  |  |
| [ShortNameFemale](#shortnamefemale) | text |  |  | YES | NULL |  |  |
| [ShortNameLower](#shortnamelower) | text |  |  | YES | NULL |  |  |
| [ShortNameLowerFemale](#shortnamelowerfemale) | text |  |  | YES | NULL |  |  |
| [Flags](#flags) | int(11) | signed |  | NO | 0 |  |  |
| [FactionID](#factionid) | int(11) | signed |  | NO | 0 |  |  |
| [CinematicSequenceID](#cinematicsequenceid) | int(11) | signed |  | NO | 0 |  |  |
| [ResSicknessSpellID](#ressicknessspellid) | int(11) | signed |  | NO | 0 |  |  |
| [SplashSoundID](#splashsoundid) | int(11) | signed |  | NO | 0 |  |  |
| [Alliance](#alliance) | int(11) | signed |  | NO | 0 |  |  |
| [RaceRelated](#racerelated) | int(11) | signed |  | NO | 0 |  |  |
| [UnalteredVisualRaceID](#unalteredvisualraceid) | int(11) | signed |  | NO | 0 |  |  |
| [DefaultClassID](#defaultclassid) | int(11) | signed |  | NO | 0 |  |  |
| [CreateScreenFileDataID](#createscreenfiledataid) | int(11) | signed |  | NO | 0 |  |  |
| [SelectScreenFileDataID](#selectscreenfiledataid) | int(11) | signed |  | NO | 0 |  |  |
| [NeutralRaceID](#neutralraceid) | int(11) | signed |  | NO | 0 |  |  |
| [LowResScreenFileDataID](#lowresscreenfiledataid) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormStartVisualKitID1](#alteredformstartvisualkitid1) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormStartVisualKitID2](#alteredformstartvisualkitid2) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormStartVisualKitID3](#alteredformstartvisualkitid3) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormFinishVisualKitID1](#alteredformfinishvisualkitid1) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormFinishVisualKitID2](#alteredformfinishvisualkitid2) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormFinishVisualKitID3](#alteredformfinishvisualkitid3) | int(11) | signed |  | NO | 0 |  |  |
| [HeritageArmorAchievementID](#heritagearmorachievementid) | int(11) | signed |  | NO | 0 |  |  |
| [StartingLevel](#startinglevel) | int(11) | signed |  | NO | 0 |  |  |
| [UiDisplayOrder](#uidisplayorder) | int(11) | signed |  | NO | 0 |  |  |
| [MaleModelFallbackRaceID](#malemodelfallbackraceid) | int(11) | signed |  | NO | 0 |  |  |
| [FemaleModelFallbackRaceID](#femalemodelfallbackraceid) | int(11) | signed |  | NO | 0 |  |  |
| [MaleTextureFallbackRaceID](#maletexturefallbackraceid) | int(11) | signed |  | NO | 0 |  |  |
| [FemaleTextureFallbackRaceID](#femaletexturefallbackraceid) | int(11) | signed |  | NO | 0 |  |  |
| [PlayableRaceBit](#playableracebit) | int(11) | signed |  | NO | 0 |  |  |
| [HelmetAnimScalingRaceID](#helmetanimscalingraceid) | int(11) | signed |  | NO | 0 |  |  |
| [TransmogrifyDisabledSlotMask](#transmogrifydisabledslotmask) | int(11) | signed |  | NO | 0 |  |  |
| [UnalteredVisualCustomizationRaceID](#unalteredvisualcustomizationraceid) | int(11) | signed |  | NO | 0 |  |  |
| [AlteredFormCustomizeOffsetFallback1](#alteredformcustomizeoffsetfallback1) | float |  |  | NO | 0 |  |  |
| [AlteredFormCustomizeOffsetFallback2](#alteredformcustomizeoffsetfallback2) | float |  |  | NO | 0 |  |  |
| [AlteredFormCustomizeOffsetFallback3](#alteredformcustomizeoffsetfallback3) | float |  |  | NO | 0 |  |  |
| [AlteredFormCustomizeRotationFallback](#alteredformcustomizerotationfallback) | float |  |  | NO | 0 |  |  |
| [Unknown910_11](#unknown910_11) | float |  |  | NO | 0 |  |  |
| [Unknown910_12](#unknown910_12) | float |  |  | NO | 0 |  |  |
| [Unknown910_13](#unknown910_13) | float |  |  | NO | 0 |  |  |
| [Unknown910_21](#unknown910_21) | float |  |  | NO | 0 |  |  |
| [Unknown910_22](#unknown910_22) | float |  |  | NO | 0 |  |  |
| [Unknown910_23](#unknown910_23) | float |  |  | NO | 0 |  |  |
| [BaseLanguage](#baselanguage) | tinyint(11) | signed |  | NO | 0 |  |  |
| [CreatureType](#creaturetype) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MaleModelFallbackSex](#malemodelfallbacksex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [FemaleModelFallbackSex](#femalemodelfallbacksex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MaleTextureFallbackSex](#maletexturefallbacksex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [FemaleTextureFallbackSex](#femaletexturefallbacksex) | tinyint(4) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
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

### LoreName
*- no description -*
&nbsp;

### LoreNameFemale
*- no description -*
&nbsp;

### LoreNameLower
*- no description -*
&nbsp;

### LoreNameLowerFemale
*- no description -*
&nbsp;

### LoreDescription
*- no description -*
&nbsp;

### ShortName
*- no description -*
&nbsp;

### ShortNameFemale
*- no description -*
&nbsp;

### ShortNameLower
*- no description -*
&nbsp;

### ShortNameLowerFemale
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
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_race_x_chr_model" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_race_x_chr_model'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/chr_races_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_races_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

