---
title: vehicle_seat_addon
description:
published: true
date: 2023-07-24T18:09:37.529Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:32.419Z
---

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

