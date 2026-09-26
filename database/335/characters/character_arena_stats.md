---
title: character_arena_stats
description: 
published: true
date: 2023-07-25T18:55:46.802Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:15.038Z
---

> This table holds information about character's matchmaker rating in all team types.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [slot](#slot) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [matchMakerRating](#matchmakerrating) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### slot
Arena slot index:
- 0: 2v2
- 1: 3v3
- 2: 5v5
&nbsp;

### matchMakerRating
Player's matchmaker rating
&nbsp;

