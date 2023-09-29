---
title: LightIntBand.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/lightuint32band" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Lightuint32Band'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lightparams" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LightParams'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# LightIntBand.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=lightintband&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LightIntBand)
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
| 18 | [Data_0](#data) | uint32 |  |
| 19 | [Data_1](#data) | uint32 |  |
| 20 | [Data_2](#data) | uint32 |  |
| 21 | [Data_3](#data) | uint32 |  |
| 22 | [Data_4](#data) | uint32 |  |
| 23 | [Data_5](#data) | uint32 |  |
| 24 | [Data_6](#data) | uint32 |  |
| 25 | [Data_7](#data) | uint32 |  |
| 26 | [Data_8](#data) | uint32 |  |
| 27 | [Data_9](#data) | uint32 |  |
| 28 | [Data_10](#data) | uint32 |  |
| 29 | [Data_11](#data) | uint32 |  |
| 30 | [Data_12](#data) | uint32 |  |
| 31 | [Data_13](#data) | uint32 |  |
| 32 | [Data_14](#data) | uint32 |  |
| 33 | [Data_15](#data) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

Every [LightParamsID](/files/DBC/335/lightparams#id) corresponds to 18 **ID**s.
`ID = LightParamsID * 18 - 17 + Offset`
| Offset | Comment |
|--------|---------|
| 0 | Global diffuse light |
| 1 | Global ambient light |
| 2 | Sky color 0 (top) |
| 3 | Sky color 1 (middle) |
| 4 | Sky color 2 (middle to horizon) |
| 5 | Sky color 3 (above horizon) |
| 6 | Sky color 4 (horizon) |
| 7 | Fog color / background mountains color. Affects color of weather effects as well. |
| 8 | ? |
| 9 | Sun color + sun halo color, specular lighting, sun rays |
| 10 | Sun larger halo color cloud color a1 (base) |
| 11 | ? cloud color B (edge) |
| 12 | Cloud color cloud color a2 (secondary base) |
| 13 | ? |
| 14 | Ocean color \[light] shallow ocean water |
| 15 | Ocean color \[dark] deep ocean water |
| 16 | River color \[light] shallow river water |
| 17 | River color \[dark] deep river water |
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
:x: <code>Col: 18 &ndash; 33 (uint32)</code>

RGB color value.
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/lightuint32band" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Lightuint32Band'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lightparams" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LightParams'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
