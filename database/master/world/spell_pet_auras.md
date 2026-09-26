---
title: spell_pet_auras
description:
published: true
date: 2022-11-21T21:09:17.214Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:08.855Z
---

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
Dummy [Spell ID](https://wago.tools/db2/spell).
On the selected **effectId** it must either have SPELL_EFFECT_DUMMY (3) or apply a SPELL_AURA_DUMMY (4).
&nbsp;

### effectId
Effect Index of **spell** to link **aura** to: (0 � 2)
&nbsp;

### pet
If set, **aura** is only applied to this [creature entry](../world/creature_template#entry).
&nbsp;

### aura
[Spell ID](https://wago.tools/db2/spell) with the actual effects described by **spell**.
&nbsp;

