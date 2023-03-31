---
title: creature_formations
description: 
published: true
date: 2022-11-21T21:03:58.276Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:52.517Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_equip_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_equip_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [leaderGUID](#leaderguid) | bigint | unsigned |  | NO | 0 |  |  |
| [memberGUID](#memberguid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [dist](#dist) | float |  |  | NO |  |  |  |
| [angle](#angle) | float |  |  | NO |  |  |  |
| [groupAI](#groupai) | int | unsigned |  | NO |  |  |  |
| [point_1](#point_1) | smallint | unsigned |  | NO | 0 |  |  |
| [point_2](#point_2) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### leaderGUID
GUID of group leader
&nbsp;

### memberGUID
GUID of group member
&nbsp;

### dist
Maximum distance between group leader and member
&nbsp;

### angle
Angle between leader and member
> Only degrees are used! Values should be between 0 and 360
{.is-info}

![followangle2.png](/followangle2.png)

### groupAI
Sets group member behaviours, values are:

| Value | Behavior |
| --- | --- |
| 0 | Noone assists noone and member don't follow the leader |
| 512 | Noone assists noone and member follow the leader |
| 1 | The member aggroes if the leader aggroes |
| 2 | The leader aggroes if the member aggroes |
| 3 | Everyone assists everyone and member don't follow the leader |
| 515 | Everyone assists everyone and member follow the leader |
&nbsp;

### point_1
### point_2
These values are used to set leaderGUID pre ending path points for memberGUID's where the path is a straight return path and memberGUID's should not crossover to other side of leaderGUID on direction change.

If your leader has a path like the one below where he moves to point 5 then back to 1 you would set point_1 = 4 and point_2 = 8 on the memberGUID. If the memberGUID is at angle 90 up to point 5 it will switch to angle 270 for the return trip. This is only needed to keep creatures on the correct side. these values can be left at 0 for creatures following directly behind leaderGUID or any creatures in a circular path. 
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_equip_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_equip_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

