---
title: lfg_dungeons
description: 
published: true
date: 2022-11-21T21:17:06.486Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:57:30.093Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/languages_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'languages_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/lfg_dungeons_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'lfg_dungeons_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [TypeID](#typeid) | tinyint | unsigned |  | NO | 0 |  |  |
| [Subtype](#subtype) | tinyint | signed |  | NO | 0 |  |  |
| [Faction](#faction) | tinyint | signed |  | NO | 0 |  |  |
| [IconTextureFileID](#icontexturefileid) | int | signed |  | NO | 0 |  |  |
| [RewardsBgTextureFileID](#rewardsbgtexturefileid) | int | signed |  | NO | 0 |  |  |
| [PopupBgTextureFileID](#popupbgtexturefileid) | int | signed |  | NO | 0 |  |  |
| [ExpansionLevel](#expansionlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [MapID](#mapid) | smallint | signed |  | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinGear](#mingear) | float |  |  | NO | 0 |  |  |
| [GroupID](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [RequiredPlayerConditionId](#requiredplayerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [RandomID](#randomid) | smallint | unsigned |  | NO | 0 |  |  |
| [ScenarioID](#scenarioid) | smallint | unsigned |  | NO | 0 |  |  |
| [FinalEncounterID](#finalencounterid) | smallint | unsigned |  | NO | 0 |  |  |
| [CountTank](#counttank) | tinyint | unsigned |  | NO | 0 |  |  |
| [CountHealer](#counthealer) | tinyint | unsigned |  | NO | 0 |  |  |
| [CountDamage](#countdamage) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinCountTank](#mincounttank) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinCountHealer](#mincounthealer) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinCountDamage](#mincountdamage) | tinyint | unsigned |  | NO | 0 |  |  |
| [BonusReputationAmount](#bonusreputationamount) | smallint | unsigned |  | NO | 0 |  |  |
| [MentorItemLevel](#mentoritemlevel) | smallint | unsigned |  | NO | 0 |  |  |
| [MentorCharLevel](#mentorcharlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int | signed |  | NO | 0 |  |  |
| [Flags1](#flags1) | int | signed |  | NO | 0 |  |  |
| [Flags2](#flags2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### TypeID
*- no description -*
&nbsp;

### Subtype
*- no description -*
&nbsp;

### Faction
*- no description -*
&nbsp;

### IconTextureFileID
*- no description -*
&nbsp;

### RewardsBgTextureFileID
*- no description -*
&nbsp;

### PopupBgTextureFileID
*- no description -*
&nbsp;

### ExpansionLevel
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### MinGear
*- no description -*
&nbsp;

### GroupID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### RequiredPlayerConditionId
*- no description -*
&nbsp;

### RandomID
*- no description -*
&nbsp;

### ScenarioID
*- no description -*
&nbsp;

### FinalEncounterID
*- no description -*
&nbsp;

### CountTank
*- no description -*
&nbsp;

### CountHealer
*- no description -*
&nbsp;

### CountDamage
*- no description -*
&nbsp;

### MinCountTank
*- no description -*
&nbsp;

### MinCountHealer
*- no description -*
&nbsp;

### MinCountDamage
*- no description -*
&nbsp;

### BonusReputationAmount
*- no description -*
&nbsp;

### MentorItemLevel
*- no description -*
&nbsp;

### MentorCharLevel
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

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/languages_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'languages_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/lfg_dungeons_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'lfg_dungeons_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
