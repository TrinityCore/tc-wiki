---
title: game_event_seasonal_questrelation
description: 
published: true
date: 2023-03-31T16:12:51.267Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:30.415Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [questId](#questid) | int | unsigned | PRI | NO |  |  | Quest Identifier |
| [eventEntry](#evententry) | int | unsigned | PRI | NO | 0 |  | Entry of the game event |
&nbsp;
## Description of fields

### questId
[`quest_template.entry`](/database/master/world/quest_template#entry)
&nbsp;

### eventEntry
The [`game_event.eventEntry`](/database/master/world/game_event#eventEntry) the quest belongs to
&nbsp;


