---
title: ItemRandomSuffix.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itemrandomproperties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemRandomProperties'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemset" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemSet'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemRandomSuffix.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=itemrandomsuffix&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemRandomSuffix)
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
| 18 | [InternalName](#internalname) | string | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 19 | [Enchantment_0](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 20 | [Enchantment_1](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 21 | [Enchantment_2](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 22 | [Enchantment_3](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 23 | [Enchantment_4](#enchantment) | uint32 | [SpellItemEnchantment.dbc/0](/files/DBC/335/spellitemenchantment#id) |
| 24 | [AllocationPct_0](#allocationpct) | uint32 |  |
| 25 | [AllocationPct_1](#allocationpct) | uint32 |  |
| 26 | [AllocationPct_2](#allocationpct) | uint32 |  |
| 27 | [AllocationPct_3](#allocationpct) | uint32 |  |
| 28 | [AllocationPct_4](#allocationpct) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
<code>Col: 1 &ndash; 17 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### InternalName
:x: <code>Col: 18 (string)</code>

*- no description -*
&nbsp;

### Enchantment
<code>Col: 19 &ndash; 23 (uint32)</code>

Col 22 + 23 empty in 3.3.5a and unused in TC.
&nbsp;

### AllocationPct
<code>Col: 24 &ndash; 28 (uint32)</code>

Col 27 + 28 empty in 3.3.5a and unused in TC.

<code>amount = [RandPropPoints](/files/DBC/335/randproppoints) value \* **AllocationPct** / 10000</code>
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itemrandomproperties" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemRandomProperties'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemset" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemSet'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
