---
title: areatrigger_involvedrelation
description: Enable a trigger to finish one condition of a quest (explore)
published: true
date: 2022-11-21T21:03:11.260Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:49.105Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  | Identifier |
| [quest](#quest) | int | unsigned |  | NO | 0 |  | Quest Identifier |
&nbsp;
## Description of fields

> If there is a record in the table for a quest, then the quest will not be completed until the player activates this areatriger. The quest is not necessarily finished after that, but that one condition of the quest is satisfied. If the only condition of the quest is to explore an area, then the quest will be complete.
{.is-info}


### id {#id-alt}
This is the trigger ID from [AreaTrigger.db2](https://wago.tools/db2/areatrigger){target=_blank}
&nbsp;

### quest
This is the [QuestId](/database/master/world/quest_template#id) that the trigger is tied to.
&nbsp;

