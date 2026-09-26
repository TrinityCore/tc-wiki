---
title: outdoorpvp_template
description: 
published: true
date: 2024-05-16T11:19:34.309Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:45.577Z
---

Comes from sniffs and is not to be changed, EVER!

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [TypeId](#typeid) | tinyint | unsigned | PRI | NO |  |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
| [comment](#comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### TypeId
Id from [`enum OutdoorPvPTypes`](https://github.com/TrinityCore/TrinityCore/tree/3.3.5/src/server/game/OutdoorPvP/OutdoorPvP.h)
&nbsp;

### ScriptName
The name of the script that this outdoor pvp uses. This ties a script from a scripting engine to this outdoor pvp.
&nbsp;

### comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

