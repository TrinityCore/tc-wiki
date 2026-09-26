---
title: spell_categories
description: 
published: true
date: 2022-11-21T21:19:41.291Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:57.214Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [Category](#category) | smallint | signed |  | NO | 0 |  |  |
| [DefenseType](#defensetype) | tinyint | signed |  | NO | 0 |  |  |
| [DispelType](#dispeltype) | tinyint | signed |  | NO | 0 |  |  |
| [Mechanic](#mechanic) | tinyint | signed |  | NO | 0 |  |  |
| [PreventionType](#preventiontype) | tinyint | signed |  | NO | 0 |  |  |
| [StartRecoveryCategory](#startrecoverycategory) | smallint | signed |  | NO | 0 |  |  |
| [ChargeCategory](#chargecategory) | smallint | signed |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### Category
*- no description -*
&nbsp;

### DefenseType
*- no description -*
&nbsp;

### DispelType
*- no description -*
&nbsp;

### Mechanic
*- no description -*
&nbsp;

### PreventionType
*- no description -*
&nbsp;

### StartRecoveryCategory
*- no description -*
&nbsp;

### ChargeCategory
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


