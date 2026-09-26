---
title: game_event_quest_condition
description: 
published: true
date: 2024-05-16T11:19:32.536Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:00.652Z
---

This table contains the mapping of a quest in a world event to the condition that it will fulfill. It also contains how much a given quest will add to a condition once that quest is completed by a player.

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
refers to [game_event.eventEntry](../world/game_event#evententry)
&nbsp;

### quest
The [quest_template.ID](../world/quest_template#id) that will trigger this condition.
&nbsp;

### condition_id
The [condition_id](../world/game_event_condition#condition_id) that will be triggered on quest complete.
&nbsp;

### num
On quest completion the amount **num** will be contributed towards the [required number](../world/game_event_condition#req_num) needed for the condition.
&nbsp;

