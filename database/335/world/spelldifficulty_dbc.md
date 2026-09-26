---
title: spelldifficulty_dbc
description:
published: true
date: 2023-07-23T17:19:34.046Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:07.666Z
---

Structurally identical to the [SpellDifficulty.dbc](/files/DBC/335/spelldifficulty) file, this table holds supplemental data.
The id is called in the cpp script and depending on what version of the dungeon/raid the characters are in, the proper SpellID will be casted by the creature.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [spellid0](#spellid0) | int | unsigned |  | NO | 0 |  |  |
| [spellid1](#spellid1) | int | unsigned |  | NO | 0 |  |  |
| [spellid2](#spellid2) | int | unsigned |  | NO | 0 |  |  |
| [spellid3](#spellid3) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
*- no description -*
&nbsp;

### spellid0
*- no description -*
&nbsp;

### spellid1
*- no description -*
&nbsp;

### spellid2
*- no description -*
&nbsp;

### spellid3
*- no description -*
&nbsp;

