---
title: SkillRaceClassInfo.dbc
description:
published: true
date: 2023-10-04T22:52:12.616Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:06:55.827Z
---

# SkillRaceClassInfo.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SkillRaceClassInfo)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SkillID](#skillid) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skillline#id-alt) |
| 2 | [RaceMask](#racemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 3 | [ClassMask](#classmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id-alt) |
| 4 | [Flags](#flags) | uint32 |  |
| 5 | [MinLevel](#minlevel) | uint32 |  |
| 6 | [SkillTierID](#skilltierid) | uint32 | [SkillTiers.dbc/0](/files/DBC/335/skilltiers#id-alt) |
| 7 | [SkillCostIndex](#skillcostindex) | uint32 | [SkillCostsData.dbc/2-4](/files/DBC/335/skillcostsdata#cost) |

&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SkillID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### RaceMask
<code>Col: 2 (uint32)</code>

<!--@include: @/partial/335/chrraces.md{13,}-->

&nbsp;

### ClassMask
<code>Col: 3 (uint32)</code>

<!--@include: @/partial/335/chrclasses.md{13,}-->

&nbsp;

### Flags
<code>Col: 4 (uint32)</code>

[`enum SkillRaceClassInfoFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L372-L380)
| Value | Flag   | Name | Comment |
|-------|--------|------|---------|
| 2 | 0x0002 | SKILL_FLAG_NO_SKILLUP_MESSAGE | Hidden Clientside |
| 16 | 0x0010 | SKILL_FLAG_ALWAYS_MAX_VALUE |  |
| 32 | 0x0020 | SKILL_FLAG_UNLEARNABLE | Skill can be unlearned |
| 128 | 0x0080 | SKILL_FLAG_INCLUDE_IN_SORT | Spells belonging to a skill with this flag will additionally compare skill ids when sorting spellbook in client |
| 256 | 0x0100 | SKILL_FLAG_NOT_TRAINABLE |  |
| 1024 | 0x0400 | SKILL_FLAG_MONO_VALUE | Skill always has value 1 - clientside display flag, real value can be different |

&nbsp;

### MinLevel
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### SkillTierID
<code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### SkillCostIndex
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;
