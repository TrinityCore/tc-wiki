---
title: vehicle_template
description: 
published: true
date: 2023-07-24T17:46:14.504Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:35.172Z
---

This table holds info for despawn delay with option to extend it in the future

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [creatureId](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [despawnDelayMs](#despawndelayms) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### creatureId
[creature entry](../world/creature_template#entry) of the vehicle.
&nbsp;

### despawnDelayMs
How long the vehicle will remain when exiting.
&nbsp;

