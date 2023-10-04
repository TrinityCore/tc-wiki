---
title: LightFloatBand.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/light" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Light'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lightintband" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LightIntBand'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# LightFloatBand.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=lightfloatband&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LightFloatBand)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 1 | [NumEntries](#id) | uint32 |  |
| 2 | [Time_0](#time) | uint32 |  |
| 3 | [Time_1](#time) | uint32 |  |
| 4 | [Time_2](#time) | uint32 |  |
| 5 | [Time_3](#time) | uint32 |  |
| 6 | [Time_4](#time) | uint32 |  |
| 7 | [Time_5](#time) | uint32 |  |
| 8 | [Time_6](#time) | uint32 |  |
| 9 | [Time_7](#time) | uint32 |  |
| 10 | [Time_8](#time) | uint32 |  |
| 11 | [Time_9](#time) | uint32 |  |
| 12 | [Time_10](#time) | uint32 |  |
| 13 | [Time_11](#time) | uint32 |  |
| 14 | [Time_12](#time) | uint32 |  |
| 15 | [Time_13](#time) | uint32 |  |
| 16 | [Time_14](#time) | uint32 |  |
| 17 | [Time_15](#time) | uint32 |  |
| 18 | [Data_0](#data) | float |  |
| 19 | [Data_1](#data) | float |  |
| 20 | [Data_2](#data) | float |  |
| 21 | [Data_3](#data) | float |  |
| 22 | [Data_4](#data) | float |  |
| 23 | [Data_5](#data) | float |  |
| 24 | [Data_6](#data) | float |  |
| 25 | [Data_7](#data) | float |  |
| 26 | [Data_8](#data) | float |  |
| 27 | [Data_9](#data) | float |  |
| 28 | [Data_10](#data) | float |  |
| 29 | [Data_11](#data) | float |  |
| 30 | [Data_12](#data) | float |  |
| 31 | [Data_13](#data) | float |  |
| 32 | [Data_14](#data) | float |  |
| 33 | [Data_15](#data) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

Every [LightParamsID](/files/DBC/335/lightparams#id) corresponds to 6 **ID**s.
`ID = LightParamsID * 6 - 5 + Offset`
| Offset | Comment |
|--------|---------|
| 0 | Fog distance multiplied by 36 - distance at which everything will be hidden by the fog |
| 1 | Fog multiplier - fog distance * fog multiplier = fog start distance. 0-0,999... |
| 2 | Celestial Glow Through - the brightness of the sun and moon as it shows through cloud cover. Note that this effect only appears when the Sun or Moon is being obscured by clouds. 0-1 |
| 3 | Cloud Density - Controls the density of cloud cover in the area. Value range is 0.0 to 1.0. |
| 4 | ? |
| 5 | ? |
{.dense}

&nbsp;

### NumEntries
:x: <code>Col: 1 (uint32)</code>

Number of **Time**/**Data** pairs in use.
&nbsp;

### Time
:x: <code>Col: 2 &ndash; 17 (uint32)</code>

30sec steps from midnight to midnight. (0 &ndash; 2880)
&nbsp;

### Data
:x: <code>Col: 18 &ndash; 33 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/light" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Light'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lightintband" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LightIntBand'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
