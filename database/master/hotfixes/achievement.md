---
title: achievement
description: 
published: true
date: 2022-11-21T21:10:09.319Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:48:17.676Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/world_state_expression" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'world_state_expression'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/achievement_category" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_category'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [Title](#title) | text |  |  | YES | NULL |  |  |
| [Reward](#reward) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [InstanceID](#instanceid) | smallint | signed |  | NO | 0 |  |  |
| [Faction](#faction) | tinyint | signed |  | NO | 0 |  |  |
| [Supercedes](#supercedes) | smallint | signed |  | NO | 0 |  |  |
| [Category](#category) | smallint | signed |  | NO | 0 |  |  |
| [MinimumCriteria](#minimumcriteria) | tinyint | signed |  | NO | 0 |  |  |
| [Points](#points) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [UiOrder](#uiorder) | smallint | signed |  | NO | 0 |  |  |
| [IconFileID](#iconfileid) | int | signed |  | NO | 0 |  |  |
| [RewardItemID](#rewarditemid) | int | signed |  | NO | 0 |  |  |
| [CriteriaTree](#criteriatree) | int | unsigned |  | NO | 0 |  |  |
| [SharesCriteria](#sharescriteria) | smallint | signed |  | NO | 0 |  |  |
| [CovenantID](#covenantid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Description
*- no description -*
&nbsp;

### Title
*- no description -*
&nbsp;

### Reward
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### InstanceID
*- no description -*
&nbsp;

### Faction
*- no description -*
&nbsp;

### Supercedes
*- no description -*
&nbsp;

### Category
*- no description -*
&nbsp;

### MinimumCriteria
*- no description -*
&nbsp;

### Points
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### UiOrder
*- no description -*
&nbsp;

### IconFileID
*- no description -*
&nbsp;

### RewardItemID
*- no description -*
&nbsp;

### CriteriaTree
*- no description -*
&nbsp;

### SharesCriteria
*- no description -*
&nbsp;

### CovenantID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/world_state_expression" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'world_state_expression'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/achievement_category" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_category'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

