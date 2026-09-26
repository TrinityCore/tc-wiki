---
title: player_factionchange_titles
description:
published: true
date: 2023-07-11T21:20:43.707Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:17.961Z
---

Basically all title changes made when player changes faction.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [alliance_id](#alliance_id) | int | signed | PRI | NO |  |  |  |
| [horde_id](#horde_id) | int | signed | PRI | NO |  |  |  |
&nbsp;
## Description of fields

### alliance_id
This is the alliance [CharTitle ID](/files/DBC/335/chartitles#id). If you convert to horde and your titles have a record in his table, they will be converted to **horde_id**.
&nbsp;

### horde_id
This is the horde [CharTitle ID](/files/DBC/335/chartitles#id). If you convert to alliance and your titles have a record in his table, they will be converted to **alliance_id**.
&nbsp;

