---
title: spell_category
description: 
published: true
date: 2023-10-06T19:24:24.995Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:59.897Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [UsesPerWeek](#usesperweek) | tinyint | unsigned |  | NO | 0 |  |  |
| [MaxCharges](#maxcharges) | tinyint | signed |  | NO | 0 |  |  |
| [ChargeRecoveryTime](#chargerecoverytime) | int | signed |  | NO | 0 |  |  |
| [TypeMask](#typemask) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### UsesPerWeek
*- no description -*
&nbsp;

### MaxCharges
*- no description -*
&nbsp;

### ChargeRecoveryTime
*- no description -*
&nbsp;

### TypeMask
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

