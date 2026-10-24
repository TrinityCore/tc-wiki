---
title: QuestFactionReward.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# QuestFactionReward.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/QuestFactionReward)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Difficulty_0](#difficulty) | int32 |  |
| 2 | [Difficulty_1](#difficulty) | int32 |  |
| 3 | [Difficulty_2](#difficulty) | int32 |  |
| 4 | [Difficulty_3](#difficulty) | int32 |  |
| 5 | [Difficulty_4](#difficulty) | int32 |  |
| 6 | [Difficulty_5](#difficulty) | int32 |  |
| 7 | [Difficulty_6](#difficulty) | int32 |  |
| 8 | [Difficulty_7](#difficulty) | int32 |  |
| 9 | [Difficulty_8](#difficulty) | int32 |  |
| 10 | [Difficulty_9](#difficulty) | int32 |  |

&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Difficulty
<code>Col: 1 &ndash; 10 (int32)</code>

Col indexed by [quest RewardFactionValue](/database/335/world/quest_template#rewardfactionvalue-1-5)
&nbsp;
