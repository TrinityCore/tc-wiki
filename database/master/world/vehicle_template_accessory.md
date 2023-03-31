---
title: vehicle_template_accessory
description: 
published: true
date: 2023-01-03T01:53:52.332Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:57.960Z
---

<a href="https://trinitycore.info/en/database/master/world/vehicle_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/version" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'version'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [accessory_entry](#accessory_entry) | int | unsigned |  | NO | 0 |  |  |
| [seat_id](#seat_id) | tinyint | signed | PRI | NO | 0 |  |  |
| [minion](#minion) | tinyint | unsigned |  | NO | 0 |  |  |
| [description](#description) | mediumtext |  |  | NO |  |  |  |
| [summontype](#summontype) | tinyint | unsigned |  | NO | 6 |  | see enum TempSummonType |
| [summontimer](#summontimer) | int | unsigned |  | NO | 30000 |  | timer, only relevant for certain summontypes |
Any record in this table works for any creature under the same entry in creature_template. These can be overriden by the [vehicle_accessory](https://trinitycore.info/database/master/world/vehicle_accessory), which works for specific creatures' guids.
&nbsp;
## Description of fields

### entry
The entry from creature_template of the creature to be used as a vehicle.
&nbsp;

### accessory_entry
The entry from creature_template of the creature to be used as a passenger of the vehicle.
&nbsp;

### seat_id
The vehicle seat in which the passenger is spawned. Each VehicleID has a given amount of seats which you can consult on [Vehicle.dbc](https://wow.tools/dbc/?dbc=vehicle&build=9.2.7.45745#page=1){target=_blank} under Seat[Index]. You can consult each VehicleSeat's ID parameters on [VehicleSeat.dbc](https://wow.tools/dbc/?dbc=vehicleseat&build=10.0.5.47215#page=1){target=_blank}.
&nbsp;

### minion
This field determines whether the passenger will die when the vehicle does. If set to:

- **0**: the passenger will not die.
- **1**: the passenger will die.
&nbsp;

### description
A comment you can add to the given record for context. This provides information about the record since plain numbers are very vague, so it is encouraged to be added. As a recommendation you can use the syntax (Name of the vehicle - Name of the passenger): Catapult - Warrior troll.
&nbsp;

### summontype
| Flag | Name | Comments |
| --- | --- | --- | 
| 1 | TEMPSUMMON_TIMED_OR_DEAD_DESPAWN | Despawns after a specified time OR when the creature disappears. 
| 2 | TEMPSUMMON_TIMED_OR_CORPSE_DESPAWN | Despawns after a specified time OR when the creature disappears. 
| 3 | TEMPSUMMON_TIMED_DESPAWN | Despawns after a specified time. 
| 4 | TEMPSUMMON_TIMED_DESPAWN_OUT_OF_COMBAT | Despawns after a specified time after the creature is out of combat. 
| 5 | TEMPSUMMON_CORPSE_DESPAWN | Despawns instantly after death. 
| 6 | TEMPSUMMON_CORPSE_TIMED_DESPAWN | Despawns after a specified time after death. 
| 7 | TEMPSUMMON_DEAD_DESPAWN | Despawns when the creature disappears.
| 8 | TEMPSUMMON_MANUAL_DESPAWN	 | Despawns when UnSummon() is called. 
&nbsp;

### summontimer
The timer linked to the summontype field.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/vehicle_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/version" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'version'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

