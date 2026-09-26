---
title: spell_group
description: 
published: true
date: 2025-05-17T17:46:28.829Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:32.484Z
---

Table used to group spells for various checks in the core. One spell may be added to many groups, but can occur in one group only once.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [spell_id](#spell_id) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
Arbitrary ID defining a group of spells. For custom made DB groups, it is required to be higher than 1000, as defined in SpellMgr.h.
> #define SPELL_GROUP_DB_RANGE_MIN 1000
{.is-info}

&nbsp;

### spell_id
* **spell_id** > 0: [Spell ID](/files/DBC/335/spell#id) associated to this group. If the spell has multiple ranks it must be the [first_spell_id](/database/335/world/spell_ranks#first_spell_id).
* **spell_id** < 0: References another spell_group **id**.
&nbsp;

