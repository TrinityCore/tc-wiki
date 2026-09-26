---
title: game_event_condition_save
description: 
published: true
date: 2023-07-30T16:08:47.108Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:36.210Z
---

> Stores progress on game event conditions.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  |  |
| [condition_id](#condition_id) | int | unsigned | PRI | NO | 0 |  |  |
| [done](#done) | float |  |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
references [game_event.eventEntry](../world/game_event#evententry)
&nbsp;

### condition_id
The [condition](../world/game_event_condition#condition_id) accumulating progress.
&nbsp;

### done
Indicates how much progress out of [req_num](../world/game_event_condition#req_num) has been done.
&nbsp;

