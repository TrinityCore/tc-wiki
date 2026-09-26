---
title: taxi_nodes
description: 
published: true
date: 2023-10-06T19:24:25.271Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:44.893Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [PosX](#posx) | float |  |  | NO | 0 |  |  |
| [PosY](#posy) | float |  |  | NO | 0 |  |  |
| [PosZ](#posz) | float |  |  | NO | 0 |  |  |
| [MapOffsetX](#mapoffsetx) | float |  |  | NO | 0 |  |  |
| [MapOffsetY](#mapoffsety) | float |  |  | NO | 0 |  |  |
| [FlightMapOffsetX](#flightmapoffsetx) | float |  |  | NO | 0 |  |  |
| [FlightMapOffsetY](#flightmapoffsety) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ContinentID](#continentid) | smallint | unsigned |  | NO | 0 |  |  |
| [ConditionID](#conditionid) | int | signed |  | NO | 0 |  |  |
| [CharacterBitNumber](#characterbitnumber) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | int | signed |  | NO | 0 |  |  |
| [MinimapAtlasMemberID](#minimapatlasmemberid) | int | signed |  | NO | 0 |  |  |
| [Facing](#facing) | float |  |  | NO | 0 |  |  |
| [SpecialIconConditionID](#specialiconconditionid) | int | unsigned |  | NO | 0 |  |  |
| [VisibilityConditionID](#visibilityconditionid) | int | unsigned |  | NO | 0 |  |  |
| [MountCreatureID1](#mountcreatureid1) | int | signed |  | NO | 0 |  |  |
| [MountCreatureID2](#mountcreatureid2) | int | signed |  | NO | 0 |  |  |
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

### MapOffsetX
*- no description -*
&nbsp;

### MapOffsetY
*- no description -*
&nbsp;

### FlightMapOffsetX
*- no description -*
&nbsp;

### FlightMapOffsetY
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### ContinentID
*- no description -*
&nbsp;

### ConditionID
*- no description -*
&nbsp;

### CharacterBitNumber
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### MinimapAtlasMemberID
*- no description -*
&nbsp;

### Facing
*- no description -*
&nbsp;

### SpecialIconConditionID
*- no description -*
&nbsp;

### VisibilityConditionID
*- no description -*
&nbsp;

### MountCreatureID1
*- no description -*
&nbsp;

### MountCreatureID2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

