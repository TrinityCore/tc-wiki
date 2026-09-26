---
title: DurabilityQuality.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# DurabilityQuality.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DurabilityQuality)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 | [item quality](/database/335/world/item_template#quality) |
| 1 | [Data](#data) | float |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

<code>**ID** = ([item quality](/database/335/world/item_template#quality) + 1) * 2;</code>
&nbsp;

### Data
<code>Col: 1 (float)</code>

Multiplier to repair cost.
&nbsp;

