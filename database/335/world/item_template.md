---
title: item_template
description:
published: true
date: 2023-07-11T17:13:34.269Z
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
| [stat_type1](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value1](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type2](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value2](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type3](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value3](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type4](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value4](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type5](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value5](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type6](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value6](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type7](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value7](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type8](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value8](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type9](#stat_type[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value9](#stat_value[1-10]) | smallint | signed |  | NO | 0 |  |  |
| [stat_type10](#stat_type1[1-10]) | tinyint | unsigned |  | NO | 0 |  |  |
| [stat_value10](#stat_value1[1-10]) | smallint | signed |  | NO | 0 |  |  |
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
| [spellid_1](#spellid_[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_1](#spelltrigger_[1-5]) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_1](#spellcharges_[1-5]) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_1](#spellppmrate_[1-5]) | float |  |  | NO | 0 |  |  |
| [spellcooldown_1](#spellcooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellcategory_1](#spellcategory_[1-5]) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_1](#spellcategorycooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellid_2](#spellid_[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_2](#spelltrigger_[1-5]) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_2](#spellcharges_[1-5]) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_2](#spellppmrate_[1-5]) | float |  |  | NO | 0 |  |  |
| [spellcooldown_2](#spellcooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellcategory_2](#spellcategory_[1-5]) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_2](#spellcategorycooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellid_3](#spellid_[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_3](#spelltrigger_[1-5]) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_3](#spellcharges_[1-5]) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_3](#spellppmrate_[1-5]) | float |  |  | NO | 0 |  |  |
| [spellcooldown_3](#spellcooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellcategory_3](#spellcategory_[1-5]) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_3](#spellcategorycooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellid_4](#spellid_[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_4](#spelltrigger_[1-5]) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_4](#spellcharges_[1-5]) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_4](#spellppmrate_[1-5]) | float |  |  | NO | 0 |  |  |
| [spellcooldown_4](#spellcooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellcategory_4](#spellcategory_[1-5]) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_4](#spellcategorycooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellid_5](#spellid_[1-5]) | mediumint | signed |  | NO | 0 |  |  |
| [spelltrigger_5](#spelltrigger_[1-5]) | tinyint | unsigned |  | NO | 0 |  |  |
| [spellcharges_5](#spellcharges_[1-5]) | smallint | signed |  | NO | 0 |  |  |
| [spellppmRate_5](#spellppmrate_[1-5]) | float |  |  | NO | 0 |  |  |
| [spellcooldown_5](#spellcooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
| [spellcategory_5](#spellcategory_[1-5]) | smallint | unsigned |  | NO | 0 |  |  |
| [spellcategorycooldown_5](#spellcategorycooldown_[1-5]) | int | signed |  | NO | -1 |  |  |
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
| [socketColor_1](#socketcolor_[1-3]) | tinyint | signed |  | NO | 0 |  |  |
| [socketContent_1](#socketcontent_[1-3]) | mediumint | signed |  | NO | 0 |  |  |
| [socketColor_2](#socketcolor_[1-3]) | tinyint | signed |  | NO | 0 |  |  |
| [socketContent_2](#socketcontent_[1-3]) | mediumint | signed |  | NO | 0 |  |  |
| [socketColor_3](#socketcolor_[1-3]) | tinyint | signed |  | NO | 0 |  |  |
| [socketContent_3](#socketcontent_[1-3]) | mediumint | signed |  | NO | 0 |  |  |
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
The unique ID of the item.
&nbsp;

### class
references [ItemClass ID](/files/DBC/335/itemclass#id)

excerpt
| ID | Name |  | ID | Name |
|----|------|--|----|------|
| 0 | Consumable | | 7 | Trade Goods |
| 1 | Container | | 9 | Recipe |
| 2 | Weapon | | 11 | Quiver |
| 3 | Gem | | 12 | Quest |
| 4 | Armor | | 13 | Key |
| 5 | Reagent | | 15 | Miscellaneous |
| 6 | Projectile | | 16 | Glyph |
{.dense}

&nbsp;

### subclass
references [ItemSubClass ID](/files/DBC/335/itemsubclass#id)

excerpt
| classId | subclassId | Name |  | classId | subclassId | Name |  | classId | subclassId | Name |
|---------|------------|------|--|---------|------------|------|--|---------|------------|------|
| 0 | 0 | Consumable | | 3 | 0 | Red | | 9 | 0 | Book |
| 0 | 1 | Potion | | 3 | 1 | Blue | | 9 | 1 | Leatherworking |
| 0 | 2 | Elixir | | 3 | 2 | Yellow | | 9 | 2 | Tailoring |
| 0 | 3 | Flask | | 3 | 3 | Purple | | 9 | 3 | Engineering |
| 0 | 4 | Scroll | | 3 | 4 | Green | | 9 | 4 | Blacksmithing |
| 0 | 5 | Food & Drink | | 3 | 5 | Orange | | 9 | 5 | Cooking |
| 0 | 6 | Item Enhancement | | 3 | 6 | Meta | | 9 | 6 | Alchemy |
| 0 | 7 | Bandage | | 3 | 7 | Simple | | 9 | 7 | First Aid |
| 0 | 8 | Other | | 3 | 8 | Prismatic | | 9 | 8 | Enchanting |
|  |  |  | |  |  |  | | 9 | 9 | Fishing |
| 1 | 0 | Bag | | 4 | 0 | Miscellaneous | | 9 | 10 | Jewelcrafting |
| 1 | 1 | Soul Bag | | 4 | 1 | Cloth | |  |  |  |
| 1 | 2 | Herb Bag | | 4 | 2 | Leather | | 11 | 2 | Quiver (Arrow Container) |
| 1 | 3 | Enchanting Bag | | 4 | 3 | Mail | | 11 | 3 | Ammo Pouch (Bullet Container) |
| 1 | 4 | Engineering Bag | | 4 | 4 | Plate | |  |  |  |
| 1 | 5 | Gem Bag | | 4 | 6 | Shield | | 12 | 0 | Quest |
| 1 | 6 | Mining Bag | | 4 | 7 | Libram | |  |  |  |
| 1 | 7 | Leatherworking Bag | | 4 | 8 | Idol | | 13 | 0 | Key |
| 1 | 8 | Inscription Bag | | 4 | 9 | Totem | | 13 | 1 | Lockpick |
|  |  |  | | 4 | 10 | Sigil | |  |  |  |
| 2 | 0 | Axe (1H) | |  |  |  | | 14 | 0 | Permanent |
| 2 | 1 | Axe (2H) | | 5 | 0 | Reagent | |  |  |  |
| 2 | 2 | Bow | |  |  |  | | 15 | 0 | Junk |
| 2 | 3 | Gun | | 6 | 2 | Arrow | | 15 | 1 | Reagent |
| 2 | 4 | Mace (1H) | | 6 | 3 | Bullet | | 15 | 2 | Pet |
| 2 | 5 | Mace (2H) | |  |  |  | | 15 | 3 | Holiday |
| 2 | 6 | Polearm | | 7 | 0 | Trade Goods | | 15 | 4 | Other |
| 2 | 7 | Sword (1H) | | 7 | 1 | Parts | | 15 | 5 | Mount |
| 2 | 8 | Sword (2H) | | 7 | 2 | Explosives | |  |  |  |
| 2 | 10 | Staff | | 7 | 3 | Devices | | 16 | 1 | Warrior |
| 2 | 11 | Exotic | | 7 | 4 | Jewelcrafting | | 16 | 2 | Paladin |
| 2 | 12 | Exotic | | 7 | 5 | Cloth | | 16 | 3 | Hunter |
| 2 | 13 | Fist Weapon | | 7 | 6 | Leather | | 16 | 4 | Rogue |
| 2 | 14 | Miscellaneous (Tools) | | 7 | 7 | Metal & Stone | | 16 | 5 | Priest |
| 2 | 15 | Dagger | | 7 | 8 | Meat | | 16 | 6 | Death Knight |
| 2 | 16 | Thrown | | 7 | 9 | Herb | | 16 | 7 | Shaman |
| 2 | 17 | Spear | | 7 | 10 | Elemental | | 16 | 8 | Mage |
| 2 | 18 | Crossbow | | 7 | 11 | Other | | 16 | 9 | Warlock |
| 2 | 19 | Wand | | 7 | 12 | Enchanting | | 16 | 11 | Druid |
| 2 | 20 | Fishing Pole | | 7 | 13 | Materials |  |  |  |  |
|  |  |  | | 7 | 14 | Armor Enchantment |  |  |  |  |
|  |  |  | | 7 | 15 | Weapon Enchantment |  |  |  |  |
{.dense}

&nbsp;

### SoundOverrideSubclass
Weapons have special sounds on impact. This column is used to override these sounds by specifying another subclass.

For example an item with misc subclass can sound like a stave on impact by overriding the subclass here.
&nbsp;

### name
The name of the item.
&nbsp;

### displayid
references [ItemDisplayInfo ID](/files/DBC/335/itemdisplayinfo#id)
Each model has its own icon assigned so this field controls both the model appearance and the icon.
&nbsp;

### Quality
The quality of the item. To use the Bind to Account quality, the item must have `0x08000000` added to it's flags.
| ID | Color | Name |
|----|-------|------|
| 0 | Grey | Poor |
| 1 | White | Common |
| 2 | Green | Uncommon |
| 3 | Blue | Rare |
| 4 | Purple | Epic |
| 5 | Orange | Legendary |
| 6 | Red | Artifact |
| 7 | Gold | Bind to Account |
{.dense}

&nbsp;

### Flags
| Value | Flags | Name | Comment |
|-------|-------|------|---------|
| 1 | 0x00000001 | ITEM_FLAG_NO_PICKUP | |
| 2 | 0x00000002 | ITEM_FLAG_CONJURED | Conjured item |
| 4 | 0x00000004 | ITEM_FLAG_HAS_LOOT | Item can be right clicked to open for loot |
| 8 | 0x00000008 | ITEM_FLAG_HEROIC_TOOLTIP | Makes green "Heroic" text appear on item |
| 16 | 0x00000010 | ITEM_FLAG_DEPRECATED | Cannot equip or use |
| 32 | 0x00000020 | ITEM_FLAG_NO_USER_DESTROY | Item can not be destroyed, except by using spell (item can be reagent for spell) |
| 64 | 0x00000040 | ITEM_FLAG_PLAYERCAST | Item's spells are castable by players |
| 128 | 0x00000080 | ITEM_FLAG_NO_EQUIP_COOLDOWN | No default 30 seconds cooldown when equipped |
| 256 | 0x00000100 | ITEM_FLAG_MULTI_LOOT_QUEST | |
| 512 | 0x00000200 | ITEM_FLAG_IS_WRAPPER | Item can wrap other items |
| 1024 | 0x00000400 | ITEM_FLAG_USES_RESOURCES | |
| 2048 | 0x00000800 | ITEM_FLAG_MULTI_DROP | Item is party loot and can be looted by all - Looting this item does not remove it from available loot |
| 4096 | 0x00001000 | ITEM_FLAG_ITEM_PURCHASE_RECORD | Item can be returned to vendor for its original cost (extended cost) |
| 8192 | 0x00002000 | ITEM_FLAG_PETITION | Item is guild or arena charter |
| 16384 | 0x00004000 | ITEM_FLAG_HAS_TEXT | Only readable items have this (but not all) |
| 32768 | 0x00008000 | ITEM_FLAG_NO_DISENCHANT | |
| 65536 | 0x00010000 | ITEM_FLAG_REAL_DURATION | |
| 131072 | 0x00020000 | ITEM_FLAG_NO_CREATOR | |
| 262144 | 0x00040000 | ITEM_FLAG_IS_PROSPECTABLE | Item can be prospected |
| 524288 | 0x00080000 | ITEM_FLAG_UNIQUE_EQUIPPABLE | You can only equip one of these |
| 1048576 | 0x00100000 | ITEM_FLAG_IGNORE_FOR_AURAS | |
| 2097152 | 0x00200000 | ITEM_FLAG_IGNORE_DEFAULT_ARENA_RESTRICTIONS | Item can be used during arena match |
| 4194304 | 0x00400000 | ITEM_FLAG_NO_DURABILITY_LOSS | Some Thrown weapons have it (and only Thrown) but not all |
| 8388608 | 0x00800000 | ITEM_FLAG_USE_WHEN_SHAPESHIFTED | Item can be used in shapeshift forms |
| 16777216 | 0x01000000 | ITEM_FLAG_HAS_QUEST_GLOW | |
| 33554432 | 0x02000000 | ITEM_FLAG_HIDE_UNUSABLE_RECIPE | Profession recipes: can only be looted if you meet requirements and don't already know it |
| 67108864 | 0x04000000 | ITEM_FLAG_NOT_USEABLE_IN_ARENA | Item cannot be used in arena |
| 134217728 | 0x08000000 | ITEM_FLAG_IS_BOUND_TO_ACCOUNT | Item binds to account and can be sent only to your own characters (Requires **Quality** = 7) |
| 268435456 | 0x10000000 | ITEM_FLAG_NO_REAGENT_COST | Spell is cast ignoring reagents |
| 536870912 | 0x20000000 | ITEM_FLAG_IS_MILLABLE | Item can be milled |
| 1073741824 | 0x40000000 | ITEM_FLAG_REPORT_TO_GUILD_CHAT | |
| 2147483648 | 0x80000000 | ITEM_FLAG_NO_PROGRESSIVE_LOOT | Bind on Pickup tradable |
{.dense}

&nbsp;

### FlagsExtra
| Value | Flags | Name | Comment |
|-------|-------|------|---------|
| 1 | 0x00000001 | ITEM_FLAG2_FACTION_HORDE |  |
| 2 | 0x00000002 | ITEM_FLAG2_FACTION_ALLIANCE |  |
| 4 | 0x00000004 | ITEM_FLAG2_DONT_IGNORE_BUY_PRICE | when item uses extended cost, gold is also required |
| 8 | 0x00000008 | ITEM_FLAG2_CLASSIFY_AS_CASTER |  |
| 16 | 0x00000010 | ITEM_FLAG2_CLASSIFY_AS_PHYSICAL |  |
| 32 | 0x00000020 | ITEM_FLAG2_EVERYONE_CAN_ROLL_NEED |  |
| 64 | 0x00000040 | ITEM_FLAG2_NO_TRADE_BIND_ON_ACQUIRE |  |
| 128 | 0x00000080 | ITEM_FLAG2_CAN_TRADE_BIND_ON_ACQUIRE |  |
| 256 | 0x00000100 | ITEM_FLAG2_CAN_ONLY_ROLL_GREED |  |
| 512 | 0x00000200 | ITEM_FLAG2_CASTER_WEAPON |  |
| 1024 | 0x00000400 | ITEM_FLAG2_DELETE_ON_LOGIN |  |
| 2048 | 0x00000800 | ITEM_FLAG2_INTERNAL_ITEM |  |
| 4096 | 0x00001000 | ITEM_FLAG2_NO_VENDOR_VALUE |  |
| 8192 | 0x00002000 | ITEM_FLAG2_SHOW_BEFORE_DISCOVERED |  |
| 16384 | 0x00004000 | ITEM_FLAG2_OVERRIDE_GOLD_COST |  |
| 32768 | 0x00008000 | ITEM_FLAG2_IGNORE_DEFAULT_RATED_BG_RESTRICTIONS |  |
| 65536 | 0x00010000 | ITEM_FLAG2_NOT_USABLE_IN_RATED_BG |  |
| 131072 | 0x00020000 | ITEM_FLAG2_BNET_ACCOUNT_TRADE_OK |  |
| 262144 | 0x00040000 | ITEM_FLAG2_CONFIRM_BEFORE_USE |  |
| 524288 | 0x00080000 | ITEM_FLAG2_REEVALUATE_BONDING_ON_TRANSFORM |  |
| 1048576 | 0x00100000 | ITEM_FLAG2_NO_TRANSFORM_ON_CHARGE_DEPLETION |  |
| 2097152 | 0x00200000 | ITEM_FLAG2_NO_ALTER_ITEM_VISUAL |  |
| 4194304 | 0x00400000 | ITEM_FLAG2_NO_SOURCE_FOR_ITEM_VISUAL |  |
| 8388608 | 0x00800000 | ITEM_FLAG2_IGNORE_QUALITY_FOR_ITEM_VISUAL_SOURCE |  |
| 16777216 | 0x01000000 | ITEM_FLAG2_NO_DURABILITY |  |
| 33554432 | 0x02000000 | ITEM_FLAG2_ROLE_TANK |  |
| 67108864 | 0x04000000 | ITEM_FLAG2_ROLE_HEALER |  |
| 134217728 | 0x08000000 | ITEM_FLAG2_ROLE_DAMAGE |  |
| 268435456 | 0x10000000 | ITEM_FLAG2_CAN_DROP_IN_CHALLENGE_MODE |  |
| 536870912 | 0x20000000 | ITEM_FLAG2_NEVER_STACK_IN_LOOT_UI |  |
| 1073741824 | 0x40000000 | ITEM_FLAG2_DISENCHANT_TO_LOOT_TABLE |  |
| 2147483648 | 0x80000000 | ITEM_FLAG2_USED_IN_A_TRADESKILL |  |
{.dense}

&nbsp;

### BuyCount
The size of the item stack when sold by vendors. Also if a vendor has limited copies of this item available, everytime the vendor list is refreshed (see [npc_vendor.incrtime](../world/npc_vendor#incrtime)), the number of copies increases by this number.
&nbsp;

### BuyPrice
The price required to pay to buy this item from a vendor, in copper.
&nbsp;

### SellPrice
The price that the vendor will pay you for the item when you sell it and if it is possible to be sold, in copper. Put in 0 if the item cannot be sold to a vendor.
&nbsp;

### InventoryType
In what slot the item can be equipped. (see [`enum InventoryType`](https://github.com/TrinityCore/TrinityCore/tree/3.3.5/src/server/game/Entities/Item/ItemTemplate.h))
| ID | Name |   | ID | Name |
|----|------|---|----|------|
| 1 | INVTYPE_HEAD | | 15 | INVTYPE_RANGED |
| 2 | INVTYPE_NECK | | 16 | INVTYPE_CLOAK |
| 3 | INVTYPE_SHOULDERS | | 17 | INVTYPE_2HWEAPON |
| 4 | INVTYPE_BODY | | 18 | INVTYPE_BAG |
| 5 | INVTYPE_CHEST | | 19 | INVTYPE_TABARD |
| 6 | INVTYPE_WAIST | | 20 | INVTYPE_ROBE |
| 7 | INVTYPE_LEGS | | 21 | INVTYPE_WEAPONMAINHAND |
| 8 | INVTYPE_FEET | | 22 | INVTYPE_WEAPONOFFHAND |
| 9 | INVTYPE_WRISTS | | 23 | INVTYPE_HOLDABLE |
| 10 | INVTYPE_HANDS | | 24 | INVTYPE_AMMO |
| 11 | INVTYPE_FINGER | | 25 | INVTYPE_THROWN |
| 12 | INVTYPE_TRINKET | | 26 | INVTYPE_RANGEDRIGHT |
| 13 | INVTYPE_WEAPON | | 27 | INVTYPE_QUIVER |
| 14 | INVTYPE_SHIELD | | 28 | INVTYPE_RELIC |
{.dense}

&nbsp;

### AllowableClass
Bitmask of [ChrClass IDs](/files/DBC/335/chrclasses#id) controlling which classes can use this item. Use -1 if all classes can use it.
| Value | Flag | Name |
|-------|------|------|
|     1 | 0x0001 | Warrior      |
|     2 | 0x0002 | Paladin      |
|     4 | 0x0004 | Hunter       |
|     8 | 0x0008 | Rogue        |
|    16 | 0x0010 | Priest       |
|    32 | 0x0020 | Death Knight |
|    64 | 0x0040 | Shaman       |
|   128 | 0x0080 | Mage         |
|   256 | 0x0100 | Warlock      |
|  1024 | 0x0400 | Druid        |
{.dense}

&nbsp;

### AllowableRace
Bitmask of [ChrRace IDs](/files/DBC/335/chrraces#id) controlling which races can use this item. Use -1 if all races can use it.
| Value | Flag | Name |
|-------|------|------|
|     1 | 0x0001 | Human     |
|     2 | 0x0002 | Orc       |
|     4 | 0x0004 | Dwarf     |
|     8 | 0x0008 | Night Elf |
|    16 | 0x0010 | Undead    |
|    32 | 0x0020 | Tauren    |
|    64 | 0x0040 | Gnome     |
|   128 | 0x0080 | Troll     |
|   512 | 0x0200 | Blood Elf |
|  1024 | 0x0400 | Draenei   |
{.dense}

&nbsp;

### ItemLevel
Base item level.
&nbsp;

### RequiredLevel
The level that a player must be to equip the item.
&nbsp;

### RequiredSkill
The [SkillLine ID](/files/DBC/335/skillline#id) required to use this item.
&nbsp;

### RequiredSkillRank
The required skill rank the player needs to have to use this item.
&nbsp;

### requiredspell
The [Spell ID](/files/DBC/335/spell#id) that the player needs to have to use this item.
&nbsp;

### requiredhonorrank
The honor rank the player needs to have to use this item.
| ID | Alliance | Horde |
|----|----------|-------|
| 1 | Private | Scout |
| 2 | Corporal | Grunt |
| 3 | Sergeant | Sergeant |
| 4 | Master Sergeant | Senior Sergeant |
| 5 | Sergeant Major | First Sergeant |
| 6 | Knight | Stone Guard |
| 7 | Knight-Lieutenant | Blood Guard |
| 8 | Knight-Captain | Legionnare |
| 9 | Knight-Champion | Centurion |
| 10 | Lieutenant Commander | Champion |
| 11 | Commander | Lieutenant General |
| 12 | Marshal | General |
| 13 | Field Marshal | Warlord |
| 14 | Grand Marshal | High Warlord |
{.dense}

&nbsp;

### RequiredCityRank
*unknown / unused*
&nbsp;

### RequiredReputationFaction
[FactionTemplate ID](/files/DBC/335/factiontemplate#id) that the player has to have a certain ranking with. If this value is 0, the faction of the seller of the item is used.
&nbsp;

### RequiredReputationRank
The rank the player has to have with the faction from **RequiredReputationFaction**.
| ID | Name |
|----|------|
| 0 | Hated |
| 1 | Hostile |
| 2 | Unfriendly |
| 3 | Neutral |
| 4 | Friendly |
| 5 | Honored |
| 6 | Revered |
| 7 | Exalted |
{.dense}

&nbsp;

### maxcount
Maximum number of copies of this item a player can have. Use 0 for infinite.
&nbsp;

### stackable
The number of copies of this item that can be stacked in the same slot.
&nbsp;

### ContainerSlots
If the item is a bag, this field controls the number of slots the bag has.
&nbsp;

### StatsCount
When an item has entries in **stat_type**, this must be updated to display those entries. Must be less or equal to MAX_ITEM_PROTO_STATS (10)
(Unknown how this works)
&nbsp;

### stat_type\[1-10]
The type of stat to modify. (see [`enum ItemModType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h))
| ID | Name | Comment |  | ID | Name | Comment |
|----|------|---------|--|----|------|---------|
| 0 | ITEM_MOD_MANA | | | 27 | ITEM_MOD_CRIT_TAKEN_SPELL_RATING | |
| 1 | ITEM_MOD_HEALTH | | | 28 | ITEM_MOD_HASTE_MELEE_RATING | |
| 3 | ITEM_MOD_AGILITY | | | 29 | ITEM_MOD_HASTE_RANGED_RATING | |
| 4 | ITEM_MOD_STRENGTH | | | 30 | ITEM_MOD_HASTE_SPELL_RATING | |
| 5 | ITEM_MOD_INTELLECT | | | 31 | ITEM_MOD_HIT_RATING | |
| 6 | ITEM_MOD_SPIRIT | | | 32 | ITEM_MOD_CRIT_RATING | |
| 7 | ITEM_MOD_STAMINA | | | 33 | ITEM_MOD_HIT_TAKEN_RATING | |
| 12 | ITEM_MOD_DEFENSE_SKILL_RATING | | | 34 | ITEM_MOD_CRIT_TAKEN_RATING | |
| 13 | ITEM_MOD_DODGE_RATING | | | 35 | ITEM_MOD_RESILIENCE_RATING | |
| 14 | ITEM_MOD_PARRY_RATING | | | 36 | ITEM_MOD_HASTE_RATING | |
| 15 | ITEM_MOD_BLOCK_RATING | | | 37 | ITEM_MOD_EXPERTISE_RATING | |
| 16 | ITEM_MOD_HIT_MELEE_RATING | | | 38 | ITEM_MOD_ATTACK_POWER | |
| 17 | ITEM_MOD_HIT_RANGED_RATING | | | 39 | ITEM_MOD_RANGED_ATTACK_POWER | |
| 18 | ITEM_MOD_HIT_SPELL_RATING | | | 40 | ITEM_MOD_FERAL_ATTACK_POWER | not in 3.3 |
| 19 | ITEM_MOD_CRIT_MELEE_RATING | | | 41 | ITEM_MOD_SPELL_HEALING_DONE | deprecated |
| 20 | ITEM_MOD_CRIT_RANGED_RATING | | | 42 | ITEM_MOD_SPELL_DAMAGE_DONE | deprecated |
| 21 | ITEM_MOD_CRIT_SPELL_RATING | | | 43 | ITEM_MOD_MANA_REGENERATION | |
| 22 | ITEM_MOD_HIT_TAKEN_MELEE_RATING | | | 44 | ITEM_MOD_ARMOR_PENETRATION_RATING |
| 23 | ITEM_MOD_HIT_TAKEN_RANGED_RATING | | | 45 | ITEM_MOD_SPELL_POWER | |
| 24 | ITEM_MOD_HIT_TAKEN_SPELL_RATING | | | 46 | ITEM_MOD_HEALTH_REGEN | |
| 25 | ITEM_MOD_CRIT_TAKEN_MELEE_RATING | | | 47 | ITEM_MOD_SPELL_PENETRATION | |
| 26 | ITEM_MOD_CRIT_TAKEN_RANGED_RATING | | | 48 | ITEM_MOD_BLOCK_VALUE | |
{.dense}

&nbsp;

### stat_value\[1-10]
The value to change the stat type to.
&nbsp;

### ScalingStatDistribution
Similar to Static Stats these are the Stats that grow along with the users level (mainly heirloom leveling gear) use like static stats.
references [ScalingStatDistribution ID](/files/DBC/335/scalingstatdistribution#id)
&nbsp;

### ScalingStatValue
Mask for selecting column in [ScalingStatValues](/files/DBC/335/scalingstatvalues)
&nbsp;

### dmg_min1
The minimum primary damage of the item.
&nbsp;

### dmg_max1
The maximum primary damage of the item.
&nbsp;

### dmg_type1
primary damage school (see `enum SpellSchool`)
| ID | Name |
|----|------|
| 0 | SPELL_SCHOOL_NORMAL |
| 1 | SPELL_SCHOOL_HOLY |
| 2 | SPELL_SCHOOL_FIRE |
| 3 | SPELL_SCHOOL_NATURE |
| 4 | SPELL_SCHOOL_FROST |
| 5 | SPELL_SCHOOL_SHADOW |
| 6 | SPELL_SCHOOL_ARCANE |
{.dense}

&nbsp;

### dmg_min2
The minimum secondary damage of the item.
&nbsp;

### dmg_max2
The maximum secondary damage of the item.
&nbsp;

### dmg_type2
secondary damage school
&nbsp;

### armor
The armor value of the item.
&nbsp;

### holy_res
### fire_res
### nature_res
### frost_res
### shadow_res
### arcane_res
The amount of resistance to this magic school this item may provide.
&nbsp;

### delay
The time in milliseconds between successive hits. (weapon swing speed)
&nbsp;

### ammo_type
The type of ammunition the item uses.
* 2: Arrows
* 3: Bullets
&nbsp;

### RangedModRange
Range Modifier for bows, guns and crossbows. Default range is somewhere between 0.3 and 0.4 yards.

All blizzard ranged weapons have **RangedModRange** 100.
&nbsp;

### spellid_\[1-5]
A [Spell ID](/files/DBC/335/spell#id) that the item can cast or trigger.
&nbsp;

### spelltrigger_\[1-5]
Id from `enum ItemSpelltriggerType`
| ID | Name | Comment |
|----|------|---------|
| 0 | ITEM_SPELLTRIGGER_ON_USE | use after equip cooldown |
| 1 | ITEM_SPELLTRIGGER_ON_EQUIP | |
| 2 | ITEM_SPELLTRIGGER_CHANCE_ON_HIT | |
| 4 | ITEM_SPELLTRIGGER_SOULSTONE | |
| 5 | ITEM_SPELLTRIGGER_ON_NO_DELAY_USE | no equip cooldown |
| 6 | ITEM_SPELLTRIGGER_LEARN_SPELL_ID | used in **spellid_2** with SPELL_GENERIC_LEARN in **spellid_1** |
{.dense}

&nbsp;

### spellcharges_\[1-5]
The number of times N that the item can cast the spell.
* N = 0: infinite uses
* N < 0: After N uses the item is destroyed.
* N > 0: After N uses the spell can no longer be triggered.
&nbsp;

### spellppmRate_\[1-5]
For ITEM_SPELLTRIGGER_CHANCE_ON_HIT (2) the proc per minute rate controls how often the spell is triggered.
<code>probability = (**delay** / 1000) * (**spellppmRate** / 60)</code>
&nbsp;

### spellcooldown_\[1-5]
The cooldown in milliseconds for the specific spell controlling how often the spell can be used. Use -1 to use the default spell cooldown.
> Note: this is not the "internal cooldown" of procs commonly found on items such as trinkets with "Chance on hit" effects.
{.is-info}

&nbsp;

### spellcategory_\[1-5]
The [SpellCategory ID](/files/DBC/335/spellcategory#id) that the spell is in.
&nbsp;

### spellcategorycooldown_\[1-5]
The cooldown time in milliseconds that is applied to all other spells of the same **spellcategory**.
Use -1 to use the default spell cooldown.
&nbsp;

### bonding
Defines when the item is bound to the player.
| ID | Name |
|----|------|
| 0 | NO_BIND |
| 1 | BIND_WHEN_PICKED_UP |
| 2 | BIND_WHEN_EQUIPED |
| 3 | BIND_WHEN_USE |
| 4 | BIND_QUEST_ITEM |
{.dense}

&nbsp;

### description
The description that appears in orange letters at the bottom of the item tooltip.
&nbsp;

### PageText
The [page_text.ID](../world/page_text#id) referring to the text that the item will show (if it is a book or a letter, etc). The item will have a magnifying glass cursor in the game and will show the text when right-clicked.
&nbsp;

### LanguageID
The [Language ID](/files/DBC/335/languages#id), that the item text is written in.
| ID | Language | | ID | Language |
|----|----------|-|----|----------|
| 1 | Orcish | | 12 | Kalimag |
| 2 | Darnassian | |  13 | Gnomish |
| 3 | Taurahe | |  14 | Troll |
| 6 | Dwarvish | |  33 | Gutterspeak |
| 7 | Common | |  35 | Draenei |
| 8 | Demonic | |  36 | Zombie |
| 9 | Titan | |  37 | Gnomish Binary |
| 10 | Thalassian | |  38 | Goblin Binary |
|11 | Draconic | |   |  |
{.dense}

&nbsp;

### PageMaterial
A [PageTextMaterial ID](/files/DBC/335/pagetextmaterial#id) defining the background texture that appears in the page text window.
&nbsp;

### startquest
The [quest_template.ID](../world/quest_template#id) of the quest that this item will start if right-clicked.
&nbsp;

### lockid
A [Lock ID](/files/DBC/335/lock#id) that this item (which serves as a key) is tied to. This field is used in key-door mechanics.
&nbsp;

### Material
A [Material ID](/files/DBC/335/material#id) defining what the item is made of. The value here affects the sound that the item makes when moved.
Use -1 for consumable items like food, reagents, etc.
| ID | Name |
|----|------|
| -1 | Consumables |
| 0 | Not Defined |
| 1 | Metal |
| 2 | Wood |
| 3 | Liquid |
| 4 | Jewelry |
| 5 | Chain |
| 6 | Plate |
| 7 | Cloth |
| 8 | Leather |
{.dense}

&nbsp;

### sheath
Controls how the item is put away on the character. Press the 'Z' hotkey to sheath and unsheathe your weapons.
| ID | Type | Comment |
|----|------|---------|
| 1 | Two Handed Weapon | Diagonally across the back pointing downwards. |
| 2 | Staff | Diagonally across the back pointing upwards. |
| 3 | One Handed | On the left-hand side of the character's waist. |
| 4 | Shield | On the middle of the character's back. |
| 5 | Tool | ? usually not equippable ? |
| 7 | Off hand | On the right-hand side of the character's waist. |
{.dense}

&nbsp;

### RandomProperty
The number in this field points to [item_enchantment_template.entry](../world/item_enchantment_template#entry) and ties in an item's chance at having a random property attached to it when it is generated.
The items enchantments are then ultimately derived from [ItemRandomProperties](/files/DBC/335/itemrandomproperties)

This field and the **RandomSuffix** field CANNOT both have non-zero values.
&nbsp;

### RandomSuffix
The number in this field points to [item_enchantment_template.entry](../world/item_enchantment_template#entry) and ties in an item's chance at having a random suffix attached to it when it is generated.
The items enchantments are then ultimately derived from [ItemRandomSuffix](/files/DBC/335/itemrandomsuffix)

This field and the **RandomProperty** field CANNOT both have non-zero values.
&nbsp;

### block
If the item is a shield, the block chance of the shield.
&nbsp;

### itemset
The ID of the item set that this item belongs to.
> Note: You *can not* make up new item sets. Item sets are defined in [ItemSet](/files/DBC/335/itemset)
{.is-info}

&nbsp;

### MaxDurability
The maximum durability of this item.
&nbsp;

### area
The [AreaTable ID](/files/DBC/335/areatable#id) of the zone in which this item exists. Leaving the zone will detroy it.
&nbsp;

### Map
The [Map ID](/files/DBC/335/map#id) in which this item exists. Leaving the map will detroy it.
&nbsp;

### BagFamily
If the item is a bag, this field is a bitmask of [BagFamily IDs](/files/DBC/335/itembagfamily#id) controlling what types of items can be put in this bag. You can combine different types by adding up the bit numbers.
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x0001 | Arrows |
| 2 | 0x0002 | Bullets |
| 4 | 0x0004 | Soul Shards |
| 8 | 0x0008 | Leatherworking Supplies |
| 16 | 0x0010 | Inscription Supplies |
| 32 | 0x0020 | Herbs |
| 64 | 0x0040 | Enchanting Supplies |
| 128 | 0x0080 | Engineering Supplies |
| 256 | 0x0100 | Keys |
| 512 | 0x0200 | Gems |
| 1024 | 0x0400 | Mining Supplies |
| 2048 | 0x0800 | Soulbound Equipment |
| 4096 | 0x1000 | Vanity Pets |
| 8192 | 0x2000 | Currency Tokens |
| 16384 | 0x4000 | Quest Items |
{.dense}

&nbsp;

### TotemCategory
references [TotemCategory ID](/files/DBC/335/totemcategory#id).
This item is a tool and is required to cast spells with a set [Spell RequiredTotemCategory](/files/DBC/335/spell#requiredtotemcategoryid).

excerpt
| ID | Name |  | ID | Name |
|----|------|--|----|------|
|   2 | Earth Totem                   |  |  62 | Runed Adamantite Rod          |
|   3 | Air Totem                     |  |  63 | Runed Eternium Rod            |
|   4 | Fire Totem                    |  |  81 | Hollow Quill                  |
|   5 | Water Totem                   |  | 101 | Runed Azurite Rod             |
|   6 | Runed Copper Rod              |  | 121 | Virtuoso Inking Set           |
|   7 | Runed Silver Rod              |  | 141 | Drums                         |
|   8 | Runed Golden Rod              |  | 161 | Gnomish Army Knife            |
|   9 | Runed Truesilver Rod          |  | 162 | Blacksmith Hammer             |
|  10 | Runed Arcanite Rod            |  | 165 | Mining Pick                   |
|  12 | Philosopher's Stone           |  | 166 | Skinning Knife                |
|  14 | Arclight Spanner              |  | 167 | Hammer Pick                   |
|  15 | Gyromatic Micro-Adjustor      |  | 168 | Bladed Pickaxe                |
|  21 | Master Totem                  |  | 169 | Flint and Tinder              |
|  41 | Runed Fel Iron Rod            |  | 190 | Runed Titanium Rod            |
{.dense}

&nbsp;

### socketColor_\[1-3]
The color of the socket on this item.
| ID | Name |
|----|------|
| 1 | Meta |
| 2 | Red |
| 4 | Yellow |
| 8 | Blue |
{.dense}

&nbsp;

### socketContent_\[1-3]
Amount of gems of **SocketColor_X**?
&nbsp;

### socketBonus
[SpellItemEnchantment ID](/files/DBC/335/spellitemenchantment#id) to be enabled when all sockets on the item have matching gems.
&nbsp;

### GemProperties
The value here corresponds to a [GemPropery ID](/files/DBC/335/gemproperties#id). This item itself should be of ITEM_CLASS_GEM (3).
&nbsp;

### RequiredDisenchantSkill
The required proficiency in SKILL_ENCHANTING (333) that the player needs to have to be able to disenchant this item.
&nbsp;

### ArmorDamageModifier
Defines how much of an items **armor** is counted as bonus.
This fields value is not added onto the armor total and values less than 0 are ignored entirely.
&nbsp;

### duration
The duration in seconds of ingame time after which the item is destroyed.
Set ITEM_FLAGS_CU_DURATION_REAL_TIME in **flagsCustom** for real time. In that case the item duration will tick even if player is offline.
&nbsp;

### ItemLimitCategory
references [ItemLimitCategory ID](/files/DBC/335/itemlimitcategory#id). It defines how many items of that ItemLimitCategory can be either owned or equipped.
e.g.: The heroic and regular version of a ring/trinket share their ItemLimitCategory.

excerpt
| ID | Name            | qty | equipped |
|----|-----------------|-----|----------|
|  2 | Jeweler's Gems  |   3 |        1 |
|  3 | Healthstone     |   1 |        0 |
|  4 | Mana Gem        |   1 |        0 |
{.dense}

&nbsp;

### HolidayId
references [HolidayID](/files/DBC/335/holidays#id)
If no [game_events](../world/game_event#holiday) with the associated holiday are active this item will be destroyed.
&nbsp;

### ScriptName
The name of the script that the item should use.
&nbsp;

### DisenchantID
references [disenchant_loot_template.Entry](../world/loot_template#entry)
&nbsp;

### FoodType
references [ItemPetFood ID](/files/DBC/335/itempetfood#id)
It defines what Hunter pet family can use this item as food.

> Note: Raw meat and raw fish is not the same as regular meat and fish. It seems that the last two types of diets include grey "poor" types of food that players have no use for but some pets seem to be able to eat. Also, those food types appeared in TBC so most likely only TBC pets will have those types of diets.
{.is-info}

| ID | Name |
|----|------|
| 1 | Meat |
| 2 | Fish |
| 3 | Cheese |
| 4 | Bread |
| 5 | Fungus |
| 6 | Fruit |
| 7 | Raw Meat |
| 8 | Raw Fish |
{.dense}

&nbsp;

### minMoneyLoot
If the item is a container that can contain money, then this field defines the minimum coinage held in this container, in copper.
&nbsp;

### maxMoneyLoot
If the item is a container that can contain money, then this field defines the maximum coinage held in this container, in copper.
&nbsp;

### flagsCustom
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x1 | ITEM_FLAGS_CU_DURATION_REAL_TIME | Item duration will tick even if player is offline |
| 2 | 0x2 | ITEM_FLAGS_CU_IGNORE_QUEST_STATUS | No quest status will be checked when this item drops |
| 4 | 0x4 | ITEM_FLAGS_CU_FOLLOW_LOOT_RULES | Item will always follow group/master/need before greed looting rules |
{.dense}

&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/item_set_names_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_set_names_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/item_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
