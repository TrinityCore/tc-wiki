---
title: SpellItemEnchantment.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# SpellItemEnchantment.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellItemEnchantment)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Charges](#charges) | uint32 |  |
| 2 | [Effect_0](#effect) | uint32 |  |
| 3 | [Effect_1](#effect) | uint32 |  |
| 4 | [Effect_2](#effect) | uint32 |  |
| 5 | [EffectPointsMin_0](#effectpointsmin) | int32 |  |
| 6 | [EffectPointsMin_1](#effectpointsmin) | int32 |  |
| 7 | [EffectPointsMin_2](#effectpointsmin) | int32 |  |
| 8 | [EffectPointsMax_0](#effectpointsmax) | int32 |  |
| 9 | [EffectPointsMax_1](#effectpointsmax) | int32 |  |
| 10 | [EffectPointsMax_2](#effectpointsmax) | int32 |  |
| 11 | [EffectArg_0](#effectarg) | uint32 |  |
| 12 | [EffectArg_1](#effectarg) | uint32 |  |
| 13 | [EffectArg_2](#effectarg) | uint32 |  |
| 14 | [Name_0](#name-alt) | string |  |
| 15 | [Name_1](#name-alt) | string |  |
| 16 | [Name_2](#name-alt) | string |  |
| 17 | [Name_3](#name-alt) | string |  |
| 18 | [Name_4](#name-alt) | string |  |
| 19 | [Name_5](#name-alt) | string |  |
| 20 | [Name_6](#name-alt) | string |  |
| 21 | [Name_7](#name-alt) | string |  |
| 22 | [Name_8](#name-alt) | string |  |
| 23 | [Name_9](#name-alt) | string |  |
| 24 | [Name_10](#name-alt) | string |  |
| 25 | [Name_11](#name-alt) | string |  |
| 26 | [Name_12](#name-alt) | string |  |
| 27 | [Name_13](#name-alt) | string |  |
| 28 | [Name_14](#name-alt) | string |  |
| 29 | [Name_15](#name-alt) | string |  |
| 30 | [Name_lang_mask](#name-alt) | uint32 |  |
| 31 | [ItemVisual](#itemvisual) | uint32 | [ItemVisuals.dbc/0](/files/DBC/335/itemvisuals#id-alt) |
| 32 | [Flags](#flags) | uint32 |  |
| 33 | [SrcItemID](#srcitemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#entry) |
| 34 | [ConditionID](#conditionid) | uint32 | [SpellItemEnchantmentCondition.dbc/0](/files/DBC/335/spellitemenchantmentcondition#id-alt) |
| 35 | [RequiredSkillID](#requiredskillid) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skillline#id-alt) |
| 36 | [RequiredSkillRank](#requiredskillrank) | uint32 |  |
| 37 | [MinLevel](#minlevel) | uint32 |  |

&nbsp;
## Description of fields

### ID {#id-alt}
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
| 1 | ITEM_ENCHANTMENT_TYPE_COMBAT_SPELL | [Spell ID](/files/DBC/335/spell#id-alt) | proc Spell |
| 2 | ITEM_ENCHANTMENT_TYPE_DAMAGE | 0 | + weapon dmg |
| 3 | ITEM_ENCHANTMENT_TYPE_EQUIP_SPELL | [Spell ID](/files/DBC/335/spell#id-alt) | passive Spell |
| 4 | ITEM_ENCHANTMENT_TYPE_RESISTANCE | SPELL_SCHOOL_\* |  |
| 5 | ITEM_ENCHANTMENT_TYPE_STAT | STAT_\* |  |
| 6 | ITEM_ENCHANTMENT_TYPE_TOTEM | 0 | + weapon dps |
| 7 | ITEM_ENCHANTMENT_TYPE_USE_SPELL | [Spell ID](/files/DBC/335/spell#id-alt) | use Spell |
| 8 | ITEM_ENCHANTMENT_TYPE_PRISMATIC_SOCKET | 0 |  |

&nbsp;

### EffectPointsMin
<code>Col: 5 &ndash; 7 (int32)</code>

*- no description -*
&nbsp;

### EffectPointsMax
:x: <code>Col: 8 &ndash; 10 (int32)</code>

*- no description -*
&nbsp;

### EffectArg
<code>Col: 11 &ndash; 13 (uint32)</code>

see **Effect**

__**Effect** = ITEM_ENCHANTMENT_TYPE_RESISTANCE (4)__
<!--@include: @/partial/335/spell-schools.md{3,12}-->

__**Effect** = ITEM_ENCHANTMENT_TYPE_STAT (5)__
<!--@include: @/partial/335/item-mod-type.md-->

&nbsp;

### Name {#name-alt}
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
