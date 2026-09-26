---
title: battleground_template
description: Contains information about the different battlegrounds, like how many players are needed to start, how many can be inside the same one, and the locations where each side starts.
published: true
date: 2024-05-15T17:59:51.410Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:12.347Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [AllianceStartLoc](#alliancestartloc) | int | unsigned |  | NO |  |  |  |
| [HordeStartLoc](#hordestartloc) | int | unsigned |  | NO |  |  |  |
| [StartMaxDist](#startmaxdist) | float |  |  | NO | 0 |  |  |
| [Weight](#weight) | tinyint | unsigned |  | NO | 1 |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [Comment](#comment) | varchar(32) |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
The battleground ID.
A list is available in [BattlemasterList.db2](https://wago.tools/db2/battlemasterlist){target=_blank} (ID field)
&nbsp;

### AllianceStartLoc
This is the ID from [world_safe_locs](/database/master/world/world_safe_locs).
The Alliance players will start at the position listed inside [world_safe_locs](/database/master/world/world_safe_locs).
&nbsp;

### HordeStartLoc
This is the ID from [world_safe_locs](/database/master/world/world_safe_locs).
The Horde players will start at the position listed inside [world_safe_locs](/database/master/world/world_safe_locs).
&nbsp;

### StartMaxDist
Maximum distance a player can have to the StartLoc point before the battle starts.
A value of 0 is ignored.
&nbsp;

### Weight
Determines what battleground(s) will be more frequently chosen when using Random Battleground.
For example: If you want AV to be less often chosen, give 2 and for all other give 3.
&nbsp;

### ScriptName
The scriptname used in the core to assign it to the specific battleground.
&nbsp;

### Comment
This field is for any comment you want to make about the requirements. It is arbitrary text.
&nbsp;

