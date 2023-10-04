---
title: SkillRaceClassInfo.dbc
description: 
published: true
date: 2023-10-04T22:52:12.616Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:06:55.827Z
---

<a href="https://trinitycore.info/files/DBC/335/skilllinecategory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SkillLineCategory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/skilltiers" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SkillTiers'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SkillRaceClassInfo.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=skillraceclassinfo&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SkillRaceClassInfo)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [SkillID](#skillid) | uint32 | [SkillLine.dbc/0](/files/DBC/335/skillline#id) |
| 2 | [RaceMask](#racemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id) |
| 3 | [ClassMask](#classmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id) |
| 4 | [Flags](#flags) | uint32 |  |
| 5 | [MinLevel](#minlevel) | uint32 |  |
| 6 | [SkillTierID](#skilltierid) | uint32 | [SkillTiers.dbc/0](/files/DBC/335/skilltiers#id) |
| 7 | [SkillCostIndex](#skillcostindex) | uint32 | [SkillCostsData.dbc/2-4](/files/DBC/335/skillcostsdata#cost) |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SkillID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### RaceMask
<code>Col: 2 (uint32)</code>

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
<code>Col: 3 (uint32)</code>

| Value | Flag   | Name      |  | Value | Flag   | Name         |
|-------|--------|-----------|--|-------|--------|--------------|
|     1 | 0x0001 | Warrior   |  |    32 | 0x0020 | Death Knight |
|     2 | 0x0002 | Paladin   |  |    64 | 0x0040 | Shaman       |
|     4 | 0x0004 | Hunter    |  |   128 | 0x0080 | Mage         |
|     8 | 0x0008 | Rogue     |  |   256 | 0x0100 | Warlock      |
|    16 | 0x0010 | Priest    |  |  1024 | 0x0400 | Druid        |
{.dense}

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
{.dense}

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

<a href="https://trinitycore.info/files/DBC/335/skilllinecategory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SkillLineCategory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/skilltiers" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SkillTiers'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
