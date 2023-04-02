---
title: vehicle_seat_addon
description: 
published: true
date: 2023-04-02T00:38:33.263Z
tags: database, master, world
editor: markdown
dateCreated: 2021-12-21T22:44:15.487Z
---

<a href="https://trinitycore.info/en/database/master/world/vehicle_accessory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_accessory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/vehicle_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SeatEntry](#seatentry) | int | unsigned | PRI | NO |  |  | VehicleSeatEntry.dbc identifier |
| [SeatOrientation](#seatorientation) | float |  |  | YES | 0 |  | Seat Orientation override value |
| [ExitParamX](#exitparamx) | float |  |  | YES | 0 |  |  |
| [ExitParamY](#exitparamy) | float |  |  | YES | 0 |  |  |
| [ExitParamZ](#exitparamz) | float |  |  | YES | 0 |  |  |
| [ExitParamO](#exitparamo) | float |  |  | YES | 0 |  |  |
| [ExitParamValue](#exitparamvalue) | tinyint(1) | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### SeatEntry
The ID from [VehicleSeatEntry.db2](https://wow.tools/dbc/?dbc=VehicleSeatEntry){target=blank}.
&nbsp;

### SeatOrientation
This field overrides the VehicleSeatEntry's Orientation.
&nbsp;

### ExitParamX
This field sets the VehicleSeatEntry's exit PositionX. This field is not parsed automatically when the .SQL file is created. It can be retrieved from the _parsed.txt file.
&nbsp;

### ExitParamY
This field sets the VehicleSeatEntry's exit PositionY. This field is not parsed automatically when the .SQL file is created. It can be retrieved from the _parsed.txt file.
&nbsp;

### ExitParamZ
This field sets the VehicleSeatEntry's exit PositionZ. This field is not parsed automatically when the .SQL file is created. It can be retrieved from the _parsed.txt file.
&nbsp;

### ExitParamO
This field sets the VehicleSeatEntry's exit Orientation. This field is not parsed automatically when the .SQL file is created. It can be retrieved from the _parsed.txt file.
&nbsp;

### ExitParamValue
This field determines how each ExitParam(X,Y,Z,O) works for the given entry. If set to:

- **0**: the provided parameters will be ignored.
- **1**: the provided parameters will be used as offset of the given creature's position when a passenger exits it.
- **2**: the provided parameters will be used as absolute positions.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/vehicle_accessory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_accessory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/vehicle_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

