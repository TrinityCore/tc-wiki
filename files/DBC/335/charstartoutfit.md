---
title: CharStartOutfit.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/charsections" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CharSections'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/chartitles" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CharTitles'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CharStartOutfit.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=charstartoutfit&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CharStartOutfit)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [RaceID](#raceid) | uint8 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 2 | [ClassID](#classid) | uint8 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 3 | [SexID](#sexid) | uint8 |  |
| 4 | [OutfitID](#outfitid) | uint8 |  |
| 5 | [ItemID_0](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 6 | [ItemID_1](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 7 | [ItemID_2](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 8 | [ItemID_3](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 9 | [ItemID_4](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 10 | [ItemID_5](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 11 | [ItemID_6](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 12 | [ItemID_7](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 13 | [ItemID_8](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 14 | [ItemID_9](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 15 | [ItemID_10](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 16 | [ItemID_11](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 17 | [ItemID_12](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 18 | [ItemID_13](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 19 | [ItemID_14](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 20 | [ItemID_15](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 21 | [ItemID_16](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 22 | [ItemID_17](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 23 | [ItemID_18](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 24 | [ItemID_19](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 25 | [ItemID_20](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 26 | [ItemID_21](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 27 | [ItemID_22](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 28 | [ItemID_23](#itemid) | int32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 29 | [DisplayItemID_0](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 30 | [DisplayItemID_1](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 31 | [DisplayItemID_2](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 32 | [DisplayItemID_3](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 33 | [DisplayItemID_4](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 34 | [DisplayItemID_5](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 35 | [DisplayItemID_6](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 36 | [DisplayItemID_7](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 37 | [DisplayItemID_8](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 38 | [DisplayItemID_9](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 39 | [DisplayItemID_10](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 40 | [DisplayItemID_11](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 41 | [DisplayItemID_12](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 42 | [DisplayItemID_13](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 43 | [DisplayItemID_14](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 44 | [DisplayItemID_15](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 45 | [DisplayItemID_16](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 46 | [DisplayItemID_17](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 47 | [DisplayItemID_18](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 48 | [DisplayItemID_19](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 49 | [DisplayItemID_20](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 50 | [DisplayItemID_21](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 51 | [DisplayItemID_22](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 52 | [DisplayItemID_23](#displayitemid) | int32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id) |
| 53 | [InventoryType_0](#inventorytype) | int32 |  |
| 54 | [InventoryType_1](#inventorytype) | int32 |  |
| 55 | [InventoryType_2](#inventorytype) | int32 |  |
| 56 | [InventoryType_3](#inventorytype) | int32 |  |
| 57 | [InventoryType_4](#inventorytype) | int32 |  |
| 58 | [InventoryType_5](#inventorytype) | int32 |  |
| 59 | [InventoryType_6](#inventorytype) | int32 |  |
| 60 | [InventoryType_7](#inventorytype) | int32 |  |
| 61 | [InventoryType_8](#inventorytype) | int32 |  |
| 62 | [InventoryType_9](#inventorytype) | int32 |  |
| 63 | [InventoryType_10](#inventorytype) | int32 |  |
| 64 | [InventoryType_11](#inventorytype) | int32 |  |
| 65 | [InventoryType_12](#inventorytype) | int32 |  |
| 66 | [InventoryType_13](#inventorytype) | int32 |  |
| 67 | [InventoryType_14](#inventorytype) | int32 |  |
| 68 | [InventoryType_15](#inventorytype) | int32 |  |
| 69 | [InventoryType_16](#inventorytype) | int32 |  |
| 70 | [InventoryType_17](#inventorytype) | int32 |  |
| 71 | [InventoryType_18](#inventorytype) | int32 |  |
| 72 | [InventoryType_19](#inventorytype) | int32 |  |
| 73 | [InventoryType_20](#inventorytype) | int32 |  |
| 74 | [InventoryType_21](#inventorytype) | int32 |  |
| 75 | [InventoryType_22](#inventorytype) | int32 |  |
| 76 | [InventoryType_23](#inventorytype) | int32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### RaceID
<code>Col: 1 (uint8)</code>

*- no description -*
&nbsp;

### ClassID
<code>Col: 2 (uint8)</code>

*- no description -*
&nbsp;

### SexID
<code>Col: 3 (uint8)</code>

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name |
|----|------|
| 0 | GENDER_MALE |
| 1 | GENDER_FEMALE |
| 2 | GENDER_NONE |
{.dense}

&nbsp;

### OutfitID
:x: <code>Col: 4 (uint8)</code>

*- no description -*
&nbsp;

### ItemID
<code>Col: 5 &ndash; 28 (int32)</code>

*- no description -*
&nbsp;

### DisplayItemID
:x: <code>Col: 29 &ndash; 52 (int32)</code>

Not required at server side.
&nbsp;

### InventoryType
:x: <code>Col: 53 &ndash; 76 (int32)</code>

Not required at server side.
[`enum InventoryType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L259-L290)
| ID | Name |
|----|------|
| 0 | INVTYPE_NON_EQUIP |
| 1 | INVTYPE_HEAD |
| 2 | INVTYPE_NECK |
| 3 | INVTYPE_SHOULDERS |
| 4 | INVTYPE_BODY |
| 5 | INVTYPE_CHEST |
| 6 | INVTYPE_WAIST |
| 7 | INVTYPE_LEGS |
| 8 | INVTYPE_FEET |
| 9 | INVTYPE_WRISTS |
| 10 | INVTYPE_HANDS |
| 11 | INVTYPE_FINGER |
| 12 | INVTYPE_TRINKET |
| 13 | INVTYPE_WEAPON |
| 14 | INVTYPE_SHIELD |
| 15 | INVTYPE_RANGED |
| 16 | INVTYPE_CLOAK |
| 17 | INVTYPE_2HWEAPON |
| 18 | INVTYPE_BAG |
| 19 | INVTYPE_TABARD |
| 20 | INVTYPE_ROBE |
| 21 | INVTYPE_WEAPONMAINHAND |
| 22 | INVTYPE_WEAPONOFFHAND |
| 23 | INVTYPE_HOLDABLE |
| 24 | INVTYPE_AMMO |
| 25 | INVTYPE_THROWN |
| 26 | INVTYPE_RANGEDRIGHT |
| 27 | INVTYPE_QUIVER |
| 28 | INVTYPE_RELIC |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/charsections" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CharSections'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/chartitles" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CharTitles'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
