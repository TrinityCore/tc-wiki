---
title: spawn_tracking
description: 
published: true
date: 2025-07-13T13:31:24.655Z
tags: database, master, world
editor: markdown
dateCreated: 2025-01-08T22:45:39.951Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnTrackingId](#spawntrackingid) | int | unsigned | PRI | NO |  |  |  |
| [SpawnType](#spawntype) | tinyint | unsigned | PRI | NO |  |  |  |
| [SpawnId](#spawnid) | bigint | unsigned | PRI | NO |  |  |  |
| [QuestObjectiveIds](#questobjectiveids) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### SpawnTrackingId
SpawnTracking ID for the spawn. It must match a SpawnTracking already existing in the [spawn_tracking_template](/database/master/world/spawn_tracking_template) table.
&nbsp;

### SpawnType
| Spawn Type | Description      |
| ---------- | ---------------- |
|          0 | For creatures    |
|          1 | For gameobjects  |
<!-- {table:.dense} -->
&nbsp;

### SpawnId
Spawn ID/GUID of the creature/game object that should be included in the group. The GUID must exist in the [creature](/database/master/world/creature) or [gameobject](/database/master/world/gameobject) tables respectively.

> Spawn must use the same Map, Phase, PhaseGroup and PhaseUseFlags as the SpawnTracking template.
{.is-info}

### QuestObjectiveIds
Valid [quest_objectives.Ids](/database/master/world/quest_objectives#id).
Some SpawnTrackings are reused for several quest objectives so spawn's state changes will be checked for all of them (priority will be the completed objectives and then the active ones).


