---
title: character_spell
description:
published: true
date: 2023-07-29T19:06:10.639Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:19.475Z
---

> Holds information for each character's spells.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [spell](#spell) | mediumint | unsigned | PRI | NO | 0 |  | Spell Identifier |
| [active](#active) | tinyint | unsigned |  | NO | 1 |  |  |
| [disabled](#disabled) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### spell
The [Spell ID](/files/DBC/335/spell#id) known to the character.
&nbsp;

### active
Signifies whether the spell appears in the spell book
* 0: unavailable
* 1: available
&nbsp;

### disabled
Signifies when a spell is disabled because talent which teaches it has been unlearned. When talent is learned again the spell will be available again.
* 0: available
* 1: unavailable due to precondition
&nbsp;

