---
title: quest_pool_template
description: 
published: true
date: 2024-05-16T11:19:34.608Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:22.651Z
---

Each unique quest pool is defined in this table.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [poolId](#poolid) | int | unsigned | PRI | NO |  |  |  |
| [numActive](#numactive) | int | unsigned |  | NO |  |  | Number of indices to have active at any time |
| [description](#description) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### poolId
The pool ID. This is an arbitrary number that is only used to link quests in this pool.
&nbsp;

### numActive
This is the maximum number of quests in this pool that should be available at a time.
&nbsp;

### description
Field describes the basic information about what the pool refers to.
Example: The Rokk \<Master of Cooking\> - Daily Quests
&nbsp;

