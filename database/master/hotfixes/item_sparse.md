---
title: item_sparse
description: 
published: true
date: 2022-12-19T18:12:42.478Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/item_set_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/item_sparse_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_sparse_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [AllowableRace](#allowablerace) | bigint | signed |  | NO | 0 |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [Display3](#display3) | text |  |  | YES | NULL |  |  |
| [Display2](#display2) | text |  |  | YES | NULL |  |  |
| [Display1](#display1) | text |  |  | YES | NULL |  |  |
| [Display](#display) | text |  |  | YES | NULL |  |  |
| [ExpansionID](#expansionid) | int | signed |  | NO | 0 |  |  |
| [DmgVariance](#dmgvariance) | float |  |  | NO | 0 |  |  |
| [LimitCategory](#limitcategory) | int | signed |  | NO | 0 |  |  |
| [DurationInInventory](#durationininventory) | int | unsigned |  | NO | 0 |  |  |
| [QualityModifier](#qualitymodifier) | float |  |  | NO | 0 |  |  |
| [BagFamily](#bagfamily) | int | unsigned |  | NO | 0 |  |  |
| [StartQuestID](#startquestid) | int | signed |  | NO | 0 |  |  |
| [LanguageID](#languageid) | int | signed |  | NO | 0 |  |  |
| [ItemRange](#itemrange) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket1](#statpercentageofsocket1) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket2](#statpercentageofsocket2) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket3](#statpercentageofsocket3) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket4](#statpercentageofsocket4) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket5](#statpercentageofsocket5) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket6](#statpercentageofsocket6) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket7](#statpercentageofsocket7) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket8](#statpercentageofsocket8) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket9](#statpercentageofsocket9) | float |  |  | NO | 0 |  |  |
| [StatPercentageOfSocket10](#statpercentageofsocket10) | float |  |  | NO | 0 |  |  |
| [StatPercentEditor1](#statpercenteditor1) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor2](#statpercenteditor2) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor3](#statpercenteditor3) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor4](#statpercenteditor4) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor5](#statpercenteditor5) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor6](#statpercenteditor6) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor7](#statpercenteditor7) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor8](#statpercenteditor8) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor9](#statpercenteditor9) | int | signed |  | NO | 0 |  |  |
| [StatPercentEditor10](#statpercenteditor10) | int | signed |  | NO | 0 |  |  |
| [Stackable](#stackable) | int | signed |  | NO | 0 |  |  |
| [MaxCount](#maxcount) | int | signed |  | NO | 0 |  |  |
| [MinReputation](#minreputation) | int | signed |  | NO | 0 |  |  |
| [RequiredAbility](#requiredability) | int | unsigned |  | NO | 0 |  |  |
| [SellPrice](#sellprice) | int | unsigned |  | NO | 0 |  |  |
| [BuyPrice](#buyprice) | int | unsigned |  | NO | 0 |  |  |
| [VendorStackCount](#vendorstackcount) | int | unsigned |  | NO | 0 |  |  |
| [PriceVariance](#pricevariance) | float |  |  | NO | 0 |  |  |
| [PriceRandomValue](#pricerandomvalue) | float |  |  | NO | 0 |  |  |
| [Flags1](#flags1) | int | signed |  | NO | 0 |  |  |
| [Flags2](#flags2) | int | signed |  | NO | 0 |  |  |
| [Flags3](#flags3) | int | signed |  | NO | 0 |  |  |
| [Flags4](#flags4) | int | signed |  | NO | 0 |  |  |
| [FactionRelated](#factionrelated) | int | signed |  | NO | 0 |  |  |
| [ModifiedCraftingReagentItemID](#modifiedcraftingreagentitemid) | int | signed |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int | signed |  | NO | 0 |  |  |
| [PlayerLevelToItemLevelCurveID](#playerleveltoitemlevelcurveid) | int | signed |  | NO | 0 |  |  |
| [ItemNameDescriptionID](#itemnamedescriptionid) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredTransmogHoliday](#requiredtransmogholiday) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredHoliday](#requiredholiday) | smallint | unsigned |  | NO | 0 |  |  |
| [GemProperties](#gemproperties) | smallint | unsigned |  | NO | 0 |  |  |
| [SocketMatchEnchantmentId](#socketmatchenchantmentid) | smallint | unsigned |  | NO | 0 |  |  |
| [TotemCategoryID](#totemcategoryid) | smallint | unsigned |  | NO | 0 |  |  |
| [InstanceBound](#instancebound) | smallint | unsigned |  | NO | 0 |  |  |
| [ZoneBound1](#zonebound1) | smallint | unsigned |  | NO | 0 |  |  |
| [ZoneBound2](#zonebound2) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemSet](#itemset) | smallint | unsigned |  | NO | 0 |  |  |
| [LockID](#lockid) | smallint | unsigned |  | NO | 0 |  |  |
| [PageID](#pageid) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemDelay](#itemdelay) | smallint | unsigned |  | NO | 0 |  |  |
| [MinFactionID](#minfactionid) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#requiredskillrank) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredSkill](#requiredskill) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemLevel](#itemlevel) | smallint | unsigned |  | NO | 0 |  |  |
| [AllowableClass](#allowableclass) | smallint | signed |  | NO | 0 |  |  |
| [ArtifactID](#artifactid) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpellWeight](#spellweight) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpellWeightCategory](#spellweightcategory) | tinyint | unsigned |  | NO | 0 |  |  |
| [SocketType1](#sockettype1) | tinyint | unsigned |  | NO | 0 |  |  |
| [SocketType2](#sockettype2) | tinyint | unsigned |  | NO | 0 |  |  |
| [SocketType3](#sockettype3) | tinyint | unsigned |  | NO | 0 |  |  |
| [SheatheType](#sheathetype) | tinyint | unsigned |  | NO | 0 |  |  |
| [Material](#material) | tinyint | unsigned |  | NO | 0 |  |  |
| [PageMaterialID](#pagematerialid) | tinyint | unsigned |  | NO | 0 |  |  |
| [Bonding](#bonding) | tinyint | unsigned |  | NO | 0 |  |  |
| [DamageDamageType](#damagedamagetype) | tinyint | unsigned |  | NO | 0 |  |  |
| [StatModifierBonusStat1](#statmodifierbonusstat1) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat2](#statmodifierbonusstat2) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat3](#statmodifierbonusstat3) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat4](#statmodifierbonusstat4) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat5](#statmodifierbonusstat5) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat6](#statmodifierbonusstat6) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat7](#statmodifierbonusstat7) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat8](#statmodifierbonusstat8) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat9](#statmodifierbonusstat9) | tinyint | signed |  | NO | 0 |  |  |
| [StatModifierBonusStat10](#statmodifierbonusstat10) | tinyint | signed |  | NO | 0 |  |  |
| [ContainerSlots](#containerslots) | tinyint | unsigned |  | NO | 0 |  |  |
| [RequiredPVPMedal](#requiredpvpmedal) | tinyint | unsigned |  | NO | 0 |  |  |
| [RequiredPVPRank](#requiredpvprank) | tinyint | unsigned |  | NO | 0 |  |  |
| [RequiredLevel](#requiredlevel) | tinyint | signed |  | NO | 0 |  |  |
| [InventoryType](#inventorytype) | tinyint | signed |  | NO | 0 |  |  |
| [OverallQualityID](#overallqualityid) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
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

### LimitCategory
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

### StartQuestID
*- no description -*
&nbsp;

### LanguageID
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

### MinReputation
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

### GemProperties
*- no description -*
&nbsp;

### SocketMatchEnchantmentId
*- no description -*
&nbsp;

### TotemCategoryID
*- no description -*
&nbsp;

### InstanceBound
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
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/item_set_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/item_sparse_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_sparse_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
