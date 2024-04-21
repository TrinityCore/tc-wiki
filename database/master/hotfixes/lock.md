---
title: lock
description: 
published: true
date: 2022-11-21T21:17:14.482Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:57:41.270Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/liquid_type" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'liquid_type'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/mail_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [Index1](#index1) | int | signed |  | NO | 0 |  |  |
| [Index2](#index2) | int | signed |  | NO | 0 |  |  |
| [Index3](#index3) | int | signed |  | NO | 0 |  |  |
| [Index4](#index4) | int | signed |  | NO | 0 |  |  |
| [Index5](#index5) | int | signed |  | NO | 0 |  |  |
| [Index6](#index6) | int | signed |  | NO | 0 |  |  |
| [Index7](#index7) | int | signed |  | NO | 0 |  |  |
| [Index8](#index8) | int | signed |  | NO | 0 |  |  |
| [Skill1](#skill1) | smallint | unsigned |  | NO | 0 |  |  |
| [Skill2](#skill2) | smallint | unsigned |  | NO | 0 |  |  |
| [Skill3](#skill3) | smallint | unsigned |  | NO | 0 |  |  |
| [Skill4](#skill4) | smallint | unsigned |  | NO | 0 |  |  |
| [Skill5](#skill5) | smallint | unsigned |  | NO | 0 |  |  |
| [Skill6](#skill6) | smallint | unsigned |  | NO | 0 |  |  |
| [Skill7](#skill7) | smallint | unsigned |  | NO | 0 |  |  |
| [Skill8](#skill8) | smallint | unsigned |  | NO | 0 |  |  |
| [Type1](#type1) | tinyint | unsigned |  | NO | 0 |  |  |
| [Type2](#type2) | tinyint | unsigned |  | NO | 0 |  |  |
| [Type3](#type3) | tinyint | unsigned |  | NO | 0 |  |  |
| [Type4](#type4) | tinyint | unsigned |  | NO | 0 |  |  |
| [Type5](#type5) | tinyint | unsigned |  | NO | 0 |  |  |
| [Type6](#type6) | tinyint | unsigned |  | NO | 0 |  |  |
| [Type7](#type7) | tinyint | unsigned |  | NO | 0 |  |  |
| [Type8](#type8) | tinyint | unsigned |  | NO | 0 |  |  |
| [Action1](#action1) | tinyint | unsigned |  | NO | 0 |  |  |
| [Action2](#action2) | tinyint | unsigned |  | NO | 0 |  |  |
| [Action3](#action3) | tinyint | unsigned |  | NO | 0 |  |  |
| [Action4](#action4) | tinyint | unsigned |  | NO | 0 |  |  |
| [Action5](#action5) | tinyint | unsigned |  | NO | 0 |  |  |
| [Action6](#action6) | tinyint | unsigned |  | NO | 0 |  |  |
| [Action7](#action7) | tinyint | unsigned |  | NO | 0 |  |  |
| [Action8](#action8) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Index1
*- no description -*
&nbsp;

### Index2
*- no description -*
&nbsp;

### Index3
*- no description -*
&nbsp;

### Index4
*- no description -*
&nbsp;

### Index5
*- no description -*
&nbsp;

### Index6
*- no description -*
&nbsp;

### Index7
*- no description -*
&nbsp;

### Index8
*- no description -*
&nbsp;

### Skill1
*- no description -*
&nbsp;

### Skill2
*- no description -*
&nbsp;

### Skill3
*- no description -*
&nbsp;

### Skill4
*- no description -*
&nbsp;

### Skill5
*- no description -*
&nbsp;

### Skill6
*- no description -*
&nbsp;

### Skill7
*- no description -*
&nbsp;

### Skill8
*- no description -*
&nbsp;

### Type1
*- no description -*
&nbsp;

### Type2
*- no description -*
&nbsp;

### Type3
*- no description -*
&nbsp;

### Type4
*- no description -*
&nbsp;

### Type5
*- no description -*
&nbsp;

### Type6
*- no description -*
&nbsp;

### Type7
*- no description -*
&nbsp;

### Type8
*- no description -*
&nbsp;

### Action1
*- no description -*
&nbsp;

### Action2
*- no description -*
&nbsp;

### Action3
*- no description -*
&nbsp;

### Action4
*- no description -*
&nbsp;

### Action5
*- no description -*
&nbsp;

### Action6
*- no description -*
&nbsp;

### Action7
*- no description -*
&nbsp;

### Action8
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/liquid_type" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'liquid_type'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/mail_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mail_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

