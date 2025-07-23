---
title: vehicle_template
description: 
published: true
date: 2025-07-23T14:52:30.498Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:55.445Z
---

<a href="https://trinitycore.info/en/database/master/world/vehicle_seat_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_seat_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/vehicle_template_accessory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_template_accessory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [creatureId](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [despawnDelayMs](#despawndelayms) | int | signed |  | NO | 0 |  |  |
| [CustomFlags](#customflags) | int | unsigned |  | NO | 0 |  |  |

## Description of fields

### creatureId
Entry of Creature
&nbsp;

### despawnDelayMs
Delayed Time for Vehicle Despawn in milliseconds. This is for vehicles that should not directly despawn when the player leaves the vehicle, but it should still perform actions. (Moving away from the player or similar).
&nbsp;

### CustomFlags
| Name | Flag | Comment |
| --- | --- | --- |
| None | 0x0 | |
| DontForceParachuteOnExit | 0x1 | For flyable vehicles |
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/vehicle_seat_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_seat_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/vehicle_template_accessory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_template_accessory'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

