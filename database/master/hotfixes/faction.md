---
title: faction
description: 
published: true
date: 2022-12-19T18:38:02.279Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:25.903Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/expected_stat_mod" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'expected_stat_mod'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/faction_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'faction_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [ReputationRaceMask1](#reputationracemask1) | bigint | signed |  | NO | 0 |  |  |
| [ReputationRaceMask2](#reputationracemask2) | bigint | signed |  | NO | 0 |  |  |
| [ReputationRaceMask3](#reputationracemask3) | bigint | signed |  | NO | 0 |  |  |
| [ReputationRaceMask4](#reputationracemask4) | bigint | signed |  | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [ReputationIndex](#reputationindex) | smallint | signed |  | NO | 0 |  |  |
| [ParentFactionID](#parentfactionid) | smallint | unsigned |  | NO | 0 |  |  |
| [Expansion](#expansion) | tinyint | unsigned |  | NO | 0 |  |  |
| [FriendshipRepID](#friendshiprepid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ParagonFactionID](#paragonfactionid) | smallint | unsigned |  | NO | 0 |  |  |
| [RenownFactionID](#renownfactionid) | int | signed |  | NO | 0 |  |  |
| [RenownCurrencyID](#renowncurrencyid) | int | signed |  | NO | 0 |  |  |
| [ReputationClassMask1](#reputationclassmask1) | smallint | signed |  | NO | 0 |  |  |
| [ReputationClassMask2](#reputationclassmask2) | smallint | signed |  | NO | 0 |  |  |
| [ReputationClassMask3](#reputationclassmask3) | smallint | signed |  | NO | 0 |  |  |
| [ReputationClassMask4](#reputationclassmask4) | smallint | signed |  | NO | 0 |  |  |
| [ReputationFlags1](#reputationflags1) | smallint | unsigned |  | NO | 0 |  |  |
| [ReputationFlags2](#reputationflags2) | smallint | unsigned |  | NO | 0 |  |  |
| [ReputationFlags3](#reputationflags3) | smallint | unsigned |  | NO | 0 |  |  |
| [ReputationFlags4](#reputationflags4) | smallint | unsigned |  | NO | 0 |  |  |
| [ReputationBase1](#reputationbase1) | int | signed |  | NO | 0 |  |  |
| [ReputationBase2](#reputationbase2) | int | signed |  | NO | 0 |  |  |
| [ReputationBase3](#reputationbase3) | int | signed |  | NO | 0 |  |  |
| [ReputationBase4](#reputationbase4) | int | signed |  | NO | 0 |  |  |
| [ReputationMax1](#reputationmax1) | int | signed |  | NO | 0 |  |  |
| [ReputationMax2](#reputationmax2) | int | signed |  | NO | 0 |  |  |
| [ReputationMax3](#reputationmax3) | int | signed |  | NO | 0 |  |  |
| [ReputationMax4](#reputationmax4) | int | signed |  | NO | 0 |  |  |
| [ParentFactionMod1](#parentfactionmod1) | float |  |  | NO | 0 |  |  |
| [ParentFactionMod2](#parentfactionmod2) | float |  |  | NO | 0 |  |  |
| [ParentFactionCap1](#parentfactioncap1) | tinyint | unsigned |  | NO | 0 |  |  |
| [ParentFactionCap2](#parentfactioncap2) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
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

### RenownFactionID
*- no description -*
&nbsp;

### RenownCurrencyID
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
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/expected_stat_mod" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'expected_stat_mod'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/faction_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'faction_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
