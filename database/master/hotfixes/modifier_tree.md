---
title: modifier_tree
description: 
published: true
date: 2022-11-21T21:17:32.271Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:58:05.315Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Parent](#parent) | int | unsigned |  | NO | 0 |  |  |
| [Operator](#operator) | tinyint | signed |  | NO | 0 |  |  |
| [Amount](#amount) | tinyint | signed |  | NO | 0 |  |  |
| [Type](#type) | int | signed |  | NO | 0 |  |  |
| [Asset](#asset) | int | signed |  | NO | 0 |  |  |
| [SecondaryAsset](#secondaryasset) | int | signed |  | NO | 0 |  |  |
| [TertiaryAsset](#tertiaryasset) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Parent
*- no description -*
&nbsp;

### Operator
*- no description -*
&nbsp;

### Amount
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Asset
*- no description -*
&nbsp;

### SecondaryAsset
*- no description -*
&nbsp;

### TertiaryAsset
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


