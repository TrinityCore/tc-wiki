---
title: graveyard_zone
description:
published: true
date: 2024-05-16T11:19:32.977Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:47.482Z
---

Contains information about zones connected to world's graveyards.
This table is used to set what factions a given graveyard will accept, and also to specify the nearest graveyard to a given zone.


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [GhostZone](#ghostzone) | int | unsigned | PRI | NO | 0 |  |  |
| [Faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [Comment](#comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
references [WorldSafeLoc ID](/files/DBC/335/worldsafelocs#id)
&nbsp;

### GhostZone
[AreaTable ID](/files/DBC/335/areatable#id) of ghost position before teleportation to graveyard.
&nbsp;

### Faction
Graveyard's team as [Faction ID](/files/DBC/335/faction#id)
* 0 - Any team accepted
* 469 - Alliance team only
* 67 - Horde team only
&nbsp;

### Comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

