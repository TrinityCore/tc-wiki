---
title: spell_totems
description: 
published: true
date: 2022-11-21T21:20:47.248Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:26.009Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [RequiredTotemCategoryID1](#requiredtotemcategoryid1) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredTotemCategoryID2](#requiredtotemcategoryid2) | smallint | unsigned |  | NO | 0 |  |  |
| [Totem1](#totem1) | int | signed |  | NO | 0 |  |  |
| [Totem2](#totem2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### RequiredTotemCategoryID1
*- no description -*
&nbsp;

### RequiredTotemCategoryID2
*- no description -*
&nbsp;

### Totem1
*- no description -*
&nbsp;

### Totem2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


