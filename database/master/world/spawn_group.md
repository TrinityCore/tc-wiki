---
title: spawn_group
description: 
published: true
date: 2022-11-21T21:08:57.287Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:35.136Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [groupId](#groupid) | int | unsigned | PRI | NO |  |  |  |
| [spawnType](#spawntype) | tinyint | unsigned | PRI | NO |  |  |  |
| [spawnId](#spawnid) | bigint | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### groupId
Group ID for the group. It must match a group already existing in the [spawn_group_template](/database/master/world/spawn_group_template) table.
&nbsp;

### spawnType
| Spawn Type | Description      |
| ---------- | ---------------- |
|          0 | For creatures    |
|          1 | For game gbjects |
&nbsp;

### spawnId
Spawn ID/GUID of the creature/game object that should be included in the group. The GUID must exist in the [creature](/database/master/world/creature) or [gameobject](/database/master/world/gameobject) tables respectively.
&nbsp;


