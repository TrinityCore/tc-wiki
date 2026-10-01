---
title: vehicle_template_accessory
description:
published: true
date: 2024-05-16T11:19:36.066Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:37.998Z
---

This table is used to tell the server to spawn an additional NPC with this vehicle.

Records in this table can be overwritten by [vehicle_accessory](../world/vehicle_accessory).

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
&nbsp;
## Description of fields

### entry
[creature entry](../world/creature_template#entry) of npc to be used as vehicle.
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

<!--@include: @/partial/335/temp-summon-type.md-->

&nbsp;

### summontimer
Timer in ms linked to **summontype**.
&nbsp;
