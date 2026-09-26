---
title: spell_script_names
description: 
published: true
date: 2026-01-12T22:47:32.715Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:56.767Z
---

Holds the spell id to ScriptName pairings for use in spell scripts.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell_id](#spell_id) | int | signed | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | char(64) |  | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### spell_id
The [Spell ID](/files/DBC/335/spell#id) to link. If it is negative and a [first_spell_id](../world/spell_ranks#first_spell_id), all ranks of the spell specified in [spell_ranks](../world/spell_ranks) are included.

One spell can have more than one script assigned.
&nbsp;

### ScriptName
The script name for the given spell(s).
&nbsp;

