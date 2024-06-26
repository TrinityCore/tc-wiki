---
title: creature
description: 
published: true
date: 2022-11-21T21:13:07.408Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:11.547Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/corruption_effects" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'corruption_effects'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/creature_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_difficulty'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [ItemID1](#itemid1) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemID2](#itemid2) | mediumint | unsigned |  | NO | 0 |  |  |
| [ItemID3](#itemid3) | mediumint | unsigned |  | NO | 0 |  |  |
| [Mount](#mount) | mediumint | unsigned |  | NO | 0 |  |  |
| [DisplayID1](#displayid1) | mediumint | unsigned |  | NO | 0 |  |  |
| [DisplayID2](#displayid2) | mediumint | unsigned |  | NO | 0 |  |  |
| [DisplayID3](#displayid3) | mediumint | unsigned |  | NO | 0 |  |  |
| [DisplayID4](#displayid4) | mediumint | unsigned |  | NO | 0 |  |  |
| [DisplayIDProbability1](#displayidprobability1) | float |  |  | NO | 0 |  |  |
| [DisplayIDProbability2](#displayidprobability2) | float |  |  | NO | 0 |  |  |
| [DisplayIDProbability3](#displayidprobability3) | float |  |  | NO | 0 |  |  |
| [DisplayIDProbability4](#displayidprobability4) | float |  |  | NO | 0 |  |  |
| [Name](#name-alt) | mediumtext |  |  | NO |  |  |  |
| [FemaleName](#femalename) | mediumtext |  |  | NO |  |  |  |
| [SubName](#subname) | mediumtext |  |  | NO |  |  |  |
| [FemaleSubName](#femalesubname) | mediumtext |  |  | NO |  |  |  |
| [Type](#type) | mediumint | unsigned |  | NO | 0 |  |  |
| [Family](#family) | tinyint | unsigned |  | NO | 0 |  |  |
| [Classification](#classification) | tinyint | unsigned |  | NO | 0 |  |  |
| [InhabitType](#inhabittype) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
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

### Mount
*- no description -*
&nbsp;

### DisplayID1
*- no description -*
&nbsp;

### DisplayID2
*- no description -*
&nbsp;

### DisplayID3
*- no description -*
&nbsp;

### DisplayID4
*- no description -*
&nbsp;

### DisplayIDProbability1
*- no description -*
&nbsp;

### DisplayIDProbability2
*- no description -*
&nbsp;

### DisplayIDProbability3
*- no description -*
&nbsp;

### DisplayIDProbability4
*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### FemaleName
*- no description -*
&nbsp;

### SubName
*- no description -*
&nbsp;

### FemaleSubName
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Family
*- no description -*
&nbsp;

### Classification
*- no description -*
&nbsp;

### InhabitType
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/corruption_effects" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'corruption_effects'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/creature_difficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_difficulty'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

