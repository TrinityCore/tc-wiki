---
title: player_factionchange_spells
description:
published: true
date: 2022-11-21T21:06:52.184Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:44.512Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | unsigned | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | unsigned | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [Spell ID](https://wago.tools/db2/spell). If you convert to horde and your spells have a record in his table, they will be converted to **horde_id**.
&nbsp;

### horde_id
This is the horde [Spell ID](https://wago.tools/db2/spell). If you convert to alliance and your spells have a record in his table, they will be converted to **alliance_id**.
&nbsp;

