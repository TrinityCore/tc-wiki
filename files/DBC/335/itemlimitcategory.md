---
title: ItemLimitCategory.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itemgroupsounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemGroupSounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itempetfood" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemPetFood'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemLimitCategory.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=itemlimitcategory&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemLimitCategory)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Name_0](#name-alt) | string |  |
| 2 | [Name_1](#name-alt) | string |  |
| 3 | [Name_2](#name-alt) | string |  |
| 4 | [Name_3](#name-alt) | string |  |
| 5 | [Name_4](#name-alt) | string |  |
| 6 | [Name_5](#name-alt) | string |  |
| 7 | [Name_6](#name-alt) | string |  |
| 8 | [Name_7](#name-alt) | string |  |
| 9 | [Name_8](#name-alt) | string |  |
| 10 | [Name_9](#name-alt) | string |  |
| 11 | [Name_10](#name-alt) | string |  |
| 12 | [Name_11](#name-alt) | string |  |
| 13 | [Name_12](#name-alt) | string |  |
| 14 | [Name_13](#name-alt) | string |  |
| 15 | [Name_14](#name-alt) | string |  |
| 16 | [Name_15](#name-alt) | string |  |
| 17 | [Name_lang_mask](#name-alt) | uint32 |  |
| 18 | [Quantity](#quantity) | uint32 |  |
| 19 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
:x: <code>Col: 1 &ndash; 17 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Quantity
<code>Col: 18 (uint32)</code>

Max allowed equipped as item or in gem slot.
&nbsp;

### Flags
<code>Col: 19 (uint32)</code>

[`enum ItemLimitCategoryMode`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L366-L370)
| ID | Name | Comment |
|----|------|---------|
| 0 | ITEM_LIMIT_CATEGORY_MODE_HAVE | limit applied to amount items in inventory/bank |
| 1 | ITEM_LIMIT_CATEGORY_MODE_EQUIP | limit applied to amount equipped items (including used gems) |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itemgroupsounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemGroupSounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itempetfood" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemPetFood'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
