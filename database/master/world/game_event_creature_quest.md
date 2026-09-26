---
title: game_event_creature_quest
description: 
published: true
date: 2023-03-27T15:43:22.504Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:07.595Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned |  | NO |  |  | Entry of the game event. |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
This field signifies the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry)
&nbsp;

### id {#id-alt}
This field signifies the [`creature_template.entry`](/database/master/world/creature_template#entry)
&nbsp;

### quest
This field signifies the [`quest_template.entry`](/database/master/world/quest_template#entry)
&nbsp;


