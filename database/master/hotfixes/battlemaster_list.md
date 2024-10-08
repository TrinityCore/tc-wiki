---
title: battlemaster_list
description: 
published: true
date: 2024-09-05T22:45:54.851Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:50:38.727Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/battle_pet_species_state" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pet_species_state'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/battlemaster_list_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlemaster_list_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [GameType](#gametype) | text |  |  | YES | NULL |  |  |
| [ShortDescription](#shortdescription) | text |  |  | YES | NULL |  |  |
| [LongDescription](#longdescription) | text |  |  | YES | NULL |  |  |
| [InstanceType](#instancetype) | tinyint | signed |  | NO | 0 |  |  |
| [MinLevel](#minlevel) | tinyint | signed |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | tinyint | signed |  | NO | 0 |  |  |
| [RatedPlayers](#ratedplayers) | tinyint | signed |  | NO | 0 |  |  |
| [MinPlayers](#minplayers) | tinyint | signed |  | NO | 0 |  |  |
| [MaxPlayers](#maxplayers) | int | signed |  | NO | 0 |  |  |
| [GroupsAllowed](#groupsallowed) | tinyint | signed |  | NO | 0 |  |  |
| [MaxGroupSize](#maxgroupsize) | tinyint | signed |  | NO | 0 |  |  |
| [HolidayWorldState](#holidayworldstate) | smallint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int | signed |  | NO | 0 |  |  |
| [RequiredPlayerConditionID](#requiredplayerconditionid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### GameType
*- no description -*
&nbsp;

### ShortDescription
*- no description -*
&nbsp;

### LongDescription
*- no description -*
&nbsp;

### InstanceType
*- no description -*
&nbsp;

### MinLevel
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### RatedPlayers
*- no description -*
&nbsp;

### MinPlayers
*- no description -*
&nbsp;

### MaxPlayers
*- no description -*
&nbsp;

### GroupsAllowed
*- no description -*
&nbsp;

### MaxGroupSize
*- no description -*
&nbsp;

### HolidayWorldState
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### RequiredPlayerConditionID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/battle_pet_species_state" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battle_pet_species_state'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/battlemaster_list_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlemaster_list_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
