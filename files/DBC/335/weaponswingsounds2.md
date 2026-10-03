---
title: WeaponSwingSounds2.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# WeaponSwingSounds2.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/WeaponSwingSounds2)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SwingType](#weight) | uint32 | [ItemSubClass.dbc/9](/files/DBC/335/itemsubclass#weaponswingsize) |
| 2 | [Critical](#critical) | uint32 |  |
| 3 | [SoundID](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |

&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SwingType
:x: <code>Col: 0 (uint32)</code>

<!--@include: @/partial/335/weapon-swing-size.md-->

&nbsp;

### Critical
:x: <code>Col: 0 (bool)</code>

*- no description -*
&nbsp;

### SoundID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;
