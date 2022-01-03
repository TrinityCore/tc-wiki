---
title: playerchoice_response_reward
description: 
published: true
date: 2022-01-03T11:24:59.112Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/world/playerchoice_response_maw_power" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playerchoice_response_maw_power'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playerchoice_response_reward_currency" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playerchoice_response_reward_currency'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#choiceid) | int(11) | signed | PRI | NO |  |  |  |
| [ResponseId](#responseid) | int(11) | signed | PRI | NO |  |  |  |
| [TitleId](#titleid) | int(11) | signed |  | NO | 0 |  |  |
| [PackageId](#packageid) | int(11) | signed |  | NO | 0 |  |  |
| [SkillLineId](#skilllineid) | int(10) | unsigned |  | NO | 0 |  |  |
| [SkillPointCount](#skillpointcount) | int(10) | unsigned |  | NO | 0 |  |  |
| [ArenaPointCount](#arenapointcount) | int(10) | unsigned |  | NO | 0 |  |  |
| [HonorPointCount](#honorpointcount) | int(10) | unsigned |  | NO | 0 |  |  |
| [Money](#money) | bigint(20) | unsigned |  | NO | 0 |  |  |
| [Xp](#xp) | int(10) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ChoiceId
*- no description -*
&nbsp;

### ResponseId
*- no description -*
&nbsp;

### TitleId
*- no description -*
&nbsp;

### PackageId
*- no description -*
&nbsp;

### SkillLineId
*- no description -*
&nbsp;

### SkillPointCount
*- no description -*
&nbsp;

### ArenaPointCount
*- no description -*
&nbsp;

### HonorPointCount
*- no description -*
&nbsp;

### Money
*- no description -*
&nbsp;

### Xp
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/playerchoice_response_maw_power" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playerchoice_response_maw_power'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playerchoice_response_reward_currency" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playerchoice_response_reward_currency'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

