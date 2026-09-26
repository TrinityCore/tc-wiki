---
title: spell_group
description: 
published: true
date: 2023-01-01T03:04:59.297Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:55.998Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [spell_id](#spell_id) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
Arbitrary ID defining a group of spells. For custom made DB groups, it is required be higher than 1000, as defined in SpellMgr.h.
> #define SPELL_GROUP_DB_RANGE_MIN 1000
&nbsp;

### spell_id
Spell ID associated to this group.
&nbsp;


