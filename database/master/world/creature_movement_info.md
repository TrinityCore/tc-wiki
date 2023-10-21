---
title: creature_movement_info
description: 
published: true
date: 2022-11-21T22:46:41.247Z
tags: database, master, world
editor: markdown
dateCreated: 2022-04-17T19:08:15.909Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_model_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_model_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_movement_override" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_movement_override'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MovementID](#movementid) | int | unsigned | PRI | NO | 0 |  | creature_template.movementId value |
| [WalkSpeed](#walkspeed) | float |  |  | YES | NULL |  |  |
| [RunSpeed](#runspeed) | float |  |  | YES | NULL |  |  |
&nbsp;

## Info
This table is currently unused and is reserved for future use. 
[Link to commit introducing it](https://github.com/TrinityCore/TrinityCore/commit/e33b3e4a81c64fc7c9918c2c15f66f1f259d1fde)
&nbsp;

## Description of fields

### MovementID
references [creature_template.movementId](../world/creature_template#movementid) / [CreatureMovementInfo ID](/files/DBC/335/creaturemovementinfo#id)
&nbsp;

### WalkSpeed
generic value: `2.5`
&nbsp;

### RunSpeed
generic value: `8.0`
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_model_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_model_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_movement_override" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_movement_override'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
