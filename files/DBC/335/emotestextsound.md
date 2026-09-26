---
title: EmotesTextSound.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# EmotesTextSound.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/EmotesTextSound)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [EmotesTextID](#emotestextid) | uint32 | [EmotesText.dbc/0](/files/DBC/335/emotestext#id-alt) |
| 2 | [RaceID](#raceid) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 3 | [SexID](#sexid) | uint32 |  |
| 4 | [SoundID](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### EmotesTextID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### RaceID
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SexID
<code>Col: 3 (uint32)</code>

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name |
|----|------|
| 0 | GENDER_MALE |
| 1 | GENDER_FEMALE |
| 2 | GENDER_NONE |
{.dense}

&nbsp;

### SoundID
<code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

