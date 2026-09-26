---
title: areatrigger_tavern
description: Enable a trigger when player enters a city or tavern. This causes the player to enter a resting state.
published: true
date: 2022-11-21T21:03:15.206Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:54.308Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  | Identifier |
| [name](#name-alt) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
This is the trigger identifier from [AreaTrigger.db2](https://wago.tools/db2/areatrigger){target=_blank}.
&nbsp;

### name {#name-alt}
Name of the city or tavern. This is purely for descriptive purposes.
&nbsp;

