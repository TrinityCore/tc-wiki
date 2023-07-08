---
title: creature_summon_groups
description: 
published: true
date: 2023-07-08T18:29:55.257Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:47.608Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_queststarter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_queststarter'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds data about temporary summoned creatures. It is possible to group summons and create boss waves of adds etc.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [summonerId](#summonerid) | mediumint | unsigned |  | NO | 0 |  |  |
| [summonerType](#summonertype) | tinyint | unsigned |  | NO | 0 |  |  |
| [groupId](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [entry](#entry) | mediumint | unsigned |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [summonType](#summontype) | tinyint | unsigned |  | NO | 0 |  |  |
| [summonTime](#summontime) | int | unsigned |  | NO | 0 |  |  |
| [Comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### summonerId
Summoner's id depending on **summonerType**
&nbsp;

### summonerType
| Value | Type |
|-------|------|
| 0 | SUMMONER_TYPE_CREATURE |
| 1 | SUMMONER_TYPE_GAMEOBJECT |
| 2 | SUMMONER_TYPE_MAP  |
{.dense}

&nbsp;

### groupId
Group identificator. All creatures with the same **groupId** will be summoned at once.
&nbsp;

### entry
Entry of summoned creature from [creature_template.entry](../world/creature_template#entry)
&nbsp;

### position_x
X coordinate of position, where the creature will be spawned
&nbsp;

### position_y
Y coordinate of position, where the creature will be spawned
&nbsp;

### position_z
Z coordinate of position, where the creature will be spawned
&nbsp;

### orientation
Orientation the summoned creature will get when spawned
&nbsp;

### summonType
| Value | Name | Comment |
|-------|------|---------|
| 1 | TEMPSUMMON_TIMED_OR_DEAD_DESPAWN | Despawns after a specified time OR when the creature disappears |
| 2 | TEMPSUMMON_TIMED_OR_CORPSE_DESPAWN | Despawns after a specified time OR when the creature dies |
| 3 | TEMPSUMMON_TIMED_DESPAWN | Despawns after a specified time |
| 4 | TEMPSUMMON_TIMED_DESPAWN_OUT_OF_COMBAT | Despawns after a specified time after the creature is out of combat |
| 5 | TEMPSUMMON_CORPSE_DESPAWN | Despawns instantly after death |
| 6 | TEMPSUMMON_CORPSE_TIMED_DESPAWN | Despawns after a specified time after death |
| 7 | TEMPSUMMON_DEAD_DESPAWN | Despawns when the creature disappears |
| 8 | TEMPSUMMON_MANUAL_DESPAWN | Despawns when UnSummon() is called |
{.dense}

&nbsp;

### summonTime
Timer linked to **summonType**
&nbsp;

### Comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/creature_queststarter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_queststarter'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
