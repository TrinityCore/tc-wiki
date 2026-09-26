---
title: corpse
description: 
published: true
date: 2022-11-21T21:01:13.320Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:37:50.151Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO | 0 |  | Character Global Unique Identifier |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [mapId](#mapid) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [displayId](#displayid) | int | unsigned |  | NO | 0 |  |  |
| [itemCache](#itemcache) | text |  |  | NO |  |  |  |
| [race](#race) | tinyint | unsigned |  | NO | 0 |  |  |
| [class](#class) | tinyint | unsigned |  | NO | 0 |  |  |
| [gender](#gender) | tinyint | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [dynFlags](#dynflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [time](#time) | int | unsigned | MUL | NO | 0 |  |  |
| [corpseType](#corpsetype) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [instanceId](#instanceid) | int | unsigned | MUL | NO | 0 |  | Instance Identifier |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### posX
*- no description -*
&nbsp;

### posY
*- no description -*
&nbsp;

### posZ
*- no description -*
&nbsp;

### orientation
*- no description -*
&nbsp;

### mapId
*- no description -*
&nbsp;

### displayId
*- no description -*
&nbsp;

### itemCache
*- no description -*
&nbsp;

### race
*- no description -*
&nbsp;

### class
*- no description -*
&nbsp;

### gender
*- no description -*
&nbsp;

### flags
*- no description -*
&nbsp;

### dynFlags
*- no description -*
&nbsp;

### time
*- no description -*
&nbsp;

### corpseType
*- no description -*
&nbsp;

### instanceId
*- no description -*
&nbsp;


