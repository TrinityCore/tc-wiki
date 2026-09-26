---
title: transport_animation
description: 
published: true
date: 2022-11-21T21:21:31.267Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:03:24.311Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [PosX](#posx) | float |  |  | NO | 0 |  |  |
| [PosY](#posy) | float |  |  | NO | 0 |  |  |
| [PosZ](#posz) | float |  |  | NO | 0 |  |  |
| [SequenceID](#sequenceid) | tinyint | unsigned |  | NO | 0 |  |  |
| [TimeIndex](#timeindex) | int | unsigned |  | NO | 0 |  |  |
| [TransportID](#transportid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### PosX
*- no description -*
&nbsp;

### PosY
*- no description -*
&nbsp;

### PosZ
*- no description -*
&nbsp;

### SequenceID
*- no description -*
&nbsp;

### TimeIndex
*- no description -*
&nbsp;

### TransportID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


