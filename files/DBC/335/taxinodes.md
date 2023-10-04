---
title: TaxiNodes.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/talenttab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'TalentTab'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/taxipath" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'TaxiPath'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# TaxiNodes.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=taxinodes&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/TaxiNodes)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ContinentID](#continentid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [Pos_X](#pos) | float |  |
| 3 | [Pos_Y](#pos) | float |  |
| 4 | [Pos_Z](#pos) | float |  |
| 5 | [Name_0](#name) | string |  |
| 6 | [Name_1](#name) | string |  |
| 7 | [Name_2](#name) | string |  |
| 8 | [Name_3](#name) | string |  |
| 9 | [Name_4](#name) | string |  |
| 10 | [Name_5](#name) | string |  |
| 11 | [Name_6](#name) | string |  |
| 12 | [Name_7](#name) | string |  |
| 13 | [Name_8](#name) | string |  |
| 14 | [Name_9](#name) | string |  |
| 15 | [Name_10](#name) | string |  |
| 16 | [Name_11](#name) | string |  |
| 17 | [Name_12](#name) | string |  |
| 18 | [Name_13](#name) | string |  |
| 19 | [Name_14](#name) | string |  |
| 20 | [Name_15](#name) | string |  |
| 21 | [Name_16](#name) | string |  |
| 22 | [Name_lang_mask](#name) | uint32 |  |
| 23 | [MountCreatureID_0](#mountcreatureid) | uint32 | [creature entry](/database/335/world/creature_template#entry) |
| 24 | [MountCreatureID_1](#mountcreatureid) | uint32 | [creature entry](/database/335/world/creature_template#entry) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ContinentID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Pos
<code>Col: 2 &ndash; 4 ([DBCPosition3D](/how-to/worldposition))</code>

*- no description -*
&nbsp;

### Name
<code>Col: 5 &ndash; 22 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### MountCreatureID
<code>Col: 23 &ndash; 24 (uint32)</code>

* col 23: Alliance
* col 24: Horde
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/talenttab" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'TalentTab'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/taxipath" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'TaxiPath'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
