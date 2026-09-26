---
title: LightSkybox.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# LightSkybox.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LightSkybox)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 0 | [Model](#model) | string |  |
| 0 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Model
:x: <code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 2 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x01 | Full day Skybox |
| 2 | 0x02 | Combine Procedural And Skybox |
{.dense}

&nbsp;

