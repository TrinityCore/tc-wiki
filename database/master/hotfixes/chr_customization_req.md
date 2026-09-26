---
title: chr_customization_req
description: 
published: true
date: 2023-10-06T19:24:22.756Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:33.919Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [RaceMask](#racemask) | bigint | signed |  | NO | 0 |  |  |
| [ReqSource](#reqsource) | text |  |  | YES | NULL |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ClassMask](#classmask) | int | signed |  | NO | 0 |  |  |
| [AchievementID](#achievementid) | int | signed |  | NO | 0 |  |  |
| [QuestID](#questid) | int | signed |  | NO | 0 |  |  |
| [OverrideArchive](#overridearchive) | int | signed |  | NO | 0 |  |  |
| [ItemModifiedAppearanceID](#itemmodifiedappearanceid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### RaceMask
*- no description -*
&nbsp;

### ReqSource
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ClassMask
*- no description -*
&nbsp;

### AchievementID
*- no description -*
&nbsp;

### QuestID
*- no description -*
&nbsp;

### OverrideArchive
*- no description -*
&nbsp;

### ItemModifiedAppearanceID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

