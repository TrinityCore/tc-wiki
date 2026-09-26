---
title: player_factionchange_items
description: 
published: true
date: 2024-05-16T11:19:34.385Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:07.222Z
---

Basically all item changes made when player changes faction.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [race_A](#race_a) | int | unsigned |  | NO |  |  |  |
| [alliance_id](#alliance_id) | int | unsigned | PRI | NO |  |  |  |
| [commentA](#commenta) | mediumtext |  |  | YES | NULL |  |  |
| [race_H](#race_h) | int | unsigned |  | NO |  |  |  |
| [horde_id](#horde_id) | int | unsigned | PRI | NO |  |  |  |
| [commentH](#commenth) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### race_A
see [item_template.AllowableRace](../world/item_template#allowablerace)

> not implemented
{.is-warning}

&nbsp;

### alliance_id
This is the alliance [item entry](../world/item_template#entry). If you convert to horde and your items have a record in his table, they will be converted to **horde_id**.
&nbsp;

### commentA
This is for easy item name identifying. Comment style should be name(ItemLevel).
&nbsp;

### race_H
see [item_template.AllowableRace](../world/item_template#allowablerace)

> not implemented
{.is-warning}

&nbsp;

### horde_id
This is the horde [item entry](../world/item_template#entry). If you convert to alliance and your items have a record in his table, they will be converted to **alliance_id**.
&nbsp;

### commentH
This is for easy item name identifying. Comment style should be name(ItemLevel).
&nbsp;

