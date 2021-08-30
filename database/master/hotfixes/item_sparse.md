---
title: item_sparse
description: 
published: true
date: 2021-08-30T16:51:17.923Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:57:03.008Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/item_set_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/item_sparse_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_sparse_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [AllowableRace](#AllowableRace) | bigint(20) | signed |  | NO | 0 |  |  |
| [Description](#Description) | text |  |  | YES | NULL |  |  |
| [Display3](#Display3) | text |  |  | YES | NULL |  |  |
| [Display2](#Display2) | text |  |  | YES | NULL |  |  |
| [Display1](#Display1) | text |  |  | YES | NULL |  |  |
| [Display](#Display) | text |  |  | YES | NULL |  |  |
| [ExpansionID](#ExpansionID) | int(11) | signed |  | NO | 0 |  |  |
| [DmgVariance](#DmgVariance) | float |  |  | NO | 0 |  |  |
| [InstanceBound](#InstanceBound) | int(11) | signed |  | NO | 0 |  |  |
| [DurationInInventory](#DurationInInventory) | int(10) | unsigned |  | NO | 0 |  |  |
| [QualityModifier](#QualityModifier) | float |  |  | NO | 0 |  |  |
| [BagFamily](#BagFamily) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemRange](#ItemRange) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket1](#statpercentageofsocket1) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket2](#StatPercentageOfSocket2) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket3](#StatPercentageOfSocket3) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket4](#StatPercentageOfSocket4) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket5](#StatPercentageOfSocket5) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket6](#StatPercentageOfSocket6) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket7](#StatPercentageOfSocket7) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket8](#StatPercentageOfSocket8) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket9](#StatPercentageOfSocket9) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket10](#StatPercentageOfSocket10) | float |  |  | NO | 0 |  |  |
| [StatPercentEditor1](#StatPercentEditor1) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor2](#StatPercentEditor2) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor3](#StatPercentEditor3) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor4](#StatPercentEditor4) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor5](#StatPercentEditor5) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor6](#StatPercentEditor6) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor7](#StatPercentEditor7) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor8](#StatPercentEditor8) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor9](#StatPercentEditor9) | int(11) | signed |  | NO | 0 |  |  |
| [StatPercentEditor10](#StatPercentEditor10) | int(11) | signed |  | NO | 0 |  |  |
| [Stackable](#Stackable) | int(11) | signed |  | NO | 0 |  |  |
| [MaxCount](#MaxCount) | int(11) | signed |  | NO | 0 |  |  |
| [RequiredAbility](#RequiredAbility) | int(10) | unsigned |  | NO | 0 |  |  |
| [SellPrice](#SellPrice) | int(10) | unsigned |  | NO | 0 |  |  |
| [BuyPrice](#BuyPrice) | int(10) | unsigned |  | NO | 0 |  |  |
| [VendorStackCount](#VendorStackCount) | int(10) | unsigned |  | NO | 0 |  |  |
| [PriceVariance](#PriceVariance) | float |  |  | NO | 0 |  |  |
| [PriceRandomValue](#PriceRandomValue) | float |  |  | NO | 0 |  |  |
| [Flags1](#Flags1) | int(11) | signed |  | NO | 0 |  |  |
| [Flags2](#Flags2) | int(11) | signed |  | NO | 0 |  |  |
| [Flags3](#Flags3) | int(11) | signed |  | NO | 0 |  |  |
| [Flags4](#Flags4) | int(11) | signed |  | NO | 0 |  |  |
| [FactionRelated](#FactionRelated) | int(11) | signed |  | NO | 0 |  |  |
| [ModifiedCraftingReagentItemID](#ModifiedCraftingReagentItemID) | int(11) | signed |  | NO | 0 |  |  |
| [ContentTuningID](#ContentTuningID) | int(11) | signed |  | NO | 0 |  |  |
| [PlayerLevelToItemLevelCurveID](#PlayerLevelToItemLevelCurveID) | int(11) | signed |  | NO | 0 |  |  |
| [ItemNameDescriptionID](#ItemNameDescriptionID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredTransmogHoliday](#RequiredTransmogHoliday) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredHoliday](#RequiredHoliday) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LimitCategory](#LimitCategory) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [GemProperties](#GemProperties) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SocketMatchEnchantmentId](#SocketMatchEnchantmentId) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [TotemCategoryID](#TotemCategoryID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ZoneBound1](#ZoneBound1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ZoneBound2](#ZoneBound2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemSet](#ItemSet) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [LockID](#LockID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [StartQuestID](#StartQuestID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [PageID](#PageID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemDelay](#ItemDelay) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MinFactionID](#MinFactionID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#RequiredSkillRank) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredSkill](#RequiredSkill) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemLevel](#ItemLevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AllowableClass](#AllowableClass) | smallint(6) | signed |  | NO | 0 |  |  |
| [ArtifactID](#ArtifactID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SpellWeight](#SpellWeight) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SpellWeightCategory](#SpellWeightCategory) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SocketType1](#SocketType1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SocketType2](#SocketType2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SocketType3](#SocketType3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SheatheType](#SheatheType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Material](#Material) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PageMaterialID](#PageMaterialID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [LanguageID](#LanguageID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Bonding](#Bonding) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [DamageDamageType](#DamageDamageType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [StatModifierBonusStat1](#StatModifierBonusStat1) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat2](#StatModifierBonusStat2) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat3](#StatModifierBonusStat3) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat4](#StatModifierBonusStat4) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat5](#StatModifierBonusStat5) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat6](#StatModifierBonusStat6) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat7](#StatModifierBonusStat7) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat8](#StatModifierBonusStat8) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat9](#StatModifierBonusStat9) | tinyint(4) | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat10](#StatModifierBonusStat10) | tinyint(4) | signed |  | NO | 0 |  |  |
| [ContainerSlots](#ContainerSlots) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinReputation](#MinReputation) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RequiredPVPMedal](#RequiredPVPMedal) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RequiredPVPRank](#RequiredPVPRank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RequiredLevel](#RequiredLevel) | tinyint(4) | signed |  | NO | 0 |  |  |
| [InventoryType](#InventoryType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [OverallQualityID](#OverallQualityID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### AllowableRace
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### Display3
*- no description -*
&nbsp;

### Display2
*- no description -*
&nbsp;

### Display1
*- no description -*
&nbsp;

### Display
*- no description -*
&nbsp;

### ExpansionID
*- no description -*
&nbsp;

### DmgVariance
*- no description -*
&nbsp;

### InstanceBound
*- no description -*
&nbsp;

### DurationInInventory
*- no description -*
&nbsp;

### QualityModifier
*- no description -*
&nbsp;

### BagFamily
*- no description -*
&nbsp;

### ItemRange
*- no description -*
&nbsp;

### StatPercentageOfSocket1
*- no description -*
&nbsp;

### StatPercentageOfSocket2
*- no description -*
&nbsp;

### StatPercentageOfSocket3
*- no description -*
&nbsp;

### StatPercentageOfSocket4
*- no description -*
&nbsp;

### StatPercentageOfSocket5
*- no description -*
&nbsp;

### StatPercentageOfSocket6
*- no description -*
&nbsp;

### StatPercentageOfSocket7
*- no description -*
&nbsp;

### StatPercentageOfSocket8
*- no description -*
&nbsp;

### StatPercentageOfSocket9
*- no description -*
&nbsp;

### StatPercentageOfSocket10
*- no description -*
&nbsp;

### StatPercentEditor1
*- no description -*
&nbsp;

### StatPercentEditor2
*- no description -*
&nbsp;

### StatPercentEditor3
*- no description -*
&nbsp;

### StatPercentEditor4
*- no description -*
&nbsp;

### StatPercentEditor5
*- no description -*
&nbsp;

### StatPercentEditor6
*- no description -*
&nbsp;

### StatPercentEditor7
*- no description -*
&nbsp;

### StatPercentEditor8
*- no description -*
&nbsp;

### StatPercentEditor9
*- no description -*
&nbsp;

### StatPercentEditor10
*- no description -*
&nbsp;

### Stackable
*- no description -*
&nbsp;

### MaxCount
*- no description -*
&nbsp;

### RequiredAbility
*- no description -*
&nbsp;

### SellPrice
*- no description -*
&nbsp;

### BuyPrice
*- no description -*
&nbsp;

### VendorStackCount
*- no description -*
&nbsp;

### PriceVariance
*- no description -*
&nbsp;

### PriceRandomValue
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

### FactionRelated
*- no description -*
&nbsp;

### ModifiedCraftingReagentItemID
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### PlayerLevelToItemLevelCurveID
*- no description -*
&nbsp;

### ItemNameDescriptionID
*- no description -*
&nbsp;

### RequiredTransmogHoliday
*- no description -*
&nbsp;

### RequiredHoliday
*- no description -*
&nbsp;

### LimitCategory
*- no description -*
&nbsp;

### GemProperties
*- no description -*
&nbsp;

### SocketMatchEnchantmentId
*- no description -*
&nbsp;

### TotemCategoryID
*- no description -*
&nbsp;

### ZoneBound1
*- no description -*
&nbsp;

### ZoneBound2
*- no description -*
&nbsp;

### ItemSet
*- no description -*
&nbsp;

### LockID
*- no description -*
&nbsp;

### StartQuestID
*- no description -*
&nbsp;

### PageID
*- no description -*
&nbsp;

### ItemDelay
*- no description -*
&nbsp;

### MinFactionID
*- no description -*
&nbsp;

### RequiredSkillRank
*- no description -*
&nbsp;

### RequiredSkill
*- no description -*
&nbsp;

### ItemLevel
*- no description -*
&nbsp;

### AllowableClass
*- no description -*
&nbsp;

### ArtifactID
*- no description -*
&nbsp;

### SpellWeight
*- no description -*
&nbsp;

### SpellWeightCategory
*- no description -*
&nbsp;

### SocketType1
*- no description -*
&nbsp;

### SocketType2
*- no description -*
&nbsp;

### SocketType3
*- no description -*
&nbsp;

### SheatheType
*- no description -*
&nbsp;

### Material
*- no description -*
&nbsp;

### PageMaterialID
*- no description -*
&nbsp;

### LanguageID
*- no description -*
&nbsp;

### Bonding
*- no description -*
&nbsp;

### DamageDamageType
*- no description -*
&nbsp;

### StatModifierBonusStat1
*- no description -*
&nbsp;

### StatModifierBonusStat2
*- no description -*
&nbsp;

### StatModifierBonusStat3
*- no description -*
&nbsp;

### StatModifierBonusStat4
*- no description -*
&nbsp;

### StatModifierBonusStat5
*- no description -*
&nbsp;

### StatModifierBonusStat6
*- no description -*
&nbsp;

### StatModifierBonusStat7
*- no description -*
&nbsp;

### StatModifierBonusStat8
*- no description -*
&nbsp;

### StatModifierBonusStat9
*- no description -*
&nbsp;

### StatModifierBonusStat10
*- no description -*
&nbsp;

### ContainerSlots
*- no description -*
&nbsp;

### MinReputation
*- no description -*
&nbsp;

### RequiredPVPMedal
*- no description -*
&nbsp;

### RequiredPVPRank
*- no description -*
&nbsp;

### RequiredLevel
*- no description -*
&nbsp;

### InventoryType
*- no description -*
&nbsp;

### OverallQualityID
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/item_set_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/item_sparse_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_sparse_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

