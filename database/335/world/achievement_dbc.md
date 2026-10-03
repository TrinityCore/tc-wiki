---
title: achievement_dbc
description:
published: true
date: 2023-07-07T20:05:20.466Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:35.965Z
---

Stores achievement data that is missing in [Achievement.dbc](/files/DBC/335/achievement) file.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO |  |  |  |
| [requiredFaction](#requiredfaction) | int | signed |  | NO | -1 |  |  |
| [mapID](#mapid) | int | signed |  | NO | -1 |  |  |
| [points](#points) | int | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [count](#count) | int | unsigned |  | NO | 0 |  |  |
| [refAchievement](#refachievement) | int | unsigned |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### ID {#id-alt}
[AchievementCriteria AchievementID](/files/DBC/335/achievement_criteria#achievementid)
&nbsp;

### requiredFaction
* Both: -1
* Horde: 0
* Alliance: 1
&nbsp;

### mapID
Player must be on that map to be allowed criteria updates. (-1 if not set)
&nbsp;

### points
Achievement points awarded for completing the achievement, has no use serverside.
&nbsp;

### flags
<!--@include: @/partial/335/achievement-flags.md-->

&nbsp;

### count
Should always be 1.
&nbsp;

### refAchievement
Should always be 0.
&nbsp;
