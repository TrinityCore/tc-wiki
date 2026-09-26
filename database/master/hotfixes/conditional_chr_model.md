---
title: conditional_chr_model
description: 
published: true
date: 2024-02-11T20:02:21.616Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ChrModelID](#chrmodelid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationReqID](#chrcustomizationreqid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationCategoryID](#chrcustomizationcategoryid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ChrModelID
*- no description -*
&nbsp;

### ChrCustomizationReqID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ChrCustomizationCategoryID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

