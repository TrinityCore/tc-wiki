---
title: ChrClasses.dbc
description: 
published: true
date: 2023-10-07T20:46:03.459Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:01:51.629Z
---

<a href="https://trinitycore.info/files/DBC/335/chatprofanity" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ChatProfanity'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/chrraces" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ChrRaces'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ChrClasses.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=chrclasses&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ChrClasses)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [DamageBonusStat](#damagebonusstat) | uint32 |  |
| 2 | [DisplayPower](#displaypower) | uint32 |  |
| 3 | [PetNameToken](#petnametoken) | string |  |
| 4 | [Name_0](#name) | string |  |
| 5 | [Name_1](#name) | string |  |
| 6 | [Name_2](#name) | string |  |
| 7 | [Name_3](#name) | string |  |
| 8 | [Name_4](#name) | string |  |
| 9 | [Name_5](#name) | string |  |
| 10 | [Name_6](#name) | string |  |
| 11 | [Name_7](#name) | string |  |
| 12 | [Name_8](#name) | string |  |
| 13 | [Name_9](#name) | string |  |
| 14 | [Name_10](#name) | string |  |
| 15 | [Name_11](#name) | string |  |
| 16 | [Name_12](#name) | string |  |
| 17 | [Name_13](#name) | string |  |
| 18 | [Name_14](#name) | string |  |
| 19 | [Name_15](#name) | string |  |
| 20 | [Name_lang_mask](#name) | uint32 |  |
| 21 | [NameFemale_0](#namefemale) | string |  |
| 22 | [NameFemale_1](#namefemale) | string |  |
| 23 | [NameFemale_2](#namefemale) | string |  |
| 24 | [NameFemale_3](#namefemale) | string |  |
| 25 | [NameFemale_4](#namefemale) | string |  |
| 26 | [NameFemale_5](#namefemale) | string |  |
| 27 | [NameFemale_6](#namefemale) | string |  |
| 28 | [NameFemale_7](#namefemale) | string |  |
| 29 | [NameFemale_8](#namefemale) | string |  |
| 30 | [NameFemale_9](#namefemale) | string |  |
| 31 | [NameFemale_10](#namefemale) | string |  |
| 32 | [NameFemale_11](#namefemale) | string |  |
| 33 | [NameFemale_12](#namefemale) | string |  |
| 34 | [NameFemale_13](#namefemale) | string |  |
| 35 | [NameFemale_14](#namefemale) | string |  |
| 36 | [NameFemale_15](#namefemale) | string |  |
| 37 | [NameFemale_lang_mask](#namefemale) | uint32 |  |
| 38 | [NameMale_0](#namemale) | string |  |
| 39 | [NameMale_1](#namemale) | string |  |
| 40 | [NameMale_2](#namemale) | string |  |
| 41 | [NameMale_3](#namemale) | string |  |
| 42 | [NameMale_4](#namemale) | string |  |
| 43 | [NameMale_5](#namemale) | string |  |
| 44 | [NameMale_6](#namemale) | string |  |
| 45 | [NameMale_7](#namemale) | string |  |
| 46 | [NameMale_8](#namemale) | string |  |
| 47 | [NameMale_9](#namemale) | string |  |
| 48 | [NameMale_10](#namemale) | string |  |
| 49 | [NameMale_11](#namemale) | string |  |
| 50 | [NameMale_12](#namemale) | string |  |
| 51 | [NameMale_13](#namemale) | string |  |
| 52 | [NameMale_14](#namemale) | string |  |
| 53 | [NameMale_15](#namemale) | string |  |
| 54 | [NameMale_lang_mask](#namemale) | uint32 |  |
| 55 | [Filename](#filename) | string |  |
| 56 | [SpellClassSet](#spellclassset) | uint32 | [Spell.dbc/208](/files/DBC/335/spell#spellclassset) |
| 57 | [Flags](#flags) | uint32 |  |
| 58 | [CinematicSequenceID](#cinematicsequenceid) | uint32 | [CinematicSequences.dbc/0](/files/DBC/335/cinematicsequences#id) |
| 59 | [RequiredExpansion](#requiredexpansion) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### DamageBonusStat
:x: <code>Col: 1 (uint32)</code>

Doesn't work for ChrClass 6?
[`enum Stats`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L275-L283)
| ID | Name |
|----|------|
| 0 | STAT_STRENGTH |
| 1 | STAT_AGILITY |
| 2 | STAT_STAMINA |
| 3 | STAT_INTELLECT |
| 4 | STAT_SPIRIT |
{.dense}

&nbsp;

### DisplayPower
<code>Col: 2 (uint32)</code>

[`enum Powers`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L286-L298)
| ID | Name |
|----|------|
| -2 | POWER_HEALTH |
| 0 | POWER_MANA |
| 1 | POWER_RAGE |
| 2 | POWER_FOCUS |
| 3 | POWER_ENERGY |
| 4 | POWER_HAPPINESS |
| 5 | POWER_RUNE |
| 6 | POWER_RUNIC_POWER |
{.dense}

&nbsp;

### PetNameToken
:x: <code>Col: 3 (string)</code>

* **ID** = 9: DEMON
* else: PET
&nbsp;

### Name
<code>Col: 4 &ndash; 20 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### NameFemale
:x: <code>Col: 21 &ndash; 37 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### NameMale
:x: <code>Col: 38 &ndash; 54 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### Filename
:x: <code>Col: 55 (string)</code>

*- no description -*
&nbsp;

### SpellClassSet
<code>Col: 56 (uint32)</code>

[`enum SpellFamilyNames`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L3575-L3595)
| ID | Name | Comment |
|----|------|---------|
| 0 | SPELLFAMILY_GENERIC | Generic |
| 1 | SPELLFAMILY_UNK1 | Unk1 (events, holidays, ...) |
| 3 | SPELLFAMILY_MAGE | Mage |
| 4 | SPELLFAMILY_WARRIOR | Warrior |
| 5 | SPELLFAMILY_WARLOCK | Warlock |
| 6 | SPELLFAMILY_PRIEST | Priest |
| 7 | SPELLFAMILY_DRUID | Druid |
| 8 | SPELLFAMILY_ROGUE | Rogue |
| 9 | SPELLFAMILY_HUNTER | Hunter |
| 10 | SPELLFAMILY_PALADIN | Paladin |
| 11 | SPELLFAMILY_SHAMAN | Shaman |
| 12 | SPELLFAMILY_UNK2 | Unk2 (Silence resistance?) |
| 13 | SPELLFAMILY_POTION | Potion |
| 15 | SPELLFAMILY_DEATHKNIGHT | Death Knight |
| 17 | SPELLFAMILY_PET | Pet |
{.dense}

&nbsp;

### Flags
:x: <code>Col: 57 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x01 | Use Loincloth |
| 2 | 0x02 | Player Class |
| 4 | 0x04 | Display Pet |
| 8 | 0x08 | Unused (used to be for the relic slot in older clients) |
| 16 | 0x10 | Can Wear Scaling-Stat Mail |
| 32 | 0x20 | Can Wear Scaling-Stat Plate |
| 64 | 0x40 | Bind Starting Area |
{.dense}

&nbsp;

### CinematicSequenceID
<code>Col: 58 (uint32)</code>

ID from CinematicSequences.dbc
&nbsp;

### RequiredExpansion
<code>Col: 59 (uint32)</code>

* 0: Classic
* 1: BC
* 2: WotLK
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/chatprofanity" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ChatProfanity'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/chrraces" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ChrRaces'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
