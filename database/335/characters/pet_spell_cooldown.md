---
title: pet_spell_cooldown
description:
published: true
date: 2023-07-31T21:39:07.237Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:56.278Z
---

> This table holds information on pet spell cooldowns.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier, Low part |
| [spell](#spell) | mediumint | unsigned | PRI | NO | 0 |  | Spell Identifier |
| [time](#time) | int | unsigned |  | NO | 0 |  |  |
| [categoryId](#categoryid) | int | unsigned |  | NO | 0 |  | Spell category Id |
| [categoryEnd](#categoryend) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
references [character_pet.id](../characters/character_pet#id).
&nbsp;

### spell
The [Spell ID](/files/DBC/335/spell#id) on cooldown.
&nbsp;

### time
The Unix timestamp when the spell cooldown will finish.
&nbsp;

### categoryId
The [SpellCategory ID](/files/DBC/335/spellcategory#id) (if any) linking to [Spell Category](/files/DBC/335/spell#category). Used for category cooldown handling.
&nbsp;

### categoryEnd
The Unix timestamp when the category cooldown will finish.
&nbsp;

