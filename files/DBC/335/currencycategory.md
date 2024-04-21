---
title: CurrencyCategory.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/creaturetype" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureType'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/currencytypes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CurrencyTypes'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CurrencyCategory.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=currencycategory&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CurrencyCategory)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
| 2 | [Name_0](#name-alt) | string |  |
| 3 | [Name_1](#name-alt) | string |  |
| 4 | [Name_2](#name-alt) | string |  |
| 5 | [Name_3](#name-alt) | string |  |
| 6 | [Name_4](#name-alt) | string |  |
| 7 | [Name_5](#name-alt) | string |  |
| 8 | [Name_6](#name-alt) | string |  |
| 9 | [Name_7](#name-alt) | string |  |
| 10 | [Name_8](#name-alt) | string |  |
| 11 | [Name_9](#name-alt) | string |  |
| 12 | [Name_10](#name-alt) | string |  |
| 13 | [Name_11](#name-alt) | string |  |
| 14 | [Name_12](#name-alt) | string |  |
| 15 | [Name_13](#name-alt) | string |  |
| 16 | [Name_14](#name-alt) | string |  |
| 17 | [Name_15](#name-alt) | string |  |
| 18 | [Name_lang_mask](#name-alt) | uint32 |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 1 (uint32)</code>

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x1 | FLAG_LESS_IMPORTANT | all with flag are sorted after others |
| 2 | 0x2 | FLAG_IS_UNUSED_CATEGORY | the "unused" category, last one with flag is used, should only be set once |
{.dense}

&nbsp;

### Name <!-- {#name-alt} -->
:x: <code>Col: 2 &ndash; 18 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/creaturetype" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureType'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/currencytypes" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CurrencyTypes'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
