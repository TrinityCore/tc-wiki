---
title: TransportRotation.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# TransportRotation.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/TransportRotation)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [GameObjectsID](#gameobjectsid) | uint32 | [gameobject entry](/database/335/world/gameobject_template#entry) |
| 2 | [TimeIndex](#timeindex) | uint32 |  |
| 3 | [Rot_X](#x) | float |  |
| 4 | [Rot_Y](#y) | float |  |
| 5 | [Rot_Z](#z) | float |  |
| 6 | [Rot_W](#w) | float |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### GameObjectsID
<code>Col: 1 (uint32)</code>

GO must be of type GAMEOBJECT_TYPE_TRANSPORT (11)
&nbsp;

### TimeIndex
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Rot
<code>Col: 3 &ndash; 6 (float)</code>

Rotation axis
&nbsp;

