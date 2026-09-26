---
title: animation_data
description: 
published: true
date: 2024-09-05T22:45:53.683Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:48:41.458Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Fallback](#fallback) | smallint | unsigned |  | NO | 0 |  |  |
| [BehaviorTier](#behaviortier) | tinyint | unsigned |  | NO | 0 |  |  |
| [BehaviorID](#behaviorid) | smallint | signed |  | NO | 0 |  |  |
| [Flags1](#flags1) | int | signed |  | NO | 0 |  |  |
| [Flags2](#flags2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Fallback
*- no description -*
&nbsp;

### BehaviorTier
*- no description -*
&nbsp;

### BehaviorID
*- no description -*
&nbsp;

### Flags1
*- no description -*
&nbsp;

### Flags2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

