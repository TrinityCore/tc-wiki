---
title: power_type
description: 
published: true
date: 2024-09-05T22:46:04.086Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:58:57.263Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [NameGlobalStringTag](#nameglobalstringtag) | text |  |  | YES | NULL |  |  |
| [CostGlobalStringTag](#costglobalstringtag) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [PowerTypeEnum](#powertypeenum) | tinyint | signed |  | NO | 0 |  |  |
| [MinPower](#minpower) | int | signed |  | NO | 0 |  |  |
| [MaxBasePower](#maxbasepower) | int | signed |  | NO | 0 |  |  |
| [CenterPower](#centerpower) | int | signed |  | NO | 0 |  |  |
| [DefaultPower](#defaultpower) | int | signed |  | NO | 0 |  |  |
| [DisplayModifier](#displaymodifier) | int | signed |  | NO | 0 |  |  |
| [RegenInterruptTimeMS](#regeninterrupttimems) | int | signed |  | NO | 0 |  |  |
| [RegenPeace](#regenpeace) | float |  |  | NO | 0 |  |  |
| [RegenCombat](#regencombat) | float |  |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### NameGlobalStringTag
*- no description -*
&nbsp;

### CostGlobalStringTag
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### PowerTypeEnum
*- no description -*
&nbsp;

### MinPower
*- no description -*
&nbsp;

### MaxBasePower
*- no description -*
&nbsp;

### CenterPower
*- no description -*
&nbsp;

### DefaultPower
*- no description -*
&nbsp;

### DisplayModifier
*- no description -*
&nbsp;

### RegenInterruptTimeMS
*- no description -*
&nbsp;

### RegenPeace
*- no description -*
&nbsp;

### RegenCombat
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

