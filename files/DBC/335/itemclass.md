---
title: ItemClass.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/itembagfamily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemBagFamily'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemcondextcosts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemCondExtCosts'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ItemClass.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemClass)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SubClassMapID](#subclassmapid) | uint32 |  |
| 2 | [Flags](#flags) | uint32 |  |
| 3 | [Name_0](#name-alt) | string |  |
| 4 | [Name_1](#name-alt) | string |  |
| 5 | [Name_2](#name-alt) | string |  |
| 6 | [Name_3](#name-alt) | string |  |
| 7 | [Name_4](#name-alt) | string |  |
| 8 | [Name_5](#name-alt) | string |  |
| 9 | [Name_6](#name-alt) | string |  |
| 10 | [Name_7](#name-alt) | string |  |
| 11 | [Name_8](#name-alt) | string |  |
| 12 | [Name_9](#name-alt) | string |  |
| 13 | [Name_10](#name-alt) | string |  |
| 14 | [Name_11](#name-alt) | string |  |
| 15 | [Name_12](#name-alt) | string |  |
| 16 | [Name_13](#name-alt) | string |  |
| 17 | [Name_14](#name-alt) | string |  |
| 18 | [Name_15](#name-alt) | string |  |
| 19 | [Name_lang_mask](#name-alt) | uint32 |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SubClassMapID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 2 (uint32)</code>

* 1: weapon related?
&nbsp;

### Name <!-- {#name-alt} -->
:x: <code>Col: 3 &ndash; 19 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/itembagfamily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ItemBagFamily'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/itemcondextcosts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ItemCondExtCosts'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
