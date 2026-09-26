---
title: CharHairGeosets.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# CharHairGeosets.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CharHairGeosets)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Race](#race) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 2 | [Gender](#gender) | uint32 |  |
| 3 | [HairType](#hairtype) | uint32 |  |
| 4 | [Geoset](#geoset) | uint32 |  |
| 5 | [Bald](#bald) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Race
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Gender
:x: <code>Col: 2 (uint32)</code>

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name |
|----|------|
| 0 | GENDER_MALE |
| 1 | GENDER_FEMALE |
| 2 | GENDER_NONE |
{.dense}

&nbsp;

### HairType
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### Geoset
:x: <code>Col: 4 (uint32)</code>

Defines the connection between HairType and Geoset number in MDX model
&nbsp;

### Bald
:x: <code>Col: 5 (bool)</code>

*- no description -*
&nbsp;

