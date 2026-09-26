---
title: game_event_pool
description: 
published: true
date: 2024-05-16T11:19:32.511Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:55.305Z
---

This table determines if a given [pool](../world/pool_template) is active for a given game event.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed |  | NO |  |  | Entry of the game event. Put negative entry to remove during event. |
| [pool_entry](#pool_entry) | int | unsigned | PRI | NO | 0 |  | Id of the pool |
&nbsp;
## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event#evententry)
* \> 0: pool with **pool_entry** is added during the event
* \< 0: pool with **pool_entry** is removed during the event
&nbsp;

### pool_entry
refers to [pool_template.entry](../world/pool_template#entry)
&nbsp;

