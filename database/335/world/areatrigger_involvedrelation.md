---
title: areatrigger_involvedrelation
description:
published: true
date: 2024-05-16T11:19:31.142Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:43.872Z
---

Enable a trigger to finish one condition of a quest (explore)

If there is a record in the table for a quest, then the quest will not be completed until the player activates this areatriger. The quest is not necessarily finished after that, but that one condition of the quest is satisfied. If the only condition of the quest is to explore an area, then the quest will be complete.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  | Identifier |
| [quest](#quest) | int | unsigned |  | NO | 0 |  | Quest Identifier |
&nbsp;
## Description of fields

### id {#id-alt}
This is the [AreaTrigger ID](/files/DBC/335/areatrigger#id).
&nbsp;

### quest
This is the [quest](../world/quest_template#id) id that the trigger is tied to.
&nbsp;

