---
title: character_spell_cooldown
description:
published: true
date: 2023-07-29T19:11:40.849Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:22.135Z
---

> Holds the remaining cooldowns from either character spells or item spells for each character.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier, Low part |
| [spell](#spell) | mediumint | unsigned | PRI | NO | 0 |  | Spell Identifier |
| [item](#item) | int | unsigned |  | NO | 0 |  | Item Identifier |
| [time](#time) | int | unsigned |  | NO | 0 |  |  |
| [categoryId](#categoryid) | int | unsigned |  | NO | 0 |  | Spell category Id |
| [categoryEnd](#categoryend) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### spell
The [Spell ID](/files/DBC/335/spell#id) on cooldown.
&nbsp;

### item
If the spell was casted from an item, the [item entry](../world/item_template#entry).
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

