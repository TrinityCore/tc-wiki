---
title: criteria_tree
description: 
published: true
date: 2023-10-06T19:24:23.555Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:38.275Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [Parent](#parent) | int | unsigned |  | NO | 0 |  |  |
| [Amount](#amount) | int | unsigned |  | NO | 0 |  |  |
| [Operator](#operator) | int | signed |  | NO | 0 |  |  |
| [CriteriaID](#criteriaid) | int | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### Parent
*- no description -*
&nbsp;

### Amount
*- no description -*
&nbsp;

### Operator
*- no description -*
&nbsp;

### CriteriaID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

