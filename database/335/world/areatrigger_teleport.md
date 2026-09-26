---
title: areatrigger_teleport
description: 
published: true
date: 2024-05-16T11:19:31.194Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:51.770Z
---

Contains all the teleport triggers definition. This table is used to complete .dbc file information.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | mediumtext |  | MUL | YES | NULL |  |  |
| [target_map](#target_map) | smallint | unsigned |  | NO | 0 |  |  |
| [target_position_x](#target_position_x) | float |  |  | NO | 0 |  |  |
| [target_position_y](#target_position_y) | float |  |  | NO | 0 |  |  |
| [target_position_z](#target_position_z) | float |  |  | NO | 0 |  |  |
| [target_orientation](#target_orientation) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
This is the [AreaTrigger ID](/files/DBC/335/areatrigger#id).
&nbsp;

### Name {#name-alt}
Name of the trigger. This can be an arbitrary name, and is for descriptive purposes only.
&nbsp;

### target_map
Target [Map ID](/files/DBC/335/map#id) of the trigger.
&nbsp;

### target_position_x
X coordinate for the target destination of the trigger.
&nbsp;

### target_position_y
Y coordinate for the target destination of the trigger.
&nbsp;

### target_position_z
Z coordinate for the target destination of the trigger.
&nbsp;

### target_orientation
Orientation the player will get when appearing at this location.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

