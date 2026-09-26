---
title: vehicle_template
description: 
published: true
date: 2025-07-23T14:52:30.498Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:55.445Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [creatureId](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [despawnDelayMs](#despawndelayms) | int | signed |  | NO | 0 |  |  |
| [CustomFlags](#customflags) | int | unsigned |  | NO | 0 |  |  |

## Description of fields

### creatureId
Entry of Creature
&nbsp;

### despawnDelayMs
Delayed Time for Vehicle Despawn in milliseconds. This is for vehicles that should not directly despawn when the player leaves the vehicle, but it should still perform actions. (Moving away from the player or similar).
&nbsp;

### CustomFlags
| Name | Flag | Comment |
| --- | --- | --- |
| None | 0x0 | |
| DontForceParachuteOnExit | 0x1 | For flyable vehicles |
&nbsp;


