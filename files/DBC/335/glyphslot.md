---
title: GlyphSlot.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# GlyphSlot.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GlyphSlot)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Type](#type) | uint32 |  |
| 2 | [Tooltip](#tooltip) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

TC: used as slot type
&nbsp;

### Type
<code>Col: 1 (uint32)</code>

* 0: Minor
* 1: Major
&nbsp;

### Tooltip
<code>Col: 2 (uint32)</code>

TC: used as slot index
&nbsp;

