---
title: item_search_name
description: 
published: true
date: 2022-12-19T18:38:27.699Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:56:49.507Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/item_price_base" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_price_base'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/item_search_name_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_search_name_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [AllowableRace](#allowablerace) | bigint | signed |  | NO | 0 |  |  |
| [Display](#display) | text |  |  | YES | NULL |  |  |
| [OverallQualityID](#overallqualityid) | tinyint | unsigned |  | NO | 0 |  |  |
| [ExpansionID](#expansionid) | int | signed |  | NO | 0 |  |  |
| [MinFactionID](#minfactionid) | smallint | unsigned |  | NO | 0 |  |  |
| [MinReputation](#minreputation) | int | signed |  | NO | 0 |  |  |
| [AllowableClass](#allowableclass) | int | signed |  | NO | 0 |  |  |
| [RequiredLevel](#requiredlevel) | tinyint | signed |  | NO | 0 |  |  |
| [RequiredSkill](#requiredskill) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#requiredskillrank) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredAbility](#requiredability) | int | unsigned |  | NO | 0 |  |  |
| [ItemLevel](#itemlevel) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags1](#flags1) | int | signed |  | NO | 0 |  |  |
| [Flags2](#flags2) | int | signed |  | NO | 0 |  |  |
| [Flags3](#flags3) | int | signed |  | NO | 0 |  |  |
| [Flags4](#flags4) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### AllowableRace
*- no description -*
&nbsp;

### Display
*- no description -*
&nbsp;

### OverallQualityID
*- no description -*
&nbsp;

### ExpansionID
*- no description -*
&nbsp;

### MinFactionID
*- no description -*
&nbsp;

### MinReputation
*- no description -*
&nbsp;

### AllowableClass
*- no description -*
&nbsp;

### RequiredLevel
*- no description -*
&nbsp;

### RequiredSkill
*- no description -*
&nbsp;

### RequiredSkillRank
*- no description -*
&nbsp;

### RequiredAbility
*- no description -*
&nbsp;

### ItemLevel
*- no description -*
&nbsp;

### Flags1
*- no description -*
&nbsp;

### Flags2
*- no description -*
&nbsp;

### Flags3
*- no description -*
&nbsp;

### Flags4
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/item_price_base" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_price_base'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/item_search_name_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_search_name_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
