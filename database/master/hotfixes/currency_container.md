---
title: currency_container
description: 
published: true
date: 2023-05-11T09:04:22.342Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T19:52:31.312Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ContainerName](#containername) | text |  |  | YES | NULL |  |  |
| [ContainerDescription](#containerdescription) | text |  |  | YES | NULL |  |  |
| [MinAmount](#minamount) | int | signed |  | NO | 0 |  |  |
| [MaxAmount](#maxamount) | int | signed |  | NO | 0 |  |  |
| [ContainerIconID](#containericonid) | int | signed |  | NO | 0 |  |  |
| [ContainerQuality](#containerquality) | tinyint | signed |  | NO | 0 |  |  |
| [OnLootSpellVisualKitID](#onlootspellvisualkitid) | int | signed |  | NO | 0 |  |  |
| [CurrencyTypesID](#currencytypesid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ContainerName
*- no description -*
&nbsp;

### ContainerDescription
*- no description -*
&nbsp;

### MinAmount
*- no description -*
&nbsp;

### MaxAmount
*- no description -*
&nbsp;

### ContainerIconID
*- no description -*
&nbsp;

### ContainerQuality
*- no description -*
&nbsp;

### OnLootSpellVisualKitID
*- no description -*
&nbsp;

### CurrencyTypesID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

