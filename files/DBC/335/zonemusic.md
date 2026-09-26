---
title: ZoneMusic.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# ZoneMusic.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ZoneMusic)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Name](#id-alt) | uint32 |  |
| 2 | [SilenceIntervalMinDay](#id-alt) | uint32 |  |
| 3 | [SilenceIntervalMinNight](#id-alt) | uint32 |  |
| 4 | [SilenceIntervalMaxDay](#id-alt) | uint32 |  |
| 5 | [SilenceIntervalMaxNight](#id-alt) | uint32 |  |
| 6 | [MusicDay](#id-alt) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 7 | [MusicNight](#id-alt) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name {#name-alt}
:x: <code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### SilenceInterval
:x: <code>Col: 2 &ndash; 5 (uint32)</code>

in msec
&nbsp;

### Music
:x: <code>Col: 6 &ndash; 7 (uint32)</code>

*- no description -*
&nbsp;

