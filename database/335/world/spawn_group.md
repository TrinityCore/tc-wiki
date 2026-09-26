---
title: spawn_group
description: 
published: true
date: 2023-07-20T20:13:34.327Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:12.610Z
---

This table contains Spawn Group members.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [groupId](#groupid) | int | unsigned | PRI | NO |  |  |  |
| [spawnType](#spawntype) | tinyint | unsigned | PRI | NO |  |  |  |
| [spawnId](#spawnid) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### groupId
references [spawn_group_template](../world/spawn_group_template#groupid)
&nbsp;

### spawnType
This is the spawn type. 
* 0: [creature](../world/creature#guid)
* 1: [gameobject](../world/gameobject#guid)
&nbsp;

### spawnId
This is the guid of the creature/gameobject included in the group.
&nbsp;

