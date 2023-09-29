---
title: creature_onkill_reputation
description:
published: true
date: 2023-07-08T17:52:10.601Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:36.902Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_movement_override" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_movement_override'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_questender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_questender'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table controls the reputation given by creatures when killed by players.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [creature_id](#creature_id) | mediumint | unsigned | PRI | NO | 0 |  | Creature Identifier |
| [RewOnKillRepFaction1](#rewonkillrepfaction1) | smallint | signed |  | NO | 0 |  |  |
| [RewOnKillRepFaction2](#rewonkillrepfaction2) | smallint | signed |  | NO | 0 |  |  |
| [MaxStanding1](#maxstanding1) | tinyint | signed |  | NO | 0 |  |  |
| [IsTeamAward1](#isteamaward1) | tinyint | signed |  | NO | 0 |  |  |
| [RewOnKillRepValue1](#rewonkillrepvalue1) | mediumint | signed |  | NO | 0 |  |  |
| [MaxStanding2](#maxstanding2) | tinyint | signed |  | NO | 0 |  |  |
| [IsTeamAward2](#isteamaward2) | tinyint | signed |  | NO | 0 |  |  |
| [RewOnKillRepValue2](#rewonkillrepvalue2) | mediumint | signed |  | NO | 0 |  |  |
| [TeamDependent](#teamdependent) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### creature_id
The template ID of the creature. See [creature_template.entry](../world/creature_template#entry)
&nbsp;

### RewOnKillRepFaction1
### RewOnKillRepFaction2
The [Faction ID](/files/DBC/335/faction#id) that the player will gain or lose points in.
&nbsp;


### MaxStanding1
### MaxStanding2
The maximum standing that the creature will award reputation until. If the player achieves this standing or any other standing higher than this, the creature will not award any reputation.
| ID | Rank |
|----|------|
| 0 | Hated |
| 1 | Hostile |
| 2 | Unfriendly |
| 3 | Neutral |
| 4 | Friendly |
| 5 | Honored |
| 6 | Revered |
| 7 | Exalted |
{.dense}

&nbsp;

### IsTeamAward1
### IsTeamAward2
Boolean 0 or 1 that controls if the player receives the reputation not only to the faction but also the faction team.
* 0: Player receives reputation only for the faction
* 1: Player receives reputation both for the faction and the faction's team

> NOTE: The reputation value that the player gains for the team (if the field is 1) is half of the value specified in [RewOnKillRepValue](#RewOnKillRepValue1)
{.is-info}

&nbsp;

### RewOnKillRepValue1
### RewOnKillRepValue2
The reputation value that the player gains (or loses if it's negative) by killing the creature.
&nbsp;

### TeamDependent
Boolean 0 or 1.
* 0: The creature will give reputation to the any player from both fields ([RewOnKillRepFaction1](#RewOnKillRepFaction1) and [RewOnKillRepFaction2](#RewOnKillRepFaction2)) if both fields are non-zero.
* 1: The creature will award alliance players the reputation from [RewOnKillRepFaction1](#RewOnKillRepFaction1) and will award horde players the reputation from [RewOnKillRepFaction2](#RewOnKillRepFaction2)
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/creature_movement_override" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_movement_override'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_questender" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_questender'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
