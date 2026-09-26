---
title: skill_fishing_base_level
description: 
published: true
date: 2024-05-16T11:19:35.428Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:01.581Z
---

This table controls the minimum skill level required in SKILL_FISHING (356), to fish in a certain area with 100% success.

> Note: This does not affect fishing from fishing nodes.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  | Area identifier |
| [skill](#skill) | smallint | signed |  | NO | 0 |  | Base skill level requirement |
&nbsp;
## Description of fields

### entry
references [AreaTable ID](/files/DBC/335/areatable#id)
&nbsp;

### skill
The minimum skill points in fishing required to fish in the area without receiving trash.

If the player is less skilled, the chance to fish successfully is as follows:
* `chance = MAX(1; (playerSkill / areaSkill)^2 * 100)`
&nbsp;

