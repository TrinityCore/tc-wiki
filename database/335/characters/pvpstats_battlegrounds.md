---
title: pvpstats_battlegrounds
description:
published: true
date: 2023-08-01T14:40:47.224Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:06.932Z
---

<a href="https://trinitycore.info/en/database/335/characters/pool_quest_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pool_quest_save'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/pvpstats_players" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pvpstats_players'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds data about BattleGrounds scores.
> To enable storing this kind of informations, set [`Battleground.StoreStatistics.Enable`](https://trinitycore.info/en/files/configuration/home) = 1 in worldserver.config file.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | bigint | unsigned | PRI | NO |  | auto_increment |  |
| [winner_faction](#winner_faction) | tinyint | signed |  | NO |  |  |  |
| [bracket_id](#bracket_id) | tinyint | unsigned |  | NO |  |  |  |
| [type](#type) | tinyint | unsigned |  | NO |  |  |  |
| [date](#date) | datetime |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### id
An unique value which identifies a pvpstats record.
&nbsp;

### winner_faction
The faction which won the BattleGround:
| ID | Name | Commment |
|----|------|----------|
| 0 | PVP_TEAM_HORDE |  |
| 1 | PVP_TEAM_ALLIANCE |  |
| 2 | PVP_TEAM_NEUTRAL | no winner |
{.dense}

&nbsp;

### bracket_id
Identifies the bracket level range:
| ID | Range |
|----|-------|
| 1 | 10 – 19 |
| 2 | 20 – 29 |
| 3 | 30 – 39 |
| 4 | 40 – 49 |
| 5 | 50 – 59 |
| 6 | 60 – 69 |
| 7 | 70 – 79 |
| 8 | 80 |
{.dense}

&nbsp;

### type
[BattlemasterList ID](/files/DBC/335/battlemasterlist#id)
| ID | Name |
|------|------|
| 1 | Alterac Valley |
| 2 | Warsong Gulch |
| 3 | Arathi Basin |
| 7 | Eye of the Storm |
| 9 | Strand of the Ancients |
| 30 | Isle of Conquest |
{.dense}

&nbsp;

### date
Unix timestamp of the battleground ending.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/pool_quest_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pool_quest_save'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/pvpstats_players" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pvpstats_players'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
