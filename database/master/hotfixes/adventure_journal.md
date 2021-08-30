---
title: adventure_journal
description: 
published: true
date: 2021-08-30T09:44:29.481Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/achievement_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/adventure_journal_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'adventure_journal_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Name](#Name) | text |  |  | YES | NULL |  |  |
| [Description](#Description) | text |  |  | YES | NULL |  |  |
| [ButtonText](#ButtonText) | text |  |  | YES | NULL |  |  |
| [RewardDescription](#RewardDescription) | text |  |  | YES | NULL |  |  |
| [ContinueDescription](#ContinueDescription) | text |  |  | YES | NULL |  |  |
| [Type](#Type) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PlayerConditionID](#PlayerConditionID) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#Flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ButtonActionType](#ButtonActionType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [TextureFileDataID](#TextureFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [LfgDungeonID](#LfgDungeonID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [QuestID](#QuestID) | int(11) | signed |  | NO | 0 |  |  |
| [BattleMasterListID](#BattleMasterListID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PriorityMin](#PriorityMin) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PriorityMax](#PriorityMax) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ItemID](#ItemID) | int(11) | signed |  | NO | 0 |  |  |
| [ItemQuantity](#ItemQuantity) | int(10) | unsigned |  | NO | 0 |  |  |
| [CurrencyType](#CurrencyType) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [CurrencyQuantity](#CurrencyQuantity) | int(10) | unsigned |  | NO | 0 |  |  |
| [UiMapID](#UiMapID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [BonusPlayerConditionID1](#BonusPlayerConditionID1) | int(10) | unsigned |  | NO | 0 |  |  |
| [BonusPlayerConditionID2](#BonusPlayerConditionID2) | int(10) | unsigned |  | NO | 0 |  |  |
| [BonusValue1](#BonusValue1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BonusValue2](#BonusValue2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
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
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/achievement_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'achievement_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/adventure_journal_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'adventure_journal_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

