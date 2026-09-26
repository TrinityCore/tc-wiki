---
title: skill_fishing_base_level
description:
published: true
date: 2024-04-15T20:44:03.745Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:21.968Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  | Area identifier |
| [skill](#skill) | smallint | signed |  | NO | 0 |  | Base skill level requirement |
&nbsp;
## Description of fields

### entry
references [AreaTable ID](https://wago.tools/db2/areatable)
&nbsp;

### skill
The minimum skill points in fishing required to fish in the area without receiving trash.

If the player is less skilled, the chance to fish successfully is as follows:
* `chance = MAX(1; (playerSkill / areaSkill)^2 * 100)`
&nbsp;

