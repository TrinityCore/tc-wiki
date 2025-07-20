---
title: SoundEmitters.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/soundambience" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SoundAmbience'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/soundentries" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SoundEntries'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SoundEmitters.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SoundEmitters)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Position_X](#position) | float |  |
| 2 | [Position_Y](#position) | float |  |
| 3 | [Position_Z](#position) | float |  |
| 4 | [Direction_X](#direction) | float |  |
| 5 | [Direction_Y](#direction) | float |  |
| 6 | [Direction_Z](#direction) | float |  |
| 7 | [SoundEntriesAdvancedID](#soundentriesadvancedid) | uint32 | [SoundEntriesAdvanced.dbc/1](/files/DBC/335/soundentriesadvanced#soundentriesid) |
| 8 | [MapID](#mapid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id-alt) |
| 9 | [Name](#name-alt) | string |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Position
:x: <code>Col: 1 &ndash; 3 ([DBCPosition3D](/how-to/worldposition))</code>

*- no description -*
&nbsp;

### Direction
:x: <code>Col: 4 &ndash; 6 ([DBCPosition3D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### SoundEntriesAdvancedID
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### MapID
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
:x: <code>Col: 9 (string)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/soundambience" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SoundAmbience'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/soundentries" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SoundEntries'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
