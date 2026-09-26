---
title: ItemVisuals.dbc
description:
published: true
date: 2024-07-12T15:16:34.060Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:04:51.922Z
---

# ItemVisuals.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ItemVisuals)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [VisualEffectID_0](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
| 2 | [VisualEffectID_1](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
| 3 | [VisualEffectID_2](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
| 4 | [VisualEffectID_3](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
| 5 | [VisualEffectID_4](#visualeffectid) | int32 | [ItemVisualEffects.dbc/0](/files/DBC/335/itemvisualeffects#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

Table index
&nbsp;

### VisualEffectID
:x: <code>Col: 1 &ndash; 5 (int32)</code>

Visual effect for each attachment point (0 &ndash; 4) on the item.
&nbsp;

