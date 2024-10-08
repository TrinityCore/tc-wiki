---
title: currency_types
description: 
published: true
date: 2024-09-05T22:45:57.251Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:43.554Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/currency_container_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'currency_container_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/currency_types_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'currency_types_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [CategoryID](#categoryid) | int | signed |  | NO | 0 |  |  |
| [InventoryIconFileID](#inventoryiconfileid) | int | signed |  | NO | 0 |  |  |
| [SpellWeight](#spellweight) | int | unsigned |  | NO | 0 |  |  |
| [SpellCategory](#spellcategory) | tinyint | unsigned |  | NO | 0 |  |  |
| [MaxQty](#maxqty) | int | unsigned |  | NO | 0 |  |  |
| [MaxEarnablePerWeek](#maxearnableperweek) | int | unsigned |  | NO | 0 |  |  |
| [Quality](#quality) | tinyint | signed |  | NO | 0 |  |  |
| [FactionID](#factionid) | int | signed |  | NO | 0 |  |  |
| [ItemGroupSoundsID](#itemgroupsoundsid) | int | signed |  | NO | 0 |  |  |
| [XpQuestDifficulty](#xpquestdifficulty) | int | signed |  | NO | 0 |  |  |
| [AwardConditionID](#awardconditionid) | int | signed |  | NO | 0 |  |  |
| [MaxQtyWorldStateID](#maxqtyworldstateid) | int | signed |  | NO | 0 |  |  |
| [RechargingAmountPerCycle](#rechargingamountpercycle) | int | unsigned |  | NO | 0 |  |  |
| [RechargingCycleDurationMS](#rechargingcycledurationms) | int | unsigned |  | NO | 0 |  |  |
| [AccountTransferPercentage](#accounttransferpercentage) | float |  |  | NO | 0 |  |  |
| [Flags1](#flags1) | int | signed |  | NO | 0 |  |  |
| [Flags2](#flags2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### CategoryID
*- no description -*
&nbsp;

### InventoryIconFileID
*- no description -*
&nbsp;

### SpellWeight
*- no description -*
&nbsp;

### SpellCategory
*- no description -*
&nbsp;

### MaxQty
*- no description -*
&nbsp;

### MaxEarnablePerWeek
*- no description -*
&nbsp;

### Quality
*- no description -*
&nbsp;

### FactionID
*- no description -*
&nbsp;

### ItemGroupSoundsID
*- no description -*
&nbsp;

### XpQuestDifficulty
*- no description -*
&nbsp;

### AwardConditionID
*- no description -*
&nbsp;

### MaxQtyWorldStateID
*- no description -*
&nbsp;

### RechargingAmountPerCycle
*- no description -*
&nbsp;

### RechargingCycleDurationMS
*- no description -*
&nbsp;

### AccountTransferPercentage
*- no description -*
&nbsp;

### Flags1
*- no description -*
&nbsp;

### Flags2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/currency_container_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'currency_container_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/currency_types_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'currency_types_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
