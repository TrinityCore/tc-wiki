---
title: ItemGroupSounds.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# ItemGroupSounds.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemGroupSounds)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SoundEntry_0](#soundentry) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 2 | [SoundEntry_1](#soundentry) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 3 | [SoundEntry_2](#soundentry) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 4 | [SoundEntry_3](#soundentry) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SoundEntry
:x: <code>Col: 1 &ndash; 4 (uint32)</code>

* col 1: Pickup
* col 2: Drop
* col 3: Use?
* col 4: Close?
&nbsp;

