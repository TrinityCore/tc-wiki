---
title: azerite_unlock_mapping
description: 
published: true
date: 2022-11-21T21:11:37.251Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:50:12.538Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ItemLevel](#itemlevel) | int | signed |  | NO | 0 |  |  |
| [ItemBonusListHead](#itembonuslisthead) | int | signed |  | NO | 0 |  |  |
| [ItemBonusListShoulders](#itembonuslistshoulders) | int | signed |  | NO | 0 |  |  |
| [ItemBonusListChest](#itembonuslistchest) | int | signed |  | NO | 0 |  |  |
| [AzeriteUnlockMappingSetID](#azeriteunlockmappingsetid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ItemLevel
*- no description -*
&nbsp;

### ItemBonusListHead
*- no description -*
&nbsp;

### ItemBonusListShoulders
*- no description -*
&nbsp;

### ItemBonusListChest
*- no description -*
&nbsp;

### AzeriteUnlockMappingSetID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


