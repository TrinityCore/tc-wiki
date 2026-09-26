---
title: world_state
description:
published: true
date: 2022-11-21T22:46:59.216Z
tags: database, master, world
editor: markdown
dateCreated: 2022-07-10T19:37:23.205Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | signed | PRI | NO |  |  |  |
| [DefaultValue](#defaultvalue) | int | signed |  | NO |  |  |  |
| [MapIDs](#mapids) | varchar(128) |  |  | YES | NULL |  |  |
| [AreaIDs](#areaids) | varchar(255) |  |  | YES | NULL |  |  |
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
| [Comment](#comment) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
Unique identifier of the world state
&nbsp;

### DefaultValue
Default value of the world state
&nbsp;

### MapIDs
MapIDs where the worldstate should be active (comma separated: `mapId1,mapId2`)
Using NULL as MapID means its active realmwide (= in every map).
Using -1 as MapID marks it as allowed on ALL maps but should be bound to a map.
References to: [Map.db2](https://wago.tools/db2/Map){target=_blank}
&nbsp;

### AreaIDs
AreaIDs where the worldstate should be active (comma separated: `areaId1,areaId2`)
Using NULL means its active in every area of the provided `MapIDs`.
References to: [AreaTable.db2](https://wago.tools/db2/AreaTable){target=_blank}
&nbsp;

### ScriptName
ScriptName for a `WorldStateScript`
&nbsp;

### Comment
Comment describing the world state
&nbsp;

