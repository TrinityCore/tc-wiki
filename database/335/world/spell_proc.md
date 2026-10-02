---
title: spell_proc
description: 
published: true
date: 2024-04-16T18:19:43.343Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:48.676Z
---

This table holds information on what events (or procs) certain spells are activated. All spells in this table must have apply a SPELL_AURA_PROC_TRIGGER_SPELL (42) aura. Any entries in this table will overwrite the existing proc settings in the spell's DBC entry.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpellId](#spellid) | int | signed | PRI | NO | 0 |  |  |
| [SchoolMask](#schoolmask) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpellFamilyName](#spellfamilyname) | smallint | unsigned |  | NO | 0 |  |  |
| [SpellFamilyMask0](#spellfamilymask-0-2) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyMask1](#spellfamilymask-0-2) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyMask2](#spellfamilymask-0-2) | int | unsigned |  | NO | 0 |  |  |
| [ProcFlags](#procflags) | int | unsigned |  | NO | 0 |  |  |
| [SpellTypeMask](#spelltypemask) | int | unsigned |  | NO | 0 |  |  |
| [SpellPhaseMask](#spellphasemask) | int | unsigned |  | NO | 0 |  |  |
| [HitMask](#hitmask) | int | unsigned |  | NO | 0 |  |  |
| [AttributesMask](#attributesmask) | int | unsigned |  | NO | 0 |  |  |
| [DisableEffectsMask](#disableeffectsmask) | int | unsigned |  | NO | 0 |  |  |
| [ProcsPerMinute](#procsperminute) | float |  |  | NO | 0 |  |  |
| [Chance](#chance) | float |  |  | NO | 0 |  |  |
| [Cooldown](#cooldown) | int | unsigned |  | NO | 0 |  |  |
| [Charges](#charges) | tinyint | unsigned |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### SpellId
The [Spell ID](/files/DBC/335/spell#id) that is capable to proc on an event. (Can use negative SpellID for [ranked spells](../world/spell_ranks#first_spell_id))
&nbsp;

### SchoolMask
This field contains a bitmask that controls on what types of spells can trigger the proc. For example if an aura procs only when the unit it is casted upon is hit by shadow spells ([spell 34914](https://aowow.trinitycore.info/?spell=34914)).

<!--@include: @/partial/335/spell-schools.md{28,37}-->

&nbsp;

### SpellFamilyName
This field controls what family name spells can proc the triggered spell.

<!--@include: @/partial/335/spell-family.md-->

&nbsp;

### SpellFamilyMask\[0-2]
This field controls what spells' family flags can proc the triggered spell.
&nbsp;

### ProcFlags
If non-zero, used to override the original [Spell ProcTypeMask](/files/DBC/335/spell#proctypemask).

A bitmask controlling what events trigger the spell. To combine possible events, add the proc bits together.

<!--@include: @/partial/335/proc-flags.md-->

&nbsp;

### SpellTypeMask
Used to choose what types of spells may trigger the proc, to combine, just add the bit values.

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | PROC_SPELL_TYPE_DAMAGE | only damaging spells |
| 2 | 0x02 | PROC_SPELL_TYPE_HEAL | only healing spells |
| 4 | 0x04 | PROC_SPELL_TYPE_NO_DMG_HEAL | all other spells |

&nbsp;

### SpellPhaseMask
At which phase may the spell trigger the proc. Normally only one of them is used at the same time, but they can also be combined.
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | PROC_SPELL_PHASE_CAST | trigger when spell has just finished casting |
| 2 | 0x02 | PROC_SPELL_PHASE_HIT | trigger when the spell hits its target |
| 4 | 0x04 | PROC_SPELL_PHASE_FINISH | trigger after spell has done all its effects on all targets |

&nbsp;

### HitMask
Used to add special conditions to spells, some spells might trigger only on critical strikes, for example.
<!--@include: @/partial/335/proc-flags-hit.md-->

&nbsp;

### AttributesMask
Adds special behaviour to the proc, spell might trigger proc only if these conditions are fullfilled
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 |  PROC_ATTR_REQ_EXP_OR_HONOR | requires proc target to give exp or honor for aura proc |
| 2 | 0x0002 |  PROC_ATTR_TRIGGERED_CAN_PROC | aura can proc even with triggered spells |
| 4 | 0x0004 |  PROC_ATTR_REQ_MANA_COST | requires triggering spell to have a mana cost for aura proc |
| 8 | 0x0008 |  PROC_ATTR_REQ_SPELLMOD | requires triggering spell to be affected by proccing aura to drop charges |
| 128 | 0x0080 |  PROC_ATTR_REDUCE_PROC_60 | aura should have a reduced chance to proc if level of proc Actor > 60 |
| 256 | 0x0100 |  PROC_ATTR_CANT_PROC_FROM_ITEM_CAST | do not allow aura proc if proc is caused by a spell casted by item |

&nbsp;

### DisableEffectsMask
Disable proc on spell effect index (bitmask)
<!--@include: @/partial/335/spell-effect-index.md-->

&nbsp;

### ProcsPerMinute
Chance relative to [delay of equipped weapon](../world/item_template#delay).
`chance = (ProcsPerMinute * delay) / 600`
&nbsp;

### Chance
Absolute chance per hit or spell cast. (Used when **ProcsPerMinute** is 0)
If both **Chance** and **ProcsPerMinute** is 0, the default value from [Spell ProcChance](/files/DBC/335/spell#procchance) is used.
&nbsp;

### Cooldown
Define hidden cooldowns on the spell, in milliseconds. Also known as the proc's internal cooldown, or ICD.
&nbsp;

### Charges
The amount of aura charges available to proc.
If 0, the default value from [Spell ProcCharges](/files/DBC/335/spell#proccharges) is used.
&nbsp;
