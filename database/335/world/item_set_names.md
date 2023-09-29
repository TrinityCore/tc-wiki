---
title: item_set_names
description:
published: true
date: 2023-07-11T13:50:21.959Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:06.438Z
---

<a href="https://trinitycore.info/en/database/335/world/item_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/item_set_names_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_set_names_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains the item names displayed in an items tooltip in the itemset overview.
Yes those names can be different from the actual item.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint | unsigned | PRI | NO |  |  |  |
| [name](#name) | varchar(255) |  |  | NO | '' |  |  |
| [InventoryType](#inventorytype) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### entry
An [item_template.entry](../world/item_template#entry) that must be present in [ItemSet](/files/DBC/335/itemset)
&nbsp;

### name
Name to be displayed
&nbsp;

### InventoryType
from [`enum InventoryType`](https://github.com/TrinityCore/TrinityCore/tree/3.3.5/src/server/game/Entities/Item/ItemTemplate.h)
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

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/item_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/item_set_names_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'item_set_names_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
