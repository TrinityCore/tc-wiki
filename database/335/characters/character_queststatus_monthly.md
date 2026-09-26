---
title: character_queststatus_monthly
description: 
published: true
date: 2023-07-29T18:35:33.115Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:00.934Z
---

> Holds information on the monthly quest status of every player.
> [SpecialFlag](../world/quest_template_addon#specialflags) & QUEST_SPECIAL_FLAGS_MONTHLY (16)
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
The [quest ID](../world/quest_template#id) of the monthly quest.
&nbsp;

