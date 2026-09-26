---
title: pool_template
description: 
published: true
date: 2024-05-16T11:19:34.472Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:52.880Z
---

Each unique pool is defined in this table.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  | Pool entry |
| [max_limit](#max_limit) | int | unsigned |  | NO | 0 |  | Max number of objects (0) is no limit |
| [description](#description) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
The pool ID. This is an arbitrary number that is only used to link the gameobjects, creatures or quests in this pool.
&nbsp;

### max_limit
This is the maximum number of objects in this pool that should be spawned at a time.
0 is no limit.
&nbsp;

### description
Field describes the basic information about what the pool refers to.
Example:  Aotona Rare Spawn (1 out 6)
&nbsp;

