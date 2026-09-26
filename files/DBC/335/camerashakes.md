---
title: CameraShakes.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# CameraShakes.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CameraShakes)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [ShakeType](#shaketype) | uint32 |  |
| 2 | [Direction](#direction) | uint32 |  |
| 3 | [Amplitude](#amplitude) | float |  |
| 4 | [Frequency](#frequency) | float |  |
| 5 | [Duration](#Duration) | float |  |
| 6 | [Phase](#phase) | float |  |
| 7 | [Coefficient](#coefficient) | float |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ShakeType
:x: <code>Col: 1 (uint32)</code>

* 0: CAMSHAKE_SINE
* 1: CAMSHAKE_DECAYED_SINE
&nbsp;

### Direction
:x: <code>Col: 2 (uint32)</code>

* 0: CAMERA_FORWARD
* 1: CAMERA_RIGHT
* 2: CAMERA_UP
&nbsp;

### Amplitude
:x: <code>Col: 3 (float)</code>

*- no description -*
&nbsp;

### Frequency
:x: <code>Col: 4 (float)</code>

*- no description -*
&nbsp;

### Duration
:x: <code>Col: 5 (float)</code>

*- no description -*
&nbsp;

### Phase
:x: <code>Col: 6 (float)</code>

*- no description -*
&nbsp;

### Coefficient
:x: <code>Col: 7 (float)</code>

*- no description -*
&nbsp;

