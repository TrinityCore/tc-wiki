---
title: spell_learn_spell
description: 
published: true
date: 2022-11-21T21:09:11.228Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:01.097Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned | PRI | NO | 0 |  |  |
| [Active](#active) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### entry
The entry of the spell that the player learns, either from a trainer or from anywhere else (`.learn` command for example).
&nbsp;

### SpellID
The entry of the spell that will be automatically learned by the player when the player learns the spell specified in **entry**.
&nbsp;

### Active
Defines whether spell is shown in spell book or not.
&nbsp;


