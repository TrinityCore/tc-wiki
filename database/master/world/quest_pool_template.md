---
title: quest_pool_template
description: 
published: true
date: 2022-11-21T22:46:03.191Z
tags: database, master, world
editor: markdown
dateCreated: 2021-12-21T22:44:03.942Z
---

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

