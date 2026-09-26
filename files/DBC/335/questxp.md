---
title: QuestXP.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# QuestXP.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/QuestXP)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Difficulty_0](#difficulty) | uint32 |  |
| 2 | [Difficulty_1](#difficulty) | uint32 |  |
| 3 | [Difficulty_2](#difficulty) | uint32 |  |
| 4 | [Difficulty_3](#difficulty) | uint32 |  |
| 5 | [Difficulty_4](#difficulty) | uint32 |  |
| 6 | [Difficulty_5](#difficulty) | uint32 |  |
| 7 | [Difficulty_6](#difficulty) | uint32 |  |
| 8 | [Difficulty_7](#difficulty) | uint32 |  |
| 9 | [Difficulty_8](#difficulty) | uint32 |  |
| 10 | [Difficulty_9](#difficulty) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

Quest level
&nbsp;

### Difficulty
<code>Col: 1 &ndash; 10 (uint32)</code>

Col indexed by [Quest RewardXPDifficulty](/database/335/world/quest_template#rewardxpdifficulty)
&nbsp;

