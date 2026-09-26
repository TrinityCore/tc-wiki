---
title: azerite_essence_power
description: 
published: true
date: 2022-11-21T21:11:17.274Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:49:46.703Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SourceAlliance](#sourcealliance) | text |  |  | YES | NULL |  |  |
| [SourceHorde](#sourcehorde) | text |  |  | YES | NULL |  |  |
| [AzeriteEssenceID](#azeriteessenceid) | int | signed |  | NO | 0 |  |  |
| [Tier](#tier) | tinyint | unsigned |  | NO | 0 |  |  |
| [MajorPowerDescription](#majorpowerdescription) | int | signed |  | NO | 0 |  |  |
| [MinorPowerDescription](#minorpowerdescription) | int | signed |  | NO | 0 |  |  |
| [MajorPowerActual](#majorpoweractual) | int | signed |  | NO | 0 |  |  |
| [MinorPowerActual](#minorpoweractual) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### SourceAlliance
*- no description -*
&nbsp;

### SourceHorde
*- no description -*
&nbsp;

### AzeriteEssenceID
*- no description -*
&nbsp;

### Tier
*- no description -*
&nbsp;

### MajorPowerDescription
*- no description -*
&nbsp;

### MinorPowerDescription
*- no description -*
&nbsp;

### MajorPowerActual
*- no description -*
&nbsp;

### MinorPowerActual
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


