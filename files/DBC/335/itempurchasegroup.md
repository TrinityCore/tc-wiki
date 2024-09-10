---
title: ItemPurchaseGroup.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itempetfood" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemPetFood'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemrandomproperties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemRandomProperties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemPurchaseGroup.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemPurchaseGroup)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [ItemID_0](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 2 | [ItemID_1](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 3 | [ItemID_2](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 4 | [ItemID_3](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 5 | [ItemID_4](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 6 | [ItemID_5](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 7 | [ItemID_6](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 8 | [ItemID_7](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 9 | [Name_0](#name-alt) | string |  |
| 10 | [Name_1](#name-alt) | string |  |
| 11 | [Name_2](#name-alt) | string |  |
| 12 | [Name_3](#name-alt) | string |  |
| 13 | [Name_4](#name-alt) | string |  |
| 14 | [Name_5](#name-alt) | string |  |
| 15 | [Name_6](#name-alt) | string |  |
| 16 | [Name_7](#name-alt) | string |  |
| 17 | [Name_8](#name-alt) | string |  |
| 18 | [Name_9](#name-alt) | string |  |
| 19 | [Name_10](#name-alt) | string |  |
| 20 | [Name_11](#name-alt) | string |  |
| 21 | [Name_12](#name-alt) | string |  |
| 22 | [Name_13](#name-alt) | string |  |
| 23 | [Name_14](#name-alt) | string |  |
| 24 | [Name_15](#name-alt) | string |  |
| 25 | [Name_lang_mask](#name-alt) | uint32 |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ItemID
<code>Col: 1 &ndash; 8 (uint32)</code>

*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
:x: <code>Col: 9 &ndash; 25 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itempetfood" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemPetFood'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemrandomproperties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemRandomProperties'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
