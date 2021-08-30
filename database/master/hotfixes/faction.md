---
title: faction
description: 
published: true
date: 2021-08-30T09:44:29.523Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/expected_stat_mod" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'expected_stat_mod'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/faction_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'faction_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ReputationRaceMask1](#ReputationRaceMask1) | bigint(20) | signed |  | NO | 0 |  |  |
| [ReputationRaceMask2](#ReputationRaceMask2) | bigint(20) | signed |  | NO | 0 |  |  |
| [ReputationRaceMask3](#ReputationRaceMask3) | bigint(20) | signed |  | NO | 0 |  |  |
| [ReputationRaceMask4](#ReputationRaceMask4) | bigint(20) | signed |  | NO | 0 |  |  |
| [Name](#Name) | text |  |  | YES | NULL |  |  |
| [Description](#Description) | text |  |  | YES | NULL |  |  |
| [ReputationIndex](#ReputationIndex) | smallint(6) | signed |  | NO | 0 |  |  |
| [ParentFactionID](#ParentFactionID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Expansion](#Expansion) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [FriendshipRepID](#FriendshipRepID) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#Flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ParagonFactionID](#ParagonFactionID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ReputationClassMask1](#ReputationClassMask1) | smallint(6) | signed |  | NO | 0 |  |  |
| [ReputationClassMask2](#ReputationClassMask2) | smallint(6) | signed |  | NO | 0 |  |  |
| [ReputationClassMask3](#ReputationClassMask3) | smallint(6) | signed |  | NO | 0 |  |  |
| [ReputationClassMask4](#ReputationClassMask4) | smallint(6) | signed |  | NO | 0 |  |  |
| [ReputationFlags1](#ReputationFlags1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ReputationFlags2](#ReputationFlags2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ReputationFlags3](#ReputationFlags3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ReputationFlags4](#ReputationFlags4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ReputationBase1](#ReputationBase1) | int(11) | signed |  | NO | 0 |  |  |
| [ReputationBase2](#ReputationBase2) | int(11) | signed |  | NO | 0 |  |  |
| [ReputationBase3](#ReputationBase3) | int(11) | signed |  | NO | 0 |  |  |
| [ReputationBase4](#ReputationBase4) | int(11) | signed |  | NO | 0 |  |  |
| [ReputationMax1](#ReputationMax1) | int(11) | signed |  | NO | 0 |  |  |
| [ReputationMax2](#ReputationMax2) | int(11) | signed |  | NO | 0 |  |  |
| [ReputationMax3](#ReputationMax3) | int(11) | signed |  | NO | 0 |  |  |
| [ReputationMax4](#ReputationMax4) | int(11) | signed |  | NO | 0 |  |  |
| [ParentFactionMod1](#ParentFactionMod1) | float |  |  | NO | 0 |  |  |
| [ParentFactionMod2](#ParentFactionMod2) | float |  |  | NO | 0 |  |  |
| [ParentFactionCap1](#ParentFactionCap1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ParentFactionCap2](#ParentFactionCap2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### ReputationRaceMask1
*- no description -*
&nbsp;

### ReputationRaceMask2
*- no description -*
&nbsp;

### ReputationRaceMask3
*- no description -*
&nbsp;

### ReputationRaceMask4
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### ReputationIndex
*- no description -*
&nbsp;

### ParentFactionID
*- no description -*
&nbsp;

### Expansion
*- no description -*
&nbsp;

### FriendshipRepID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ParagonFactionID
*- no description -*
&nbsp;

### ReputationClassMask1
*- no description -*
&nbsp;

### ReputationClassMask2
*- no description -*
&nbsp;

### ReputationClassMask3
*- no description -*
&nbsp;

### ReputationClassMask4
*- no description -*
&nbsp;

### ReputationFlags1
*- no description -*
&nbsp;

### ReputationFlags2
*- no description -*
&nbsp;

### ReputationFlags3
*- no description -*
&nbsp;

### ReputationFlags4
*- no description -*
&nbsp;

### ReputationBase1
*- no description -*
&nbsp;

### ReputationBase2
*- no description -*
&nbsp;

### ReputationBase3
*- no description -*
&nbsp;

### ReputationBase4
*- no description -*
&nbsp;

### ReputationMax1
*- no description -*
&nbsp;

### ReputationMax2
*- no description -*
&nbsp;

### ReputationMax3
*- no description -*
&nbsp;

### ReputationMax4
*- no description -*
&nbsp;

### ParentFactionMod1
*- no description -*
&nbsp;

### ParentFactionMod2
*- no description -*
&nbsp;

### ParentFactionCap1
*- no description -*
&nbsp;

### ParentFactionCap2
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/expected_stat_mod" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'expected_stat_mod'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/faction_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'faction_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

