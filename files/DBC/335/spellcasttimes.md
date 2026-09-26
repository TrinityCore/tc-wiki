---
title: SpellCastTimes.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# SpellCastTimes.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellCastTimes)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Base](#base) | int32 |  |
| 2 | [PerLevel](#perlevel) | int32 |  |
| 3 | [Minimum](#minimum) | int32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Base
<code>Col: 1 (int32)</code>

In msec.
&nbsp;

### PerLevel
:x: <code>Col: 2 (int32)</code>

In msec.
&nbsp;

### Minimum
:x: <code>Col: 3 (int32)</code>

Min. cast time in msec.
&nbsp;

