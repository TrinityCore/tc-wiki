---
title: vehicle_seat_addon
description:
published: true
date: 2023-07-24T18:09:37.529Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:32.419Z
---

<a href="https://trinitycore.info/en/database/335/world/vehicle_accessory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_accessory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/vehicle_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table allows to specify special vehicle seat behavior by extending/overriding [VehicleSeat](/files/DBC/335/vehicleseat)

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [SeatEntry](#seatentry) | int | unsigned | PRI | NO |  |  | [VehicleSeat](/files/DBC/335/vehicleseat) identifier |
| [SeatOrientation](#seatorientation) | float |  |  | YES | 0 |  | Seat Orientation override value |
| [ExitParamX](#exitparamx) | float |  |  | YES | 0 |  |  |
| [ExitParamY](#exitparamy) | float |  |  | YES | 0 |  |  |
| [ExitParamZ](#exitparamz) | float |  |  | YES | 0 |  |  |
| [ExitParamO](#exitparamo) | float |  |  | YES | 0 |  |  |
| [ExitParamValue](#exitparamvalue) | tinyint(1) | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### SeatEntry
references [VehicleSeat ID](/files/DBC/335/vehicleseat#id)
&nbsp;

### SeatOrientation
The orientation of the seat on the vehicle.
&nbsp;

### ExitParamX
The exit position X coordinate.
&nbsp;

### ExitParamY
The exit position Y coordinate.
&nbsp;

### ExitParamZ
The exit position Z coordinate.
&nbsp;

### ExitParamO
The exit orientation.
&nbsp;

### ExitParamValue
| ID | Name | Commment |
|----|------|----------|
| 0 | VehicleExitParamNone | provided parameters will be ignored |
| 1 | VehicleExitParamOffset | provided parameters will be used as offset values |
| 2 | VehicleExitParamDest | provided parameters will be used as absolute destination |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/world/vehicle_accessory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vehicle_accessory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/vehicle_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
