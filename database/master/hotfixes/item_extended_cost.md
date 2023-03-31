---
title: item_extended_cost
description: 
published: true
date: 2022-12-19T18:38:25.963Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:56:17.509Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/item_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_effect'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/item_level_selector" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_level_selector'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [RequiredArenaRating](#requiredarenarating) | smallint | unsigned |  | NO | 0 |  |  |
| [ArenaBracket](#arenabracket) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinFactionID](#minfactionid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinReputation](#minreputation) | int | signed |  | NO | 0 |  |  |
| [RequiredAchievement](#requiredachievement) | tinyint | unsigned |  | NO | 0 |  |  |
| [ItemID1](#itemid1) | int | signed |  | NO | 0 |  |  |
| [ItemID2](#itemid2) | int | signed |  | NO | 0 |  |  |
| [ItemID3](#itemid3) | int | signed |  | NO | 0 |  |  |
| [ItemID4](#itemid4) | int | signed |  | NO | 0 |  |  |
| [ItemID5](#itemid5) | int | signed |  | NO | 0 |  |  |
| [ItemCount1](#itemcount1) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemCount2](#itemcount2) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemCount3](#itemcount3) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemCount4](#itemcount4) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemCount5](#itemcount5) | smallint | unsigned |  | NO | 0 |  |  |
| [CurrencyID1](#currencyid1) | smallint | unsigned |  | NO | 0 |  |  |
| [CurrencyID2](#currencyid2) | smallint | unsigned |  | NO | 0 |  |  |
| [CurrencyID3](#currencyid3) | smallint | unsigned |  | NO | 0 |  |  |
| [CurrencyID4](#currencyid4) | smallint | unsigned |  | NO | 0 |  |  |
| [CurrencyID5](#currencyid5) | smallint | unsigned |  | NO | 0 |  |  |
| [CurrencyCount1](#currencycount1) | int | unsigned |  | NO | 0 |  |  |
| [CurrencyCount2](#currencycount2) | int | unsigned |  | NO | 0 |  |  |
| [CurrencyCount3](#currencycount3) | int | unsigned |  | NO | 0 |  |  |
| [CurrencyCount4](#currencycount4) | int | unsigned |  | NO | 0 |  |  |
| [CurrencyCount5](#currencycount5) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### RequiredArenaRating
*- no description -*
&nbsp;

### ArenaBracket
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### MinFactionID
*- no description -*
&nbsp;

### MinReputation
*- no description -*
&nbsp;

### RequiredAchievement
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

### ItemCount1
*- no description -*
&nbsp;

### ItemCount2
*- no description -*
&nbsp;

### ItemCount3
*- no description -*
&nbsp;

### ItemCount4
*- no description -*
&nbsp;

### ItemCount5
*- no description -*
&nbsp;

### CurrencyID1
*- no description -*
&nbsp;

### CurrencyID2
*- no description -*
&nbsp;

### CurrencyID3
*- no description -*
&nbsp;

### CurrencyID4
*- no description -*
&nbsp;

### CurrencyID5
*- no description -*
&nbsp;

### CurrencyCount1
*- no description -*
&nbsp;

### CurrencyCount2
*- no description -*
&nbsp;

### CurrencyCount3
*- no description -*
&nbsp;

### CurrencyCount4
*- no description -*
&nbsp;

### CurrencyCount5
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/item_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_effect'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/item_level_selector" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_level_selector'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
