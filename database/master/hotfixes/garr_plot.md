---
title: garr_plot
description: 
published: true
date: 2024-09-05T22:45:58.532Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:54:18.891Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [PlotType](#plottype) | tinyint | signed |  | NO | 0 |  |  |
| [HordeConstructObjID](#hordeconstructobjid) | int | signed |  | NO | 0 |  |  |
| [AllianceConstructObjID](#allianceconstructobjid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [UiCategoryID](#uicategoryid) | tinyint | unsigned |  | NO | 0 |  |  |
| [UpgradeRequirement1](#upgraderequirement1) | int | unsigned |  | NO | 0 |  |  |
| [UpgradeRequirement2](#upgraderequirement2) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
*- no description -*
&nbsp;

### PlotType
*- no description -*
&nbsp;

### HordeConstructObjID
*- no description -*
&nbsp;

### AllianceConstructObjID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### UiCategoryID
*- no description -*
&nbsp;

### UpgradeRequirement1
*- no description -*
&nbsp;

### UpgradeRequirement2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

