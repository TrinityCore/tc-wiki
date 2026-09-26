---
title: pvp_tier
description: 
published: true
date: 2022-11-21T21:18:29.277Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:59:21.005Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [MinRating](#minrating) | smallint | signed |  | NO | 0 |  |  |
| [MaxRating](#maxrating) | smallint | signed |  | NO | 0 |  |  |
| [PrevTier](#prevtier) | int | signed |  | NO | 0 |  |  |
| [NextTier](#nexttier) | int | signed |  | NO | 0 |  |  |
| [BracketID](#bracketid) | tinyint | signed |  | NO | 0 |  |  |
| [Rank](#rank) | tinyint | signed |  | NO | 0 |  |  |
| [RankIconFileDataID](#rankiconfiledataid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### MinRating
*- no description -*
&nbsp;

### MaxRating
*- no description -*
&nbsp;

### PrevTier
*- no description -*
&nbsp;

### NextTier
*- no description -*
&nbsp;

### BracketID
*- no description -*
&nbsp;

### Rank
*- no description -*
&nbsp;

### RankIconFileDataID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


