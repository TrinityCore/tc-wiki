---
title: player_factionchange_spells
description:
published: true
date: 2023-07-11T21:16:36.651Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:15.289Z
---

Basically all spell changes made when player changes faction.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | unsigned | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [Spell ID](/files/DBC/335/spell#id). If you convert to horde and your spells have a record in his table, they will be converted to **horde_id**.
&nbsp;

### horde_id
This is the horde [Spell ID](/files/DBC/335/spell#id). If you convert to alliance and your spells have a record in his table, they will be converted to **alliance_id**.
&nbsp;

