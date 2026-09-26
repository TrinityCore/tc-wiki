---
title: item_spec
description: 
published: true
date: 2022-11-21T21:16:51.652Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:57:09.009Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [MinLevel](#minlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [ItemType](#itemtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [PrimaryStat](#primarystat) | tinyint | unsigned |  | NO | 0 |  |  |
| [SecondaryStat](#secondarystat) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpecializationID](#specializationid) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### MinLevel
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### ItemType
*- no description -*
&nbsp;

### PrimaryStat
*- no description -*
&nbsp;

### SecondaryStat
*- no description -*
&nbsp;

### SpecializationID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


