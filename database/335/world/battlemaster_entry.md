---
title: battlemaster_entry
description: 
published: true
date: 2024-05-16T11:19:31.246Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:59.835Z
---

Holds information on which NPC can start what battleground or arena.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  | Entry of a creature |
| [bg_template](#bg_template) | int | unsigned |  | NO | 0 |  | Battleground template id |
&nbsp;
## Description of fields

### entry
The [entry](../world/creature_template#entry) of the creature.
&nbsp;

### bg_template
The [battleground_template](../world/battleground_template#id) id.
&nbsp;

