---
title: creature_summon_groups
description: 
published: true
date: 2025-05-30T14:43:43.745Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:47.608Z
---

This table holds data about temporary summoned creatures. It is possible to group summons and create boss waves of adds etc.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [summonerId](#summonerid) | int | unsigned |  | NO | 0 |  |  |
| [summonerType](#summonertype) | tinyint | unsigned |  | NO | 0 |  |  |
| [groupId](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [entry](#entry) | int | unsigned |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [summonType](#summontype) | tinyint | unsigned |  | NO | 0 |  |  |
| [summonTime](#summontime) | int | unsigned |  | NO | 0 |  |  |
| [Comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### summonerId
Summoner's id depending on **summonerType**
&nbsp;

### summonerType
| Value | Type |
|-------|------|
| 0 | SUMMONER_TYPE_CREATURE |
| 1 | SUMMONER_TYPE_GAMEOBJECT |
| 2 | SUMMONER_TYPE_MAP  |

&nbsp;

### groupId
Group identificator. All creatures with the same **groupId** will be summoned at once.
&nbsp;

### entry
Entry of summoned creature from [creature_template.entry](../world/creature_template#entry)
&nbsp;

### position_x
X coordinate of position, where the creature will be spawned
&nbsp;

### position_y
Y coordinate of position, where the creature will be spawned
&nbsp;

### position_z
Z coordinate of position, where the creature will be spawned
&nbsp;

### orientation
Orientation the summoned creature will get when spawned
&nbsp;

### summonType

<!--@include: @/partial/335/temp-summon-type.md-->

&nbsp;

### summonTime
Timer (in milliseconds) linked to **summonType**
&nbsp;

### Comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;
