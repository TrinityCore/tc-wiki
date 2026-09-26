---
title: LoadingScreens.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# LoadingScreens.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LoadingScreens)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Name](#name-alt) | string |  |
| 2 | [Path](#path) | string |  |
| 3 | [HasWidescreen](#haswidescreen) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name {#name-alt}
:x: <code>Col: 1 (string)</code>

Internal name
&nbsp;

### Path
<code>Col: 2 (string)</code>

`Interface\Glues\LoadingScreens\[a-z0-9].blp`
&nbsp;

### HasWidescreen
<code>Col: 3 (bool)</code>

Appends `Wide` to **Path** before the file extension.
&nbsp;

