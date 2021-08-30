---
title: playerchoice_response
description: 
published: true
date: 2021-08-30T09:24:17.505Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/playerchoice_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playerchoice_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/playerchoice_response_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playerchoice_response_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#ChoiceId) | int(11) | signed | PRI | NO |  |  |  |
| [ResponseId](#ResponseId) | int(11) | signed | PRI | NO |  |  |  |
| [ResponseIdentifier](#ResponseIdentifier) | smallint(5) | unsigned |  | NO |  |  |  |
| [Index](#Index) | int(10) | unsigned |  | NO |  |  |  |
| [ChoiceArtFileId](#ChoiceArtFileId) | int(11) | signed |  | NO | 0 |  |  |
| [Flags](#Flags) | int(11) | signed |  | NO | 0 |  |  |
| [WidgetSetID](#WidgetSetID) | int(10) | unsigned |  | NO | 0 |  |  |
| [UiTextureAtlasElementID](#UiTextureAtlasElementID) | int(10) | unsigned |  | NO | 0 |  |  |
| [SoundKitID](#SoundKitID) | int(10) | unsigned |  | NO | 0 |  |  |
| [GroupID](#GroupID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [UiTextureKitID](#UiTextureKitID) | int(11) | signed |  | NO | 0 |  |  |
| [Header](#Header) | varchar(511) | signed |  | NO |  |  |  |
| [SubHeader](#SubHeader) | varchar(100) | signed |  | NO | '' |  |  |
| [ButtonTooltip](#ButtonTooltip) | varchar(400) | signed |  | NO | '' |  |  |
| [Answer](#Answer) | varchar(511) | signed |  | NO |  |  |  |
| [Description](#Description) | varchar(2047) | signed |  | NO |  |  |  |
| [Confirmation](#Confirmation) | varchar(127) | signed |  | NO |  |  |  |
| [RewardQuestID](#RewardQuestID) | int(10) | unsigned |  | YES | NULL |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(10) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ChoiceId
*- no description -*
&nbsp;

### ResponseId
*- no description -*
&nbsp;

### ResponseIdentifier
*- no description -*
&nbsp;

### Index
*- no description -*
&nbsp;

### ChoiceArtFileId
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### WidgetSetID
*- no description -*
&nbsp;

### UiTextureAtlasElementID
*- no description -*
&nbsp;

### SoundKitID
*- no description -*
&nbsp;

### GroupID
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### Header
*- no description -*
&nbsp;

### SubHeader
*- no description -*
&nbsp;

### ButtonTooltip
*- no description -*
&nbsp;

### Answer
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### Confirmation
*- no description -*
&nbsp;

### RewardQuestID
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/playerchoice_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playerchoice_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/playerchoice_response_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playerchoice_response_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

