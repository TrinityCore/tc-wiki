---
title: creature_onkill_reputation
description: 
published: true
date: 2022-11-21T21:04:06.350Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:02.872Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_movement_override" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_movement_override'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_questender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_questender'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [creature_id](#creature_id) | int | unsigned | PRI | NO | 0 |  | Creature Identifier |
| [RewOnKillRepFaction1](#rewonkillrepfaction1) | smallint | signed |  | NO | 0 |  |  |
| [RewOnKillRepFaction2](#rewonkillrepfaction2) | smallint | signed |  | NO | 0 |  |  |
| [MaxStanding1](#maxstanding1) | tinyint | signed |  | NO | 0 |  |  |
| [IsTeamAward1](#isteamaward1) | tinyint | signed |  | NO | 0 |  |  |
| [RewOnKillRepValue1](#rewonkillrepvalue1) | int | signed |  | NO | 0 |  |  |
| [MaxStanding2](#maxstanding2) | tinyint | signed |  | NO | 0 |  |  |
| [IsTeamAward2](#isteamaward2) | tinyint | signed |  | NO | 0 |  |  |
| [RewOnKillRepValue2](#rewonkillrepvalue2) | int | signed |  | NO | 0 |  |  |
| [TeamDependent](#teamdependent) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### creature_id
The template ID of the creature. See [creature_template.entry](/en/database/master/world/creature_template#entry)
&nbsp;

### RewOnKillRepFaction1

### RewOnKillRepFaction2
The faction ID of the faction that the player will gain or lose points in. See [Faction.db2](https://wow.tools/dbc/?dbc=faction){target=_blank}
&nbsp;

### MaxStanding1
The maximum standing that the creature will award reputation until. If the player achieves this standing or any other standing higher than this, the creature will not award any reputation.

| ID  | Rank       |
| --- | ---------- |
| 0   | Hated      |
| 1   | Hostile    |
| 2   | Unfriendly |
| 3   | Neutral    |
| 4   | Friendly   |
| 5   | Honored    |
| 6   | Revered    |
| 7   | Exalted    |
&nbsp;

### IsTeamAward1
Boolean 0 or 1 that controls if the player receives the reputation not only to the faction but also the faction team.

- 0: Player receives reputation only for the faction
- 1: Player receives reputation both for the faction and the faction's team

> The reputation value that the player gains for the team (if the field is 1) is half of the value specified in RewOnKillRepValue
{.is-info}

### RewOnKillRepValue1
The reputation value that the player gains (or loses if it's negative) by killing the creature.
&nbsp;

### MaxStanding2
The maximum standing that the creature will award reputation until. If the player achieves this standing or any other standing higher than this, the creature will not award any reputation.

| ID  | Rank       |
| --- | ---------- |
| 0   | Hated      |
| 1   | Hostile    |
| 2   | Unfriendly |
| 3   | Neutral    |
| 4   | Friendly   |
| 5   | Honored    |
| 6   | Revered    |
| 7   | Exalted    |
&nbsp;

### IsTeamAward2
Boolean 0 or 1 that controls if the player receives the reputation not only to the faction but also the faction team.

- 0: Player receives reputation only for the faction
- 1: Player receives reputation both for the faction and the faction's team

> The reputation value that the player gains for the team (if the field is 1) is half of the value specified in RewOnKillRepValue
{.is-info}

### RewOnKillRepValue2
The reputation value that the player gains (or loses if it's negative) by killing the creature.
&nbsp;

### TeamDependent
Boolean 0 or 1.

- 0: The creature will give reputation to the any player from both fields (RewOnKillRepFaction1 and RewOnKillRepFaction2) if both fields are non-zero.
- 1: The creature will award alliance players the reputation from RewOnKillRepFaction1 and will award horde players the reputation from RewOnKillRepFaction2
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_movement_override" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_movement_override'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_questender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_questender'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

