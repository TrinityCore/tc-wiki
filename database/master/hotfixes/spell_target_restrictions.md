---
title: spell_target_restrictions
description: 
published: true
date: 2022-11-21T21:20:45.344Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:23.309Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [ConeDegrees](#conedegrees) | float |  |  | NO | 0 |  |  |
| [MaxTargets](#maxtargets) | tinyint | unsigned |  | NO | 0 |  |  |
| [MaxTargetLevel](#maxtargetlevel) | int | unsigned |  | NO | 0 |  |  |
| [TargetCreatureType](#targetcreaturetype) | smallint | signed |  | NO | 0 |  |  |
| [Targets](#targets) | int | signed |  | NO | 0 |  |  |
| [Width](#width) | float |  |  | NO | 0 |  |  |
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

### ConeDegrees
*- no description -*
&nbsp;

### MaxTargets
*- no description -*
&nbsp;

### MaxTargetLevel
*- no description -*
&nbsp;

### TargetCreatureType
*- no description -*
&nbsp;

### Targets
*- no description -*
&nbsp;

### Width
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


