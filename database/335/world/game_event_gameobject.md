---
title: game_event_gameobject
description: 
published: true
date: 2023-07-09T18:03:34.865Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:41.868Z
---

Contains all gameobjects instances that participate to any game event.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed | PRI | NO |  |  | Entry of the game event. Put negative entry to remove during event. |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event#evententry)
* \> 0: object with **guid** is added during the event
* \< 0: object with **guid** is removed during the event
&nbsp;

### guid
refers to [gameobject.guid](../world/gameobject#guid)
&nbsp;

