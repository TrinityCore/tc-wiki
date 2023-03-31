---
title: item_set
description: 
published: true
date: 2022-11-21T21:16:41.357Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:56:54.937Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/item_search_name_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_search_name_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/item_set_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_set_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [SetFlags](#setflags) | int | unsigned |  | NO | 0 |  |  |
| [RequiredSkill](#requiredskill) | int | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#requiredskillrank) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemID1](#itemid1) | int | unsigned |  | NO | 0 |  |  |
| [ItemID2](#itemid2) | int | unsigned |  | NO | 0 |  |  |
| [ItemID3](#itemid3) | int | unsigned |  | NO | 0 |  |  |
| [ItemID4](#itemid4) | int | unsigned |  | NO | 0 |  |  |
| [ItemID5](#itemid5) | int | unsigned |  | NO | 0 |  |  |
| [ItemID6](#itemid6) | int | unsigned |  | NO | 0 |  |  |
| [ItemID7](#itemid7) | int | unsigned |  | NO | 0 |  |  |
| [ItemID8](#itemid8) | int | unsigned |  | NO | 0 |  |  |
| [ItemID9](#itemid9) | int | unsigned |  | NO | 0 |  |  |
| [ItemID10](#itemid10) | int | unsigned |  | NO | 0 |  |  |
| [ItemID11](#itemid11) | int | unsigned |  | NO | 0 |  |  |
| [ItemID12](#itemid12) | int | unsigned |  | NO | 0 |  |  |
| [ItemID13](#itemid13) | int | unsigned |  | NO | 0 |  |  |
| [ItemID14](#itemid14) | int | unsigned |  | NO | 0 |  |  |
| [ItemID15](#itemid15) | int | unsigned |  | NO | 0 |  |  |
| [ItemID16](#itemid16) | int | unsigned |  | NO | 0 |  |  |
| [ItemID17](#itemid17) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### SetFlags
*- no description -*
&nbsp;

### RequiredSkill
*- no description -*
&nbsp;

### RequiredSkillRank
*- no description -*
&nbsp;

### ItemID1
*- no description -*
&nbsp;

### ItemID2
*- no description -*
&nbsp;

### ItemID3
*- no description -*
&nbsp;

### ItemID4
*- no description -*
&nbsp;

### ItemID5
*- no description -*
&nbsp;

### ItemID6
*- no description -*
&nbsp;

### ItemID7
*- no description -*
&nbsp;

### ItemID8
*- no description -*
&nbsp;

### ItemID9
*- no description -*
&nbsp;

### ItemID10
*- no description -*
&nbsp;

### ItemID11
*- no description -*
&nbsp;

### ItemID12
*- no description -*
&nbsp;

### ItemID13
*- no description -*
&nbsp;

### ItemID14
*- no description -*
&nbsp;

### ItemID15
*- no description -*
&nbsp;

### ItemID16
*- no description -*
&nbsp;

### ItemID17
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/item_search_name_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_search_name_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/item_set_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_set_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

