---
title: World Position
description: 
published: true
date: 2023-10-24T20:33:50.450Z
tags: 
editor: markdown
dateCreated: 2023-10-04T08:09:53.978Z
---

# World Position
&nbsp;

## Position
<div style="float:right;">

![World position axes](/worldposition.svg)

</div>

Each map (instance, transport, continent) has its own cartesian coordinate system.
To place a new entity it is easiest to position yourself where it should be spawned and use the `.gps` command.

This position information is expressed through the following fields per database table. Some fields may be omitted. (e.g. **z** and **o** are omitted for Quest PoI as they are shapes on a 2D map)
&nbsp;

| Field | Description | Comment |
| :-: | - | - |
| **x** | <code style="float:right; background-color:darkblue">&nbsp;</code> Vertical Axis | `S <= 0 <= N` |
| **y** | <code style="float:right; background-color:darkred">&nbsp;</code> Horizontal Axis | `E <= 0 <= W` |
| **z** | Height | `below x/y plane <= 0 <= above x/y plane` |
| **o** | <code style="float:right; background-color:green">&nbsp;</code> Orientation | `0 <= o <= 2π` |
| **m** | [Map ID](/files/DBC/335/map#id) the coordinates refer to | may be implied / optional |
{.dense}

&nbsp;

#### Orientation
Orientation is stored as radian, increasing counterclockwise around the **z**-axis.
| Position | Radian | Decimal |
|--|--|--|
| North | `0 / 2π` | 6.28319 |
| West | `0.5π` | 1.57080 |
| South | `π` | 3.14159 |
| East | `1.5π` | 4.71239 |
{.dense}

&nbsp;

## Zone Coordinates
World Position should not be confused with zone coordinates used by client addons or [Aowow](https://aowow.trinitycore.info/?npc=1226) (0 &ndash; 100). Zone coordinates are calculated from WorldMapArea.dbc data and largely irrelevant from a server point of view.
&nbsp;

**[WorldMapArea.dbc](/files/DBC/335/worldmaparea) - describes the WorldPos boundaries of each area map viewed in-game.**
```
WorldMapArea.dbc
+-----+-------+--------+------------------+---------+----------+----------+-----------+
| ID  | MapID | AreaID | AreaName         | LocLeft | LocRight | LocTop   | LocBottom |
+-----+-------+--------+------------------+---------+----------+----------+-----------+
|  27 |     0 |      1 | DunMorogh        | 1802.08 | -3122.92 | -3877.08 |  -7160.42 |
+-----+-------+--------+------------------+---------+----------+----------+-----------+

world.creature
+------+------+-------------+-----+------------+------------+
| guid | id   | name        | map | position_x | position_y |
+------+------+-------------+-----+------------+------------+
|  206 | 1226 | Maxan Anvol |   0 |   -5590.56 |   -529.657 |
+------+------+-------------+-----+------------+------------+
```

```
areaX = ((position_y - left) / (right - left)) * 100
areaY = ((position_x - top)  / (bottom - top)) * 100

areaX = 47.3 = ((-5590.56 - 1802.08) / (-3122.92 - 1802.08)) * 100
areaY = 52.2 = ((-529.657 + 3877.08) / (-7160.42 + 3877.08)) * 100
```
