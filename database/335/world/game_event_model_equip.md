---
title: game_event_model_equip
description: 
published: true
date: 2024-05-16T11:19:32.472Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:47.232Z
---

Contains all creature instances that need to change display id and/or equipment during defined game events.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed |  | NO |  |  | Entry of the game event. |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [modelid](#modelid) | int | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event#evententry)
&nbsp;

### guid
The [creature.guid](../world/creature#guid) to be modified.
&nbsp;

### modelid
New [DisplayID](../world/creature_model_info#displayid) to be used while the event is active.
Use 0 if only the **equipment_id** is to be changed during event.
&nbsp;

### equipment_id
New [equipmentID](../world/creature_equip_template#id) to be used during the event.
Use 0 if only the **modelid** is to be changed during event.
&nbsp;

