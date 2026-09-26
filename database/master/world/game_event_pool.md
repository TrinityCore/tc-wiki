---
title: game_event_pool
description: 
published: true
date: 2023-03-31T16:04:15.207Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:22.811Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed |  | NO |  |  | Entry of the game event. Put negative entry to remove during event. |
| [pool_entry](#pool_entry) | int | unsigned | PRI | NO | 0 |  | Id of the pool |
&nbsp;
## Description of fields

### eventEntry
This field signifies the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry)
```
+event adds the pool
-event removes the pool
```
&nbsp;

### pool_entry
This is ID of the pool that you want either active or removed for the event. Reference [`pool_template.entry`](/database/master/world/pool_template#entry)
&nbsp;


