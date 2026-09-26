---
title: outdoorpvp_template
description: 
published: true
date: 2022-11-21T21:06:30.218Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:13.700Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [TypeId](#typeid) | tinyint | unsigned | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [comment](#comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### TypeId
Id from [`enum OutdoorPvPTypes`](https://github.com/TrinityCore/TrinityCore/blob/master/src/server/game/OutdoorPvP/OutdoorPvP.h)
&nbsp;

### ScriptName
The name of the script that this outdoor pvp uses. This ties a script from a scripting engine to this outdoor pvp.
&nbsp;

### comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

