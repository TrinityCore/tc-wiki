---
title: character_achievement_progress
description: 
published: true
date: 2025-10-10T23:21:01.423Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:09.789Z
---

> This table holds information on a characters achievement progress per criteria.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
| [criteria](#criteria) | smallint | unsigned | PRI | NO |  |  |  |
| [counter](#counter) | int | unsigned |  | NO |  |  |  |
| [date](#date) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### criteria
[AchievementCriteria ID](/files/DBC/335/achievement_criteria#id)
&nbsp;

### counter
The counter related to the respective achievement
&nbsp;

### date
The date/time when this criteria was last updated, in Unix time.
&nbsp;

