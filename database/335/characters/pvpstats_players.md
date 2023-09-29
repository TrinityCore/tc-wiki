---
title: pvpstats_players
description:
published: true
date: 2023-08-01T14:25:52.222Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:09.605Z
---

<a href="https://trinitycore.info/en/database/335/characters/pvpstats_battlegrounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pvpstats_battlegrounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/quest_tracker" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_tracker'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds data about BattleGrounds scores.
> To enable storing this kind of informations, set [`Battleground.StoreStatistics.Enable`](https://trinitycore.info/en/files/configuration/home) = 1 in worldserver.config file.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [battleground_id](#battleground_id) | bigint | unsigned | PRI | NO |  |  |  |
| [character_guid](#character_guid) | int | unsigned | PRI | NO |  |  |  |
| [winner](#winner) | bit(1) |  |  | NO |  |  |  |
| [score_killing_blows](#score_killing_blows) | mediumint | unsigned |  | NO |  |  |  |
| [score_deaths](#score_deaths) | mediumint | unsigned |  | NO |  |  |  |
| [score_honorable_kills](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [score_bonus_honor](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [score_damage_done](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [score_healing_done](#score_*) | mediumint | unsigned |  | NO |  |  |  |
| [attr_1](#attr_[1-5]) | mediumint | unsigned |  | NO | 0 |  |  |
| [attr_2](#attr_[1-5]) | mediumint | unsigned |  | NO | 0 |  |  |
| [attr_3](#attr_[1-5]) | mediumint | unsigned |  | NO | 0 |  |  |
| [attr_4](#attr_[1-5]) | mediumint | unsigned |  | NO | 0 |  |  |
| [attr_5](#attr_[1-5]) | mediumint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### battleground_id
references [pvpstats_battlegrounds.id](../characters/pvpstats_battlegrounds#id)
&nbsp;

### character_guid
The [guid](../characters/characters/#guid) of the participating character.
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

<a href="https://trinitycore.info/en/database/335/characters/pvpstats_battlegrounds" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pvpstats_battlegrounds'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/quest_tracker" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_tracker'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
