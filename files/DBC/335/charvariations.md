---
title: CharVariations.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# CharVariations.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CharVariations)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [RaceID](#raceid) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 1 | [SexID](#sexid) | uint32 |  |
| 2 | [TextureHoldLayer_0](#textureholdlayer) | uint32 |  |
| 3 | [TextureHoldLayer_1](#textureholdlayer) | uint32 |  |
| 4 | [TextureHoldLayer_2](#textureholdlayer) | uint32 |  |
| 5 | [TextureHoldLayer_3](#textureholdlayer) | uint32 |  |
&nbsp;
## Description of fields

### RaceID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SexID
:x: <code>Col: 1 (uint32)</code>

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name |
|----|------|
| 0 | GENDER_MALE |
| 1 | GENDER_FEMALE |
| 2 | GENDER_NONE |
{.dense}

&nbsp;

### TextureHoldLayer
:x: <code>Col: 2 &ndash; 5 (uint32)</code>

*- no description -*
&nbsp;

