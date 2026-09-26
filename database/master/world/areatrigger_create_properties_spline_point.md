---
title: areatrigger_create_properties_spline_point
description: 
published: true
date: 2024-02-17T07:37:20.706Z
tags: database, master, world
editor: markdown
dateCreated: 2021-11-14T20:12:43.355Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [AreaTriggerCreatePropertiesId](#areatriggercreatepropertiesid) | int | unsigned | PRI | NO |  |  |  |
| [IsCustom](#iscustom) | tinyint | unsigned | PRI | NO |  |  |  |
| [Idx](#idx) | int | unsigned | PRI | NO |  |  |  |
| [X](#x) | float |  |  | NO | 0 |  |  |
| [Y](#y) | float |  |  | NO | 0 |  |  |
| [Z](#z) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### AreaTriggerCreatePropertiesId
The ID of the [areatrigger_create_properties](/database/master/world/areatrigger_create_properties).
&nbsp;

### IsCustom
Describes whether `AreaTriggerCreatePropertiesId` of this row is a custom id or not.
&nbsp;

### Idx
*- no description -*
&nbsp;

### X
*- no description -*
&nbsp;

### Y
*- no description -*
&nbsp;

### Z
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

