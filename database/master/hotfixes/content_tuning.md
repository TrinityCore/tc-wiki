---
title: content_tuning
description: 
published: true
date: 2023-10-06T19:24:22.834Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:01.029Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/conditional_content_tuning" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditional_content_tuning'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/content_tuning_x_expected" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'content_tuning_x_expected'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ExpansionID](#expansionid) | int | signed |  | NO | 0 |  |  |
| [MinLevel](#minlevel) | int | signed |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | int | signed |  | NO | 0 |  |  |
| [MinLevelType](#minleveltype) | int | signed |  | NO | 0 |  |  |
| [MaxLevelType](#maxleveltype) | int | signed |  | NO | 0 |  |  |
| [TargetLevelDelta](#targetleveldelta) | int | signed |  | NO | 0 |  |  |
| [TargetLevelMaxDelta](#targetlevelmaxdelta) | int | signed |  | NO | 0 |  |  |
| [TargetLevelMin](#targetlevelmin) | int | signed |  | NO | 0 |  |  |
| [TargetLevelMax](#targetlevelmax) | int | signed |  | NO | 0 |  |  |
| [MinItemLevel](#minitemlevel) | int | signed |  | NO | 0 |  |  |
| [QuestXpMultiplier](#questxpmultiplier) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ExpansionID
*- no description -*
&nbsp;

### MinLevel
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### MinLevelType
*- no description -*
&nbsp;

### MaxLevelType
*- no description -*
&nbsp;

### TargetLevelDelta
*- no description -*
&nbsp;

### TargetLevelMaxDelta
*- no description -*
&nbsp;

### TargetLevelMin
*- no description -*
&nbsp;

### TargetLevelMax
*- no description -*
&nbsp;

### MinItemLevel
*- no description -*
&nbsp;

### QuestXpMultiplier
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/conditional_content_tuning" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'conditional_content_tuning'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/content_tuning_x_expected" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'content_tuning_x_expected'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
