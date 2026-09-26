---
title: transports
description:
published: true
date: 2024-05-16T11:19:35.986Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:18.608Z
---

This table contains all GAMEOBJECT_TYPE_MO_TRANSPORT (15) (Boats and Zeppelins).

All other transport types have their frame time read from [TransportAnimation](/files/DBC/335/transportanimation).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  | auto_increment |  |
| [entry](#entry) | int | unsigned | UNI | NO | 0 |  |  |
| [name](#name-alt) | mediumtext |  |  | YES | NULL |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### guid
Unique identifier for transport. When adding a new one, simply use the `max(guid) + 1`.
&nbsp;

### entry
This is the [gameobject entry](../world/gameobject_template#entry) to be used for this transport. It must be of type GAMEOBJECT_TYPE_MO_TRANSPORT (15).
&nbsp;

### name {#name-alt}
This is an arbitrary name that is only used to describe this transport entry.
&nbsp;

### ScriptName
The ScriptName for when scripting it in the core.
&nbsp;

## Appendix
Static Passengers (NPCs):

Transports will load static passengers when:
* transport moves from inactive to active grid
* the grid that transport is currently in becomes active
&nbsp;

It will unload static passengers when:
* transport moves from active to inactive grid
* the grid that transport is currently in unloads
&nbsp;

The loading process will get the map from [gameobject_template.data6](../world/gameobject_template#type) (mapID), and then creates all creatures and gameobjects that are in the same map.

Creatures and gameobjects spawn points will be used as relative to the transport.

> Note: Transports have their own map.
{.is-info}

