---
title: playerchoice
description: 
published: true
date: 2022-04-17T18:35:13.162Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/world/player_xp_for_level" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'player_xp_for_level'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playerchoice_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playerchoice_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#choiceid) | int | signed | PRI | NO |  |  |  |
| [UiTextureKitId](#uitexturekitid) | int | signed |  | NO | 0 |  |  |
| [SoundKitId](#soundkitid) | int | unsigned |  | NO | 0 |  |  |
| [CloseSoundKitId](#closesoundkitid) | int | unsigned |  | NO | 0 |  |  |
| [Duration](#duration) | bigint | signed |  | NO | 0 |  |  |
| [PendingChoiceText](#pendingchoicetext) | varchar(255) |  |  | NO | '' |  |  |
| [Question](#question) | varchar(255) |  |  | YES | NULL |  |  |
| [HideWarboardHeader](#hidewarboardheader) | tinyint(1) | signed |  | NO | 0 |  |  |
| [KeepOpenAfterChoice](#keepopenafterchoice) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ChoiceId
*- no description -*
&nbsp;

### UiTextureKitId
*- no description -*
&nbsp;

### SoundKitId
*- no description -*
&nbsp;

### CloseSoundKitId
*- no description -*
&nbsp;

### Duration
*- no description -*
&nbsp;

### PendingChoiceText
*- no description -*
&nbsp;

### Question
*- no description -*
&nbsp;

### HideWarboardHeader
*- no description -*
&nbsp;

### KeepOpenAfterChoice
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/player_xp_for_level" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'player_xp_for_level'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playerchoice_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playerchoice_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
