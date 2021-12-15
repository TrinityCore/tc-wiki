---
title: area_table
description: 
published: true
date: 2021-11-14T19:41:35.062Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/area_group_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'area_group_member'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/area_table_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'area_table_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ZoneName](#zonename) | text |  |  | YES | NULL |  |  |
| [AreaName](#areaname) | text |  |  | YES | NULL |  |  |
| [ContinentID](#continentid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ParentAreaID](#parentareaid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AreaBit](#areabit) | smallint(6) | signed |  | NO | 0 |  |  |
| [SoundProviderPref](#soundproviderpref) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SoundProviderPrefUnderwater](#soundproviderprefunderwater) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AmbienceID](#ambienceid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UwAmbience](#uwambience) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ZoneMusic](#zonemusic) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UwZoneMusic](#uwzonemusic) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [IntroSound](#introsound) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UwIntroSound](#uwintrosound) | int(10) | unsigned |  | NO | 0 |  |  |
| [FactionGroupMask](#factiongroupmask) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AmbientMultiplier](#ambientmultiplier) | float |  |  | NO | 0 |  |  |
| [MountFlags](#mountflags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PvpCombatWorldStateID](#pvpcombatworldstateid) | smallint(6) | signed |  | NO | 0 |  |  |
| [WildBattlePetLevelMin](#wildbattlepetlevelmin) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [WildBattlePetLevelMax](#wildbattlepetlevelmax) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [WindSettingsID](#windsettingsid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int(11) | signed |  | NO | 0 |  |  |
| [Flags1](#flags1) | int(11) | signed |  | NO | 0 |  |  |
| [Flags2](#flags2) | int(11) | signed |  | NO | 0 |  |  |
| [LiquidTypeID1](#liquidtypeid1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LiquidTypeID2](#liquidtypeid2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LiquidTypeID3](#liquidtypeid3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LiquidTypeID4](#liquidtypeid4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
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
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/area_group_member" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'area_group_member'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/area_table_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'area_table_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

