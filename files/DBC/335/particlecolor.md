---
title: ParticleColor.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# ParticleColor.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ParticleColor)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [StartColor_0](#startcolor) | int32 |  |
| 2 | [StartColor_1](#startcolor) | int32 |  |
| 3 | [StartColor_2](#startcolor) | int32 |  |
| 4 | [MidColor_0](#midcolor) | int32 |  |
| 5 | [MidColor_1](#midcolor) | int32 |  |
| 6 | [MidColor_2](#midcolor) | int32 |  |
| 7 | [EndColor_0](#endcolor) | int32 |  |
| 8 | [EndColor_1](#endcolor) | int32 |  |
| 9 | [EndColor_2](#endcolor) | int32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### StartColor
:x: <code>Col: 1 &ndash; 3 (int32)</code>

Color stored as 0xAARRGGBB
&nbsp;

### MidColor
:x: <code>Col: 4 &ndash; 6 (int32)</code>

Color stored as 0xAARRGGBB
&nbsp;

### EndColor
:x: <code>Col: 7 &ndash; 9 (int32)</code>

Color stored as 0xAARRGGBB
&nbsp;

