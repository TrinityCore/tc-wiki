---
title: lfg_dungeon_template
description: 
published: true
date: 2024-05-16T11:19:33.804Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:20.665Z
---

Used by LFG system to teleport players on specified position. This table should be used instead of [areatrigger_teleport](../world/areatrigger_teleport) for all dungeons in the future.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [dungeonId](#dungeonid) | int | unsigned | PRI | NO | 0 |  | Unique id from [LFGDungeons](/files/DBC/335/lfgdungeons) |
| [name](#name-alt) | varchar(255) |  |  | YES | NULL |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### dungeonId
references [LfgDungeons ID](/files/DBC/335/lfgdungeons#id)
&nbsp;

### name {#name-alt}
references [LfgDungeons Name](/files/DBC/335/lfgdungeons#name)
&nbsp;

### position_x
X coordinate for the entrance position
&nbsp;

### position_y
Y coordinate for the entrance position
&nbsp;

### position_z
Z coordinate for the entrance position
&nbsp;

### orientation
Orientation the player will get when appearing at this location
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

