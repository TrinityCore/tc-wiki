---
title: game_tele
description:
published: true
date: 2023-04-01T23:08:19.107Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:32.965Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO |  | auto_increment |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [map](#map) | smallint | unsigned |  | NO | 0 |  |  |
| [name](#name-alt) | varchar(100) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
The ID of the teleport location. This number is unique to every location added.
&nbsp;

### position_x
The x-axis coordinate of the teleport location. This can be attained by using the `.gps` command.
&nbsp;

### position_y
The y-axis coordinate of the teleport location. This can be attained by using the `.gps` command.
&nbsp;

### position_z
The z-axis coordinate of the teleport location. This can be attained by using the `.gps` command.
&nbsp;

### orientation
The direction that the player will face after arriving at the teleport location. This can be attained by using the `.gps` command.
&nbsp;

### map
The map ID of the location. See the [Map.ID](https://wago.tools/db2/map){target=blank} for the IDs of all of the zones. This can also be attained by using the `.gps` command.
&nbsp;

### name {#name-alt}
A descriptive name for the teleport location. The name cannot have any spaces in it. It is also not recommended to use special characters such as periods, commas, slashes, etc...
&nbsp;

