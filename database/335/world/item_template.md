---
title: item_template
description: 
published: true
date: 2021-08-30T22:01:28.040Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/335/world/item_set_names_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_names_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/world/item_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [class](#class) | tinyint(3) | unsigned | MUL | NO | 0 |  |  |
| [subclass](#subclass) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SoundOverrideSubclass](#soundoverridesubclass) | tinyint(3) | signed |  | NO | -1 |  |  |
| [name](#name) | varchar(255) | signed | MUL | NO | '' |  |  |
| [displayid](#displayid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [Quality](#quality) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int(10) | unsigned |  | NO | 0 |  |  |
| [FlagsExtra](#flagsextra) | int(10) | unsigned |  | NO | 0 |  |  |
| [BuyCount](#buycount) | tinyint(3) | unsigned |  | NO | 1 |  |  |
| [BuyPrice](#buyprice) | bigint(20) | signed |  | NO | 0 |  |  |
| [SellPrice](#sellprice) | int(10) | unsigned |  | NO | 0 |  |  |
| [InventoryType](#inventorytype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AllowableClass](#allowableclass) | int(11) | signed |  | NO | -1 |  |  |
| [AllowableRace](#allowablerace) | int(11) | signed |  | NO | -1 |  |  |
| [ItemLevel](#itemlevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredLevel](#requiredlevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RequiredSkill](#requiredskill) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredSkillRank](#requiredskillrank) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [requiredspell](#requiredspell) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [requiredhonorrank](#requiredhonorrank) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [RequiredCityRank](#requiredcityrank) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [RequiredReputationFaction](#requiredreputationfaction) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [RequiredReputationRank](#requiredreputationrank) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [maxcount](#maxcount) | int(11) | signed |  | NO | 0 |  |  |
| [stackable](#stackable) | int(11) | signed |  | YES | 1 |  |  |
| [ContainerSlots](#containerslots) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [StatsCount](#statscount) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_type1](#stat_type1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value1](#stat_value1) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type2](#stat_type2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value2](#stat_value2) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type3](#stat_type3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value3](#stat_value3) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type4](#stat_type4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value4](#stat_value4) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type5](#stat_type5) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value5](#stat_value5) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type6](#stat_type6) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value6](#stat_value6) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type7](#stat_type7) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value7](#stat_value7) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type8](#stat_type8) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value8](#stat_value8) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type9](#stat_type9) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value9](#stat_value9) | smallint(6) | signed |  | NO | 0 |  |  |
| [stat_type10](#stat_type10) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [stat_value10](#stat_value10) | smallint(6) | signed |  | NO | 0 |  |  |
| [ScalingStatDistribution](#scalingstatdistribution) | smallint(6) | signed |  | NO | 0 |  |  |
| [ScalingStatValue](#scalingstatvalue) | int(10) | unsigned |  | NO | 0 |  |  |
| [dmg_min1](#dmg_min1) | float |  |  | NO | 0 |  |  |
| [dmg_max1](#dmg_max1) | float |  |  | NO | 0 |  |  |
| [dmg_type1](#dmg_type1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [dmg_min2](#dmg_min2) | float |  |  | NO | 0 |  |  |
| [dmg_max2](#dmg_max2) | float |  |  | NO | 0 |  |  |
| [dmg_type2](#dmg_type2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [armor](#armor) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [holy_res](#holy_res) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [fire_res](#fire_res) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [nature_res](#nature_res) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [frost_res](#frost_res) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [shadow_res](#shadow_res) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [arcane_res](#arcane_res) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [delay](#delay) | smallint(5) | unsigned |  | NO | 1000 |  |  |
| [ammo_type](#ammo_type) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RangedModRange](#rangedmodrange) | float |  |  | NO | 0 |  |  |
| [spellid_1](#spellid_1) | mediumint(8) | signed |  | NO | 0 |  |  |
| [spelltrigger_1](#spelltrigger_1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [spellcharges_1](#spellcharges_1) | smallint(6) | signed |  | NO | 0 |  |  |
| [spellppmRate_1](#spellppmrate_1) | float |  |  | NO | 0 |  |  |
| [spellcooldown_1](#spellcooldown_1) | int(11) | signed |  | NO | -1 |  |  |
| [spellcategory_1](#spellcategory_1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_1](#spellcategorycooldown_1) | int(11) | signed |  | NO | -1 |  |  |
| [spellid_2](#spellid_2) | mediumint(8) | signed |  | NO | 0 |  |  |
| [spelltrigger_2](#spelltrigger_2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [spellcharges_2](#spellcharges_2) | smallint(6) | signed |  | NO | 0 |  |  |
| [spellppmRate_2](#spellppmrate_2) | float |  |  | NO | 0 |  |  |
| [spellcooldown_2](#spellcooldown_2) | int(11) | signed |  | NO | -1 |  |  |
| [spellcategory_2](#spellcategory_2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_2](#spellcategorycooldown_2) | int(11) | signed |  | NO | -1 |  |  |
| [spellid_3](#spellid_3) | mediumint(8) | signed |  | NO | 0 |  |  |
| [spelltrigger_3](#spelltrigger_3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [spellcharges_3](#spellcharges_3) | smallint(6) | signed |  | NO | 0 |  |  |
| [spellppmRate_3](#spellppmrate_3) | float |  |  | NO | 0 |  |  |
| [spellcooldown_3](#spellcooldown_3) | int(11) | signed |  | NO | -1 |  |  |
| [spellcategory_3](#spellcategory_3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_3](#spellcategorycooldown_3) | int(11) | signed |  | NO | -1 |  |  |
| [spellid_4](#spellid_4) | mediumint(8) | signed |  | NO | 0 |  |  |
| [spelltrigger_4](#spelltrigger_4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [spellcharges_4](#spellcharges_4) | smallint(6) | signed |  | NO | 0 |  |  |
| [spellppmRate_4](#spellppmrate_4) | float |  |  | NO | 0 |  |  |
| [spellcooldown_4](#spellcooldown_4) | int(11) | signed |  | NO | -1 |  |  |
| [spellcategory_4](#spellcategory_4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_4](#spellcategorycooldown_4) | int(11) | signed |  | NO | -1 |  |  |
| [spellid_5](#spellid_5) | mediumint(8) | signed |  | NO | 0 |  |  |
| [spelltrigger_5](#spelltrigger_5) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [spellcharges_5](#spellcharges_5) | smallint(6) | signed |  | NO | 0 |  |  |
| [spellppmRate_5](#spellppmrate_5) | float |  |  | NO | 0 |  |  |
| [spellcooldown_5](#spellcooldown_5) | int(11) | signed |  | NO | -1 |  |  |
| [spellcategory_5](#spellcategory_5) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_5](#spellcategorycooldown_5) | int(11) | signed |  | NO | -1 |  |  |
| [bonding](#bonding) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [description](#description) | varchar(255) | signed |  | NO | '' |  |  |
| [PageText](#pagetext) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [LanguageID](#languageid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PageMaterial](#pagematerial) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [startquest](#startquest) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [lockid](#lockid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [Material](#material) | tinyint(4) | signed |  | NO | 0 |  |  |
| [sheath](#sheath) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [RandomProperty](#randomproperty) | mediumint(8) | signed |  | NO | 0 |  |  |
| [RandomSuffix](#randomsuffix) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [block](#block) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [itemset](#itemset) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [MaxDurability](#maxdurability) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [area](#area) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [Map](#map) | smallint(6) | signed |  | NO | 0 |  |  |
| [BagFamily](#bagfamily) | mediumint(8) | signed |  | NO | 0 |  |  |
| [TotemCategory](#totemcategory) | mediumint(8) | signed |  | NO | 0 |  |  |
| [socketColor_1](#socketcolor_1) | tinyint(4) | signed |  | NO | 0 |  |  |
| [socketContent_1](#socketcontent_1) | mediumint(8) | signed |  | NO | 0 |  |  |
| [socketColor_2](#socketcolor_2) | tinyint(4) | signed |  | NO | 0 |  |  |
| [socketContent_2](#socketcontent_2) | mediumint(8) | signed |  | NO | 0 |  |  |
| [socketColor_3](#socketcolor_3) | tinyint(4) | signed |  | NO | 0 |  |  |
| [socketContent_3](#socketcontent_3) | mediumint(8) | signed |  | NO | 0 |  |  |
| [socketBonus](#socketbonus) | mediumint(8) | signed |  | NO | 0 |  |  |
| [GemProperties](#gemproperties) | mediumint(8) | signed |  | NO | 0 |  |  |
| [RequiredDisenchantSkill](#requireddisenchantskill) | smallint(6) | signed |  | NO | -1 |  |  |
| [ArmorDamageModifier](#armordamagemodifier) | float |  |  | NO | 0 |  |  |
| [duration](#duration) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemLimitCategory](#itemlimitcategory) | smallint(6) | signed |  | NO | 0 |  |  |
| [HolidayId](#holidayid) | int(11) | unsigned |  | NO | 0 |  |  |
| [ScriptName](#scriptname) | varchar(64) | signed |  | NO | '' |  |  |
| [DisenchantID](#disenchantid) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [FoodType](#foodtype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [minMoneyLoot](#minmoneyloot) | int(10) | unsigned |  | NO | 0 |  |  |
| [maxMoneyLoot](#maxmoneyloot) | int(10) | unsigned |  | NO | 0 |  |  |
| [flagsCustom](#flagscustom) | int(10) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint(5) | signed |  | YES | 0 |  |  |
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

### stat_type1
*- no description -*
&nbsp;

### stat_value1
*- no description -*
&nbsp;

### stat_type2
*- no description -*
&nbsp;

### stat_value2
*- no description -*
&nbsp;

### stat_type3
*- no description -*
&nbsp;

### stat_value3
*- no description -*
&nbsp;

### stat_type4
*- no description -*
&nbsp;

### stat_value4
*- no description -*
&nbsp;

### stat_type5
*- no description -*
&nbsp;

### stat_value5
*- no description -*
&nbsp;

### stat_type6
*- no description -*
&nbsp;

### stat_value6
*- no description -*
&nbsp;

### stat_type7
*- no description -*
&nbsp;

### stat_value7
*- no description -*
&nbsp;

### stat_type8
*- no description -*
&nbsp;

### stat_value8
*- no description -*
&nbsp;

### stat_type9
*- no description -*
&nbsp;

### stat_value9
*- no description -*
&nbsp;

### stat_type10
*- no description -*
&nbsp;

### stat_value10
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

### spellid_1
*- no description -*
&nbsp;

### spelltrigger_1
*- no description -*
&nbsp;

### spellcharges_1
*- no description -*
&nbsp;

### spellppmRate_1
*- no description -*
&nbsp;

### spellcooldown_1
*- no description -*
&nbsp;

### spellcategory_1
*- no description -*
&nbsp;

### spellcategorycooldown_1
*- no description -*
&nbsp;

### spellid_2
*- no description -*
&nbsp;

### spelltrigger_2
*- no description -*
&nbsp;

### spellcharges_2
*- no description -*
&nbsp;

### spellppmRate_2
*- no description -*
&nbsp;

### spellcooldown_2
*- no description -*
&nbsp;

### spellcategory_2
*- no description -*
&nbsp;

### spellcategorycooldown_2
*- no description -*
&nbsp;

### spellid_3
*- no description -*
&nbsp;

### spelltrigger_3
*- no description -*
&nbsp;

### spellcharges_3
*- no description -*
&nbsp;

### spellppmRate_3
*- no description -*
&nbsp;

### spellcooldown_3
*- no description -*
&nbsp;

### spellcategory_3
*- no description -*
&nbsp;

### spellcategorycooldown_3
*- no description -*
&nbsp;

### spellid_4
*- no description -*
&nbsp;

### spelltrigger_4
*- no description -*
&nbsp;

### spellcharges_4
*- no description -*
&nbsp;

### spellppmRate_4
*- no description -*
&nbsp;

### spellcooldown_4
*- no description -*
&nbsp;

### spellcategory_4
*- no description -*
&nbsp;

### spellcategorycooldown_4
*- no description -*
&nbsp;

### spellid_5
*- no description -*
&nbsp;

### spelltrigger_5
*- no description -*
&nbsp;

### spellcharges_5
*- no description -*
&nbsp;

### spellppmRate_5
*- no description -*
&nbsp;

### spellcooldown_5
*- no description -*
&nbsp;

### spellcategory_5
*- no description -*
&nbsp;

### spellcategorycooldown_5
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

### socketColor_1
*- no description -*
&nbsp;

### socketContent_1
*- no description -*
&nbsp;

### socketColor_2
*- no description -*
&nbsp;

### socketContent_2
*- no description -*
&nbsp;

### socketColor_3
*- no description -*
&nbsp;

### socketContent_3
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
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/world/item_set_names_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_names_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/world/item_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

