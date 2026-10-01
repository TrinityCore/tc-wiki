---
title: SkillLineAbility.dbc
description:
published: true
date: 2023-10-04T22:51:58.760Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:06:51.451Z
---

# SkillLineAbility.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SkillLineAbility)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SkillLine](#skillline) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skillline#id-alt) |
| 2 | [Spell](#spell) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 3 | [RaceMask](#racemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 4 | [ClassMask](#classmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id-alt) |
| 5 | [ExcludeRace](#excluderace) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 6 | [ExcludeClass](#excludeclass) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id-alt) |
| 7 | [MinSkillLineRank](#minskilllinerank) | uint32 |  |
| 8 | [SupercededBySpell](#supercededbyspell) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 9 | [AcquireMethod](#acquiremethod) | uint32 |  |
| 10 | [TrivialSkillLineRankHigh](#trivialskilllinerankhigh) | uint32 |  |
| 11 | [TrivialSkillLineRankLow](#trivialskilllineranklow) | uint32 |  |
| 12 | [CharacterPoints_0](#characterpoints) | uint32 |  |
| 13 | [CharacterPoints_1](#characterpoints) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SkillLine
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Spell
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### RaceMask
<code>Col: 3 (uint32)</code>

<!--@include: @/partial/335/chrraces.md{13,}-->

&nbsp;

### ClassMask
<code>Col: 4 (uint32)</code>

<!--@include: @/partial/335/chrclasses.md{13,}-->

&nbsp;

### ExcludeRace
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### ExcludeClass
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### MinSkillLineRank
<code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### SupercededBySpell
<code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### AcquireMethod
<code>Col: 9 (uint32)</code>

[`enum AbilityLearnType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCEnums.h#L347-L351)
| ID | Name | Comment |
|----|------|---------|
| 0 |  | Taught by trainer |
| 1 | SKILL_LINE_ABILITY_LEARNED_ON_SKILL_VALUE | Spell state will update depending on skill value |
| 2 | SKILL_LINE_ABILITY_LEARNED_ON_SKILL_LEARN | Spell will be learned/removed together with entire skill |
{.dense}

&nbsp;

### TrivialSkillLineRankHigh
<code>Col: 10 (uint32)</code>

'grey' threshold
&nbsp;

### TrivialSkillLineRankLow
<code>Col: 11 (uint32)</code>

'yellow' threshold
&nbsp;

### CharacterPoints
:x: <code>Col: 12 &ndash; 13 (uint32)</code>

*- no description -*
&nbsp;
