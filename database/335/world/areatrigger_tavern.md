---
title: areatrigger_tavern
description:
published: true
date: 2024-05-16T11:19:31.172Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:49.169Z
---

Enable a trigger when player enters a city or tavern. This causes the player to enter a resting state.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  | Identifier |
| [name](#name-alt) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
This is the [AreaTrigger ID](/files/DBC/335/areatrigger#id).
&nbsp;

### name {#name-alt}
Name of the city or tavern. This is purely for descriptive purposes.
&nbsp;

