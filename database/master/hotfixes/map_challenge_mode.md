---
title: map_challenge_mode
description: 
published: true
date: 2022-11-21T21:32:52.266Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T19:57:17.080Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [MapID](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [ExpansionLevel](#expansionlevel) | int | unsigned |  | NO | 0 |  |  |
| [RequiredWorldStateID](#requiredworldstateid) | int | signed |  | NO | 0 |  |  |
| [CriteriaCount1](#criteriacount1) | smallint | signed |  | NO | 0 |  |  |
| [CriteriaCount2](#criteriacount2) | smallint | signed |  | NO | 0 |  |  |
| [CriteriaCount3](#criteriacount3) | smallint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ExpansionLevel
*- no description -*
&nbsp;

### RequiredWorldStateID
*- no description -*
&nbsp;

### CriteriaCount1
*- no description -*
&nbsp;

### CriteriaCount2
*- no description -*
&nbsp;

### CriteriaCount3
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


