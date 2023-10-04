---
title: WorldSafeLocs.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/worldmaptransforms" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldMapTransforms'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldstateui" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldStateUI'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# WorldSafeLocs.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=worldsafelocs&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WorldSafeLocs)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Continent](#continent) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [Loc_X](#loc) | float |  |
| 3 | [Loc_Y](#loc) | float |  |
| 4 | [Loc_Z](#loc) | float |  |
| 5 | [AreaName_0](#areaname) | string |  |
| 6 | [AreaName_1](#areaname) | string |  |
| 7 | [AreaName_2](#areaname) | string |  |
| 8 | [AreaName_3](#areaname) | string |  |
| 9 | [AreaName_4](#areaname) | string |  |
| 10 | [AreaName_5](#areaname) | string |  |
| 11 | [AreaName_6](#areaname) | string |  |
| 12 | [AreaName_7](#areaname) | string |  |
| 13 | [AreaName_8](#areaname) | string |  |
| 14 | [AreaName_9](#areaname) | string |  |
| 15 | [AreaName_10](#areaname) | string |  |
| 16 | [AreaName_11](#areaname) | string |  |
| 17 | [AreaName_12](#areaname) | string |  |
| 18 | [AreaName_13](#areaname) | string |  |
| 19 | [AreaName_14](#areaname) | string |  |
| 20 | [AreaName_15](#areaname) | string |  |
| 21 | [AreaName_lang_mask](#areaname) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Continent
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Loc
<code>Col: 2 &ndash; 4 ([DBCPosition3D](/how-to/worldposition))</code>

*- no description -*
&nbsp;

### AreaName
:x: <code>Col: 5 &ndash; 21 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/worldmaptransforms" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WorldMapTransforms'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldstateui" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldStateUI'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
