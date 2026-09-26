---
title: CinematicCamera.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# CinematicCamera.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CinematicCamera)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Model](#model) | string |  |
| 2 | [SoundID](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 3 | [Origin_X](#origin) | float |  |
| 4 | [Origin_Y](#origin) | float |  |
| 5 | [Origin_Z](#origin) | float |  |
| 6 | [OriginFacing](#originfacing) | float |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Model
<code>Col: 1 (string)</code>

Model filename (translate .mdx to .m2)
&nbsp;

### SoundID
<code>Col: 2 (uint32)</code>

Sound ID (voiceover for cinematic)
&nbsp;

### Origin
<code>Col: 3 &ndash; 5 ([DBCPosition3D](/how-to/worldposition))</code>

Position in map used for basis for M2 co-ordinates
&nbsp;

### OriginFacing
<code>Col: 6 (float)</code>

Orientation in map used for basis for M2 co-ordinates
&nbsp;

