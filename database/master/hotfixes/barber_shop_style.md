---
title: barber_shop_style
description: 
published: true
date: 2022-11-21T21:11:43.258Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:50:20.462Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DisplayName](#displayname) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [CostModifier](#costmodifier) | float |  |  | NO | 0 |  |  |
| [Race](#race) | tinyint | unsigned |  | NO | 0 |  |  |
| [Sex](#sex) | tinyint | unsigned |  | NO | 0 |  |  |
| [Data](#data) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### DisplayName
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### CostModifier
*- no description -*
&nbsp;

### Race
*- no description -*
&nbsp;

### Sex
*- no description -*
&nbsp;

### Data
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


