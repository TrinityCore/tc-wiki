---
title: character_queststatus_rewarded
description: 
published: true
date: 2023-07-29T18:17:41.138Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:03.562Z
---

> This table holds information of **every** rewarded quest to a player.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  | Quest Identifier |
| [active](#active) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### quest
The [quest ID](../world/quest_template#id) to mark as rewarded.
&nbsp;

### active
In case of a player faction change, quests not matching the new faction are marked as inactive.
* 0: inactive (not counting towards achievements, etc.)
* 1: active (handled normally)
&nbsp;

