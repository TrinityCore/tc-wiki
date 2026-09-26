---
title: player_classlevelstats
description:
published: true
date: 2023-07-11T20:43:20.805Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:01.876Z
---

This table holds information on the base health and mana of characters when they level up. Each class has different level stats. All of the values in this table signify only the base health and mana of the class at a specific level.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [class](#class) | tinyint | unsigned | PRI | NO |  |  |  |
| [level](#level) | tinyint | unsigned | PRI | NO |  |  |  |
| [basehp](#basehp) | smallint | unsigned |  | NO |  |  |  |
| [basemana](#basemana) | smallint | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### class
The players [ChrClass ID](/files/DBC/335/chrclasses#id)
| ID | Name         |
|----|--------------|
|  1 | Warrior      |
|  2 | Paladin      |
|  3 | Hunter       |
|  4 | Rogue        |
|  5 | Priest       |
|  6 | Death Knight |
|  7 | Shaman       |
|  8 | Mage         |
|  9 | Warlock      |
| 11 | Druid        |
{.dense}

&nbsp;

### level
The level at which the stats should be applied.
&nbsp;

### basehp
The base health of the character (before stamina bonuses).
&nbsp;

### basemana
The base mana of the character (before intellect bonuses).
&nbsp;

