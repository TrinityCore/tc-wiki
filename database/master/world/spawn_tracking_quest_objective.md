---
title: spawn_tracking_quest_objective
description: 
published: true
date: 2025-01-08T23:48:31.352Z
tags: database, master, world
editor: markdown
dateCreated: 2025-01-08T23:43:09.237Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnTrackingId](#spawntrackingid) | int | unsigned | PRI | NO |  |  |  |
| [QuestObjectiveId](#questobjectiveid) | int | unsigned | PRI | NO |  |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### SpawnTrackingId
SpawnTracking ID linked to the quest objective. It must match a SpawnTracking already existing in the [spawn_tracking_template](/database/master/world/spawn_tracking_template) table.
&nbsp;

### QuestObjectiveId
An existing [quest_objectives.Id](/database/master/world/quest_objectives#id).
Some SpawnTrackings are reused for several quest objectives.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.


