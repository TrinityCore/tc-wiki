---
title: character_skills
description:
published: true
date: 2023-07-29T18:48:20.434Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:14.157Z
---

> This table holds a listing of all skill for each character.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  | Global Unique Identifier |
| [skill](#skill) | smallint | unsigned | PRI | NO |  |  |  |
| [value](#value) | smallint | unsigned |  | NO |  |  |  |
| [max](#max) | smallint | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### skill
The [SkillLine ID](/files/DBC/335/skillline#id) a character owns.
&nbsp;

### value
The current points accumulated in the skill.
&nbsp;

### max
The highest possible **value** for the given skill within a given rank.
&nbsp;

