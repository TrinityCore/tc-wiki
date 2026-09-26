---
title: waypoint_path
description: 
published: true
date: 2024-10-23T19:42:42.338Z
tags: database, master, world
editor: markdown
dateCreated: 2024-02-11T20:26:37.382Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [PathId](#pathid) | int | unsigned | PRI | NO |  |  |  |
| [MoveType](#movetype) | tinyint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [Velocity](#velocity) | float |  |  | YES | NULL |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### PathId
Unique ID for each path. 
&nbsp;

### MoveType 
| Name | Value |
| ---- | ----- |
| Walk | 0 |
| Run | 1 |
| Land | 2 |
| TakeOff | 3 |
&nbsp;

### Flags
| Hex | Name | 
| --- | ---- |
| 0x00 | None |
| 0x01 | FollowPathBackwardsFromEndToStart |
| 0x02 | ExactSplinePath |
&nbsp;

### Velocity
*- no description -*
&nbsp;

### Comment
Description for the path.
| Name           | Description |
| -------------- | ----------- |
| Cosmetic Path  | Simple path linked to creature_addon |
| Cyclic Path    | Cyclic |
| Formation Path | Npc is leader of a formation |
| Scripted Path  | Npc has a scripted path |

For example: `<Npc name> - Cosmetic Path` if this path is assigned in [`creature_addon.PathId`](/database/master/world/creature_addon#PathId).
&nbsp;

