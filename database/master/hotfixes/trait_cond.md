---
title: trait_cond
description: 
published: true
date: 2024-09-05T22:46:06.906Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-12-19T18:39:12.976Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [CondType](#condtype) | int | signed |  | NO | 0 |  |  |
| [TraitTreeID](#traittreeid) | int | signed |  | NO | 0 |  |  |
| [GrantedRanks](#grantedranks) | int | signed |  | NO | 0 |  |  |
| [QuestID](#questid) | int | signed |  | NO | 0 |  |  |
| [AchievementID](#achievementid) | int | signed |  | NO | 0 |  |  |
| [SpecSetID](#specsetid) | int | signed |  | NO | 0 |  |  |
| [TraitNodeGroupID](#traitnodegroupid) | int | signed |  | NO | 0 |  |  |
| [TraitNodeID](#traitnodeid) | int | signed |  | NO | 0 |  |  |
| [TraitNodeEntryID](#traitnodeentryid) | int | signed |  | NO | 0 |  |  |
| [TraitCurrencyID](#traitcurrencyid) | int | signed |  | NO | 0 |  |  |
| [SpentAmountRequired](#spentamountrequired) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [RequiredLevel](#requiredlevel) | int | signed |  | NO | 0 |  |  |
| [FreeSharedStringID](#freesharedstringid) | int | signed |  | NO | 0 |  |  |
| [SpendMoreSharedStringID](#spendmoresharedstringid) | int | signed |  | NO | 0 |  |  |
| [TraitCondAccountElementID](#traitcondaccountelementid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### CondType
*- no description -*
&nbsp;

### TraitTreeID
*- no description -*
&nbsp;

### GrantedRanks
*- no description -*
&nbsp;

### QuestID
*- no description -*
&nbsp;

### AchievementID
*- no description -*
&nbsp;

### SpecSetID
*- no description -*
&nbsp;

### TraitNodeGroupID
*- no description -*
&nbsp;

### TraitNodeID
*- no description -*
&nbsp;

### TraitNodeEntryID
*- no description -*
&nbsp;

### TraitCurrencyID
*- no description -*
&nbsp;

### SpentAmountRequired
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### RequiredLevel
*- no description -*
&nbsp;

### FreeSharedStringID
*- no description -*
&nbsp;

### SpendMoreSharedStringID
*- no description -*
&nbsp;

### TraitCondAccountElementID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

