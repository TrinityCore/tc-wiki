---
title: unit_power_bar_locale
description: 
published: true
date: 2022-11-21T21:21:47.281Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:03:45.884Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Name_lang](#name_lang) | text |  |  | YES | NULL |  |  |
| [Cost_lang](#cost_lang) | text |  |  | YES | NULL |  |  |
| [OutOfError_lang](#outoferror_lang) | text |  |  | YES | NULL |  |  |
| [ToolTip_lang](#tooltip_lang) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### Name_lang
*- no description -*
&nbsp;

### Cost_lang
*- no description -*
&nbsp;

### OutOfError_lang
*- no description -*
&nbsp;

### ToolTip_lang
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

