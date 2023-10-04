---
title: SkillLineAbility.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/skillline" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SkillLine'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/skilllinecategory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SkillLineCategory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SkillLineAbility.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=skilllineability&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SkillLineAbility)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [SkillLine](#skillline) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skilllline#id) |
| 2 | [Spell](#spell) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 3 | [RaceMask](#racemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 4 | [ClassMask](#classmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 5 | [ExcludeRace](#excluderace) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 6 | [ExcludeClass](#excludeclass) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 7 | [MinSkillLineRank](#minskilllinerank) | uint32 |  |
| 8 | [SupercededBySpell](#supercededbyspell) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 9 | [AcquireMethod](#acquiremethod) | uint32 |  |
| 10 | [TrivialSkillLineRankHigh](#trivialskilllinerankhigh) | uint32 |  |
| 11 | [TrivialSkillLineRankLow](#trivialskilllineranklow) | uint32 |  |
| 12 | [CharacterPoints_0](#characterpoints) | uint32 |  |
| 13 | [CharacterPoints_1](#characterpoints) | uint32 |  |
&nbsp;
## Description of fields

### ID
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

| Value | Flag   | Name      |  | Value | Flag   | Name      |
|-------|--------|-----------|--|-------|--------|-----------|
|     1 | 0x0001 | Human     |  |     2 | 0x0002 | Orc       |
|     4 | 0x0004 | Dwarf     |  |    16 | 0x0010 | Undead    |
|     8 | 0x0008 | Night Elf |  |    32 | 0x0020 | Tauren    |
|    64 | 0x0040 | Gnome     |  |   128 | 0x0080 | Troll     |
|  1024 | 0x0400 | Draenei   |  |   512 | 0x0200 | Blood Elf |
|  1101 | 0x044D | *_Alliance_* |  |   690 | 0x02B2 | *_Horde_* |
{.dense}

&nbsp;

### ClassMask
<code>Col: 4 (uint32)</code>

| Value | Flag   | Name      |  | Value | Flag   | Name         |
|-------|--------|-----------|--|-------|--------|--------------|
|     1 | 0x0001 | Warrior   |  |    32 | 0x0020 | Death Knight |
|     2 | 0x0002 | Paladin   |  |    64 | 0x0040 | Shaman       |
|     4 | 0x0004 | Hunter    |  |   128 | 0x0080 | Mage         |
|     8 | 0x0008 | Rogue     |  |   256 | 0x0100 | Warlock      |
|    16 | 0x0010 | Priest    |  |  1024 | 0x0400 | Druid        |
{.dense}

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

<a href="https://trinitycore.info/files/DBC/335/skillline" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SkillLine'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/skilllinecategory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SkillLineCategory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
