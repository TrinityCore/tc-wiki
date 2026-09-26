---
title: azerite_item_milestone_power
description: 
published: true
date: 2022-11-21T21:11:23.252Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:49:54.438Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [RequiredLevel](#requiredlevel) | int | signed |  | NO | 0 |  |  |
| [AzeritePowerID](#azeritepowerid) | int | signed |  | NO | 0 |  |  |
| [Type](#type) | int | signed |  | NO | 0 |  |  |
| [AutoUnlock](#autounlock) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### RequiredLevel
*- no description -*
&nbsp;

### AzeritePowerID
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### AutoUnlock
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


