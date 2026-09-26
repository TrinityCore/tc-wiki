---
title: battlemaster_entry
description: Holds information on which NPC can start what battleground or arena.
published: true
date: 2022-11-21T21:03:29.224Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:14.941Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  | Entry of a creature |
| [bg_template](#bg_template) | int | unsigned |  | NO | 0 |  | Battleground template id |
&nbsp;
## Description of fields

### entry
The ID of the creature. See [creature_template.entry](/database/master/world/creature_template#entry)
&nbsp;

### bg_template
The [battleground_template.ID](/database/master/world/battleground_template#id).
&nbsp;


