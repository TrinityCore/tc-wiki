---
title: player_factionchange_quests
description: 
published: true
date: 2023-07-11T21:10:12.899Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:09.929Z
---

Basically all quest changes made when the player changes faction.

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

