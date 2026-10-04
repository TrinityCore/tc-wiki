---
title: WorldChunkSounds.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# WorldChunkSounds.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WorldChunkSounds)
&nbsp;

> :x: denotes unused fields
> empty in 3.3.5.12340
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [WorldMapContinentID](#worldmapcontinentid) | uint32 | [Map.dbc/0](/files/DBC/335/map#id-alt) |
| 1 | [ChunkX](#chunkx) | uint32 |  |
| 2 | [ChunkY](#chunky) | uint32 |  |
| 3 | [SubchunkX](#subchunkx) | uint32 |  |
| 4 | [SubchunkY](#subchunky) | uint32 |  |
| 5 | [ZoneIntroMusicID](#zoneintromusicid) | uint32 | [ZoneIntroMusicTable.dbc/0](/files/DBC/335/zoneintromusictable#id-alt) |
| 6 | [ZoneMusicID](#zonemusicid) | uint32 | [ZoneMusic.dbc/0](/files/DBC/335/zonemusic#id-alt) |
| 7 | [SoundAmbienceID](#soundambienceid) | uint32 | [SoundAmbience.dbc/0](/files/DBC/335/soundambience#id-alt) |
| 8 | [SoundProviderPreferencesID](#soundproviderpreferencesid) | uint32 | [SoundProviderPreferences.dbc/0](/files/DBC/335/soundproviderpreferences#id-alt) |

&nbsp;
## Description of fields

### GeneratedID
Not stored in the file: the 3.3.5a file has 9 columns (36 bytes per record). The client generates this ID when it loads the table.
&nbsp;

### WorldMapContinentID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ChunkX
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### ChunkY
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SubchunkX
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### SubchunkY
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### ZoneIntroMusicID
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### ZoneMusicID
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### SoundAmbienceID
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### SoundProviderPreferencesID
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;
