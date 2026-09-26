---
title: lfg_dungeon_rewards
description:
published: true
date: 2023-07-11T17:21:39.193Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:17.982Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [dungeonId](#dungeonid) | int | unsigned | PRI | NO | 0 |  | Dungeon entry from dbc |
| [maxLevel](#maxlevel) | tinyint | unsigned | PRI | NO | 0 |  | Max level at which this reward is rewarded |
| [firstQuestId](#firstquestid) | int | unsigned |  | NO | 0 |  | Quest id with rewards for first dungeon this day |
| [otherQuestId](#otherquestid) | int | unsigned |  | NO | 0 |  | Quest id with rewards for Nth dungeon this day |
&nbsp;
## Description of fields

### dungeonId
references [LfgDungeons ID](/files/DBC/335/lfgdungeons#id)
&nbsp;

### maxLevel
Max level at which this reward is rewarded.
&nbsp;

### firstQuestId
[quest_template.ID](../world/quest_template#id) with rewards for the first dungeon this day.
&nbsp;

### otherQuestId
[quest_template.ID](../world/quest_template#id) with rewards for subsequent dungeons this day.
&nbsp;

