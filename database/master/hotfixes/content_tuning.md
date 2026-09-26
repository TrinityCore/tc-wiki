---
title: content_tuning
description: 
published: true
date: 2024-05-15T12:31:08.348Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:01.029Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ExpansionID](#expansionid) | int | signed |  | NO | 0 |  |  |
| [HealthItemLevelCurveID](#healthitemlevelcurveid) | int | signed |  | NO | 0 |  |  |
| [DamageItemLevelCurveID](#damageitemlevelcurveid) | int | signed |  | NO | 0 |  |  |
| [MinLevel](#minlevel) | int | signed |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | int | signed |  | NO | 0 |  |  |
| [MinLevelType](#minleveltype) | int | signed |  | NO | 0 |  |  |
| [MaxLevelType](#maxleveltype) | int | signed |  | NO | 0 |  |  |
| [TargetLevelDelta](#targetleveldelta) | int | signed |  | NO | 0 |  |  |
| [TargetLevelMaxDelta](#targetlevelmaxdelta) | int | signed |  | NO | 0 |  |  |
| [TargetLevelMin](#targetlevelmin) | int | signed |  | NO | 0 |  |  |
| [TargetLevelMax](#targetlevelmax) | int | signed |  | NO | 0 |  |  |
| [MinItemLevel](#minitemlevel) | int | signed |  | NO | 0 |  |  |
| [QuestXpMultiplier](#questxpmultiplier) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ExpansionID
*- no description -*
&nbsp;

### HealthItemLevelCurveID
*- no description -*
&nbsp;

### DamageItemLevelCurveID
*- no description -*
&nbsp;

### MinLevel
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### MinLevelType
*- no description -*
&nbsp;

### MaxLevelType
*- no description -*
&nbsp;

### TargetLevelDelta
*- no description -*
&nbsp;

### TargetLevelMaxDelta
*- no description -*
&nbsp;

### TargetLevelMin
*- no description -*
&nbsp;

### TargetLevelMax
*- no description -*
&nbsp;

### MinItemLevel
*- no description -*
&nbsp;

### QuestXpMultiplier
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

