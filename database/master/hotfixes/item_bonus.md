---
title: item_bonus
description: 
published: true
date: 2023-10-06T19:24:24.148Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:55:40.812Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Value1](#value1) | int | signed |  | NO | 0 |  |  |
| [Value2](#value2) | int | signed |  | NO | 0 |  |  |
| [Value3](#value3) | int | signed |  | NO | 0 |  |  |
| [Value4](#value4) | int | signed |  | NO | 0 |  |  |
| [ParentItemBonusListID](#parentitembonuslistid) | smallint | unsigned |  | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Value1
*- no description -*
&nbsp;

### Value2
*- no description -*
&nbsp;

### Value3
*- no description -*
&nbsp;

### Value4
*- no description -*
&nbsp;

### ParentItemBonusListID
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


