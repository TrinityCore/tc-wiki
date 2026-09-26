---
title: skill_perfect_item_template
description:
published: true
date: 2022-11-21T21:08:49.222Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:24.521Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spellId](#spellid) | int | unsigned | PRI | NO | 0 |  | SpellId of the item creation spell |
| [requiredSpecialization](#requiredspecialization) | int | unsigned |  | NO | 0 |  | Specialization spell id |
| [perfectCreateChance](#perfectcreatechance) | float |  |  | NO | 0 |  | chance to create the perfect item instead |
| [perfectItemType](#perfectitemtype) | int | unsigned |  | NO | 0 |  | perfect item type to create instead |
&nbsp;
## Description of fields

### spellId
[Spell ID](https://wago.tools/db2/spell) that creates the item.
&nbsp;

### requiredSpecialization
The character must have the [Spell ID](https://wago.tools/db2/spell) specified here learned to have a chance at triggering the effect.
&nbsp;

### perfectCreateChance
The chance that the player will create an alternative item.
&nbsp;

### perfectItemType
The [ItemID](https://wago.tools/db2/itemsparse) replacing the original crafted item.
&nbsp;

