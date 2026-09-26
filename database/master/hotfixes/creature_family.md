---
title: creature_family
description: 
published: true
date: 2022-11-21T21:13:15.322Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:22.338Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [MinScale](#minscale) | float |  |  | NO | 0 |  |  |
| [MinScaleLevel](#minscalelevel) | tinyint | signed |  | NO | 0 |  |  |
| [MaxScale](#maxscale) | float |  |  | NO | 0 |  |  |
| [MaxScaleLevel](#maxscalelevel) | tinyint | signed |  | NO | 0 |  |  |
| [PetFoodMask](#petfoodmask) | smallint | signed |  | NO | 0 |  |  |
| [PetTalentType](#pettalenttype) | tinyint | signed |  | NO | 0 |  |  |
| [IconFileID](#iconfileid) | int | signed |  | NO | 0 |  |  |
| [SkillLine1](#skillline1) | smallint | signed |  | NO | 0 |  |  |
| [SkillLine2](#skillline2) | smallint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
*- no description -*
&nbsp;

### MinScale
*- no description -*
&nbsp;

### MinScaleLevel
*- no description -*
&nbsp;

### MaxScale
*- no description -*
&nbsp;

### MaxScaleLevel
*- no description -*
&nbsp;

### PetFoodMask
*- no description -*
&nbsp;

### PetTalentType
*- no description -*
&nbsp;

### IconFileID
*- no description -*
&nbsp;

### SkillLine1
*- no description -*
&nbsp;

### SkillLine2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


