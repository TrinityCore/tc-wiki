---
title: area_trigger
description: 
published: true
date: 2024-09-05T22:45:53.775Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:48:51.972Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [PosX](#posx) | float |  |  | NO | 0 |  |  |
| [PosY](#posy) | float |  |  | NO | 0 |  |  |
| [PosZ](#posz) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ContinentID](#continentid) | smallint | signed |  | NO | 0 |  |  |
| [PhaseUseFlags](#phaseuseflags) | int | signed |  | NO | 0 |  |  |
| [PhaseID](#phaseid) | smallint | signed |  | NO | 0 |  |  |
| [PhaseGroupID](#phasegroupid) | smallint | signed |  | NO | 0 |  |  |
| [Radius](#radius) | float |  |  | NO | 0 |  |  |
| [BoxLength](#boxlength) | float |  |  | NO | 0 |  |  |
| [BoxWidth](#boxwidth) | float |  |  | NO | 0 |  |  |
| [BoxHeight](#boxheight) | float |  |  | NO | 0 |  |  |
| [BoxYaw](#boxyaw) | float |  |  | NO | 0 |  |  |
| [ShapeType](#shapetype) | tinyint | signed |  | NO | 0 |  |  |
| [ShapeID](#shapeid) | smallint | signed |  | NO | 0 |  |  |
| [AreaTriggerActionSetID](#areatriggeractionsetid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### PosX
*- no description -*
&nbsp;

### PosY
*- no description -*
&nbsp;

### PosZ
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### ContinentID
*- no description -*
&nbsp;

### PhaseUseFlags
*- no description -*
&nbsp;

### PhaseID
*- no description -*
&nbsp;

### PhaseGroupID
*- no description -*
&nbsp;

### Radius
*- no description -*
&nbsp;

### BoxLength
*- no description -*
&nbsp;

### BoxWidth
*- no description -*
&nbsp;

### BoxHeight
*- no description -*
&nbsp;

### BoxYaw
*- no description -*
&nbsp;

### ShapeType
*- no description -*
&nbsp;

### ShapeID
*- no description -*
&nbsp;

### AreaTriggerActionSetID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

