---
title: character_queststatus_daily
description: 
published: true
date: 2023-07-29T18:36:19.501Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:58.281Z
---

> Holds information on the daily quest status of every player. The quest must fulfill either condition to be stored here:
> [QuestFlags](../world/quest_template#flags) & QUEST_FLAGS_DAILY (4096)
> [SpecialFlag](../world/quest_template_addon#specialflags) & QUEST_SPECIAL_FLAGS_DF_QUEST (8)
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  | Quest Identifier |
| [time](#time) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### quest
The [quest ID](../world/quest_template#id) of the daily quest.
&nbsp;

### time
The time when the quest was rewarded, in Unix time.
&nbsp;

