---
title: ItemCondExtCosts.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# ItemCondExtCosts.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemCondExtCosts)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [CondExtendedCost](#condextendedcost) | uint32 |  |
| 2 | [ItemExtendedCostEntry](#itemextendedcostentry) | uint32 | [ItemExtendedCost.dbc/0](/files/DBC/335/itemextendedcost#id-alt) |
| 3 | [ArenaSeason](#arenaseason) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### CondExtendedCost
:x: <code>Col: 1 (uint32)</code>

ItemTemplate::CondExtendedCost
&nbsp;

### ItemExtendedCostEntry
:x: <code>Col: 2 (uint32)</code>

ItemTemplate::ExtendedCost
&nbsp;

### ArenaSeason
:x: <code>Col: 3 (uint32)</code>

arena season number (1-4)
&nbsp;

