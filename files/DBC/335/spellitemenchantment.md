---
title: SpellItemEnchantment.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spellicon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellIcon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellitemenchantmentcondition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellItemEnchantmentCondition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellItemEnchantment.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spellitemenchantment&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellItemEnchantment)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Charges](#charges) | uint32 |  |
| 2 | [Effect_0](#effect) | uint32 |  |
| 3 | [Effect_1](#effect) | uint32 |  |
| 4 | [Effect_2](#effect) | uint32 |  |
| 5 | [EffectPointsMin_0](#effectpointsmin) | uint32 |  |
| 6 | [EffectPointsMin_1](#effectpointsmin) | uint32 |  |
| 7 | [EffectPointsMin_2](#effectpointsmin) | uint32 |  |
| 8 | [EffectPointsMax_0](#effectpointsmax) | uint32 |  |
| 9 | [EffectPointsMax_1](#effectpointsmax) | uint32 |  |
| 10 | [EffectPointsMax_2](#effectpointsmax) | uint32 |  |
| 11 | [EffectArg_0](#effectarg) | uint32 |  |
| 12 | [EffectArg_1](#effectarg) | uint32 |  |
| 13 | [EffectArg_2](#effectarg) | uint32 |  |
| 14 | [Name_0](#name) | string |  |
| 15 | [Name_1](#name) | string |  |
| 16 | [Name_2](#name) | string |  |
| 17 | [Name_3](#name) | string |  |
| 18 | [Name_4](#name) | string |  |
| 19 | [Name_5](#name) | string |  |
| 20 | [Name_6](#name) | string |  |
| 21 | [Name_7](#name) | string |  |
| 22 | [Name_8](#name) | string |  |
| 23 | [Name_9](#name) | string |  |
| 24 | [Name_10](#name) | string |  |
| 25 | [Name_11](#name) | string |  |
| 26 | [Name_12](#name) | string |  |
| 27 | [Name_13](#name) | string |  |
| 28 | [Name_14](#name) | string |  |
| 29 | [Name_15](#name) | string |  |
| 30 | [Name_lang_mask](#name) | uint32 |  |
| 31 | [ItemVisual](#itemvisual) | uint32 | [ItemVisuals.dbc/0](/files/DBC/335/itemvisuals#classid) |
| 32 | [Flags](#flags) | uint32 |  |
| 33 | [SrcItemID](#srcitemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id); [item entry](/database/335/world/item_template#id) |
| 34 | [ConditionID](#conditionid) | uint32 | [SpellItemEnchantmentCondition.dbc/0](/files/DBC/335/spellitemenchantmentcondition#id) |
| 35 | [RequiredSkillID](#requiredskillid) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skilllline#id) |
| 36 | [RequiredSkillRank](#requiredskillrank) | uint32 |  |
| 37 | [MinLevel](#minlevel) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Charges
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Effect
<code>Col: 2 &ndash; 4 (uint32)</code>

[`enum ItemEnchantmentType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L353-L364)
| ID | Name | **EffectArg** | Comment |
|----|------|---------------|---------|
| 1 | ITEM_ENCHANTMENT_TYPE_COMBAT_SPELL | [Spell ID](/files/DBC/335/spell#id) | proc Spell |
| 2 | ITEM_ENCHANTMENT_TYPE_DAMAGE | 0 | + weapon dmg |
| 3 | ITEM_ENCHANTMENT_TYPE_EQUIP_SPELL | [Spell ID](/files/DBC/335/spell#id) | passive Spell |
| 4 | ITEM_ENCHANTMENT_TYPE_RESISTANCE | SPELL_SCHOOL_\* |  |
| 5 | ITEM_ENCHANTMENT_TYPE_STAT | STAT_\* |  |
| 6 | ITEM_ENCHANTMENT_TYPE_TOTEM | 0 | + weapon dps |
| 7 | ITEM_ENCHANTMENT_TYPE_USE_SPELL | [Spell ID](/files/DBC/335/spell#id) | use Spell |
| 8 | ITEM_ENCHANTMENT_TYPE_PRISMATIC_SOCKET | 0 |  |
{.dense}

&nbsp;

### EffectPointsMin
<code>Col: 5 &ndash; 7 (uint32)</code>

*- no description -*
&nbsp;

### EffectPointsMax
:x: <code>Col: 8 &ndash; 10 (uint32)</code>

*- no description -*
&nbsp;

### EffectArg
<code>Col: 11 &ndash; 13 (uint32)</code>

see **Effect**

__**Effect** = ITEM_ENCHANTMENT_TYPE_RESISTANCE (4)__
[`enum SpellSchools`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L303-L313)
| ID | Name |
|----|------|
| 0 | SPELL_SCHOOL_NORMAL |
| 1 | SPELL_SCHOOL_HOLY |
| 2 | SPELL_SCHOOL_FIRE |
| 3 | SPELL_SCHOOL_NATURE |
| 4 | SPELL_SCHOOL_FROST |
| 5 | SPELL_SCHOOL_SHADOW |
| 6 | SPELL_SCHOOL_ARCANE |
{.dense}

__**Effect** = ITEM_ENCHANTMENT_TYPE_STAT (5)__
[`enum ItemModType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Item/ItemTemplate.h#L28-L74)
| ID | Name | Comment |  | ID | Name | Comment |
|----|------|---------|--|----|------|---------|
| 0 | ITEM_MOD_MANA | | | 27 | ITEM_MOD_CRIT_TAKEN_SPELL_RATING | |
| 1 | ITEM_MOD_HEALTH | | | 28 | ITEM_MOD_HASTE_MELEE_RATING | |
| 3 | ITEM_MOD_AGILITY | | | 29 | ITEM_MOD_HASTE_RANGED_RATING | |
| 4 | ITEM_MOD_STRENGTH | | | 30 | ITEM_MOD_HASTE_SPELL_RATING | |
| 5 | ITEM_MOD_INTELLECT | | | 31 | ITEM_MOD_HIT_RATING | |
| 6 | ITEM_MOD_SPIRIT | | | 32 | ITEM_MOD_CRIT_RATING | |
| 7 | ITEM_MOD_STAMINA | | | 33 | ITEM_MOD_HIT_TAKEN_RATING | |
| 12 | ITEM_MOD_DEFENSE_SKILL_RATING | | | 34 | ITEM_MOD_CRIT_TAKEN_RATING | |
| 13 | ITEM_MOD_DODGE_RATING | | | 35 | ITEM_MOD_RESILIENCE_RATING | |
| 14 | ITEM_MOD_PARRY_RATING | | | 36 | ITEM_MOD_HASTE_RATING | |
| 15 | ITEM_MOD_BLOCK_RATING | | | 37 | ITEM_MOD_EXPERTISE_RATING | |
| 16 | ITEM_MOD_HIT_MELEE_RATING | | | 38 | ITEM_MOD_ATTACK_POWER | |
| 17 | ITEM_MOD_HIT_RANGED_RATING | | | 39 | ITEM_MOD_RANGED_ATTACK_POWER | |
| 18 | ITEM_MOD_HIT_SPELL_RATING | | | 40 | ITEM_MOD_FERAL_ATTACK_POWER | not in 3.3 |
| 19 | ITEM_MOD_CRIT_MELEE_RATING | | | 41 | ITEM_MOD_SPELL_HEALING_DONE | deprecated |
| 20 | ITEM_MOD_CRIT_RANGED_RATING | | | 42 | ITEM_MOD_SPELL_DAMAGE_DONE | deprecated |
| 21 | ITEM_MOD_CRIT_SPELL_RATING | | | 43 | ITEM_MOD_MANA_REGENERATION | |
| 22 | ITEM_MOD_HIT_TAKEN_MELEE_RATING | | | 44 | ITEM_MOD_ARMOR_PENETRATION_RATING |
| 23 | ITEM_MOD_HIT_TAKEN_RANGED_RATING | | | 45 | ITEM_MOD_SPELL_POWER | |
| 24 | ITEM_MOD_HIT_TAKEN_SPELL_RATING | | | 46 | ITEM_MOD_HEALTH_REGEN | |
| 25 | ITEM_MOD_CRIT_TAKEN_MELEE_RATING | | | 47 | ITEM_MOD_SPELL_PENETRATION | |
| 26 | ITEM_MOD_CRIT_TAKEN_RANGED_RATING | | | 48 | ITEM_MOD_BLOCK_VALUE | |
{.dense}

&nbsp;

### Name
<code>Col: 14 &ndash; 30 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### ItemVisual
<code>Col: 31 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 32 (uint32)</code>

[`enum EnchantmentSlotMask`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L392-L398)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | ENCHANTMENT_CAN_SOULBOUND | soulbound while applied |
| 2 | 0x02 | ENCHANTMENT_UNK1 | do not log |
| 4 | 0x04 | ENCHANTMENT_UNK2 | mainhand only |
| 8 | 0x08 | ENCHANTMENT_UNK3 | allowed in arena / player class skill |
{.dense}

&nbsp;

### SrcItemID
<code>Col: 33 (uint32)</code>

Ref. to gem using the enchantment.
&nbsp;

### ConditionID
<code>Col: 34 (uint32)</code>

Effect activation condition.
&nbsp;

### RequiredSkillID
<code>Col: 35 (uint32)</code>

*- no description -*
&nbsp;

### RequiredSkillRank
<code>Col: 36 (uint32)</code>

*- no description -*
&nbsp;

### MinLevel
<code>Col: 37 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spellicon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellIcon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellitemenchantmentcondition" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellItemEnchantmentCondition'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
