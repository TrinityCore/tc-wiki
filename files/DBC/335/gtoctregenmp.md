---
title: GtOCTRegenMP.dbc
description: 
published: true
date: 2025-10-24T18:42:48.680Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:03:59.548Z
---

# GtOCTRegenMP.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GtOCTRegenMP)
&nbsp;

> Game Table:
> This dbc file is not indexed, but **Data** is stored in a fixed order.
> Entries: 100 x 11 (see [GameTables](/files/DBC/335/gametables) data)
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
:x: <code>Col: 0 (float)</code>

Character base MP regeneration per point spirit? Not used as indicated by PaperDollFrame.lua

Ordered by character class, character level 1 &ndash; 100 ASC.
<code>idx = (([ChrClassID](/files/DBC/335/chrclasses#id-alt) - 1) * 100) + (level - 1)</code>
&nbsp;

