---
title: pool_quest_save
description: 
published: true
date: 2023-08-01T14:44:28.545Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:04.280Z
---

> Stores which quest out of a pool of quests is currently available.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [pool_id](#pool_id) | int | unsigned | PRI | NO | 0 |  |  |
| [quest_id](#quest_id) | int | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### pool_id
references [quest_pool_template.poolId](../world/quest_pool_template#poolId)
&nbsp;

### quest_id
The active [quest ID](../world/quest_template#id).
&nbsp;

