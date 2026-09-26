---
title: player_xp_for_level
description: 
published: true
date: 2023-07-11T21:56:41.712Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:26.044Z
---

Includes information on how much is experience needed for next level. Comes from sniffs.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Level](#level) | tinyint | unsigned | PRI | NO |  |  |  |
| [Experience](#experience) | int | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### Level
The player's current level.
&nbsp;

### Experience
The amount of experience points needed to reach the next level.
&nbsp;

