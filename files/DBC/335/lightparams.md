---
title: LightParams.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# LightParams.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LightParams)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [HighlightSky](#highlightsky) | uint32 |  |
| 2 | [LightSkyboxID](#lightskyboxid) | uint32 | [LightSkybox.dbc/0](/files/DBC/335/lightskybox#id-alt) |
| 3 | [Glow](#glow) | float |  |
| 4 | [WaterShallowAlpha](#watershallowalpha) | float |  |
| 5 | [WaterDeepAlpha](#waterdeepalpha) | float |  |
| 6 | [OceanShallowAlpha](#oceanshallowalpha) | float |  |
| 7 | [OceanDeepAlpha](#oceandeepalpha) | float |  |
| 8 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

* [LightIntBand ID](/files/DBC/335/lightintband#id-alt) = **ID** \* 6 - [0 &ndash; 5]
* [LightFloatBand.dbc/0](/files/DBC/335/lightfloatband#id-alt) = **ID** \* 18 - [0 &ndash; 17]
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

