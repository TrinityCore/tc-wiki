---
title: game_event_creature_quest
description: 
published: true
date: 2024-05-16T11:19:32.462Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:39.116Z
---

This table holds information on quests that should only be available when an event is currently taking place.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned |  | NO |  |  | Entry of the game event. |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event#evententry)
&nbsp;

### id {#id-alt}
The [creature_template.entry](../world/creature_template#entry) of the quest giver.
&nbsp;

### quest
The [quest_template.ID](../world/quest_template#id) that is made available.
&nbsp;

