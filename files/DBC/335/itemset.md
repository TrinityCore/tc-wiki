---
title: ItemSet.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itemrandomsuffix" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemRandomSuffix'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemsubclass" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemSubClass'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemSet.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=itemset&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemSet)
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
| 18 | [ItemID_0](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 19 | [ItemID_1](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 20 | [ItemID_2](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 21 | [ItemID_3](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 22 | [ItemID_4](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 23 | [ItemID_5](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 24 | [ItemID_6](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 25 | [ItemID_7](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 26 | [ItemID_8](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 27 | [ItemID_9](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 28 | [ItemID_10](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 29 | [ItemID_11](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 30 | [ItemID_12](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 31 | [ItemID_13](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 32 | [ItemID_14](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 33 | [ItemID_15](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 34 | [ItemID_16](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 35 | [SetSpellID_0](#setspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 36 | [SetSpellID_1](#setspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 37 | [SetSpellID_2](#setspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 38 | [SetSpellID_3](#setspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 39 | [SetSpellID_4](#setspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 40 | [SetSpellID_5](#setspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 41 | [SetSpellID_6](#setspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 42 | [SetSpellID_7](#setspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 43 | [SetThreshold_0](#setthreshold) | uint32 |  |
| 44 | [SetThreshold_1](#setthreshold) | uint32 |  |
| 45 | [SetThreshold_2](#setthreshold) | uint32 |  |
| 46 | [SetThreshold_3](#setthreshold) | uint32 |  |
| 47 | [SetThreshold_4](#setthreshold) | uint32 |  |
| 48 | [SetThreshold_5](#setthreshold) | uint32 |  |
| 49 | [SetThreshold_6](#setthreshold) | uint32 |  |
| 50 | [SetThreshold_7](#setthreshold) | uint32 |  |
| 51 | [RequiredSkill](#requiredskill) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skillline#id-alt) |
| 52 | [RequiredSkillRank](#requiredskillrank) | uint32 |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
<code>Col: 1 &ndash; 17 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### ItemID
<code>Col: 18 &ndash; 34 (uint32)</code>

Col 28 &ndash; 34 empty in 3.3.5a and unused in TC.
&nbsp;

### SetSpellID
<code>Col: 35 &ndash; 42 (uint32)</code>

*- no description -*
&nbsp;

### SetThreshold
<code>Col: 43 &ndash; 50 (uint32)</code>

Number of pieces required to activate **SetSpellID**.
&nbsp;

### RequiredSkill
<code>Col: 51 (uint32)</code>

*- no description -*
&nbsp;

### RequiredSkillRank
<code>Col: 52 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itemrandomsuffix" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemRandomSuffix'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemsubclass" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemSubClass'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
