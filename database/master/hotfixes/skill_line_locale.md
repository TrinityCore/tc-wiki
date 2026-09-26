---
title: skill_line_locale
description: 
published: true
date: 2022-12-19T18:38:55.758Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:30.623Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [DisplayName_lang](#displayname_lang) | text |  |  | YES | NULL |  |  |
| [AlternateVerb_lang](#alternateverb_lang) | text |  |  | YES | NULL |  |  |
| [Description_lang](#description_lang) | text |  |  | YES | NULL |  |  |
| [HordeDisplayName_lang](#hordedisplayname_lang) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### DisplayName_lang
*- no description -*
&nbsp;

### AlternateVerb_lang
*- no description -*
&nbsp;

### Description_lang
*- no description -*
&nbsp;

### HordeDisplayName_lang
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

