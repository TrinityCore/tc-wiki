---
title: creature_formations
description: 
published: true
date: 2024-02-03T02:16:29.759Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:26.275Z
---

<a href="https://trinitycore.info/en/database/335/world/creature_equip_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_equip_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table allows to group mobs. Members of group will follow others, and attack their targets.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [leaderGUID](#leaderguid) | int | unsigned |  | NO | 0 |  |  |
| [memberGUID](#memberguid) | int | unsigned | PRI | NO | 0 |  |  |
| [dist](#dist) | float |  |  | NO |  |  |  |
| [angle](#angle) | float |  |  | NO |  |  |  |
| [groupAI](#groupai) | int | unsigned |  | NO |  |  |  |
| [point_1](#point_1) | smallint | unsigned |  | NO | 0 |  |  |
| [point_2](#point_2) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### leaderGUID
[creature GUID](../world/creature#guid) of the group leader
&nbsp;

### memberGUID
[creature GUID](../world/creature#guid) of a group member
&nbsp;

### dist
Maximum distance between group leader and member
&nbsp;

### angle
Angle between leader and member
Note: Only degrees are used! Values should be between 0 and 360
![followangle2.png](/followangle2.png)
&nbsp;

### groupAI
Sets group member behaviours, values are:

| Value | Behaviour |
|-------|-----------|
| 0 | If any creature from group is attacked, members won't assist |
| 1 | Group member will assist only their leader if attacked. |
| 2 | Group members will assist all group members |
| 3 | Everyone assists everyone and member don't follow the leader |
| 512 | Noone assists noone and member follow the leader |
| 515 | Everyone assists everyone and member follow the leader |
{.dense}

&nbsp;
### point_1
### point_2
These values are used to set leaderGUID pre ending path points for memberGUID's where the path is a straight return path and memberGUID's should not crossover to other side of leaderGUID on direction change.

If your leader has a path like the one below where he moves to point 5 then back to 1 you would set point_1 = 4 and point_2 = 8 on the memberGUID. If the memberGUID is at angle 90 up to point 5 it will switch to angle 270 for the return trip. This is only needed to keep creatures on the correct side. these values can be left at 0 for creatures following directly behind leaderGUID or any creatures in a circular path. 

```
1     2     3     4    5
-----<--------->------
       8    7      6
```

<a href="https://trinitycore.info/en/database/335/world/creature_equip_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_equip_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_loot_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
