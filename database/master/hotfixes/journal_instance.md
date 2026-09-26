---
title: journal_instance
description: 
published: true
date: 2022-12-19T18:38:31.584Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T19:56:32.502Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [MapID](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [BackgroundFileDataID](#backgroundfiledataid) | int | signed |  | NO | 0 |  |  |
| [ButtonFileDataID](#buttonfiledataid) | int | signed |  | NO | 0 |  |  |
| [ButtonSmallFileDataID](#buttonsmallfiledataid) | int | signed |  | NO | 0 |  |  |
| [LoreFileDataID](#lorefiledataid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [AreaID](#areaid) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### BackgroundFileDataID
*- no description -*
&nbsp;

### ButtonFileDataID
*- no description -*
&nbsp;

### ButtonSmallFileDataID
*- no description -*
&nbsp;

### LoreFileDataID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### AreaID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

