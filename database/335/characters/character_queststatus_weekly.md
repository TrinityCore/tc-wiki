---
title: character_queststatus_weekly
description: 
published: true
date: 2023-07-29T18:34:28.266Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:08.862Z
---

> Holds information on the weekly quest status of every player. The timers reset at the same time the Raids reset.
> [QuestFlags](../world/quest_template#flags) & QUEST_FLAGS_WEEKLY (32768) 
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  | Quest Identifier |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### quest
The [quest ID](../world/quest_template#id) of the weekly quest.
&nbsp;

