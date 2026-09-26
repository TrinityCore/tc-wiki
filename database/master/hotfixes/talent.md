---
title: talent
description: 
published: true
date: 2022-11-21T21:20:57.323Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:39.585Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [TierID](#tierid) | tinyint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [ColumnIndex](#columnindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [ClassID](#classid) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpecID](#specid) | smallint | unsigned |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned |  | NO | 0 |  |  |
| [OverridesSpellID](#overridesspellid) | int | unsigned |  | NO | 0 |  |  |
| [CategoryMask1](#categorymask1) | tinyint | unsigned |  | NO | 0 |  |  |
| [CategoryMask2](#categorymask2) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### TierID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ColumnIndex
*- no description -*
&nbsp;

### ClassID
*- no description -*
&nbsp;

### SpecID
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### OverridesSpellID
*- no description -*
&nbsp;

### CategoryMask1
*- no description -*
&nbsp;

### CategoryMask2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


