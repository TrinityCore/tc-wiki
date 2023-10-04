---
title: DurabilityCosts.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/dungeonmapchunk" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DungeonMapChunk'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/durabilityquality" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DurabilityQuality'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# DurabilityCosts.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=durabilitycosts&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DurabilityCosts)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 | [item level](/database/335/world/item_template#itemlevel) |
| 1 | [WeaponSubClassCost_0](#weaponsubclasscost) | uint32 |  |
| 2 | [WeaponSubClassCost_1](#weaponsubclasscost) | uint32 |  |
| 3 | [WeaponSubClassCost_2](#weaponsubclasscost) | uint32 |  |
| 4 | [WeaponSubClassCost_3](#weaponsubclasscost) | uint32 |  |
| 5 | [WeaponSubClassCost_4](#weaponsubclasscost) | uint32 |  |
| 6 | [WeaponSubClassCost_5](#weaponsubclasscost) | uint32 |  |
| 7 | [WeaponSubClassCost_6](#weaponsubclasscost) | uint32 |  |
| 8 | [WeaponSubClassCost_7](#weaponsubclasscost) | uint32 |  |
| 9 | [WeaponSubClassCost_8](#weaponsubclasscost) | uint32 |  |
| 10 | [WeaponSubClassCost_9](#weaponsubclasscost) | uint32 |  |
| 11 | [WeaponSubClassCost_10](#weaponsubclasscost) | uint32 |  |
| 12 | [WeaponSubClassCost_11](#weaponsubclasscost) | uint32 |  |
| 13 | [WeaponSubClassCost_12](#weaponsubclasscost) | uint32 |  |
| 14 | [WeaponSubClassCost_13](#weaponsubclasscost) | uint32 |  |
| 15 | [WeaponSubClassCost_14](#weaponsubclasscost) | uint32 |  |
| 16 | [WeaponSubClassCost_15](#weaponsubclasscost) | uint32 |  |
| 17 | [WeaponSubClassCost_16](#weaponsubclasscost) | uint32 |  |
| 18 | [WeaponSubClassCost_17](#weaponsubclasscost) | uint32 |  |
| 19 | [WeaponSubClassCost_18](#weaponsubclasscost) | uint32 |  |
| 20 | [WeaponSubClassCost_19](#weaponsubclasscost) | uint32 |  |
| 21 | [WeaponSubClassCost_20](#weaponsubclasscost) | uint32 |  |
| 22 | [ArmorSubClassCost_0](#armorsubclasscost) | uint32 |  |
| 23 | [ArmorSubClassCost_1](#armorsubclasscost) | uint32 |  |
| 24 | [ArmorSubClassCost_2](#armorsubclasscost) | uint32 |  |
| 25 | [ArmorSubClassCost_3](#armorsubclasscost) | uint32 |  |
| 26 | [ArmorSubClassCost_4](#armorsubclasscost) | uint32 |  |
| 27 | [ArmorSubClassCost_5](#armorsubclasscost) | uint32 |  |
| 28 | [ArmorSubClassCost_6](#armorsubclasscost) | uint32 |  |
| 29 | [ArmorSubClassCost_7](#armorsubclasscost) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### WeaponSubClassCost
<code>Col: 1 &ndash; 21 (uint32)</code>

Multiplier to repair cost.

for [item class](/database/335/world/item_template#class) = ITEM_CLASS_WEAPON (2) use col offset [item subclass](/database/335/world/item_template#subclass)

[`enum ItemSubclassWeapon`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L347-L370)
| Offset | Name | Comment |
|--------|------|---------|
| 0 | ITEM_SUBCLASS_WEAPON_AXE |  |
| 1 | ITEM_SUBCLASS_WEAPON_AXE2 |  |
| 2 | ITEM_SUBCLASS_WEAPON_BOW |  |
| 3 | ITEM_SUBCLASS_WEAPON_GUN |  |
| 4 | ITEM_SUBCLASS_WEAPON_MACE |  |
| 5 | ITEM_SUBCLASS_WEAPON_MACE2 |  |
| 6 | ITEM_SUBCLASS_WEAPON_POLEARM |  |
| 7 | ITEM_SUBCLASS_WEAPON_SWORD |  |
| 8 | ITEM_SUBCLASS_WEAPON_SWORD2 |  |
| 9 | ITEM_SUBCLASS_WEAPON_obsolete | always 0 |
| 10 | ITEM_SUBCLASS_WEAPON_STAFF |  |
| 11 | ITEM_SUBCLASS_WEAPON_EXOTIC |  |
| 12 | ITEM_SUBCLASS_WEAPON_EXOTIC2 |  |
| 13 | ITEM_SUBCLASS_WEAPON_FIST |  |
| 14 | ITEM_SUBCLASS_WEAPON_MISC |  |
| 15 | ITEM_SUBCLASS_WEAPON_DAGGER |  |
| 16 | ITEM_SUBCLASS_WEAPON_THROWN |  |
| 17 | ITEM_SUBCLASS_WEAPON_SPEAR |  |
| 18 | ITEM_SUBCLASS_WEAPON_CROSSBOW |  |
| 19 | ITEM_SUBCLASS_WEAPON_WAND |  |
| 20 | ITEM_SUBCLASS_WEAPON_FISHING_POLE |  |
{.dense}

&nbsp;

### ArmorSubClassCost
<code>Col: 22 &ndash; 29 (uint32)</code>

Multiplier to repair cost.

for [item class](/database/335/world/item_template#class) = ITEM_CLASS_ARMOR (4) use col offset [item subclass](/database/335/world/item_template#subclass)

[`enum ItemSubclassArmor`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L393-L406)
| Offset | Name | Comment |
|--------|------|---------|
| 0 | ITEM_SUBCLASS_ARMOR_MISC | always 0 |
| 1 | ITEM_SUBCLASS_ARMOR_CLOTH |  |
| 2 | ITEM_SUBCLASS_ARMOR_LEATHER |  |
| 3 | ITEM_SUBCLASS_ARMOR_MAIL |  |
| 4 | ITEM_SUBCLASS_ARMOR_PLATE |  |
| 5 | ITEM_SUBCLASS_ARMOR_BUCKLER | always 0 |
| 6 | ITEM_SUBCLASS_ARMOR_SHIELD |  |
| 7 | ITEM_SUBCLASS_ARMOR_LIBRAM | always 0 |
| 8 | :x: ITEM_SUBCLASS_ARMOR_IDOL | no col. |
| 9 | :x: ITEM_SUBCLASS_ARMOR_TOTEM | no col. |
| 10 | :x: ITEM_SUBCLASS_ARMOR_SIGIL | no col. |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/dungeonmapchunk" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DungeonMapChunk'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/durabilityquality" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DurabilityQuality'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
