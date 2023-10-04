---
title: WMOAreaTable.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Weather'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldchunksounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldChunkSounds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# WMOAreaTable.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=wmoareatable&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WMOAreaTable)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [WMOID](#wmoid) | uint32 |  |
| 2 | [NameSetID](#namesetid) | int32 |  |
| 3 | [WMOGroupID](#wmogroupid) | int32 |  |
| 4 | [SoundProviderPref](#soundproviderpref) | int32 | [SoundProviderPreferences.dbc/0](/files/DBC/335/soundproviderpreferences#id) |
| 5 | [SoundProviderPrefUnderwater](#soundproviderprefunderwater) | uint32 | [SoundProviderPreferences.dbc/0](/files/DBC/335/soundproviderpreferences#id) |
| 6 | [AmbienceID](#ambienceid) | uint32 | [SoundAmbience.dbc/0](/files/DBC/335/soundambience#id) |
| 7 | [ZoneMusic](#zonemusic) | uint32 | [ZoneMusic.dbc/0](/files/DBC/335/zonemusic#id) |
| 8 | [IntroSound](#introsound) | int32 | [ZoneIntroMusicTable.dbc/0](/files/DBC/335/zoneintromusictable#id) |
| 9 | [Flags](#flags) | uint32 |  |
| 10 | [AreaTableID](#areatableid) | uint32 | [AreaTable.dbc/0](/files/DBC/335/areatable#id) |
| 11 | [AreaName_0](#areaname) | string |  |
| 12 | [AreaName_1](#areaname) | string |  |
| 13 | [AreaName_2](#areaname) | string |  |
| 14 | [AreaName_3](#areaname) | string |  |
| 15 | [AreaName_4](#areaname) | string |  |
| 16 | [AreaName_5](#areaname) | string |  |
| 17 | [AreaName_6](#areaname) | string |  |
| 18 | [AreaName_7](#areaname) | string |  |
| 19 | [AreaName_8](#areaname) | string |  |
| 20 | [AreaName_9](#areaname) | string |  |
| 21 | [AreaName_10](#areaname) | string |  |
| 22 | [AreaName_11](#areaname) | string |  |
| 23 | [AreaName_12](#areaname) | string |  |
| 24 | [AreaName_13](#areaname) | string |  |
| 25 | [AreaName_14](#areaname) | string |  |
| 26 | [AreaName_15](#areaname) | string |  |
| 27 | [AreaName_lang_mask](#areaname) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### WMOID
<code>Col: 1 (uint32)</code>

Used in root WMO
&nbsp;

### NameSetID
<code>Col: 2 (int32)</code>

Used in adt file
&nbsp;

### WMOGroupID
<code>Col: 3 (int32)</code>

Used in group WMO
&nbsp;

### SoundProviderPref
:x: <code>Col: 4 (int32)</code>

*- no description -*
&nbsp;

### SoundProviderPrefUnderwater
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### AmbienceID
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### ZoneMusic
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### IntroSound
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 9 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x01 | Render Minimap |
| 2 | 0x02 | Force Indoors |
| 4 | 0x04 | Force Outdoors |
| 8 | 0x08 | Generate Single Exterior Map |
| 16 | 0x10 | Stormwind |
| 32 | 0x20 | Chunk uses terrain for Minimap |
| 64 | 0x40 | Ignore for Minimap and Effects |
| 128 | 0x80 | Ignore Fatigue |
{.dense}

&nbsp;

### AreaTableID
<code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### AreaName
:x: <code>Col: 11 &ndash; 27 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Weather'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/worldchunksounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WorldChunkSounds'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
