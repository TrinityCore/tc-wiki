---
title: NPCSounds.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# NPCSounds.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/NPCSounds)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SoundID_0](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 2 | [SoundID_1](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 3 | [SoundID_2](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 4 | [SoundID_3](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SoundID
:x: <code>Col: 1 &ndash; 4 (uint32)</code>

* col 1: Greetings
* col 2: Farewells
* col 3: Pissed / Annoyed
* col 4: *- unused -*
&nbsp;

