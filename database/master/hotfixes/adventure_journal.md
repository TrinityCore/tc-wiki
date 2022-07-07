---
title: adventure_journal
description: 
published: true
date: 2022-07-07T11:07:36.116Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/achievement_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/adventure_journal_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'adventure_journal_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [ButtonText](#buttontext) | text |  |  | YES | NULL |  |  |
| [RewardDescription](#rewarddescription) | text |  |  | YES | NULL |  |  |
| [ContinueDescription](#continuedescription) | text |  |  | YES | NULL |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ButtonActionType](#buttonactiontype) | tinyint | unsigned |  | NO | 0 |  |  |
| [TextureFileDataID](#texturefiledataid) | int | signed |  | NO | 0 |  |  |
| [LfgDungeonID](#lfgdungeonid) | smallint | unsigned |  | NO | 0 |  |  |
| [QuestID](#questid) | int | signed |  | NO | 0 |  |  |
| [BattleMasterListID](#battlemasterlistid) | smallint | unsigned |  | NO | 0 |  |  |
| [PriorityMin](#prioritymin) | tinyint | unsigned |  | NO | 0 |  |  |
| [PriorityMax](#prioritymax) | tinyint | unsigned |  | NO | 0 |  |  |
| [ItemID](#itemid) | int | signed |  | NO | 0 |  |  |
| [ItemQuantity](#itemquantity) | int | unsigned |  | NO | 0 |  |  |
| [CurrencyType](#currencytype) | smallint | unsigned |  | NO | 0 |  |  |
| [CurrencyQuantity](#currencyquantity) | int | unsigned |  | NO | 0 |  |  |
| [UiMapID](#uimapid) | smallint | unsigned |  | NO | 0 |  |  |
| [BonusPlayerConditionID1](#bonusplayerconditionid1) | int | unsigned |  | NO | 0 |  |  |
| [BonusPlayerConditionID2](#bonusplayerconditionid2) | int | unsigned |  | NO | 0 |  |  |
| [BonusValue1](#bonusvalue1) | tinyint | unsigned |  | NO | 0 |  |  |
| [BonusValue2](#bonusvalue2) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### ButtonText
*- no description -*
&nbsp;

### RewardDescription
*- no description -*
&nbsp;

### ContinueDescription
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ButtonActionType
*- no description -*
&nbsp;

### TextureFileDataID
*- no description -*
&nbsp;

### LfgDungeonID
*- no description -*
&nbsp;

### QuestID
*- no description -*
&nbsp;

### BattleMasterListID
*- no description -*
&nbsp;

### PriorityMin
*- no description -*
&nbsp;

### PriorityMax
*- no description -*
&nbsp;

### ItemID
*- no description -*
&nbsp;

### ItemQuantity
*- no description -*
&nbsp;

### CurrencyType
*- no description -*
&nbsp;

### CurrencyQuantity
*- no description -*
&nbsp;

### UiMapID
*- no description -*
&nbsp;

### BonusPlayerConditionID1
*- no description -*
&nbsp;

### BonusPlayerConditionID2
*- no description -*
&nbsp;

### BonusValue1
*- no description -*
&nbsp;

### BonusValue2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/achievement_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/adventure_journal_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'adventure_journal_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
