---
title: gameobjects
description: 
published: true
date: 2024-09-05T22:45:58.138Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:47.082Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [PosX](#posx) | float |  |  | NO | 0 |  |  |
| [PosY](#posy) | float |  |  | NO | 0 |  |  |
| [PosZ](#posz) | float |  |  | NO | 0 |  |  |
| [Rot1](#rot1) | float |  |  | NO | 0 |  |  |
| [Rot2](#rot2) | float |  |  | NO | 0 |  |  |
| [Rot3](#rot3) | float |  |  | NO | 0 |  |  |
| [Rot4](#rot4) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [OwnerID](#ownerid) | int | signed |  | NO | 0 |  |  |
| [DisplayID](#displayid) | int | signed |  | NO | 0 |  |  |
| [Scale](#scale) | float |  |  | NO | 0 |  |  |
| [TypeID](#typeid) | int | signed |  | NO | 0 |  |  |
| [PhaseUseFlags](#phaseuseflags) | int | signed |  | NO | 0 |  |  |
| [PhaseID](#phaseid) | int | signed |  | NO | 0 |  |  |
| [PhaseGroupID](#phasegroupid) | int | signed |  | NO | 0 |  |  |
| [Unknown1100](#unknown1100) | smallint | unsigned |  | NO | 0 |  |  |
| [PropValue1](#propvalue1) | int | signed |  | NO | 0 |  |  |
| [PropValue2](#propvalue2) | int | signed |  | NO | 0 |  |  |
| [PropValue3](#propvalue3) | int | signed |  | NO | 0 |  |  |
| [PropValue4](#propvalue4) | int | signed |  | NO | 0 |  |  |
| [PropValue5](#propvalue5) | int | signed |  | NO | 0 |  |  |
| [PropValue6](#propvalue6) | int | signed |  | NO | 0 |  |  |
| [PropValue7](#propvalue7) | int | signed |  | NO | 0 |  |  |
| [PropValue8](#propvalue8) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
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

### Rot1
*- no description -*
&nbsp;

### Rot2
*- no description -*
&nbsp;

### Rot3
*- no description -*
&nbsp;

### Rot4
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### OwnerID
*- no description -*
&nbsp;

### DisplayID
*- no description -*
&nbsp;

### Scale
*- no description -*
&nbsp;

### TypeID
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

### Unknown1100
*- no description -*
&nbsp;

### PropValue1
*- no description -*
&nbsp;

### PropValue2
*- no description -*
&nbsp;

### PropValue3
*- no description -*
&nbsp;

### PropValue4
*- no description -*
&nbsp;

### PropValue5
*- no description -*
&nbsp;

### PropValue6
*- no description -*
&nbsp;

### PropValue7
*- no description -*
&nbsp;

### PropValue8
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

