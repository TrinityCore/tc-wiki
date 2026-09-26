---
title: SpellRuneCost.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# SpellRuneCost.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellRuneCost)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [RuneCost_0](#runecost) | uint32 |  |
| 2 | [RuneCost_1](#runecost) | uint32 |  |
| 3 | [RuneCost_2](#runecost) | uint32 |  |
| 4 | [RunicPower](#runicpower) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### RuneCost
<code>Col: 1 &ndash; 3 (uint32)</code>

* col 1: Blood
* col 2: Unholy
* col 3: Frost
&nbsp;

### RunicPower
<code>Col: 4 (uint32)</code>

Runic Power gained.
&nbsp;

