---
title: playerchoice_response
description: 
published: true
date: 2022-11-21T21:07:04.394Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:59.936Z
---

<a href="https://trinitycore.info/en/database/master/world/playerchoice_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playerchoice_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playerchoice_response_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playerchoice_response_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#choiceid) | int | signed | PRI | NO |  |  |  |
| [ResponseId](#responseid) | int | signed | PRI | NO |  |  |  |
| [ResponseIdentifier](#responseidentifier) | smallint | unsigned |  | NO |  |  |  |
| [Index](#index) | int | unsigned |  | NO |  |  |  |
| [ChoiceArtFileId](#choiceartfileid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [WidgetSetID](#widgetsetid) | int | unsigned |  | NO | 0 |  |  |
| [UiTextureAtlasElementID](#uitextureatlaselementid) | int | unsigned |  | NO | 0 |  |  |
| [SoundKitID](#soundkitid) | int | unsigned |  | NO | 0 |  |  |
| [GroupID](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | int | signed |  | NO | 0 |  |  |
| [Header](#header) | varchar(511) |  |  | NO |  |  |  |
| [SubHeader](#subheader) | varchar(100) |  |  | NO | '' |  |  |
| [ButtonTooltip](#buttontooltip) | varchar(400) |  |  | NO | '' |  |  |
| [Answer](#answer) | varchar(511) |  |  | NO |  |  |  |
| [Description](#description) | varchar(2047) |  |  | NO |  |  |  |
| [Confirmation](#confirmation) | varchar(127) |  |  | NO |  |  |  |
| [RewardQuestID](#rewardquestid) | int | unsigned |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
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
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/playerchoice_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playerchoice_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playerchoice_response_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playerchoice_response_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
