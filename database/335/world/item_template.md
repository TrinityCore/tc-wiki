---
title: item_template
description: 
published: true
date: 2023-07-11T00:36:21.132Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:11.793Z
---

<a href="https://trinitycore.info/en/database/335/world/item_set_names_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_names_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/item_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Holds information on every item that exists in the game. All items are created from their template stored in this table.
(See additional information in the [ItemPrototype.h](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h) file.)

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [class](#class) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [subclass](#subclass) | tinyint | unsigned |  | NO | 0 |  |  |
| [SoundOverrideSubclass](#soundoverridesubclass) | tinyint | signed |  | NO | -1 |  |  |
| [name](#name) | varchar(255) |  | MUL | NO | '' |  |  |
| [displayid](#displayid) | mediumint | unsigned |  | NO | 0 |  |  |
| [Quality](#quality) | tinyint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [FlagsExtra](#flagsextra) | int | unsigned |  | NO | 0 |  |  |
| [BuyCount](#buycount) | tinyint | unsigned |  | NO | 1 |  |  |
| [BuyPrice](#buyprice) | bigint | signed |  | NO | 0 |  |  |
| [SellPrice](#sellprice) | int | unsigned |  | NO | 0 |  |  |
| [InventoryType](#inventorytype) | tinyint | unsigned |  | NO | 0 |  |  |
| [AllowableClass](#allowableclass) | int | signed |  | NO | -1 |  |  |
| [AllowableRace](#allowablerace) | int | signed |  | NO | -1 |  |  |
| [ItemLevel](#itemlevel) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredLevel](#requiredlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [RequiredSkill](#requiredskill) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#requiredskillrank) | smallint | unsigned |  | NO | 0 |  |  |
| [requiredspell](#requiredspell) | mediumint | unsigned |  | NO | 0 |  |  |
| [requiredhonorrank](#requiredhonorrank) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredCityRank](#requiredcityrank) | mediumint | unsigned |  | NO | 0 |  |  |
| [RequiredReputationFaction](#requiredreputationfaction) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredReputationRank](#requiredreputationrank) | smallint | unsigned |  | NO | 0 |  |  |
| [maxcount](#maxcount) | int | signed |  | NO | 0 |  |  |
| [stackable](#stackable) | int | signed |  | YES | 1 |  |  |
| [ContainerSlots](#containerslots) | tinyint | unsigned |  | NO | 0 |  |  |
| [StatsCount](#statscount) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_type1](#stat_type1) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value1](#stat_value1) | smallint | signed |  | NO | 0 |  |  |
| [stat_type2](#stat_type2) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value2](#stat_value2) | smallint | signed |  | NO | 0 |  |  |
| [stat_type3](#stat_type3) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value3](#stat_value3) | smallint | signed |  | NO | 0 |  |  |
| [stat_type4](#stat_type4) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value4](#stat_value4) | smallint | signed |  | NO | 0 |  |  |
| [stat_type5](#stat_type5) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value5](#stat_value5) | smallint | signed |  | NO | 0 |  |  |
| [stat_type6](#stat_type6) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value6](#stat_value6) | smallint | signed |  | NO | 0 |  |  |
| [stat_type7](#stat_type7) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value7](#stat_value7) | smallint | signed |  | NO | 0 |  |  |
| [stat_type8](#stat_type8) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value8](#stat_value8) | smallint | signed |  | NO | 0 |  |  |
| [stat_type9](#stat_type9) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value9](#stat_value9) | smallint | signed |  | NO | 0 |  |  |
| [stat_type10](#stat_type10) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value10](#stat_value10) | smallint | signed |  | NO | 0 |  |  |
| [ScalingStatDistribution](#scalingstatdistribution) | smallint | signed |  | NO | 0 |  |  |
| [ScalingStatValue](#scalingstatvalue) | int | unsigned |  | NO | 0 |  |  |
| [dmg_min1](#dmg_min1) | float |  |  | NO | 0 |  |  |
| [dmg_max1](#dmg_max1) | float |  |  | NO | 0 |  |  |
| [dmg_type1](#dmg_type1) | tinyint | unsigned |  | NO | 0 |  |  |
| [dmg_min2](#dmg_min2) | float |  |  | NO | 0 |  |  |
| [dmg_max2](#dmg_max2) | float |  |  | NO | 0 |  |  |
| [dmg_type2](#dmg_type2) | tinyint | unsigned |  | NO | 0 |  |  |
| [armor](#armor) | smallint | unsigned |  | NO | 0 |  |  |
| [holy_res](#holy_res) | tinyint | unsigned |  | NO | 0 |  |  |
| [fire_res](#fire_res) | tinyint | unsigned |  | NO | 0 |  |  |
| [nature_res](#nature_res) | tinyint | unsigned |  | NO | 0 |  |  |
| [frost_res](#frost_res) | tinyint | unsigned |  | NO | 0 |  |  |
| [shadow_res](#shadow_res) | tinyint | unsigned |  | NO | 0 |  |  |
| [arcane_res](#arcane_res) | tinyint | unsigned |  | NO | 0 |  |  |
| [delay](#delay) | smallint | unsigned |  | NO | 1000 |  |  |
| [ammo_type](#ammo_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [RangedModRange](#rangedmodrange) | float |  |  | NO | 0 |  |  |
| [spellid_1](#spellid_1) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_1](#spelltrigger_1) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_1](#spellcharges_1) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_1](#spellppmrate_1) | float |  |  | NO | 0 |  |  |
| [spellcooldown_1](#spellcooldown_1) | int | signed |  | NO | -1 |  |  |
| [spellcategory_1](#spellcategory_1) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_1](#spellcategorycooldown_1) | int | signed |  | NO | -1 |  |  |
| [spellid_2](#spellid_2) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_2](#spelltrigger_2) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_2](#spellcharges_2) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_2](#spellppmrate_2) | float |  |  | NO | 0 |  |  |
| [spellcooldown_2](#spellcooldown_2) | int | signed |  | NO | -1 |  |  |
| [spellcategory_2](#spellcategory_2) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_2](#spellcategorycooldown_2) | int | signed |  | NO | -1 |  |  |
| [spellid_3](#spellid_3) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_3](#spelltrigger_3) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_3](#spellcharges_3) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_3](#spellppmrate_3) | float |  |  | NO | 0 |  |  |
| [spellcooldown_3](#spellcooldown_3) | int | signed |  | NO | -1 |  |  |
| [spellcategory_3](#spellcategory_3) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_3](#spellcategorycooldown_3) | int | signed |  | NO | -1 |  |  |
| [spellid_4](#spellid_4) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_4](#spelltrigger_4) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_4](#spellcharges_4) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_4](#spellppmrate_4) | float |  |  | NO | 0 |  |  |
| [spellcooldown_4](#spellcooldown_4) | int | signed |  | NO | -1 |  |  |
| [spellcategory_4](#spellcategory_4) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_4](#spellcategorycooldown_4) | int | signed |  | NO | -1 |  |  |
| [spellid_5](#spellid_5) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_5](#spelltrigger_5) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_5](#spellcharges_5) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_5](#spellppmrate_5) | float |  |  | NO | 0 |  |  |
| [spellcooldown_5](#spellcooldown_5) | int | signed |  | NO | -1 |  |  |
| [spellcategory_5](#spellcategory_5) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_5](#spellcategorycooldown_5) | int | signed |  | NO | -1 |  |  |
| [bonding](#bonding) | tinyint | unsigned |  | NO | 0 |  |  |
| [description](#description) | varchar(255) |  |  | NO | '' |  |  |
| [PageText](#pagetext) | mediumint | unsigned |  | NO | 0 |  |  |
| [LanguageID](#languageid) | tinyint | unsigned |  | NO | 0 |  |  |
| [PageMaterial](#pagematerial) | tinyint | unsigned |  | NO | 0 |  |  |
| [startquest](#startquest) | mediumint | unsigned |  | NO | 0 |  |  |
| [lockid](#lockid) | mediumint | unsigned |  | NO | 0 |  |  |
| [Material](#material) | tinyint | signed |  | NO | 0 |  |  |
| [sheath](#sheath) | tinyint | unsigned |  | NO | 0 |  |  |
| [RandomProperty](#randomproperty) | mediumint | signed |  | NO | 0 |  |  |
| [RandomSuffix](#randomsuffix) | mediumint | unsigned |  | NO | 0 |  |  |
| [block](#block) | mediumint | unsigned |  | NO | 0 |  |  |
| [itemset](#itemset) | mediumint | unsigned |  | NO | 0 |  |  |
| [MaxDurability](#maxdurability) | smallint | unsigned |  | NO | 0 |  |  |
| [area](#area) | mediumint | unsigned |  | NO | 0 |  |  |
| [Map](#map) | smallint | signed |  | NO | 0 |  |  |
| [BagFamily](#bagfamily) | mediumint | signed |  | NO | 0 |  |  |
| [TotemCategory](#totemcategory) | mediumint | signed |  | NO | 0 |  |  |
| [socketColor_1](#socketcolor_1) | tinyint | signed |  | NO | 0 |  |  |
| [socketContent_1](#socketcontent_1) | mediumint | signed |  | NO | 0 |  |  |
| [socketColor_2](#socketcolor_2) | tinyint | signed |  | NO | 0 |  |  |
| [socketContent_2](#socketcontent_2) | mediumint | signed |  | NO | 0 |  |  |
| [socketColor_3](#socketcolor_3) | tinyint | signed |  | NO | 0 |  |  |
| [socketContent_3](#socketcontent_3) | mediumint | signed |  | NO | 0 |  |  |
| [socketBonus](#socketbonus) | mediumint | signed |  | NO | 0 |  |  |
| [GemProperties](#gemproperties) | mediumint | signed |  | NO | 0 |  |  |
| [RequiredDisenchantSkill](#requireddisenchantskill) | smallint | signed |  | NO | -1 |  |  |
| [ArmorDamageModifier](#armordamagemodifier) | float |  |  | NO | 0 |  |  |
| [duration](#duration) | int | unsigned |  | NO | 0 |  |  |
| [ItemLimitCategory](#itemlimitcategory) | smallint | signed |  | NO | 0 |  |  |
| [HolidayId](#holidayid) | int | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [DisenchantID](#disenchantid) | mediumint | unsigned |  | NO | 0 |  |  |
| [FoodType](#foodtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [minMoneyLoot](#minmoneyloot) | int | unsigned |  | NO | 0 |  |  |
| [maxMoneyLoot](#maxmoneyloot) | int | unsigned |  | NO | 0 |  |  |
| [flagsCustom](#flagscustom) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### entry
*- no description -*
&nbsp;

### class
*- no description -*
&nbsp;

### subclass
*- no description -*
&nbsp;

### SoundOverrideSubclass
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### displayid
*- no description -*
&nbsp;

### Quality
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### FlagsExtra
*- no description -*
&nbsp;

### BuyCount
*- no description -*
&nbsp;

### BuyPrice
*- no description -*
&nbsp;

### SellPrice
*- no description -*
&nbsp;

### InventoryType
*- no description -*
&nbsp;

### AllowableClass
*- no description -*
&nbsp;

### AllowableRace
*- no description -*
&nbsp;

### ItemLevel
*- no description -*
&nbsp;

### RequiredLevel
*- no description -*
&nbsp;

### RequiredSkill
*- no description -*
&nbsp;

### RequiredSkillRank
*- no description -*
&nbsp;

### requiredspell
*- no description -*
&nbsp;

### requiredhonorrank
*- no description -*
&nbsp;

### RequiredCityRank
*- no description -*
&nbsp;

### RequiredReputationFaction
*- no description -*
&nbsp;

### RequiredReputationRank
*- no description -*
&nbsp;

### maxcount
*- no description -*
&nbsp;

### stackable
*- no description -*
&nbsp;

### ContainerSlots
*- no description -*
&nbsp;

### StatsCount
*- no description -*
&nbsp;

### stat_type\[1-10]
*- no description -*
&nbsp;

### stat_value\[1-10]
*- no description -*
&nbsp;

### ScalingStatDistribution
*- no description -*
&nbsp;

### ScalingStatValue
*- no description -*
&nbsp;

### dmg_min1
*- no description -*
&nbsp;

### dmg_max1
*- no description -*
&nbsp;

### dmg_type1
*- no description -*
&nbsp;

### dmg_min2
*- no description -*
&nbsp;

### dmg_max2
*- no description -*
&nbsp;

### dmg_type2
*- no description -*
&nbsp;

### armor
*- no description -*
&nbsp;

### holy_res
*- no description -*
&nbsp;

### fire_res
*- no description -*
&nbsp;

### nature_res
*- no description -*
&nbsp;

### frost_res
*- no description -*
&nbsp;

### shadow_res
*- no description -*
&nbsp;

### arcane_res
*- no description -*
&nbsp;

### delay
*- no description -*
&nbsp;

### ammo_type
*- no description -*
&nbsp;

### RangedModRange
*- no description -*
&nbsp;

### spellid_\[1-5]
*- no description -*
&nbsp;

### spelltrigger_\[1-5]
*- no description -*
&nbsp;

### spellcharges_\[1-5]
*- no description -*
&nbsp;

### spellppmRate_\[1-5]
*- no description -*
&nbsp;

### spellcooldown_\[1-5]
*- no description -*
&nbsp;

### spellcategory_\[1-5]
*- no description -*
&nbsp;

### spellcategorycooldown_\[1-5]
*- no description -*
&nbsp;

### bonding
*- no description -*
&nbsp;

### description
*- no description -*
&nbsp;

### PageText
*- no description -*
&nbsp;

### LanguageID
*- no description -*
&nbsp;

### PageMaterial
*- no description -*
&nbsp;

### startquest
*- no description -*
&nbsp;

### lockid
*- no description -*
&nbsp;

### Material
*- no description -*
&nbsp;

### sheath
*- no description -*
&nbsp;

### RandomProperty
*- no description -*
&nbsp;

### RandomSuffix
*- no description -*
&nbsp;

### block
*- no description -*
&nbsp;

### itemset
*- no description -*
&nbsp;

### MaxDurability
*- no description -*
&nbsp;

### area
*- no description -*
&nbsp;

### Map
*- no description -*
&nbsp;

### BagFamily
*- no description -*
&nbsp;

### TotemCategory
*- no description -*
&nbsp;

### socketColor_\[1-3]
*- no description -*
&nbsp;

### socketContent_\[1-3]
*- no description -*
&nbsp;

### socketBonus
*- no description -*
&nbsp;

### GemProperties
*- no description -*
&nbsp;

### RequiredDisenchantSkill
*- no description -*
&nbsp;

### ArmorDamageModifier
*- no description -*
&nbsp;

### duration
*- no description -*
&nbsp;

### ItemLimitCategory
*- no description -*
&nbsp;

### HolidayId
*- no description -*
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### DisenchantID
*- no description -*
&nbsp;

### FoodType
*- no description -*
&nbsp;

### minMoneyLoot
*- no description -*
&nbsp;

### maxMoneyLoot
*- no description -*
&nbsp;

### flagsCustom
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/item_set_names_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_names_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/item_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
