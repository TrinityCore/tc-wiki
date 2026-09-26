---
title: Weather.dbc
description:
published: true
date: 2024-08-01T00:26:02.385Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:09:22.075Z
---

# Weather.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Weather)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [AmbienceSoundID](#ambiencesoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 2 | [EffectType](#effecttype) | uint32 |  |
| 3 | [TransitionSkyBox](#transitionskybox) | uint32 |  |
| 4 | [EffectColor_R](#effectcolor) | float |  |
| 5 | [EffectColor_G](#effectcolor) | float |  |
| 6 | [EffectColor_B](#effectcolor) | float |  |
| 7 | [EffectTexture](#effecttexture) | string |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### AmbienceSoundID
:x: <code>Col: 1 (uint32)</code>

The sound played when the weather is taking place.
&nbsp;

### EffectType
:x: <code>Col: 2 (uint32)</code>

* 1: Rain
* 2: Snow
* 3: Sand
&nbsp;

### TransitionSkyBox
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### EffectColor
:x: <code>Col: 4 &ndash; 6 (float)</code>

0 … 1.0
&nbsp;

### EffectTexture
:x: <code>Col: 7 (string)</code>

*- no description -*
&nbsp;

