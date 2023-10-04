---
title: SoundEntries.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/soundemitters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SoundEmitters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/soundentriesadvanced" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SoundEntriesAdvanced'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SoundEntries.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=soundentries&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SoundEntries)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [SoundType](#soundtype) | uint32 |  |
| 2 | [Name](#name) | string |  |
| 3 | [File_0](#file) | string |  |
| 4 | [File_1](#file) | string |  |
| 5 | [File_2](#file) | string |  |
| 6 | [File_3](#file) | string |  |
| 7 | [File_4](#file) | string |  |
| 8 | [File_5](#file) | string |  |
| 9 | [File_6](#file) | string |  |
| 10 | [File_7](#file) | string |  |
| 11 | [File_8](#file) | string |  |
| 12 | [File_9](#file) | string |  |
| 13 | [Freq_0](#freq) | uint32 |  |
| 14 | [Freq_1](#freq) | uint32 |  |
| 15 | [Freq_2](#freq) | uint32 |  |
| 16 | [Freq_3](#freq) | uint32 |  |
| 17 | [Freq_4](#freq) | uint32 |  |
| 18 | [Freq_5](#freq) | uint32 |  |
| 19 | [Freq_6](#freq) | uint32 |  |
| 20 | [Freq_7](#freq) | uint32 |  |
| 21 | [Freq_8](#freq) | uint32 |  |
| 22 | [Freq_9](#freq) | uint32 |  |
| 23 | [DirectoryBase](#directorybase) | string |  |
| 24 | [VolumeFloat](#volumefloat) | float |  |
| 25 | [Flags](#flags) | uint32 |  |
| 26 | [MinDistance](#mindistance) | float |  |
| 27 | [DistanceCutoff](#distancecutoff) | float |  |
| 28 | [EAXDef](#eaxdef) | uint32 |  |
| 29 | [SoundEntriesAdvancedID](#soundentriesadvancedid) | uint32 | [SoundEntriesAdvanced.dbc/0](/files/DBC/335/soundentriesadvanced#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SoundType
:x: <code>Col: 1 (uint32)</code>

| ID | Name | Comment |  | ID | Name | Comment
|----|------|---------|--|----|------|---------
| 1 | Spells |  | | 20 | Footsteps(Splashes) |  |
| 2 | UI |  | | 21 | CharacterSplashSounds |  |
| 3 | Footsteps |  | | 22 | WaterVolume Sounds |  |
| 4 | Combat Impacts |  | | 23 | Tradeskill Sounds |  |
| 6 | Combat Swings |  | | 24 | Terrain Emitter Sounds |  |
| 7 | Greetings |  | | 25 | Game Object Sounds |  |
| 8 | Casting |  | | 26 | SpellFizzles |  |
| 9 | Pick Up/Put Down | "Item Use Sounds" | | 27 | CreatureLoops |  |
| 10 | NPC Combat | Monster Sounds | | 28 | Zone Music Files |  |
| 12 | Errors | "VocalUISounds" | | 29 | Character Macro Lines | emotes |
| 13 | Birds | "Point Sound Emitters" in 2.5 client | | 30 | Cinematic Music |  |
| 14 | Doodad Sounds |  | | 31 | Cinematic Voice |  |
| 16 | Death Thud Sounds |  | | 50 | Zone Ambience |  |
| 17 | NPC Sounds |  | | 52 | Sound Emitters |  |
| 18 | Test/Temporary | deosn't exist in blizzard's enum in 2.5 | | 53 | Vehicle States |
| 19 | Foley Sounds (NOT EDITABLE) |  |  |  |  |
{.dense}

&nbsp;

### Name
:x: <code>Col: 2 (string)</code>

*- no description -*
&nbsp;

### File
:x: <code>Col: 3 &ndash; 12 (string)</code>

*- no description -*
&nbsp;

### Freq
:x: <code>Col: 13 &ndash; 22 (uint32)</code>

Probability weight for **File**.
&nbsp;

### DirectoryBase
:x: <code>Col: 23 (string)</code>

*- no description -*
&nbsp;

### VolumeFloat
:x: <code>Col: 24 (float)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 25 (uint32)</code>

* 0x200: Looping?
&nbsp;

### MinDistance
:x: <code>Col: 26 (float)</code>

*- no description -*
&nbsp;

### DistanceCutoff
:x: <code>Col: 27 (float)</code>

*- no description -*
&nbsp;

### EAXDef
:x: <code>Col: 28 (uint32)</code>

*- no description -*
&nbsp;

### SoundEntriesAdvancedID
:x: <code>Col: 29 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/soundemitters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SoundEmitters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/soundentriesadvanced" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SoundEntriesAdvanced'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
