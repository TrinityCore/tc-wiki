---
title: battlemaster_list
description: 
published: true
date: 2024-09-05T22:45:54.851Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:50:38.727Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [GameType](#gametype) | text |  |  | YES | NULL |  |  |
| [ShortDescription](#shortdescription) | text |  |  | YES | NULL |  |  |
| [LongDescription](#longdescription) | text |  |  | YES | NULL |  |  |
| [InstanceType](#instancetype) | tinyint | signed |  | NO | 0 |  |  |
| [MinLevel](#minlevel) | tinyint | signed |  | NO | 0 |  |  |
| [MaxLevel](#maxlevel) | tinyint | signed |  | NO | 0 |  |  |
| [RatedPlayers](#ratedplayers) | tinyint | signed |  | NO | 0 |  |  |
| [MinPlayers](#minplayers) | tinyint | signed |  | NO | 0 |  |  |
| [MaxPlayers](#maxplayers) | int | signed |  | NO | 0 |  |  |
| [GroupsAllowed](#groupsallowed) | tinyint | signed |  | NO | 0 |  |  |
| [MaxGroupSize](#maxgroupsize) | tinyint | signed |  | NO | 0 |  |  |
| [HolidayWorldState](#holidayworldstate) | smallint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int | signed |  | NO | 0 |  |  |
| [RequiredPlayerConditionID](#requiredplayerconditionid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
*- no description -*
&nbsp;

### GameType
*- no description -*
&nbsp;

### ShortDescription
*- no description -*
&nbsp;

### LongDescription
*- no description -*
&nbsp;

### InstanceType
*- no description -*
&nbsp;

### MinLevel
*- no description -*
&nbsp;

### MaxLevel
*- no description -*
&nbsp;

### RatedPlayers
*- no description -*
&nbsp;

### MinPlayers
*- no description -*
&nbsp;

### MaxPlayers
*- no description -*
&nbsp;

### GroupsAllowed
*- no description -*
&nbsp;

### MaxGroupSize
*- no description -*
&nbsp;

### HolidayWorldState
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### RequiredPlayerConditionID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

