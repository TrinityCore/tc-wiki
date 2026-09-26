---
title: quest_objectives
description: 
published: true
date: 2023-10-06T19:27:11.525Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:05.275Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [QuestID](#questid) | int | unsigned |  | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [Order](#order) | tinyint | unsigned |  | NO | 0 |  |  |
| [StorageIndex](#storageindex) | tinyint | signed |  | NO | 0 |  |  |
| [ObjectID](#objectid) | int | signed |  | NO | 0 |  |  |
| [Amount](#amount) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [Flags2](#flags2) | int | unsigned |  | NO | 0 |  |  |
| [ProgressBarWeight](#progressbarweight) | float |  |  | NO | 0 |  |  |
| [Description](#description) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### QuestID
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Order
*- no description -*
&nbsp;

### StorageIndex
*- no description -*
&nbsp;

### ObjectID
*- no description -*
&nbsp;

### Amount
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Flags2
*- no description -*
&nbsp;

### ProgressBarWeight
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


