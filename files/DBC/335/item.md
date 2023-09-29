---
title: Item.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/holidays" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Holidays'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itembagfamily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemBagFamily'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Item.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=item&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Item)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ClassID](#classid) | uint32 | [ItemClass.dbc/0](/files/DBC/335/itemclass#id); [ItemSubClass.dbc/0](/files/DBC/335/itemsubclass#classid) |
| 2 | [SubclassID](#subclassid) | uint32 | [ItemSubClass.dbc/1](/files/DBC/335/itemsubclass#subclassid) |
| 3 | [SoundOverrideSubclassID](#soundoverridesubclassid) | int32 |  |
| 4 | [Material](#material) | int32 | [Material.dbc/0](/files/DBC/335/material#id) |
| 5 | [DisplayInfoID](#displayinfoid) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 6 | [InventoryType](#inventorytype) | uint32 |  |
| 7 | [SheatheType](#sheathetype) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ClassID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### SubclassID
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SoundOverrideSubclassID
<code>Col: 3 (int32)</code>

Another WeaponSubClass to use for sound.
&nbsp;

### Material
<code>Col: 4 (int32)</code>

*- no description -*
&nbsp;

### DisplayInfoID
<code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### InventoryType
<code>Col: 6 (uint32)</code>

[`enum InventoryType`](https://github.com/TrinityCore/TrinityCore/tree/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L259-L290)
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

### SheatheType
<code>Col: 7 (uint32)</code>

Controls how the item is put away on the character. Press the 'Z' hotkey to sheathe and unsheathe your weapons.
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

<a href="https://trinitycore.info/files/DBC/335/holidays" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Holidays'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itembagfamily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemBagFamily'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
