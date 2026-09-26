---
title: item
description: 
published: true
date: 2022-12-19T18:38:24.140Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:55:22.429Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ClassID](#classid) | tinyint | unsigned |  | NO | 0 |  |  |
| [SubclassID](#subclassid) | tinyint | unsigned |  | NO | 0 |  |  |
| [Material](#material) | tinyint | unsigned |  | NO | 0 |  |  |
| [InventoryType](#inventorytype) | tinyint | signed |  | NO | 0 |  |  |
| [SheatheType](#sheathetype) | tinyint | unsigned |  | NO | 0 |  |  |
| [SoundOverrideSubclassID](#soundoverridesubclassid) | tinyint | signed |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int | signed |  | NO | 0 |  |  |
| [ItemGroupSoundsID](#itemgroupsoundsid) | tinyint | unsigned |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int | signed |  | NO | 0 |  |  |
| [ModifiedCraftingReagentItemID](#modifiedcraftingreagentitemid) | int | signed |  | NO | 0 |  |  |
| [CraftingQualityID](#craftingqualityid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ClassID
*- no description -*
&nbsp;

### SubclassID
*- no description -*
&nbsp;

### Material
*- no description -*
&nbsp;

### InventoryType
*- no description -*
&nbsp;

### SheatheType
*- no description -*
&nbsp;

### SoundOverrideSubclassID
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### ItemGroupSoundsID
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### ModifiedCraftingReagentItemID
*- no description -*
&nbsp;

### CraftingQualityID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

