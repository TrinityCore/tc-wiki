---
title: game_event_npcflag
description: 
published: true
date: 2024-05-16T11:19:32.507Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:52.641Z
---

This table contains npcflags that are to be added to an NPC when the specified event is active for the creature with the given guid.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | Entry of the game event |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [npcflag](#npcflag) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### eventEntry
refers to [game_event.eventEntry](../world/game_event#evententry)
&nbsp;

### guid
The [guid](../world/creature#guid) of the creature that you want to change npcflag for.
&nbsp;

### npcflag
The npcflags that you want to set. The value specified here is bitwise added to the [npcflag](../world/creature_template#npcflag) already set on the NPC.
So, if you want the creature to be also a quest giver, just put 2 in this column.
&nbsp;

