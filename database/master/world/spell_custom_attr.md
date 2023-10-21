---
title: spell_custom_attr
description: 
published: true
date: 2022-11-21T21:09:03.203Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:50.815Z
---

<a href="https://trinitycore.info/en/database/master/world/spell_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_area'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_enchant_proc_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_enchant_proc_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  | spell id |
| [attributes](#attributes) | int | unsigned |  | NO | 0 |  | SpellCustomAttributes |
&nbsp;
## Description of fields

### entry
references [Spell ID](https://wow.tools/dbc/?dbc=spell)
&nbsp;

### attributes

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x00000001 | SPELL_ATTR0_CU_ENCHANT_PROC |  |
| 2 | 0x00000002 | SPELL_ATTR0_CU_CONE_BACK |  |
| 4 | 0x00000004 | SPELL_ATTR0_CU_CONE_LINE |  |
| 8 | 0x00000008 | SPELL_ATTR0_CU_SHARE_DAMAGE |  |
| 16 | 0x00000010 | SPELL_ATTR0_CU_NO_INITIAL_THREAT |  |
| 32 | 0x00000020 | SPELL_ATTR0_CU_AURA_CC |  |
| 64 | 0x00000040 | SPELL_ATTR0_CU_DONT_BREAK_STEALTH |  |
| 128 | 0x00000080 | SPELL_ATTR0_CU_CAN_CRIT |  |
| 256 | 0x00000100 | SPELL_ATTR0_CU_DIRECT_DAMAGE |  |
| 512 | 0x00000200 | SPELL_ATTR0_CU_CHARGE |  |
| 1024 | 0x00000400 | SPELL_ATTR0_CU_PICKPOCKET |  |
| 2048 | 0x00000800 | SPELL_ATTR0_CU_ROLLING_PERIODIC |  |
| 4096 | 0x00001000 | SPELL_ATTR0_CU_NEGATIVE_EFF0 |  |
| 8192 | 0x00002000 | SPELL_ATTR0_CU_NEGATIVE_EFF1 |  |
| 16384 | 0x00004000 | SPELL_ATTR0_CU_NEGATIVE_EFF2 |  |
| 32768 | 0x00008000 | SPELL_ATTR0_CU_IGNORE_ARMOR |  |
| 65536 | 0x00010000 | SPELL_ATTR0_CU_REQ_TARGET_FACING_CASTER |  |
| 131072 | 0x00020000 | SPELL_ATTR0_CU_REQ_CASTER_BEHIND_TARGET |  |
| 262144 | 0x00040000 | SPELL_ATTR0_CU_ALLOW_INFLIGHT_TARGET |  |
| 524288 | 0x00080000 | SPELL_ATTR0_CU_NEEDS_AMMO_DATA |  |
| 1048576 | 0x00100000 | SPELL_ATTR0_CU_BINARY_SPELL |  |
| 2097152 | 0x00200000 | SPELL_ATTR0_CU_SCHOOLMASK_NORMAL_WITH_MAGIC |  |
| 4194304 | 0x00400000 | :x: SPELL_ATTR0_CU_DEPRECATED_LIQUID_AURA | DO NOT REUSE |
| 8388608 | 0x00800000 | :x: SPELL_ATTR0_CU_IS_TALENT | reserved for master branch |
| 16777216 | 0x01000000 | SPELL_ATTR0_CU_AURA_CANNOT_BE_SAVED |  |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/spell_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spell_area'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_enchant_proc_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_enchant_proc_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

