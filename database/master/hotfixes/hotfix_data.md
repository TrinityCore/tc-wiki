---
title: hotfix_data
description: 
published: true
date: 2022-11-21T21:15:19.247Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:55:06.538Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id-alt) | int | signed | PRI | NO |  |  |  |
| [UniqueId](#uniqueid) | int | unsigned |  | NO | 0 |  |  |
| [TableHash](#tablehash) | int | unsigned | PRI | NO |  |  |  |
| [RecordId](#recordid) | int | signed | PRI | NO |  |  |  |
| [Status](#status) | tinyint | unsigned |  | NO | 3 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id {#id-alt}
*- no description -*
&nbsp;

### UniqueId
*- no description -*
&nbsp;

### TableHash
*- no description -*
&nbsp;

### RecordId
*- no description -*
&nbsp;

### Status
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


