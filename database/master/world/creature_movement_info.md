---
title: creature_movement_info
description:
published: true
date: 2023-10-22T15:42:21.868Z
tags: database, master, world
editor: markdown
dateCreated: 2022-04-17T19:08:15.909Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MovementID](#movementid) | int | unsigned | PRI | NO | 0 |  | creature_template.movementId value |
| [WalkSpeed](#walkspeed) | float |  |  | YES | NULL |  |  |
| [RunSpeed](#runspeed) | float |  |  | YES | NULL |  |  |
&nbsp;

## Info
This table is currently unused and is reserved for future use.
[Link to commit introducing it](https://github.com/TrinityCore/TrinityCore/commit/e33b3e4a81c64fc7c9918c2c15f66f1f259d1fde)
&nbsp;

## Description of fields

### MovementID
references [creature_template.movementId](../world/creature_template#movementid) / [CreatureMovementInfo ID](https://wago.tools/db2/creaturemovementinfo)
&nbsp;

### WalkSpeed
generic value: `2.5`
&nbsp;

### RunSpeed
generic value: `8.0`
&nbsp;

