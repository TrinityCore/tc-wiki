---
title: pvpstats_players
description: 
published: true
date: 2024-04-16T20:00:08.485Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:09.605Z
---

> This table holds data about BattleGrounds scores.
> To enable storing this kind of informations, set [`Battleground.StoreStatistics.Enable`](/files/configuration/home) = 1 in worldserver.config file.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [battleground_id](#battleground_id) | bigint | unsigned | PRI | NO |  |  |  |
| [character_guid](#character_guid) | int | unsigned | PRI | NO |  |  |  |
| [winner](#winner) | bit(1) |  |  | NO |  |  |  |
| [score_killing_blows](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [score_deaths](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [score_honorable_kills](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [score_bonus_honor](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [score_damage_done](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [score_healing_done](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [attr_1](#attr_1-5) | mediumint | unsigned |  | NO | 0 |  |  |
| [attr_2](#attr_1-5) | mediumint | unsigned |  | NO | 0 |  |  |
| [attr_3](#attr_1-5) | mediumint | unsigned |  | NO | 0 |  |  |
| [attr_4](#attr_1-5) | mediumint | unsigned |  | NO | 0 |  |  |
| [attr_5](#attr_1-5) | mediumint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### battleground_id
references [pvpstats_battlegrounds.id](../characters/pvpstats_battlegrounds#id)
&nbsp;

### character_guid
The [guid](../characters/characters#guid) of the participating character.
&nbsp;

### winner
* 0: my team lost the BG
* 1: i won the BG
&nbsp;

### score_*
Accumulated statistics, shared among all Battlegrounds.
&nbsp;

### attr_\[1-5]
Accumulated statistics, unique to a [battleground type](../characters/pvpstats_battlegrounds#type).
| type | Name | attr_1 | attr_2 | attr_3 | attr_4 | attr_5 |
|------|------|--------|--------|--------|--------|--------|
| 1 | AV | GraveyardsAssaulted | GraveyardsDefended | TowersAssaulted | TowersDefended | MinesCaptured |
| 2 | WSG | FlagCaptures | FlagReturns | 0 | 0 | 0 |
| 3 | AB | BasesAssaulted | BasesDefended | 0 | 0 | 0 |
| 7 | EotS | FlagCaptures | 0 | 0 | 0 | 0 |
| 9 | SotA | DemolishersDestroyed | GatesDestroyed | 0 | 0 | 0 |
| 30 | IoC | BasesAssaulted | BasesDefended | 0 | 0 | 0 |
{.dense}

&nbsp;

