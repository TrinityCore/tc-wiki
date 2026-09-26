---
title: game_tele
description:
published: true
date: 2024-05-16T11:19:32.548Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:06.033Z
---

This table contains a list of teleport locations that can be used with the `.tele` command in-game. Entries in this table can be added/deleted manually or with the `.tele add`/`.tele delete` commands.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO |  |  |  |
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
(North = 0, South = 3.14159)
&nbsp;

### map
The [Map ID](/files/DBC/335/map#id) of the location.
&nbsp;

### name {#name-alt}
The name given to the location. The name must not have a space as this will be read in from the `.tele` command.
&nbsp;

