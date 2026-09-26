---
title: player_factionchange_achievement
description:
published: true
date: 2023-07-11T20:51:51.514Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:04.547Z
---

Basically all achievement changes made when the player changes faction.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | unsigned | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [Achievement ID](/files/DBC/335/achievement#id). If you convert to horde and your achievements have a record in his table, they will be converted to **horde_id**.
&nbsp;

### horde_id
This is the horde [Achievement ID](/files/DBC/335/achievement#id). If you convert to alliance and your achievements have a record in his table, they will be converted to **alliance_id**.
&nbsp;

