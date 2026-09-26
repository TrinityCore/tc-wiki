---
title: creature_movement_info
description:
published: true
date: 2023-07-08T17:12:07.302Z
tags: database, world, 335
editor: markdown
dateCreated: 2022-04-17T21:08:06.224Z
---

Supplemental data to [CreatureMovementInfo](/files/DBC/335/creaturemovementinfo) (see [#25964](https://github.com/TrinityCore/TrinityCore/discussions/25964))

> Note: This table is not in use.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MovementID](#movementid) | int | unsigned | PRI | NO | 0 |  | creature_template.movementId value |
| [WalkSpeed](#walkspeed) | float |  |  | YES | NULL |  |  |
| [RunSpeed](#runspeed) | float |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### MovementID
references [creature_template.movementId](../world/creature_template#movementid) / [CreatureMovementInfo ID](/files/DBC/335/creaturemovementinfo#id)
&nbsp;

### WalkSpeed
generic value: `2.5`
&nbsp;

### RunSpeed
generic value: `8.0`
&nbsp;

