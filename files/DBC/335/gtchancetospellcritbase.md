---
title: GtChanceToSpellCritBase.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# GtChanceToSpellCritBase.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GtChanceToSpellCritBase)
&nbsp;

> Game Table:
> This dbc file is not indexed, but **Data** is stored in a fixed order.
> Entries: 1 x 11 (see [GameTables](/files/DBC/335/gametables) data)
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

Base spell critical hit chance.

Ordered by character class 1 &ndash; 11 ASC.
<code>idx = [ChrClassID](/files/DBC/335/chrclasses#id-alt) - 1</code>

&nbsp;

