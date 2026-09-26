---
title: lfg_dungeon_template
description:
published: true
date: 2022-11-21T21:06:12.259Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:50.477Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [dungeonId](#dungeonid) | int | unsigned | PRI | NO | 0 |  | Unique id from LFGDungeons.dbc |
| [name](#name-alt) | varchar(255) |  |  | YES | NULL |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [requiredItemLevel](#requireditemlevel) | smallint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### dungeonId
Dungeon ID from [LFGDungeons.db2](https://wago.tools/db2/lfgdungeons){target=_blank}.
&nbsp;

### name {#name-alt}
Dungeon name from [LFGDungeons.db2](https://wago.tools/db2/lfgdungeons){target=_blank}.
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

### requiredItemLevel
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If the value is 0 then it has not been parsed yet.

If the value is above 0 then it has been parsed with WDB files from that specific client build.

If the value is -1 then it is just a placeholder until proper data are found on WDBs.

If the value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

