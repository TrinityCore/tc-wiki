---
title: creature_movement_override
description: 
published: true
date: 2024-02-29T18:03:37.561Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:00.315Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnId](#spawnid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [HoverInitiallyEnabled](#hoverinitiallyenabled) | tinyint | unsigned |  | YES | NULL |  |  |
| [Chase](#chase) | tinyint | unsigned |  | YES | NULL |  |  |
| [Random](#random) | tinyint | unsigned |  | YES | NULL |  |  |
| [InteractionPauseTimer](#interactionpausetimer) | int | unsigned |  | YES | NULL |  | Time (in milliseconds) during which creature will not move after interaction with player |
&nbsp;
## Description of fields

### SpawnId
GUID of your creature spawn [creature.guid](/database/master/world/creature#guid)
&nbsp;

### HoverInitiallyEnabled
| Value | Description |
| --- | --- |
| 0 | Disabled |
| 1 | Enabled |
&nbsp;

### Chase
| Value | Description |
| --- | --- |
| 0 | Run |
| 1 | CanWalk |
| 2 | AlwaysWalk |
&nbsp;

### Random
| Value | Description |
| --- | --- |
| 0 | Walk |
| 1 | CanRun |
| 2 | AlwaysRun |
&nbsp;

### InteractionPauseTimer
Time (in milliseconds) during which the creature will not move after interaction with player.
&nbsp;


