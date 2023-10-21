---
title: spell_enchant_proc_data
description: 
published: true
date: 2022-11-21T21:09:05.226Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:53.405Z
---

<a href="https://trinitycore.info/en/database/master/world/spell_custom_attr" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_custom_attr'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

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
references [SpellItemEnchantment ID](https://wow.tools/dbc/?dbc=spellitemenchantmen)
Any of the types (0 – 2) must be of ITEM_ENCHANTMENT_TYPE_COMBAT_SPELL (1)
&nbsp;

### Chance
Absolute chance per hit or spell cast. (Used when **ProcsPerMinute** is 0)
&nbsp;

### ProcsPerMinute
Chance relative to [delay of equipped weapon](https://wow.tools/dbc/?dbc=itemsparse) .
`chance = (ProcsPerMinute * delay) / 600`
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
| 1 | 0x0001 | PROC_ATTR_REQ_EXP_OR_HONOR | requires proc target to give exp or honor for aura proc |
| 2 | 0x0002 | PROC_ATTR_TRIGGERED_CAN_PROC | aura can proc even with triggered spells |
| 4 | 0x0004 | PROC_ATTR_REQ_MANA_COST | requires triggering spell to have a mana cost for aura proc |
| 8 | 0x0008 | PROC_ATTR_REQ_SPELLMOD | requires triggering spell to be affected by proccing aura to drop charges |
| 128 | 0x0080 | PROC_ATTR_REDUCE_PROC_60 | aura should have a reduced chance to proc if level of proc Actor > 60 |
| 256 | 0x0100 | PROC_ATTR_CANT_PROC_FROM_ITEM_CAST | do not allow aura proc if proc is caused by a spell casted by item |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/spell_custom_attr" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_custom_attr'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

