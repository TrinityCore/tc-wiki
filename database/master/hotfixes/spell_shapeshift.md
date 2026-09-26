---
title: spell_shapeshift
description: 
published: true
date: 2022-11-21T21:20:39.262Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:15.263Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [StanceBarOrder](#stancebarorder) | tinyint | signed |  | NO | 0 |  |  |
| [ShapeshiftExclude1](#shapeshiftexclude1) | int | signed |  | NO | 0 |  |  |
| [ShapeshiftExclude2](#shapeshiftexclude2) | int | signed |  | NO | 0 |  |  |
| [ShapeshiftMask1](#shapeshiftmask1) | int | signed |  | NO | 0 |  |  |
| [ShapeshiftMask2](#shapeshiftmask2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### StanceBarOrder
*- no description -*
&nbsp;

### ShapeshiftExclude1
*- no description -*
&nbsp;

### ShapeshiftExclude2
*- no description -*
&nbsp;

### ShapeshiftMask1
*- no description -*
&nbsp;

### ShapeshiftMask2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


