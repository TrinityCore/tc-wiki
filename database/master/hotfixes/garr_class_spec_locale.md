---
title: garr_class_spec_locale
description: 
published: true
date: 2022-11-21T21:14:35.258Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:54:08.198Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [ClassSpec_lang](#classspec_lang) | text |  |  | YES | NULL |  |  |
| [ClassSpecMale_lang](#classspecmale_lang) | text |  |  | YES | NULL |  |  |
| [ClassSpecFemale_lang](#classspecfemale_lang) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### ClassSpec_lang
*- no description -*
&nbsp;

### ClassSpecMale_lang
*- no description -*
&nbsp;

### ClassSpecFemale_lang
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

