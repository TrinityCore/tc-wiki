---
title: ChrRaces.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/chrclasses" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ChrClasses'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/cinematiccamera" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CinematicCamera'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ChrRaces.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=chrraces&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ChrRaces)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
| 2 | [FactionID](#factionid) | uint32 | [FactionTemplate.dbc/0](/files/DBC/335/factiontemplate#id) |
| 3 | [ExplorationSoundID](#explorationsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 4 | [MaleDisplayID](#maledisplayid) | uint32 | [CreatureDisplayInfo.dbc/0](/files/DBC/335/creaturedisplayinfo#id) |
| 5 | [FemaleDisplayID](#femaledisplayid) | uint32 | [CreatureDisplayInfo.dbc/0](/files/DBC/335/creaturedisplayinfo#id) |
| 6 | [ClientPrefix](#clientprefix) | string |  |
| 7 | [BaseLanguage](#baselanguage) | uint32 | [Languages.dbc/0](/files/DBC/335/languages#id) |
| 8 | [CreatureType](#creaturetype) | uint32 | [CreatureType.dbc/0](/files/DBC/335/creaturetype#id) |
| 9 | [ResSicknessSpellID](#ressicknessspellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id); [spell Id](/database/335/world/spell_dbc#id) |
| 10 | [SplashSoundID](#splashsoundid) | uint32 |[SoundEntries.dbc/0](/files/DBC/335/soundentries#id)  |
| 11 | [ClientFileString](#clientfilestring) | string |  |
| 12 | [CinematicSequenceID](#cinematicsequenceid) | uint32 | [CinematicSequences.dbc/0](/files/DBC/335/cinematicsequences#id) |
| 13 | [Alliance](#alliance) | uint32 |  |
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
| 31 | [NameFemale_0](#namefemale) | string |  |
| 32 | [NameFemale_1](#namefemale) | string |  |
| 33 | [NameFemale_2](#namefemale) | string |  |
| 34 | [NameFemale_3](#namefemale) | string |  |
| 35 | [NameFemale_4](#namefemale) | string |  |
| 36 | [NameFemale_5](#namefemale) | string |  |
| 37 | [NameFemale_6](#namefemale) | string |  |
| 38 | [NameFemale_7](#namefemale) | string |  |
| 39 | [NameFemale_8](#namefemale) | string |  |
| 40 | [NameFemale_9](#namefemale) | string |  |
| 41 | [NameFemale_10](#namefemale) | string |  |
| 42 | [NameFemale_11](#namefemale) | string |  |
| 43 | [NameFemale_12](#namefemale) | string |  |
| 44 | [NameFemale_13](#namefemale) | string |  |
| 45 | [NameFemale_14](#namefemale) | string |  |
| 46 | [NameFemale_15](#namefemale) | string |  |
| 47 | [NameFemale_lang_mask](#namefemale) | uint32 |  |
| 48 | [NameMale_0](#namemale) | string |  |
| 49 | [NameMale_1](#namemale) | string |  |
| 50 | [NameMale_2](#namemale) | string |  |
| 51 | [NameMale_3](#namemale) | string |  |
| 52 | [NameMale_4](#namemale) | string |  |
| 53 | [NameMale_5](#namemale) | string |  |
| 54 | [NameMale_6](#namemale) | string |  |
| 55 | [NameMale_7](#namemale) | string |  |
| 56 | [NameMale_8](#namemale) | string |  |
| 57 | [NameMale_9](#namemale) | string |  |
| 58 | [NameMale_10](#namemale) | string |  |
| 59 | [NameMale_11](#namemale) | string |  |
| 60 | [NameMale_12](#namemale) | string |  |
| 61 | [NameMale_13](#namemale) | string |  |
| 62 | [NameMale_14](#namemale) | string |  |
| 63 | [NameMale_15](#namemale) | string |  |
| 64 | [NameMale_lang_mask](#namemale) | uint32 |  |
| 65 | [FacialHairCustomization_0](#facialhaircustomization) | string |  |
| 66 | [FacialHairCustomization_1](#facialhaircustomization) | string |  |
| 67 | [HairCustomization](#haircustomization) | string |  |
| 68 | [RequiredExpansion](#requiredexpansion) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 1 (uint32)</code>

| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | CHRRACES_FLAGS_NOT_PLAYABLE | NPC only |
| 2 | 0x02 | CHRRACES_FLAGS_BARE_FEET | Do Not Component Feet |
| 4 | 0x04 | CHRRACES_FLAGS_CAN_MOUNT | Can Mount |
| 8 | 0x08 |  | Has Bald |
{.dense}

&nbsp;

### FactionID
<code>Col: 2 (uint32)</code>

Also, the order in the creation screen depends on this.
&nbsp;

### ExplorationSoundID
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### MaleDisplayID
<code>Col: 4 (uint32)</code>

Only used for the char creation/selection screen. Ingame the server sets the model.
&nbsp;

### FemaleDisplayID
<code>Col: 5 (uint32)</code>

Only used for the char creation/selection screen. Ingame the server sets the model.
&nbsp;

### ClientPrefix
:x: <code>Col: 6 (string)</code>

A short form of the name. Used for helmet models.
&nbsp;

### BaseLanguage
<code>Col: 7 (uint32)</code>

* 1: Horde
* 7: Alliance
&nbsp;

### CreatureType
<code>Col: 8 (uint32)</code>

* 7: Humanoid
&nbsp;

### ResSicknessSpellID
<code>Col: 9 (uint32)</code>

always 15007
&nbsp;

### SplashSoundID
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### ClientFileString
:x: <code>Col: 11 (string)</code>

Same as the one used in model-filepathes.
&nbsp;

### CinematicSequenceID
<code>Col: 12 (uint32)</code>

ID from CinematicSequences.dbc, used for the opening cinematic.
&nbsp;

### Alliance
<code>Col: 13 (uint32)</code>

[`enum TeamId`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L785-L790)
| ID | Name |
|----|------|
| 0 | TEAM_ALLIANCE |
| 1 | TEAM_HORDE |
| 2 | TEAM_NEUTRAL |
{.dense}

&nbsp;

### Name
<code>Col: 14 &ndash; 30 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### NameFemale
:x: <code>Col: 31 &ndash; 47 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### NameMale
:x: <code>Col: 48 &ndash; 64 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### FacialHairCustomization
:x: <code>Col: 65 &ndash; 66 (string)</code>

Internal names for the facial features.
&nbsp;

### HairCustomization
:x: <code>Col: 67 (string)</code>

*- no description -*
&nbsp;

### RequiredExpansion
<code>Col: 68 (uint32)</code>

* 0: Classic
* 1: BC
* 2: WotLK
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/chrclasses" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ChrClasses'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/cinematiccamera" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CinematicCamera'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
