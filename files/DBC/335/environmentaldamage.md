---
title: EnvironmentalDamage.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# EnvironmentalDamage.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/EnvironmentalDamage)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 0 | [EnumID](#enumid) | uint32 |  |
| 0 | [VisualKitID](#visualkitid) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### EnumID
:x: <code>Col: 1 (uint32)</code>

[`enum EnviromentalDamage`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Player/Player.h#L676-L685)
| ID | Name |
|----|------|
| 0 | DAMAGE_EXHAUSTED |
| 1 | DAMAGE_DROWNING |
| 2 | DAMAGE_FALL |
| 3 | DAMAGE_LAVA |
| 4 | DAMAGE_SLIME |
| 5 | DAMAGE_FIRE |
{.dense}

&nbsp;

### VisualKitID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

