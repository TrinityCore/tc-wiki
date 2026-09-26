---
title: pool_members
description: 
published: true
date: 2022-11-21T22:46:07.247Z
tags: database, master, world
editor: markdown
dateCreated: 2021-12-24T01:54:40.656Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [type](#type) | smallint | unsigned | PRI | NO |  |  |  |
| [spawnId](#spawnid) | bigint | unsigned | PRI | NO |  |  |  |
| [poolSpawnId](#poolspawnid) | int | unsigned |  | NO |  |  |  |
| [chance](#chance) | float |  |  | NO |  |  |  |
| [description](#description) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### type
Pick from table below.
| Type |       Name |
| ---- | ---------- |
|    0 |   Creature |
|    1 | GameObject |
|    2 |       Pool |
&nbsp;

### spawnId
GUID of the spawn, depends on type
| Type | Reference |
| ---- | -------------------------------------------- |
|    0 | [creature_template.entry](creature_template) |
|    1 | [gameobject_template.entry](gameobject_template) |
|    2 | [pool_template.entry](pool_template) |
&nbsp;

### poolSpawnId
Pool entry for reference: [pool_template.entry](pool_template)
&nbsp;

### chance
Chance of the referenced spawn to appear.

Allowed range: 0 - 100
If all entries of a pool have a chance of 0 the chance for all is even.
&nbsp;

### description
*- no description -*
&nbsp;

