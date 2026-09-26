---
title: FootstepTerrainLookup.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# FootstepTerrainLookup.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/FootstepTerrainLookup)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [CreatureFootstepID](#creaturefootstepid) | uint32 | [CreatureSoundData.dbc/9](/files/DBC/335/creaturesounddata#soundfootstepid) |
| 2 | [TerrainSoundID](#terrainsoundid) | uint32 | [TerrainTypeSounds.dbc/0](/files/DBC/335/terraintypesounds#id-alt) |
| 3 | [SoundID](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 4 | [SoundIDSplash](#soundidsplash) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### CreatureFootstepID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### TerrainSoundID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SoundID
:x: <code>Col: 3 (uint32)</code>

dry ground
&nbsp;

### SoundIDSplash
:x: <code>Col: 4 (uint32)</code>

wet ground
&nbsp;

