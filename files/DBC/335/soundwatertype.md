---
title: SoundWaterType.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# SoundWaterType.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SoundWaterType)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SoundType](#soundtype) | uint32 |  |
| 2 | [SoundSubtype](#soundsubtype) | uint32 |  |
| 3 | [SoundID](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SoundType
:x: <code>Col: 1 (uint32)</code>

[`enum LiquidType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/tools/map_extractor/adt.h#L27-L33)
| Index | Name |
|-------|------|
| 0 | LIQUID_TYPE_WATER |
| 1 | LIQUID_TYPE_OCEAN |
| 2 | LIQUID_TYPE_MAGMA |
| 3 | LIQUID_TYPE_SLIME |
{.dense}

&nbsp;

### SoundSubtype
:x: <code>Col: 2 (uint32)</code>

* 0x0: still
* 0x4: slow
* 0x8: fast
&nbsp;

### SoundID
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

