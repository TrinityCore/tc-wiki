---
title: chr_customization_option
description: 
published: true
date: 2024-09-05T22:45:55.794Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:28.659Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SecondaryID](#secondaryid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ChrRacesID](#chrracesid) | int | signed |  | NO | 0 |  |  |
| [Sex](#sex) | int | signed |  | NO | 0 |  |  |
| [ChrModelID](#chrmodelid) | int | signed |  | NO | 0 |  |  |
| [SortIndex](#sortindex) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationCategoryID](#chrcustomizationcategoryid) | int | signed |  | NO | 0 |  |  |
| [OptionType](#optiontype) | int | signed |  | NO | 0 |  |  |
| [BarberShopCostModifier](#barbershopcostmodifier) | float |  |  | NO | 0 |  |  |
| [ChrCustomizationID](#chrcustomizationid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationReqID](#chrcustomizationreqid) | int | signed |  | NO | 0 |  |  |
| [UiOrderIndex](#uiorderindex) | int | signed |  | NO | 0 |  |  |
| [AddedInPatch](#addedinpatch) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### SecondaryID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ChrRacesID
*- no description -*
&nbsp;

### Sex
*- no description -*
&nbsp;

### ChrModelID
*- no description -*
&nbsp;

### SortIndex
*- no description -*
&nbsp;

### ChrCustomizationCategoryID
*- no description -*
&nbsp;

### OptionType
*- no description -*
&nbsp;

### BarberShopCostModifier
*- no description -*
&nbsp;

### ChrCustomizationID
*- no description -*
&nbsp;

### ChrCustomizationReqID
*- no description -*
&nbsp;

### UiOrderIndex
*- no description -*
&nbsp;

### AddedInPatch
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

