---
title: game_event_seasonal_questrelation
description: 
published: true
date: 2024-05-16T11:19:32.540Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:03.358Z
---

Holds information on the game event seasonal quest relations to allow for resetting of quests with [QuestSortId](../world/quest_template#questsortid) of -22 (Seasonal).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [questId](#questid) | int | unsigned | PRI | NO |  |  | Quest Identifier |
| [eventEntry](#evententry) | int | unsigned | PRI | NO | 0 |  | Entry of the game event |
&nbsp;
## Description of fields

### questId
[quest_template.ID](../world/quest_template#id) to be reset.
&nbsp;

### eventEntry
[eventEntry](../world/game_event#evententry) of the game event that the seasonal quest belongs to.
&nbsp;

