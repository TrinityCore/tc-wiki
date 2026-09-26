---
title: quest_info
description: 
published: true
date: 2023-05-11T09:04:23.470Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:59:28.988Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [InfoName](#infoname) | text |  |  | YES | NULL |  |  |
| [Type](#type) | tinyint | signed |  | NO | 0 |  |  |
| [Modifiers](#modifiers) | int | signed |  | NO | 0 |  |  |
| [Profession](#profession) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### InfoName
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Modifiers
*- no description -*
&nbsp;

### Profession
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

