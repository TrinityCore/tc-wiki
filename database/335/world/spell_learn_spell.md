---
title: spell_learn_spell
description:
published: true
date: 2023-07-22T20:00:59.739Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:37.780Z
---

This table holds information on spells that should be learned at the same time a player learns another spell. For example the few spells that are automatically learned when a player first learns a new profession. All fields in this table use [Spell IDs](/files/DBC/335/spell#id).

> Note: Spells with spell effects SPELL_EFFECT_LEARN_SPELL should NOT be included in this table.
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned | PRI | NO | 0 |  |  |
| [Active](#active) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### entry
The entry of the spell that the player learns, either from a trainer or from anywhere else (`.learn` command for example).
&nbsp;

### SpellID
The entry of the spell that will be automatically learned by the player when the player learns the spell specified in **entry**.
&nbsp;

### Active
Defines whether spell is shown in spell book or not.
&nbsp;

