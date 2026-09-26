---
title: player_factionchange_quests
description: 
published: true
date: 2022-11-21T21:06:48.212Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:39.430Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | unsigned | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [quest ID](../world/quest_template#id). If you convert to horde and your quests have a record in his table, they will be converted to **horde_id**.
&nbsp;

### horde_id
This is the horde [quest ID](../world/quest_template#id). If you convert to alliance and your quests have a record in his table, they will be converted to **alliance_id**.
&nbsp;


