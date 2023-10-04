---
title: vehicle_accessory
description:
published: true
date: 2023-07-24T17:34:57.103Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:29.645Z
---

<a href="https://trinitycore.info/en/database/335/world/updates_include" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'updates_include'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/vehicle_seat_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_seat_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table is used to tell the server to spawn an additional NPC with this vehicle.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [accessory_entry](#accessory_entry) | mediumint | unsigned |  | NO | 0 |  |  |
| [seat_id](#seat_id) | tinyint | signed | PRI | NO | 0 |  |  |
| [minion](#minion) | tinyint | unsigned |  | NO | 0 |  |  |
| [description](#description) | text |  |  | NO |  |  |  |
| [summontype](#summontype) | tinyint | unsigned |  | NO | 6 |  | see enum TempSummonType |
| [summontimer](#summontimer) | int | unsigned |  | NO | 30000 |  | timer, only relevant for certain summontypes |
&nbsp;
## Description of fields

### guid
[creature guid](../world/creature#guid) of npc to be used as vehicle.
&nbsp;

### accessory_entry
[creature entry](../world/creature_template#entry) to be attached to the main vehicle.

Flying vehicles must have [Flight](../world/creature_template_movement#Flight) enabled.
&nbsp;

### seat_id
[VehicleSeat ID](/files/DBC/335/vehicleseat#id) in witch the accessory should be spawned.
&nbsp;

### minion
* 0: accessory will _not_ die when vehicle dies.
* 1: accessory will die when the vehicle dies.

> Note: When making detachable vehicles you will always want to use value 0, otherwise when the main vehicle dies so does the detached vehicles.
{.is-info}

&nbsp;

### description
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

### summontype

| ID | Name | Comment |
|----|------|---------|
| 1 | TEMPSUMMON_TIMED_OR_DEAD_DESPAWN | despawns after a specified time OR when the creature disappears |
| 2 | TEMPSUMMON_TIMED_OR_CORPSE_DESPAWN | despawns after a specified time OR when the creature dies |
| 3 | TEMPSUMMON_TIMED_DESPAWN | despawns after a specified time |
| 4 | TEMPSUMMON_TIMED_DESPAWN_OUT_OF_COMBAT | despawns after a specified time after the creature is out of combat |
| 5 | TEMPSUMMON_CORPSE_DESPAWN | despawns instantly after death |
| 6 | TEMPSUMMON_CORPSE_TIMED_DESPAWN | despawns after a specified time after death |
| 7 | TEMPSUMMON_DEAD_DESPAWN | despawns when the creature disappears |
| 8 | TEMPSUMMON_MANUAL_DESPAWN | despawns when UnSummon() is called |
{.dense}

&nbsp;

### summontimer
Timer in ms linked to **summontype**.

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/updates_include" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'updates_include'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/vehicle_seat_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_seat_addon'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
