---
title: hotfix_optional_data
description: 
published: true
date: 2022-11-21T21:15:21.244Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:55:09.196Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [TableHash](#tablehash) | int | unsigned |  | NO |  |  |  |
| [RecordId](#recordid) | int | unsigned |  | NO |  |  |  |
| [locale](#locale) | varchar(4) |  |  | NO |  |  |  |
| [Key](#key) | int | unsigned |  | NO |  |  |  |
| [Data](#data) | blob |  |  | NO |  |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### TableHash
*- no description -*
&nbsp;

### RecordId
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### Key
*- no description -*
&nbsp;

### Data
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

