---
title: character_achievement
description:
published: true
date: 2023-07-25T18:18:51.310Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:07.193Z
---

> This table holds information on the achievements a character has earned / completed.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
| [achievement](#achievement) | smallint | unsigned | PRI | NO |  |  |  |
| [date](#date) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### achievement
[Achievement ID](/files/DBC/335/achievement#id)
&nbsp;

### date
The date/time when this achievement was earned, in Unix time.
&nbsp;

