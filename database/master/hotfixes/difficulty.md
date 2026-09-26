---
title: difficulty
description: 
published: true
date: 2024-09-05T22:45:57.363Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:56.833Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [InstanceType](#instancetype) | tinyint | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [OldEnumValue](#oldenumvalue) | tinyint | signed |  | NO | 0 |  |  |
| [FallbackDifficultyID](#fallbackdifficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinPlayers](#minplayers) | tinyint | unsigned |  | NO | 0 |  |  |
| [MaxPlayers](#maxplayers) | tinyint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | smallint | unsigned |  | NO | 0 |  |  |
| [ItemContext](#itemcontext) | tinyint | signed |  | NO | 0 |  |  |
| [ToggleDifficultyID](#toggledifficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [GroupSizeHealthCurveID](#groupsizehealthcurveid) | int | unsigned |  | NO | 0 |  |  |
| [GroupSizeDmgCurveID](#groupsizedmgcurveid) | int | unsigned |  | NO | 0 |  |  |
| [GroupSizeSpellPointsCurveID](#groupsizespellpointscurveid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
*- no description -*
&nbsp;

### InstanceType
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### OldEnumValue
*- no description -*
&nbsp;

### FallbackDifficultyID
*- no description -*
&nbsp;

### MinPlayers
*- no description -*
&nbsp;

### MaxPlayers
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ItemContext
*- no description -*
&nbsp;

### ToggleDifficultyID
*- no description -*
&nbsp;

### GroupSizeHealthCurveID
*- no description -*
&nbsp;

### GroupSizeDmgCurveID
*- no description -*
&nbsp;

### GroupSizeSpellPointsCurveID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

