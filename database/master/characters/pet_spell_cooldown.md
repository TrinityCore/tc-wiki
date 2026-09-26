---
title: pet_spell_cooldown
description: 
published: true
date: 2022-11-21T21:02:41.250Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T08:16:54.147Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier, Low part |
| [spell](#spell) | int | unsigned | PRI | NO | 0 |  | Spell Identifier |
| [time](#time) | bigint | signed |  | NO | 0 |  |  |
| [categoryId](#categoryid) | int | unsigned |  | NO | 0 |  | Spell category Id |
| [categoryEnd](#categoryend) | bigint | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### spell
*- no description -*
&nbsp;

### time
*- no description -*
&nbsp;

### categoryId
*- no description -*
&nbsp;

### categoryEnd
*- no description -*
&nbsp;


