---
title: spell_proc
description:
published: true
date: 2023-07-23T01:00:27.357Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:48.676Z
---

<a href="https://trinitycore.info/en/database/335/world/spell_pet_auras" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_pet_auras'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_ranks" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_ranks'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds information on what events (or procs) certain spells are activated. All spells in this table must have apply a SPELL_AURA_PROC_TRIGGER_SPELL (42) aura. Any entries in this table will overwrite the existing proc settings in the spell's DBC entry.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpellId](#spellid) | int | signed | PRI | NO | 0 |  |  |
| [SchoolMask](#schoolmask) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpellFamilyName](#spellfamilyname) | smallint | unsigned |  | NO | 0 |  |  |
| [SpellFamilyMask0](#spellfamilymask[0-2]) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyMask1](#spellfamilymask[0-2]) | int | unsigned |  | NO | 0 |  |  |
| [SpellFamilyMask2](#spellfamilymask[0-2]) | int | unsigned |  | NO | 0 |  |  |
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

| Value | Flag | Name |
|-------|------|------|
| 1 | 0x01 | SPELL_SCHOOL_NORMAL |
| 2 | 0x02 | SPELL_SCHOOL_HOLY |
| 4 | 0x04 | SPELL_SCHOOL_FIRE |
| 8 | 0x08 | SPELL_SCHOOL_NATURE |
| 16 | 0x10 | SPELL_SCHOOL_FROST |
| 32 | 0x20 | SPELL_SCHOOL_SHADOW |
| 64 | 0x40 | SPELL_SCHOOL_ARCANE |
{.dense}

&nbsp;

### SpellFamilyName
This field controls what family name spells can proc the triggered spell.
| ID | Name | Comment |
|----|------|---------|
| 0 | SPELLFAMILY_GENERIC | Generic |
| 1 | SPELLFAMILY_UNK1 | Unk1 - events, holidays, ...? |
| 3 | SPELLFAMILY_MAGE | Mage |
| 4 | SPELLFAMILY_WARRIOR | Warrior |
| 5 | SPELLFAMILY_WARLOCK | Warlock |
| 6 | SPELLFAMILY_PRIEST | Priest |
| 7 | SPELLFAMILY_DRUID | Druid |
| 8 | SPELLFAMILY_ROGUE | Rogue |
| 9 | SPELLFAMILY_HUNTER | Hunter |
| 10 | SPELLFAMILY_PALADIN | Paladin |
| 11 | SPELLFAMILY_SHAMAN | Shaman |
| 12 | SPELLFAMILY_UNK2 | Unk2 - Silence resistance? |
| 13 | SPELLFAMILY_POTION | Potion |
| 15 | SPELLFAMILY_DEATHKNIGHT | Death Knight |
| 17 | SPELLFAMILY_PET | Pet |
{.dense}

&nbsp;

### SpellFamilyMask\[0-2]
This field controls what spells' family flags can proc the triggered spell.
&nbsp;

### ProcFlags
If non-zero, used to override the original spell ProcFlags in DBC.

A bitmask controlling what events trigger the spell. To combine possible events, add the proc bits together.
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | PROC_FLAG_KILLED | 00 Killed by agressor - not sure about this flag |
| 2 | 0x00000002 | PROC_FLAG_KILL | 01 Kill target (in most cases need XP/Honor reward) |
| 4 | 0x00000004 | PROC_FLAG_DONE_MELEE_AUTO_ATTACK | 02 Done melee auto attack |
| 8 | 0x00000008 | PROC_FLAG_TAKEN_MELEE_AUTO_ATTACK | 03 Taken melee auto attack |
| 16 | 0x00000010 | PROC_FLAG_DONE_SPELL_MELEE_DMG_CLASS | 04 Done attack by Spell that has dmg class melee |
| 32 | 0x00000020 | PROC_FLAG_TAKEN_SPELL_MELEE_DMG_CLASS | 05 Taken attack by Spell that has dmg class melee |
| 64 | 0x00000040 | PROC_FLAG_DONE_RANGED_AUTO_ATTACK | 06 Done ranged auto attack |
| 128 | 0x00000080 | PROC_FLAG_TAKEN_RANGED_AUTO_ATTACK | 07 Taken ranged auto attack |
| 256 | 0x00000100 | PROC_FLAG_DONE_SPELL_RANGED_DMG_CLASS | 08 Done attack by Spell that has dmg class ranged |
| 512 | 0x00000200 | PROC_FLAG_TAKEN_SPELL_RANGED_DMG_CLASS | 09 Taken attack by Spell that has dmg class ranged |
| 1024 | 0x00000400 | PROC_FLAG_DONE_SPELL_NONE_DMG_CLASS_POS | 10 Done positive spell that has dmg class none |
| 2048 | 0x00000800 | PROC_FLAG_TAKEN_SPELL_NONE_DMG_CLASS_POS | 11 Taken positive spell that has dmg class none |
| 4096 | 0x00001000 | PROC_FLAG_DONE_SPELL_NONE_DMG_CLASS_NEG | 12 Done negative spell that has dmg class none |
| 8192 | 0x00002000 | PROC_FLAG_TAKEN_SPELL_NONE_DMG_CLASS_NEG | 13 Taken negative spell that has dmg class none |
| 16384 | 0x00004000 | PROC_FLAG_DONE_SPELL_MAGIC_DMG_CLASS_POS | 14 Done positive spell that has dmg class magic |
| 32768 | 0x00008000 | PROC_FLAG_TAKEN_SPELL_MAGIC_DMG_CLASS_POS | 15 Taken positive spell that has dmg class magic |
| 65536 | 0x00010000 | PROC_FLAG_DONE_SPELL_MAGIC_DMG_CLASS_NEG | 16 Done negative spell that has dmg class magic |
| 131072 | 0x00020000 | PROC_FLAG_TAKEN_SPELL_MAGIC_DMG_CLASS_NEG | 17 Taken negative spell that has dmg class magic |
| 262144 | 0x00040000 | PROC_FLAG_DONE_PERIODIC | 18 Successful do periodic (damage / healing) |
| 524288 | 0x00080000 | PROC_FLAG_TAKEN_PERIODIC | 19 Taken spell periodic (damage / healing) |
| 1048576 | 0x00100000 | PROC_FLAG_TAKEN_DAMAGE | 20 Taken any damage |
| 2097152 | 0x00200000 | PROC_FLAG_DONE_TRAP_ACTIVATION | 21 On trap activation (possibly needs name change to ON_GAMEOBJECT_CAST or USE) |
| 4194304 | 0x00400000 | PROC_FLAG_DONE_MAINHAND_ATTACK | 22 Done main-hand melee attacks (spell and autoattack) |
| 8388608 | 0x00800000 | PROC_FLAG_DONE_OFFHAND_ATTACK | 23 Done off-hand melee attacks (spell and autoattack) |
| 16777216 | 0x01000000 | PROC_FLAG_DEATH | 24 Died in any way |
|  ||||
| 204 | 0x000000CC | AUTO_ATTACK_PROC_FLAG_MASK | Any auto attack |
| 12582972 | 0x00C0003C | MELEE_PROC_FLAG_MASK | Any melee attack |
| 960 | 0x000003C0 | RANGED_PROC_FLAG_MASK | Any ranged attack |
| 3145712 | 0x002FFFF0 | SPELL_PROC_FLAG_MASK | Any spell attack |
| 15029588 | 0x00E55554 | DONE_HIT_PROC_FLAG_MASK | Any dealt attack |
| 1747624 | 0x001AAAA8 | TAKEN_HIT_PROC_FLAG_MASK | Any taken attack |
| 2446672 | 0x00255550 | REQ_SPELL_PHASE_PROC_FLAG_MASK |  |
{.dense}

&nbsp;

### SpellTypeMask
Used to choose what types of spells may trigger the proc, to combine, just add the bit values.

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | PROC_SPELL_TYPE_DAMAGE | only damaging spells |
| 2 | 0x02 | PROC_SPELL_TYPE_HEAL | only healing spells |
| 4 | 0x04 | PROC_SPELL_TYPE_NO_DMG_HEAL | all other spells |
{.dense}

&nbsp;

### SpellPhaseMask
At which phase may the spell trigger the proc. Normally only one of them is used at the same time, but they can also be combined.
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | PROC_SPELL_PHASE_CAST | trigger when spell has just finished casting |
| 2 | 0x02 | PROC_SPELL_PHASE_HIT | trigger when the spell hits its target |
| 4 | 0x04 | PROC_SPELL_PHASE_FINISH | trigger after spell has done all its effects on all targets |
{.dense}

&nbsp;

### HitMask
Used to add special conditions to spells, some spells might trigger only on critical strikes, for example.
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 0 | 0x0000 | PROC_HIT_NONE | procs on:<br>PROC_HIT_NORMAL \| PROC_HIT_CRITICAL for TAKEN proc type<br>PROC_HIT_NORMAL \| PROC_HIT_CRITICAL \| PROC_HIT_ABSORB for DONE |
| 1 | 0x0001 | PROC_HIT_NORMAL | non-critical hits |
| 2 | 0x0002 | PROC_HIT_CRITICAL |  |
| 4 | 0x0004 | PROC_HIT_MISS |  |
| 8 | 0x0008 | PROC_HIT_FULL_RESIST |  |
| 16 | 0x0010 | PROC_HIT_DODGE |  |
| 32 | 0x0020 | PROC_HIT_PARRY |  |
| 64 | 0x0040 | PROC_HIT_BLOCK | partial or full block |
| 128 | 0x0080 | PROC_HIT_EVADE |  |
| 256 | 0x0100 | PROC_HIT_IMMUNE |  |
| 512 | 0x0200 | PROC_HIT_DEFLECT |  |
| 1024 | 0x0400 | PROC_HIT_ABSORB | partial or full absorb |
| 2048 | 0x0800 | PROC_HIT_REFLECT |  |
| 4096 | 0x1000 | PROC_HIT_INTERRUPT |  |
| 8192 | 0x2000 | PROC_HIT_FULL_BLOCK |  |
{.dense}

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
{.dense}

&nbsp;

### DisableEffectsMask
Disable proc on spell effect index (bitmask)
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x01 | EFFECT_1 |
| 2 | 0x02 | EFFECT_2 |
| 4 | 0x04 | EFFECT_3 |
{.dense}

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

<a href="https://trinitycore.info/en/database/335/world/spell_pet_auras" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_pet_auras'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_ranks" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_ranks'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
