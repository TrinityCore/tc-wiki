---
title: character_homebind
description:
published: true
date: 2023-07-27T18:25:25.065Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:42.236Z
---

> Contains information on the location where characters get teleported when they use their Hearthstone.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [mapId](#mapid) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [zoneId](#zoneid) | smallint | unsigned |  | NO | 0 |  | Zone Identifier |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### mapId
[Map ID](/files/DBC/335/map#id) of the map where homebind is set.
&nbsp;

### zoneId
[AreaTable ID](/files/DBC/335/areatable#id) of the zone where homebind is set.
&nbsp;

### posX
The X position where the character gets teleported to.
&nbsp;

### posY
The Y position where the character gets teleported to.
&nbsp;

### posZ
The Z position where the character gets teleported to.
&nbsp;

