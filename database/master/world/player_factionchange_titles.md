---
title: player_factionchange_titles
description:
published: true
date: 2022-11-21T21:06:54.191Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:47.060Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | signed | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | signed | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [CharTitle ID](https://wago.tools/db2/chartitles). If you convert to horde and your titles have a record in his table, they will be converted to **horde_id**.
&nbsp;

### horde_id
This is the horde [CharTitle ID](https://wago.tools/db2/chartitles). If you convert to alliance and your titles have a record in his table, they will be converted to **alliance_id**.
&nbsp;

