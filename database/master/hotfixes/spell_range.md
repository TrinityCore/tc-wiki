---
title: spell_range
description: 
published: true
date: 2022-11-21T21:20:31.255Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:04.520Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DisplayName](#displayname) | text |  |  | YES | NULL |  |  |
| [DisplayNameShort](#displaynameshort) | text |  |  | YES | NULL |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [RangeMin1](#rangemin1) | float |  |  | NO | 0 |  |  |
| [RangeMin2](#rangemin2) | float |  |  | NO | 0 |  |  |
| [RangeMax1](#rangemax1) | float |  |  | NO | 0 |  |  |
| [RangeMax2](#rangemax2) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### DisplayName
*- no description -*
&nbsp;

### DisplayNameShort
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### RangeMin1
*- no description -*
&nbsp;

### RangeMin2
*- no description -*
&nbsp;

### RangeMax1
*- no description -*
&nbsp;

### RangeMax2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


