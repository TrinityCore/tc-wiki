---
title: item_sparse_locale
description: 
published: true
date: 2022-11-21T21:16:50.031Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:57:06.288Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Description_lang](#description_lang) | text |  |  | YES | NULL |  |  |
| [Display3_lang](#display3_lang) | text |  |  | YES | NULL |  |  |
| [Display2_lang](#display2_lang) | text |  |  | YES | NULL |  |  |
| [Display1_lang](#display1_lang) | text |  |  | YES | NULL |  |  |
| [Display_lang](#display_lang) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### Description_lang
*- no description -*
&nbsp;

### Display3_lang
*- no description -*
&nbsp;

### Display2_lang
*- no description -*
&nbsp;

### Display1_lang
*- no description -*
&nbsp;

### Display_lang
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

