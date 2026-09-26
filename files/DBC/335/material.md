---
title: Material.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# Material.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Material)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
| 2 | [FoleySoundID](#foleysoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 3 | [SheatheSoundID](#sheathesoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 4 | [UnsheatheSoundID](#unsheathesoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
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

