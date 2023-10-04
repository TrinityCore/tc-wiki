---
title: CharTitles.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/charstartoutfit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CharStartOutfit'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/charvariations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CharVariations'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CharTitles.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=chartitles&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CharTitles)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ConditionID](#conditionid) | uint32 |  |
| 2 | [Name_0](#name) | string |  |
| 3 | [Name_1](#name) | string |  |
| 4 | [Name_2](#name) | string |  |
| 5 | [Name_3](#name) | string |  |
| 6 | [Name_4](#name) | string |  |
| 7 | [Name_5](#name) | string |  |
| 8 | [Name_6](#name) | string |  |
| 9 | [Name_7](#name) | string |  |
| 10 | [Name_8](#name) | string |  |
| 11 | [Name_9](#name) | string |  |
| 12 | [Name_10](#name) | string |  |
| 13 | [Name_11](#name) | string |  |
| 14 | [Name_12](#name) | string |  |
| 15 | [Name_13](#name) | string |  |
| 16 | [Name_14](#name) | string |  |
| 17 | [Name_15](#name) | string |  |
| 18 | [Name_lang_mask](#name) | uint32 |  |
| 19 | [Name1_0](#name1) | string |  |
| 20 | [Name1_1](#name1) | string |  |
| 21 | [Name1_2](#name1) | string |  |
| 22 | [Name1_3](#name1) | string |  |
| 23 | [Name1_4](#name1) | string |  |
| 24 | [Name1_5](#name1) | string |  |
| 25 | [Name1_6](#name1) | string |  |
| 26 | [Name1_7](#name1) | string |  |
| 27 | [Name1_8](#name1) | string |  |
| 28 | [Name1_9](#name1) | string |  |
| 29 | [Name1_10](#name1) | string |  |
| 30 | [Name1_11](#name1) | string |  |
| 31 | [Name1_12](#name1) | string |  |
| 32 | [Name1_13](#name1) | string |  |
| 33 | [Name1_14](#name1) | string |  |
| 34 | [Name1_15](#name1) | string |  |
| 35 | [Name1_lang_mask](#name1) | uint32 |  |
| 36 | [MaskID](#maskid) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

Title ids, for example in Quest::GetCharTitleId()
&nbsp;

### ConditionID
:x: <code>Col: 1 (uint32)</code>

This is never used by the client. Still looks like pointing somewhere. Serverside?
&nbsp;

### Name
<code>Col: 2 &ndash; 18 ([Loc](/how-to/localization))</code>

Male
&nbsp;

### Name1
<code>Col: 19 &ndash; 35 ([Loc](/how-to/localization))</code>

Female
&nbsp;

### MaskID
<code>Col: 36 (uint32)</code>

Used in PLAYER_CHOSEN_TITLE and `1 << MaskID` in PLAYER__FIELD_KNOWN_TITLES
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/charstartoutfit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CharStartOutfit'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/charvariations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CharVariations'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
