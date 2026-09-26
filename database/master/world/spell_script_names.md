---
title: spell_script_names
description:
published: true
date: 2022-11-21T21:09:23.183Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:16.690Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell_id](#spell_id) | int | signed | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | varchar(64) |  | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### spell_id
The [Spell ID](https://wago.tools/db2/spell) to link. If it is negative and a [first_spell_id](../world/spell_ranks#first_spell_id), all ranks of the spell specified in [spell_ranks](../world/spell_ranks) are included.

One spell can have more than one script assigned.
&nbsp;

### ScriptName
The script name for the given spell(s).
&nbsp;

