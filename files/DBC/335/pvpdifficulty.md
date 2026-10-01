---
title: PvpDifficulty.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# PvpDifficulty.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/PvpDifficulty)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id-alt) |
| 2 | [RangeIndex](#rangeindex) | uint32 |  |
| 3 | [MinLevel](#minlevel) | uint32 |  |
| 4 | [MaxLevel](#maxlevel) | uint32 |  |
| 5 | [Difficulty](#difficulty) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### MapID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### RangeIndex
<code>Col: 2 (uint32)</code>

BG bracket
&nbsp;

### MinLevel
<code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### MaxLevel
<code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### Difficulty
<code>Col: 5 (uint32)</code>

<!--@include: @/partial/335/difficulty.md-->

&nbsp;
