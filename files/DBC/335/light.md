---
title: Light.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/lfgdungeons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LfgDungeons'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lightfloatband" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LightFloatBand'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Light.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=light&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Light)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [ContinentID](#continentid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id) |
| 2 | [GameCoords_X](#gamecoords) | float |  |
| 3 | [GameCoords_Y](#gamecoords) | float |  |
| 4 | [GameCoords_Z](#gamecoords) | float |  |
| 5 | [GameFalloffStart](#gamefalloffstart) | float |  |
| 6 | [GameFalloffEnd](#gamefalloffend) | float |  |
| 7 | [LightParamsID_0](#lightparamsid) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 8 | [LightParamsID_1](#lightparamsid) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 9 | [LightParamsID_2](#lightparamsid) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 10 | [LightParamsID_3](#lightparamsid) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 11 | [LightParamsID_4](#lightparamsid) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 12 | [LightParamsID_5](#lightparamsid) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 13 | [LightParamsID_6](#lightparamsid) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 14 | [LightParamsID_7](#lightparamsid) | uint32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
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

### GameCoords
<code>Col: 2 &ndash; 4 ([DBCPosition3D](/how-to/worldposition))</code>

*- no description -*
&nbsp;

### GameFalloffStart
:x: <code>Col: 5 (float)</code>

*- no description -*
&nbsp;

### GameFalloffEnd
:x: <code>Col: 6 (float)</code>

*- no description -*
&nbsp;

### LightParamsID
:x: <code>Col: 7 &ndash; 14 (uint32)</code>

* col 7: ParamsClear - Used in clear weather.
* col 8: ParamsClearWat - Used in clear weather while being underwater.
* col 9: ParamsStorm - Used in rainy/snowy/sandstormy weather.
* col 10: ParamsStormWat - Used in rainy/snowy/sandstormy weather while being underwater.
* col 11: ParamsDeath - Changing this seems to have no effect in 3.3.5a (is death light setting hardcoded?)
* col 12+: ParamsUnk - Unsure. Used in different phases?
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/lfgdungeons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LfgDungeons'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lightfloatband" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LightFloatBand'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
