---
title: graveyard_zone
description: 
published: true
date: 2023-06-01T15:25:00.501Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:22.271Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [GhostZone](#ghostzone) | int | unsigned | PRI | NO | 0 |  |  |
| [Comment](#comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
WorldSafeLocs ID, see [world_safe_locs](/database/master/world/world_safe_locs) table
&nbsp;

### GhostZone
ZoneId before teleportation to graveyard (before pressing release button), see AreaTable.db2 or use .gps command ingame while within the zone.
&nbsp;

### Comment
*- no description -*
&nbsp;


