---
title: game_event_prerequisite
description: 
published: true
date: 2024-05-16T11:19:32.517Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:57.978Z
---

This table contains events that must have been completed to start the given event. You can have more than one event that must be completed before the next will start.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | Entry of the game event |
| [prerequisite_event](#prerequisite_event) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### eventEntry
This is the [game_event.eventEntry](../world/game_event#evententry) that will start when all **prerequisite_event**s have been completed.
&nbsp;

### prerequisite_event
The is the [game_event.eventEntry](../world/game_event#evententry) that must be completed before the event from **eventEntry** will start.
&nbsp;

