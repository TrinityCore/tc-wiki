---
title: chr_specialization
description: 
published: true
date: 2022-11-21T21:12:51.408Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:50.145Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [FemaleName](#femalename) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ClassID](#classid) | tinyint | signed |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | signed |  | NO | 0 |  |  |
| [PetTalentType](#pettalenttype) | tinyint | signed |  | NO | 0 |  |  |
| [Role](#role) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [SpellIconFileID](#spelliconfileid) | int | signed |  | NO | 0 |  |  |
| [PrimaryStatPriority](#primarystatpriority) | tinyint | signed |  | NO | 0 |  |  |
| [AnimReplacements](#animreplacements) | int | signed |  | NO | 0 |  |  |
| [MasterySpellID1](#masteryspellid1) | int | signed |  | NO | 0 |  |  |
| [MasterySpellID2](#masteryspellid2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### FemaleName
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### ClassID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### PetTalentType
*- no description -*
&nbsp;

### Role
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SpellIconFileID
*- no description -*
&nbsp;

### PrimaryStatPriority
*- no description -*
&nbsp;

### AnimReplacements
*- no description -*
&nbsp;

### MasterySpellID1
*- no description -*
&nbsp;

### MasterySpellID2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


