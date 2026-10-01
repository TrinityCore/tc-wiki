---
title: spell_enchant_proc_data
description:
published: true
date: 2023-07-23T01:00:08.740Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:29.811Z
---

This table holds information how and when an enchantment proc can occur.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [EnchantID](#enchantid) | int | unsigned | PRI | NO |  |  |  |
| [Chance](#chance) | float |  |  | NO | 0 |  |  |
| [ProcsPerMinute](#procsperminute) | float |  |  | NO | 0 |  |  |
| [HitMask](#hitmask) | int | unsigned |  | NO | 0 |  |  |
| [AttributesMask](#attributesmask) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### EnchantID
references [SpellItemEnchantment ID](/files/DBC/335/spellitemenchantment#id)
Any of the types (0 – 2) must be of ITEM_ENCHANTMENT_TYPE_COMBAT_SPELL (1)
&nbsp;

### Chance
Absolute chance per hit or spell cast. (Used when **ProcsPerMinute** is 0)
&nbsp;

### ProcsPerMinute
Chance relative to [delay of equipped weapon](../world/item_template#delay) .
`chance = (ProcsPerMinute * delay) / 600`
&nbsp;

### HitMask
Used to add special conditions to spells, some spells might trigger only on critical strikes, for example.
<!--@include: @/partial/335/proc-flags-hit.md-->

&nbsp;

### AttributesMask
Adds special behaviour to the proc, spell might trigger proc only if these conditions are fullfilled
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 | PROC_ATTR_REQ_EXP_OR_HONOR | requires proc target to give exp or honor for aura proc |
| 2 | 0x0002 | PROC_ATTR_TRIGGERED_CAN_PROC | aura can proc even with triggered spells |
| 4 | 0x0004 | PROC_ATTR_REQ_MANA_COST | requires triggering spell to have a mana cost for aura proc |
| 8 | 0x0008 | PROC_ATTR_REQ_SPELLMOD | requires triggering spell to be affected by proccing aura to drop charges |
| 128 | 0x0080 | PROC_ATTR_REDUCE_PROC_60 | aura should have a reduced chance to proc if level of proc Actor > 60 |
| 256 | 0x0100 | PROC_ATTR_CANT_PROC_FROM_ITEM_CAST | do not allow aura proc if proc is caused by a spell casted by item |
{.dense}

&nbsp;
