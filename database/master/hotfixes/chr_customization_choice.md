---
title: chr_customization_choice
description: 
published: true
date: 2023-05-11T09:04:21.972Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:18.184Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ChrCustomizationOptionID](#chrcustomizationoptionid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationReqID](#chrcustomizationreqid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationVisReqID](#chrcustomizationvisreqid) | int | signed |  | NO | 0 |  |  |
| [SortOrder](#sortorder) | smallint | unsigned |  | NO | 0 |  |  |
| [UiOrderIndex](#uiorderindex) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [AddedInPatch](#addedinpatch) | int | signed |  | NO | 0 |  |  |
| [SoundKitID](#soundkitid) | int | signed |  | NO | 0 |  |  |
| [SwatchColor1](#swatchcolor1) | int | signed |  | NO | 0 |  |  |
| [SwatchColor2](#swatchcolor2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### ChrCustomizationOptionID
*- no description -*
&nbsp;

### ChrCustomizationReqID
*- no description -*
&nbsp;

### ChrCustomizationVisReqID
*- no description -*
&nbsp;

### SortOrder
*- no description -*
&nbsp;

### UiOrderIndex
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### AddedInPatch
*- no description -*
&nbsp;

### SoundKitID
*- no description -*
&nbsp;

### SwatchColor1
*- no description -*
&nbsp;

### SwatchColor2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

