---
title: TerrainType.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# TerrainType.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/TerrainType)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Description](#description) | string |  |
| 2 | [FootstepSprayRun](#footstepsprayrun) | uint32 |  |
| 3 | [FootstepSprayWalk](#footstepspraywalk) | uint32 |  |
| 4 | [TerrainSoundID](#terrainsoundid) | uint32 | [TerrainTypeSounds.dbc/0](/files/DBC/335/terraintypesounds#id-alt) |
| 5 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Description
:x: <code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### FootstepSprayRun
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### FootstepSprayWalk
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### TerrainSoundID
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 5 (uint32)</code>

* 0x1: probably footsteps?
&nbsp;

