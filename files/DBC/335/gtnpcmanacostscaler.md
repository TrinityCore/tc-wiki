---
title: GtNPCManaCostScaler.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# GtNPCManaCostScaler.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GtNPCManaCostScaler)
&nbsp;

> Game Table:
> This dbc file is not indexed, but **Data** is stored in a fixed order.
> Entries: 100 x 1 (see [GameTables](/files/DBC/335/gametables) data)
{.is-info}

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [Data](#data) | float |  |
&nbsp;
## Description of fields

### Data
<code>Col: 0 (float)</code>

Multiplier to effect and cost for npc cast [Spells with Attribute](/files/DBC/335/spell#attributes) `SPELL_ATTR0_LEVEL_DAMAGE_CALCULATION`.

Ordered by [SpellLevel](/files/DBC/335/spell#spelllevel) or caster level 1 &ndash; 100 ASC.
`idx = level - 1`
&nbsp;

