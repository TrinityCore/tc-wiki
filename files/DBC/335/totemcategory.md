---
title: TotemCategory.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/terraintypesounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'TerrainTypeSounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/transportanimation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'TransportAnimation'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# TotemCategory.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=totemcategory&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/TotemCategory)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Name_0](#name) | string |  |
| 2 | [Name_1](#name) | string |  |
| 3 | [Name_2](#name) | string |  |
| 4 | [Name_3](#name) | string |  |
| 5 | [Name_4](#name) | string |  |
| 6 | [Name_5](#name) | string |  |
| 7 | [Name_6](#name) | string |  |
| 8 | [Name_7](#name) | string |  |
| 9 | [Name_8](#name) | string |  |
| 10 | [Name_9](#name) | string |  |
| 11 | [Name_10](#name) | string |  |
| 12 | [Name_11](#name) | string |  |
| 13 | [Name_12](#name) | string |  |
| 14 | [Name_13](#name) | string |  |
| 15 | [Name_14](#name) | string |  |
| 16 | [Name_15](#name) | string |  |
| 17 | [Name_lang_mask](#name) | uint32 |  |
| 18 | [TotemCategoryType](#totemcategorytype) | uint32 |  |
| 19 | [TotemCategoryMask](#totemcategorymask) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 1 &ndash; 17 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### TotemCategoryType
<code>Col: 18 (uint32)</code>

[`enum TotemCategoryType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L439-L448)
| ID | Name |
|----|------|
| 1 | TOTEM_CATEGORY_TYPE_KNIFE |
| 2 | TOTEM_CATEGORY_TYPE_TOTEM |
| 3 | TOTEM_CATEGORY_TYPE_ROD |
| 21 | TOTEM_CATEGORY_TYPE_PICK |
| 22 | TOTEM_CATEGORY_TYPE_STONE |
| 23 | TOTEM_CATEGORY_TYPE_HAMMER |
| 24 | TOTEM_CATEGORY_TYPE_SPANNER |
{.dense}

&nbsp;

### TotemCategoryMask
<code>Col: 19 (uint32)</code>

Compatibility mask for same **TotemCategoryType**: different for totems, compatible from high to low for rods

For instance for totems:
> bit 0 = earth
> bit 1 = air
> bit 2 = fire
> bit 3 = water
"Master Totem" has the bitmask 0b1111, meaning it can be used instead of all four normal totems.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/terraintypesounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'TerrainTypeSounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/transportanimation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'TransportAnimation'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
