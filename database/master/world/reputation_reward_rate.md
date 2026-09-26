---
title: reputation_reward_rate
description:
published: true
date: 2022-11-21T21:08:20.260Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:47.535Z
---

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
[Faction ID](https://wago.tools/db2/faction) these rates apply to.
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

