---
title: CinematicSequences.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# CinematicSequences.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CinematicSequences)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SoundID](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 2 | [Camera_0](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id-alt) |
| 3 | [Camera_1](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id-alt) |
| 4 | [Camera_2](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id-alt) |
| 5 | [Camera_3](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id-alt) |
| 6 | [Camera_4](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id-alt) |
| 7 | [Camera_5](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id-alt) |
| 8 | [Camera_6](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id-alt) |
| 9 | [Camera_7](#camera) | uint32 | [CinematicCamera.dbc/0](/files/DBC/335/cinematiccamera#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SoundID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Camera
<code>Col: 2 &ndash; 9 (uint32)</code>

ID in CinematicCamera.dbc
&nbsp;

