---
title: creature_movement_override
description: 
published: true
date: 2023-06-09T21:27:18.116Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:00.315Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_movement_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_movement_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_onkill_reputation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_onkill_reputation'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SpawnId](#spawnid) | bigint | unsigned | PRI | NO | 0 |  |  |
| [Ground](#ground) | tinyint | unsigned |  | YES | NULL |  |  |
| [Swim](#swim) | tinyint | unsigned |  | YES | NULL |  |  |
| [Flight](#flight) | tinyint | unsigned |  | YES | NULL |  |  |
| [Rooted](#rooted) | tinyint | unsigned |  | YES | NULL |  |  |
| [Chase](#chase) | tinyint | unsigned |  | YES | NULL |  |  |
| [Random](#random) | tinyint | unsigned |  | YES | NULL |  |  |
| [InteractionPauseTimer](#interactionpausetimer) | int | unsigned |  | YES | NULL |  | Time (in milliseconds) during which creature will not move after interaction with player |
&nbsp;
## Description of fields

### SpawnId
GUID of your creature spawn [creature.guid](/en/database/master/world/creature#guid)
&nbsp;

### Ground
| Value | Description |
| --- | --- |
| 0 | None |
| 1 | Run |
| 2 | Hover |
&nbsp;

### Swim
| Value | Description |
| --- | --- |
| 0 | None |
| 1 | CanSwim |
&nbsp;

### Flight
| Value | Description |
| --- | --- |
| 0 | None |
| 1 | DisableGravity |
| 2 | CanFly |
&nbsp;

### Rooted
| Value | Description |
| --- | --- |
| 0 | None |
| 1 | Rooted |
&nbsp;

### Chase
| Value | Description |
| --- | --- |
| 0 | Run |
| 1 | CanWalk |
| 2 | AlwaysWalk |
&nbsp;

### Random
| Value | Description |
| --- | --- |
| 0 | Walk |
| 1 | CanRun |
| 2 | AlwaysRun |
&nbsp;

### InteractionPauseTimer
Time (in milliseconds) during which the creature will not move after interaction with player.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_movement_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_movement_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_onkill_reputation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_onkill_reputation'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

