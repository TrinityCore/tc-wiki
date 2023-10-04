---
title: LightParams.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/lightintband" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LightIntBand'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lightskybox" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LightSkybox'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# LightParams.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=lightparams&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LightParams)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [HighlightSky](#highlightsky) | uint32 |  |
| 2 | [LightSkyboxID](#lightskyboxid) | uint32 | [LightSkybox.dbc/0](/files/DBC/335/lightskybox#id) |
| 3 | [Glow](#glow) | float |  |
| 4 | [WaterShallowAlpha](#watershallowalpha) | float |  |
| 5 | [WaterDeepAlpha](#waterdeepalpha) | float |  |
| 6 | [OceanShallowAlpha](#oceanshallowalpha) | float |  |
| 7 | [OceanDeepAlpha](#oceandeepalpha) | float |  |
| 8 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

* [LightIntBand ID](/files/DBC/335/lightintband#id) = **ID** \* 6 - [0 &ndash; 5]
* [LightFloatBand.dbc/0](/files/DBC/335/lightfloatband#id) = **ID** \* 18 - [0 &ndash; 17]
&nbsp;

### HighlightSky
:x: <code>Col: 1 (bool)</code>

*- no description -*
&nbsp;

### LightSkyboxID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Glow
:x: <code>Col: 3 (float)</code>

*- no description -*
&nbsp;

### WaterShallowAlpha
:x: <code>Col: 4 (float)</code>

*- no description -*
&nbsp;

### WaterDeepAlpha
:x: <code>Col: 5 (float)</code>

*- no description -*
&nbsp;

### OceanShallowAlpha
:x: <code>Col: 60 (float)</code>

*- no description -*
&nbsp;

### OceanDeepAlpha
:x: <code>Col: 7 (float)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/lightintband" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LightIntBand'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/lightskybox" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LightSkybox'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
