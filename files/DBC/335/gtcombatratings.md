---
title: GtCombatRatings.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# GtCombatRatings.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GtCombatRatings)
&nbsp;

> Game Table:
> This dbc file is not indexed, but **Data** is stored in a fixed order.
> Entries: 100 x 32 (see [GameTables](/files/DBC/335/gametables) data)
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

CombatRating required for 1% effect. (pending other modifiers)

<!--@include: @/partial/335/combat-ratings.md-->

Ordered by combat rating, character level 1 &ndash; 100 ASC.
`idx = (RatingID * 100) + (level - 1)`
&nbsp;
