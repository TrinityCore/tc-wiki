---
title: game_event_creature
description: 
published: true
date: 2023-07-09T17:58:51.803Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:36.439Z
---

Contains all creature instances that have to be spawned/unspawned during defined game events.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed | PRI | NO |  |  | Entry of the game event. Put negative entry to remove during event. |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event#evententry)
* \> 0: creature with **guid** is added during the event
* \< 0: creature with **guid** is removed during the event
&nbsp;

### guid
refers to [creature.guid](../world/creature#guid)
&nbsp;

