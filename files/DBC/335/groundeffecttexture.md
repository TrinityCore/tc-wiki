---
title: GroundEffectTexture.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# GroundEffectTexture.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GroundEffectTexture)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [GroundDoodadID_0](#grounddoodadid) | uint32 | [GroundEffectDoodad.dbc/0](/files/DBC/335/groundeffectdoodad#id-alt) |
| 2 | [GroundDoodadID_1](#grounddoodadid) | uint32 | [GroundEffectDoodad.dbc/0](/files/DBC/335/groundeffectdoodad#id-alt) |
| 3 | [GroundDoodadID_2](#grounddoodadid) | uint32 | [GroundEffectDoodad.dbc/0](/files/DBC/335/groundeffectdoodad#id-alt) |
| 4 | [GroundDoodadID_3](#grounddoodadid) | uint32 | [GroundEffectDoodad.dbc/0](/files/DBC/335/groundeffectdoodad#id-alt) |
| 5 | [DoodadWeight_0](#doodadweight) | uint32 |  |
| 6 | [DoodadWeight_1](#doodadweight) | uint32 |  |
| 7 | [DoodadWeight_2](#doodadweight) | uint32 |  |
| 8 | [DoodadWeight_3](#doodadweight) | uint32 |  |
| 9 | [Density](#density) | uint32 |  |
| 10 | [TerrainID](#terrainid) | uint32 | [TerrainType.dbc/0](/files/DBC/335/terraintype#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### GroundDoodadID
:x: <code>Col: 1 &ndash; 4 (uint32)</code>

*- no description -*
&nbsp;

### DoodadWeight
:x: <code>Col: 5 &ndash; 8 (uint32)</code>

*- no description -*
&nbsp;

### Density
:x: <code>Col: 9 (uint32)</code>

amount and coverage?
&nbsp;

### TerrainID
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

