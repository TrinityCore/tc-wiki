---
title: curve_point
description: 
published: true
date: 2024-02-11T20:02:21.986Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:51.404Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [PosX](#posx) | float |  |  | NO | 0 |  |  |
| [PosY](#posy) | float |  |  | NO | 0 |  |  |
| [PreSLSquishPosX](#preslsquishposx) | float |  |  | NO | 0 |  |  |
| [PreSLSquishPosY](#preslsquishposy) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [CurveID](#curveid) | int | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### PosX
*- no description -*
&nbsp;

### PosY
*- no description -*
&nbsp;

### PreSLSquishPosX
*- no description -*
&nbsp;

### PreSLSquishPosY
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### CurveID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

