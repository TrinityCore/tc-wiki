---
title: GtOCTClassCombatRatingScalar.dbc
description:
published: true
date: 2024-06-18T14:36:35.886Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:03:55.279Z
---

# GtOCTClassCombatRatingScalar.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GtOCTClassCombatRatingScalar)
&nbsp;

> Game Table:
> This dbc file is indexed, but also **Data** is stored in a fixed order.
> Entries: 32 x 11 (see [GameTables](/files/DBC/335/gametables) data)
{.is-info}

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Data](#data) | float |  |

&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Data
<code>Col: 1 (float)</code>

CombatRating scaling modifier

<!--@include: @/partial/335/combat-ratings.md-->

Ordered by character class, combat rating 0 &ndash; 31 ASC.
<code>**ID** = (([ChrClassID](/files/DBC/335/chrclasses#id-alt) - 1) * 32) + (RatingID + 1)</code>
&nbsp;
