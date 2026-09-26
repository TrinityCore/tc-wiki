---
title: game_event_model_equip
description:
published: true
date: 2023-03-31T15:27:26.893Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:15.199Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | signed |  | NO |  |  | Entry of the game event. |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [modelid](#modelid) | int | unsigned |  | NO | 0 |  |  |
| [equipment_id](#equipment_id) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
This field signifies the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry)
&nbsp;

### guid
GUID of the creature which this entry should be related to during the event. Referenced in [`creature.guid`](/database/master/world/creature#guid)
&nbsp;

### modelid
New model to be used while the event is active (Refers to [CreatureDisplayInfo.ID](https://wago.tools/db2/creaturedisplayinfo){target=blank})
Use 0 if only the equipment is to be changed during event.
&nbsp;

### equipment_id
New equipment to be used during the event (Refers to [`creature_equip_template.ID`](/database/master/world/creature_equip_template#ID))
Use 0 if only the model is to be changed during event.
&nbsp;

