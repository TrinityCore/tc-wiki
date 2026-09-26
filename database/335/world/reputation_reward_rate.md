---
title: reputation_reward_rate
description:
published: true
date: 2024-05-16T11:19:35.346Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:42.575Z
---

Holds reputation multipliers for specific factions.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [faction](#faction) | int | unsigned | PRI | NO | 0 |  |  |
| [quest_rate](#quest_rate) | float |  |  | NO | 1 |  |  |
| [quest_daily_rate](#quest_daily_rate) | float |  |  | NO | 1 |  |  |
| [quest_weekly_rate](#quest_weekly_rate) | float |  |  | NO | 1 |  |  |
| [quest_monthly_rate](#quest_monthly_rate) | float |  |  | NO | 1 |  |  |
| [quest_repeatable_rate](#quest_repeatable_rate) | float |  |  | NO | 1 |  |  |
| [creature_rate](#creature_rate) | float |  |  | NO | 1 |  |  |
| [spell_rate](#spell_rate) | float |  |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### faction
[Faction ID](/files/DBC/335/faction#id) these rates apply to.
&nbsp;

### quest_rate
The rate for reputation gain from regular quests.
&nbsp;

### quest_daily_rate
The rate for reputation gain from daily repeatable quests.
&nbsp;

### quest_weekly_rate
The rate for reputation gain from weekly repeatable quests.
&nbsp;

### quest_monthly_rate
The rate for reputation gain from monthly repeatable quests.
&nbsp;

### quest_repeatable_rate
The rate for reputation gain from genreral repeatable quests.
&nbsp;

### creature_rate
The rate for reputation gain from creature kills.
&nbsp;

### spell_rate
The rate for reputation gain from spells. (like [Commendation Badges](https://aowow.trinitycore.info/?search=Commendation+Badge))
&nbsp;

