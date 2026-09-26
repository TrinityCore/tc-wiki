---
title: quest_pool_members
description: 
published: true
date: 2022-11-21T22:46:01.243Z
tags: database, master, world
editor: markdown
dateCreated: 2021-12-21T22:43:59.533Z
---

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

