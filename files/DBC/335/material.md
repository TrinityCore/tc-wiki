---
title: Material.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/mapdifficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'MapDifficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/movie" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Movie'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Material.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=material&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Material)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
| 2 | [FoleySoundID](#foleysoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 3 | [SheatheSoundID](#sheathesoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 4 | [UnsheatheSoundID](#unsheathesoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 1 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x1 | is Metal |
| 2 | 0x2 | is Plate |
| 4 | 0x4 | is Chain |
{.dense}

&nbsp;

### FoleySoundID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SheatheSoundID
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### UnsheatheSoundID
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/mapdifficulty" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'MapDifficulty'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/movie" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Movie'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
