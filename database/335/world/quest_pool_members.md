---
title: quest_pool_members
description: 
published: true
date: 2023-07-12T15:57:21.257Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:19.992Z
---

This table holds the contents of pools created in [quest_pool_template](../world/quest_pool_template).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [questId](#questid) | int | unsigned | PRI | NO |  |  |  |
| [poolId](#poolid) | int | unsigned |  | NO |  |  |  |
| [poolIndex](#poolindex) | tinyint | unsigned |  | NO |  |  | Multiple quests with the same index will always spawn together! |
| [description](#description) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### questId
adds a [quest entry](../world/quest_template#ID) to the pool with **poolId**.
> Note: The quest must be repeatable.
{.is-info}

&nbsp;

### poolId
references [quest_pool_template.poolId](quest_pool_template#poolid)
&nbsp;

### poolIndex
Incremental index of pool with **poolId**. Starts at `0`.
&nbsp;

### description
This field usually names the quest and describes the pool it belongs to.
Example: Fueling the Demolishers (Alliance, defenders)
&nbsp;

