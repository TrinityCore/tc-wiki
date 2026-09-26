---
title: gameobject_questender
description: 
published: true
date: 2024-05-16T11:19:32.624Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:22.414Z
---

Holds gameobject quest taker relations. The gameobjects in this table should all be of type QUESTGIVER (2).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  | Quest Identifier |
&nbsp;
## Description of fields

### id {#id-alt}
The [entry](../world/gameobject_template#entry) of the gameobject ending the quest.
&nbsp;

### quest
The [quest ID](../world/quest_template#id) that this gameobject finishes.
&nbsp;

