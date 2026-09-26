---
title: game_event_npcflag
description: 
published: true
date: 2023-03-31T15:31:31.034Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:20.317Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | Entry of the game event |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [npcflag](#npcflag) | bigint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
This field signifies the [`game_event.eventEntry`](/database/master/world/game_event#eventEntry)
&nbsp;

### guid
GUID of the creature which this entry should be related to during the event. Referenced in [`creature.guid`](/database/master/world/creature#guid)
&nbsp;

### npcflag
The npcflags that you want to set additionally during the event. The value specified here is bitwise added to the npcflag already set on the NPC.

So, if you want the creature to be also a quest giver, just put 2 in this column.
&nbsp;


