---
title: light
description: 
published: true
date: 2022-11-21T21:17:10.325Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:57:35.550Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [GameCoordsX](#gamecoordsx) | float |  |  | NO | 0 |  |  |
| [GameCoordsY](#gamecoordsy) | float |  |  | NO | 0 |  |  |
| [GameCoordsZ](#gamecoordsz) | float |  |  | NO | 0 |  |  |
| [GameFalloffStart](#gamefalloffstart) | float |  |  | NO | 0 |  |  |
| [GameFalloffEnd](#gamefalloffend) | float |  |  | NO | 0 |  |  |
| [ContinentID](#continentid) | smallint | signed |  | NO | 0 |  |  |
| [LightParamsID1](#lightparamsid1) | smallint | unsigned |  | NO | 0 |  |  |
| [LightParamsID2](#lightparamsid2) | smallint | unsigned |  | NO | 0 |  |  |
| [LightParamsID3](#lightparamsid3) | smallint | unsigned |  | NO | 0 |  |  |
| [LightParamsID4](#lightparamsid4) | smallint | unsigned |  | NO | 0 |  |  |
| [LightParamsID5](#lightparamsid5) | smallint | unsigned |  | NO | 0 |  |  |
| [LightParamsID6](#lightparamsid6) | smallint | unsigned |  | NO | 0 |  |  |
| [LightParamsID7](#lightparamsid7) | smallint | unsigned |  | NO | 0 |  |  |
| [LightParamsID8](#lightparamsid8) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### GameCoordsX
*- no description -*
&nbsp;

### GameCoordsY
*- no description -*
&nbsp;

### GameCoordsZ
*- no description -*
&nbsp;

### GameFalloffStart
*- no description -*
&nbsp;

### GameFalloffEnd
*- no description -*
&nbsp;

### ContinentID
*- no description -*
&nbsp;

### LightParamsID1
*- no description -*
&nbsp;

### LightParamsID2
*- no description -*
&nbsp;

### LightParamsID3
*- no description -*
&nbsp;

### LightParamsID4
*- no description -*
&nbsp;

### LightParamsID5
*- no description -*
&nbsp;

### LightParamsID6
*- no description -*
&nbsp;

### LightParamsID7
*- no description -*
&nbsp;

### LightParamsID8
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


