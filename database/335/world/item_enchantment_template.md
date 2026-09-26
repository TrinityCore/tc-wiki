---
title: item_enchantment_template
description:
published: true
date: 2024-05-16T11:19:33.001Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:01.067Z
---

This table holds enchantment chance information for items that should have either a random property or a random suffix attached to them.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [ench](#ench) | int | unsigned | PRI | NO | 0 |  |  |
| [chance](#chance) | float |  |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### entry
This field ties in with _*either*_ [RandomProperty](../world/item_template#RandomProperty) OR [RandomSuffix](../world/item_template#RandomSuffix) fields in the item_template table. An item cannot have both of those fields set at non-zero values.
&nbsp;

### ench
The enchantment to apply on the item. This fields value depends on the source of **entry**.
* RandomProperty: **ench** is an [ItemRandomPropery ID](/files/DBC/335/itemrandomproperties#id).
* RandomSuffix: **ench** is an [ItemRandomSuffix ID](/files/DBC/335/itemrandomsuffix#id).

&nbsp;

### chance
The chance for a random property or suffix to be applied to the item. For each entry in this table, the combined chances of all properties/suffixes need to equal 100 otherwise the item may not get a random enchantment on it.
&nbsp;

