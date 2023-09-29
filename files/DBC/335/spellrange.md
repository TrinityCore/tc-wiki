---
title: SpellRange.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spellradius" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellRadius'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellrunecost" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellRuneCost'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellRange.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spellrange&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellRange)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [RangeMin_0](#rangemin) | float |  |
| 2 | [RangeMin_1](#rangemin) | float |  |
| 3 | [RangeMax_0](#rangemax) | float |  |
| 4 | [RangeMax_1](#rangemax) | float |  |
| 5 | [Flags](#flags) | uint32 |  |
| 6 | [DisplayName_0](#displayname) | string |  |
| 7 | [DisplayName_1](#displayname) | string |  |
| 8 | [DisplayName_2](#displayname) | string |  |
| 9 | [DisplayName_3](#displayname) | string |  |
| 10 | [DisplayName_4](#displayname) | string |  |
| 11 | [DisplayName_5](#displayname) | string |  |
| 12 | [DisplayName_6](#displayname) | string |  |
| 13 | [DisplayName_7](#displayname) | string |  |
| 14 | [DisplayName_8](#displayname) | string |  |
| 15 | [DisplayName_9](#displayname) | string |  |
| 16 | [DisplayName_10](#displayname) | string |  |
| 17 | [DisplayName_11](#displayname) | string |  |
| 18 | [DisplayName_12](#displayname) | string |  |
| 19 | [DisplayName_13](#displayname) | string |  |
| 20 | [DisplayName_14](#displayname) | string |  |
| 21 | [DisplayName_15](#displayname) | string |  |
| 22 | [DisplayName_lang_mask](#displayname) | uint32 |  |
| 23 | [DisplayNameShort_0](#displaynameshort) | string |  |
| 24 | [DisplayNameShort_1](#displaynameshort) | string |  |
| 25 | [DisplayNameShort_2](#displaynameshort) | string |  |
| 26 | [DisplayNameShort_3](#displaynameshort) | string |  |
| 27 | [DisplayNameShort_4](#displaynameshort) | string |  |
| 28 | [DisplayNameShort_5](#displaynameshort) | string |  |
| 29 | [DisplayNameShort_6](#displaynameshort) | string |  |
| 30 | [DisplayNameShort_7](#displaynameshort) | string |  |
| 31 | [DisplayNameShort_8](#displaynameshort) | string |  |
| 32 | [DisplayNameShort_9](#displaynameshort) | string |  |
| 33 | [DisplayNameShort_10](#displaynameshort) | string |  |
| 34 | [DisplayNameShort_11](#displaynameshort) | string |  |
| 35 | [DisplayNameShort_12](#displaynameshort) | string |  |
| 36 | [DisplayNameShort_13](#displaynameshort) | string |  |
| 37 | [DisplayNameShort_14](#displaynameshort) | string |  |
| 38 | [DisplayNameShort_15](#displaynameshort) | string |  |
| 39 | [DisplayNameShort_lang_mask](#displaynameshort) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### RangeMin
<code>Col: 1 &ndash; 2 (float)</code>

* col 1: Hostile
* col 2: Friendly
&nbsp;

### RangeMax
<code>Col: 3 &ndash; 4 (float)</code>

* col 3: Hostile
* col 4: Friendly
&nbsp;

### Flags
<code>Col: 5 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x1 | Use combat reach range |
| 2 | 0x2 | Long range spell |
{.dense}

&nbsp;

### DisplayName
:x: <code>Col: 6 &ndash; 22 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### DisplayNameShort
:x: <code>Col: 23 &ndash; 39 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spellradius" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellRadius'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellrunecost" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellRuneCost'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
