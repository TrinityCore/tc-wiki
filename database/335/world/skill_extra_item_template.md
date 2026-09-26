---
title: skill_extra_item_template
description:
published: true
date: 2024-05-16T11:19:35.420Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:58.860Z
---

This table holds information about when using certain profession spells will create more than one copy of the item. (Alchemy specializations)

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spellId](#spellid) | int | unsigned | PRI | NO | 0 |  | SpellId of the item creation spell |
| [requiredSpecialization](#requiredspecialization) | int | unsigned |  | NO | 0 |  | Specialization spell id |
| [additionalCreateChance](#additionalcreatechance) | float |  |  | NO | 0 |  | chance to create add |
| [additionalMaxNum](#additionalmaxnum) | tinyint | unsigned |  | NO | 0 |  | max num of adds |
&nbsp;
## Description of fields

### spellId
The [Spell ID](/files/DBC/335/spell#id) that creates the item.
&nbsp;

### requiredSpecialization
The character must have the [Spell ID](/files/DBC/335/spell#id) specified here learned to have a chance at triggering the extra item proc.
&nbsp;

### additionalCreateChance
The chance that the player will create an additional item.
&nbsp;

### additionalMaxNum
The number of extra copies that can be created.
**additionalCreateChance** is rolled for each attempt, until failure or reaching **additionalMaxNum**.
&nbsp;

## Example
given **additionalCreateChance** = 35 and **additionalMaxNum** = 4:
| items created | chance of occurrence |
|------------|----------------------|
| 1 | 51.25% |
| 2 | 35.00% |
| 3 | 12.25% |
| 4 | 1.50% |
| 5 | 0.00% |
{.dense}


&nbsp;

