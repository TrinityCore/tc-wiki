---
title: CharacterFacialHairStyles.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# CharacterFacialHairStyles.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CharacterFacialHairStyles)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [RaceID](#raceid) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 1 | [SexID](#sexid) | uint32 |  |
| 2 | [VariationID](#variationid) | uint32 |  |
| 3 | [Geoset_0](#geoset) | uint32 |  |
| 4 | [Geoset_1](#geoset) | uint32 |  |
| 5 | [Geoset_2](#geoset) | uint32 |  |
| 6 | [Geoset_3](#geoset) | uint32 |  |
| 7 | [Geoset_4](#geoset) | uint32 |  |
&nbsp;
## Description of fields

### RaceID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SexID
<code>Col: 1 (uint32)</code>

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name |
|----|------|
| 0 | GENDER_MALE |
| 1 | GENDER_FEMALE |
| 2 | GENDER_NONE |
{.dense}

&nbsp;

### VariationID
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Geoset
:x: <code>Col: 3 &ndash; 7 (uint32)</code>

*- no description -*
&nbsp;

