---
title: game_event_prerequisite
description: 
published: true
date: 2023-03-31T16:05:58.465Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:25.363Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | Entry of the game event |
| [prerequisite_event](#prerequisite_event) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### eventEntry
This is the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry) that will start when all prerequisite events have been completed. 
&nbsp;

### prerequisite_event
The is the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry) that must be completed before the next event will start.
&nbsp;


