---
title: trait_cond
description: 
published: true
date: 2022-12-19T18:12:44.534Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/toy_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'master'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/trait_cost" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'hotfixes'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [CondType](#condtype) | int | signed |  | NO | 0 |  |  |
| [TraitTreeID](#traittreeid) | int | signed |  | NO | 0 |  |  |
| [GrantedRanks](#grantedranks) | int | signed |  | NO | 0 |  |  |
| [QuestID](#questid) | int | signed |  | NO | 0 |  |  |
| [AchievementID](#achievementid) | int | signed |  | NO | 0 |  |  |
| [SpecSetID](#specsetid) | int | signed |  | NO | 0 |  |  |
| [TraitNodeGroupID](#traitnodegroupid) | int | signed |  | NO | 0 |  |  |
| [TraitNodeID](#traitnodeid) | int | signed |  | NO | 0 |  |  |
| [TraitCurrencyID](#traitcurrencyid) | int | signed |  | NO | 0 |  |  |
| [SpentAmountRequired](#spentamountrequired) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [RequiredLevel](#requiredlevel) | int | signed |  | NO | 0 |  |  |
| [FreeSharedStringID](#freesharedstringid) | int | signed |  | NO | 0 |  |  |
| [SpendMoreSharedStringID](#spendmoresharedstringid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### CondType
*- no description -*
&nbsp;

### TraitTreeID
*- no description -*
&nbsp;

### GrantedRanks
*- no description -*
&nbsp;

### QuestID
*- no description -*
&nbsp;

### AchievementID
*- no description -*
&nbsp;

### SpecSetID
*- no description -*
&nbsp;

### TraitNodeGroupID
*- no description -*
&nbsp;

### TraitNodeID
*- no description -*
&nbsp;

### TraitCurrencyID
*- no description -*
&nbsp;

### SpentAmountRequired
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### RequiredLevel
*- no description -*
&nbsp;

### FreeSharedStringID
*- no description -*
&nbsp;

### SpendMoreSharedStringID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/toy_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'master'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/trait_cost" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'hotfixes'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
