---
title: ItemRandomProperties.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itempurchasegroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemPurchaseGroup'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemrandomsuffix" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemRandomSuffix'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemRandomProperties.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=itemrandomproperties&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemRandomProperties)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [InternalName](#internalname) | string |  |
| 2 | [Enchantment_0](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 3 | [Enchantment_1](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 4 | [Enchantment_2](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 5 | [Enchantment_3](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 6 | [Enchantment_4](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 7 | [Name_0](#name) | string |  |
| 8 | [Name_1](#name) | string |  |
| 9 | [Name_2](#name) | string |  |
| 10 | [Name_3](#name) | string |  |
| 11 | [Name_4](#name) | string |  |
| 12 | [Name_5](#name) | string |  |
| 13 | [Name_6](#name) | string |  |
| 14 | [Name_7](#name) | string |  |
| 15 | [Name_8](#name) | string |  |
| 16 | [Name_9](#name) | string |  |
| 17 | [Name_10](#name) | string |  |
| 18 | [Name_11](#name) | string |  |
| 19 | [Name_12](#name) | string |  |
| 20 | [Name_13](#name) | string |  |
| 21 | [Name_14](#name) | string |  |
| 22 | [Name_15](#name) | string |  |
| 23 | [Name_lang_mask](#name) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### InternalName
:x: <code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### Enchantment
<code>Col: 2 &ndash; 6 (uint32)</code>

Col 5 + 6 empty in 3.3.5a and unused in TC.
&nbsp;

### Name
<code>Col: 7 &ndash; 23 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itempurchasegroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemPurchaseGroup'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemrandomsuffix" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemRandomSuffix'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
