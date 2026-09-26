---
title: creature_classlevelstats
description: 
published: true
date: 2022-11-21T21:03:54.260Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:47.087Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [level](#level) | tinyint | signed | PRI | NO |  |  |  |
| [class](#class) | tinyint | signed | PRI | NO |  |  |  |
| [basemana](#basemana) | int | unsigned |  | NO | 1 |  |  |
| [attackpower](#attackpower) | smallint | signed |  | NO | 0 |  |  |
| [rangedattackpower](#rangedattackpower) | smallint | signed |  | NO | 0 |  |  |
| [comment](#comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### level
Level of the creature.
&nbsp;

### class
Class of the creature. This is a reference to the [unit_class](/database/master/world/creature_template#unit_class) field in the [creature_template](/database/master/world/creature_template) table.
&nbsp;

### basemana
Base mana for the creature. This value is multiplied by [creature_template.mana_mod](/database/master/world/creature_template#mana_mod) to determine the creature's final mana.
&nbsp;

### attackpower
*- no description -*
&nbsp;

### rangedattackpower
*- no description -*
&nbsp;

### comment
A comment describing the purpose of the record (entry).
&nbsp;


