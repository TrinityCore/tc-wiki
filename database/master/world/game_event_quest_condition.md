---
title: game_event_quest_condition
description: 
published: true
date: 2023-03-31T16:10:17.571Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:27.894Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned |  | NO |  |  | Entry of the game event. |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  |  |
| [condition_id](#condition_id) | int | unsigned |  | NO | 0 |  |  |
| [num](#num) | float |  |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
This field signifies the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry)
&nbsp;

### quest
The [`quest_template.entry`](/database/master/world/quest_template#entry) that will trigger this condition.
&nbsp;

### condition_id
The [`game_event_condition.condition_id`](/database/master/world/game_event_condition#condition_id) that will be triggered on quest complete.
&nbsp;

### num
The number of "units" (for lack of a better word) that will be added to the condition to fulfill the required number needed for the condition.
&nbsp;


