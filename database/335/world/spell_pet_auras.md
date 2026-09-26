---
title: spell_pet_auras
description:
published: true
date: 2024-05-16T11:19:35.822Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:45.979Z
---

This table links player controlled pet spells with their actual effects.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell](#spell) | int | unsigned | PRI | NO |  |  | dummy spell id |
| [effectId](#effectid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [pet](#pet) | int | unsigned | PRI | NO | 0 |  | pet id; 0 = all |
| [aura](#aura) | int | unsigned |  | NO |  |  | pet aura id |
&nbsp;
## Description of fields

### spell
Dummy [Spell ID](/files/DBC/335/spell#id).
On the selected **effectId** it must either have SPELL_EFFECT_DUMMY (3) or apply a SPELL_AURA_DUMMY (4).
&nbsp;

### effectId
Effect Index of **spell** to link **aura** to: (0 – 2)
&nbsp;

### pet
If set, **aura** is only applied to this [creature entry](../world/creature_template#entry).
&nbsp;

### aura
[Spell ID](/files/DBC/335/spell#id) with the actual effects described by **spell**.
&nbsp;

