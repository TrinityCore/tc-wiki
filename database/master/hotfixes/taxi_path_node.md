---
title: taxi_path_node
description: 
published: true
date: 2023-10-06T19:24:25.299Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:52.994Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [LocX](#locx) | float |  |  | NO | 0 |  |  |
| [LocY](#locy) | float |  |  | NO | 0 |  |  |
| [LocZ](#locz) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [PathID](#pathid) | smallint | unsigned |  | NO | 0 |  |  |
| [NodeIndex](#nodeindex) | int | signed |  | NO | 0 |  |  |
| [ContinentID](#continentid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [Delay](#delay) | int | unsigned |  | NO | 0 |  |  |
| [ArrivalEventID](#arrivaleventid) | int | signed |  | NO | 0 |  |  |
| [DepartureEventID](#departureeventid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### LocX
*- no description -*
&nbsp;

### LocY
*- no description -*
&nbsp;

### LocZ
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### PathID
*- no description -*
&nbsp;

### NodeIndex
*- no description -*
&nbsp;

### ContinentID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Delay
*- no description -*
&nbsp;

### ArrivalEventID
*- no description -*
&nbsp;

### DepartureEventID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

