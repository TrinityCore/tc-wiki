---
title: lfg_dungeons
description: 
published: true
date: 2021-08-30T09:44:29.553Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/languages_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'languages_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/lfg_dungeons_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'lfg_dungeons_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Name](#Name) | text |  |  | YES | NULL |  |  |
| [Description](#Description) | text |  |  | YES | NULL |  |  |
| [TypeID](#TypeID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Subtype](#Subtype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Faction](#Faction) | tinyint(4) | signed |  | NO | 0 |  |  |
| [IconTextureFileID](#IconTextureFileID) | int(11) | signed |  | NO | 0 |  |  |
| [RewardsBgTextureFileID](#RewardsBgTextureFileID) | int(11) | signed |  | NO | 0 |  |  |
| [PopupBgTextureFileID](#PopupBgTextureFileID) | int(11) | signed |  | NO | 0 |  |  |
| [ExpansionLevel](#ExpansionLevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MapID](#MapID) | smallint(6) | signed |  | NO | 0 |  |  |
| [DifficultyID](#DifficultyID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinGear](#MinGear) | float |  |  | NO | 0 |  |  |
| [GroupID](#GroupID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#OrderIndex) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RequiredPlayerConditionId](#RequiredPlayerConditionId) | int(10) | unsigned |  | NO | 0 |  |  |
| [RandomID](#RandomID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ScenarioID](#ScenarioID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [FinalEncounterID](#FinalEncounterID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [CountTank](#CountTank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CountHealer](#CountHealer) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CountDamage](#CountDamage) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinCountTank](#MinCountTank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinCountHealer](#MinCountHealer) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinCountDamage](#MinCountDamage) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BonusReputationAmount](#BonusReputationAmount) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MentorItemLevel](#MentorItemLevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MentorCharLevel](#MentorCharLevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#ContentTuningID) | int(11) | signed |  | NO | 0 |  |  |
| [Flags1](#Flags1) | int(11) | signed |  | NO | 0 |  |  |
| [Flags2](#Flags2) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Name
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
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/languages_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'languages_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/lfg_dungeons_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'lfg_dungeons_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

