---
title: character_spell_cooldown
description: 
published: true
date: 2022-12-19T18:37:04.712Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:35:10.323Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  | Global Unique Identifier, Low part |
| [spell](#spell) | int | unsigned | PRI | NO | 0 |  | Spell Identifier |
| [item](#item) | int | unsigned |  | NO | 0 |  | Item Identifier |
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

### item
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


