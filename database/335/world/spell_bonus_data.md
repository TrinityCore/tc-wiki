---
title: spell_bonus_data
description:
published: true
date: 2024-05-16T11:19:35.768Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:20.855Z
---

Table used for storing custom damage/healing bonus coefficients.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [direct_bonus](#direct_bonus) | float |  |  | NO | 0 |  |  |
| [dot_bonus](#dot_bonus) | float |  |  | NO | 0 |  |  |
| [ap_bonus](#ap_bonus) | float |  |  | NO | 0 |  |  |
| [ap_dot_bonus](#ap_dot_bonus) | float |  |  | NO | 0 |  |  |
| [comments](#comments) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
references [Spell ID](/files/DBC/335/spell#id)
Only the first rank of the spell needs data if spell exists in [spell_ranks](../world/spell_ranks) and coefficients are the same for each rank.
&nbsp;

### direct_bonus
Spell Power coefficient for the direct damage/healing component of the spell.
&nbsp;

### dot_bonus
Spell Power coefficient for the over time component of the spell.
&nbsp;

### ap_bonus
Attack Power coefficient for the direct damage/healing component of the spell.
&nbsp;

### ap_dot_bonus
Attack Power coefficient for the over time component of the spell.
&nbsp;

#### for all fields:
* `0 <= bonus <= 1`: 0%  – 100% scaling
* `-1`: Uses generic scaling depending on cast time and aura duration.

&nbsp;

### comments
commonly: Spell User – Spell Name
e.g.: `Item - Onyxia 10 Caster Trinket - Searing Flames`
&nbsp;

