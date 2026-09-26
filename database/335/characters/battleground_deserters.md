---
title: battleground_deserters
description: 
published: true
date: 2023-07-24T20:41:24.780Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:51.310Z
---

> This table holds datas about BattleGrounds deserters. To enable storing this kind of informations, set `Battleground.TrackDeserters.Enable = 1` in [worldserver.config](/files/configuration/home) file.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned |  | NO |  |  | characters.guid |
| [type](#type) | tinyint | unsigned |  | NO |  |  | type of the desertion |
| [datetime](#datetime) | datetime |  |  | NO |  |  | datetime of the desertion |
&nbsp;
## Description of fields

### guid
The [character guid](../characters/characters#guid).
&nbsp;

### type
- 0: player leaves the BG
- 1: player is kicked from BG because offline
- 2: player is invited to join and refuses to do it
- 3: player is invited to join and do nothing (time expires)
- 4: player is invited to join and logs out
&nbsp;

### datetime
Date and time of the event
&nbsp;

