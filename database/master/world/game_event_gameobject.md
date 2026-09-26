---
title: game_event_gameobject
description: 
published: true
date: 2023-03-27T15:45:00.145Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:10.123Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed | PRI | NO |  |  | Entry of the game event. Put negative entry to remove during event. |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
This field signifies the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry)
```
Use  entry to add the gameobject during the event
Use -entry to remove the gameobject during the event
```
&nbsp;

### guid
GUID of the gameobject which should spawned/despawned during the event. Referenced in [`gameobject.guid`](/database/master/world/gameobject#guid)
&nbsp;


