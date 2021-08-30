---
title: area_table
description: 
published: true
date: 2021-08-30T09:44:29.486Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/area_group_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'area_group_member'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/area_table_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'area_table_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ZoneName](#ZoneName) | text |  |  | YES | NULL |  |  |
| [AreaName](#AreaName) | text |  |  | YES | NULL |  |  |
| [ContinentID](#ContinentID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ParentAreaID](#ParentAreaID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaBit](#AreaBit) | smallint(6) | signed |  | NO | 0 |  |  |
| [SoundProviderPref](#SoundProviderPref) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SoundProviderPrefUnderwater](#SoundProviderPrefUnderwater) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AmbienceID](#AmbienceID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UwAmbience](#UwAmbience) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ZoneMusic](#ZoneMusic) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UwZoneMusic](#UwZoneMusic) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [IntroSound](#IntroSound) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UwIntroSound](#UwIntroSound) | int(10) | unsigned |  | NO | 0 |  |  |
| [FactionGroupMask](#FactionGroupMask) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AmbientMultiplier](#AmbientMultiplier) | float |  |  | NO | 0 |  |  |
| [MountFlags](#MountFlags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PvpCombatWorldStateID](#PvpCombatWorldStateID) | smallint(6) | signed |  | NO | 0 |  |  |
| [WildBattlePetLevelMin](#WildBattlePetLevelMin) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [WildBattlePetLevelMax](#WildBattlePetLevelMax) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [WindSettingsID](#WindSettingsID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#ContentTuningID) | int(11) | signed |  | NO | 0 |  |  |
| [Flags1](#Flags1) | int(11) | signed |  | NO | 0 |  |  |
| [Flags2](#Flags2) | int(11) | signed |  | NO | 0 |  |  |
| [LiquidTypeID1](#LiquidTypeID1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LiquidTypeID2](#LiquidTypeID2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LiquidTypeID3](#LiquidTypeID3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LiquidTypeID4](#LiquidTypeID4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### ZoneName
*- no description -*
&nbsp;

### AreaName
*- no description -*
&nbsp;

### ContinentID
*- no description -*
&nbsp;

### ParentAreaID
*- no description -*
&nbsp;

### AreaBit
*- no description -*
&nbsp;

### SoundProviderPref
*- no description -*
&nbsp;

### SoundProviderPrefUnderwater
*- no description -*
&nbsp;

### AmbienceID
*- no description -*
&nbsp;

### UwAmbience
*- no description -*
&nbsp;

### ZoneMusic
*- no description -*
&nbsp;

### UwZoneMusic
*- no description -*
&nbsp;

### IntroSound
*- no description -*
&nbsp;

### UwIntroSound
*- no description -*
&nbsp;

### FactionGroupMask
*- no description -*
&nbsp;

### AmbientMultiplier
*- no description -*
&nbsp;

### MountFlags
*- no description -*
&nbsp;

### PvpCombatWorldStateID
*- no description -*
&nbsp;

### WildBattlePetLevelMin
*- no description -*
&nbsp;

### WildBattlePetLevelMax
*- no description -*
&nbsp;

### WindSettingsID
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### Flags1
*- no description -*
&nbsp;

### Flags2
*- no description -*
&nbsp;

### LiquidTypeID1
*- no description -*
&nbsp;

### LiquidTypeID2
*- no description -*
&nbsp;

### LiquidTypeID3
*- no description -*
&nbsp;

### LiquidTypeID4
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/area_group_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'area_group_member'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/area_table_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'area_table_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

