---
title: PowerDisplay.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# PowerDisplay.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/PowerDisplay)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [ActualType](#actualtype) | uint32 |  |
| 2 | [GlobalStringBaseTag](#globalstringbasetag) | string |  |
| 3 | [Red](#red) | uint8 |  |
| 4 | [Green](#green) | uint8 |  |
| 5 | [Blue](#blue) | uint8 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ActualType
<code>Col: 1 (uint32)</code>

<!--@include: @/partial/335/powers.md-->

&nbsp;

### GlobalStringBaseTag
:x: <code>Col: 2 (string)</code>

found in `/Interface/GlueXML/GlobalStrings.lua`
&nbsp;

### Red
:x: <code>Col: 3 (uint8)</code>

*- no description -*
&nbsp;

### Green
:x: <code>Col: 4 (uint8)</code>

*- no description -*
&nbsp;

### Blue
:x: <code>Col: 5 (uint8)</code>

*- no description -*
&nbsp;
