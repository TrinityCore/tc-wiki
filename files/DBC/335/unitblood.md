---
title: UnitBlood.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# UnitBlood.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/UnitBlood)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [CombatBloodSpurt_0](#combatbloodspurt) | uint32 |  |
| 2 | [CombatBloodSpurt_1](#combatbloodspurt) | uint32 |  |
| 3 | [CombatBloodSpurt_2](#combatbloodspurt) | uint32 |  |
| 4 | [CombatBloodSpurt_3](#combatbloodspurt) | uint32 |  |
| 5 | [GroundBlood_0](#groundblood) | uint32 |  |
| 6 | [GroundBlood_1](#groundblood) | uint32 |  |
| 7 | [GroundBlood_2](#groundblood) | uint32 |  |
| 8 | [GroundBlood_3](#groundblood) | uint32 |  |
| 9 | [GroundBlood_4](#groundblood) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### CombatBloodSpurt
:x: <code>Col: 1 &ndash; 4 (uint32)</code>

| Index | 0 | 1 |
| :--: | :--: | :--: |
| & 0x1 | Small | Large |
| & 0x2 | Front | Back |
{.dense}

&nbsp;

### GroundBlood
:x: <code>Col: 5 &ndash; 9 (uint32)</code>

*- no description -*
&nbsp;

