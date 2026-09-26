---
title: pet_spell
description: 
published: true
date: 2024-04-16T19:55:40.165Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:53.626Z
---

> This table holds information on individual pet spells.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [spell](#spell) | mediumint | unsigned | PRI | NO | 0 |  | Spell Identifier |
| [active](#active) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [pet id](../characters/character_pet#id) of the pet having this spell.
&nbsp;

### spell
The [Spell ID](/files/DBC/335/spell#id) known to this pet.
&nbsp;

### active
[`enum ActiveStates`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h#L396-L404)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | ACT_PASSIVE | 0x01 - passive |
| 6 | 0x06 | ACT_REACTION | 0x02 \| 0x04 |
| 7 | 0x07 | ACT_COMMAND | 0x01 \| 0x02 \| 0x04 |
| 129 | 0x81 | ACT_DISABLED | 0x80 - castable |
| 193 | 0xC1 | ACT_ENABLED | 0x40 \| 0x80 - auto cast + castable |
{.dense}

&nbsp;

