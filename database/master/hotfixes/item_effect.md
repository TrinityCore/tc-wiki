---
title: item_effect
description: 
published: true
date: 2022-11-21T21:16:11.257Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:56:14.851Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [LegacySlotIndex](#legacyslotindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [TriggerType](#triggertype) | tinyint | signed |  | NO | 0 |  |  |
| [Charges](#charges) | smallint | signed |  | NO | 0 |  |  |
| [CoolDownMSec](#cooldownmsec) | int | signed |  | NO | 0 |  |  |
| [CategoryCoolDownMSec](#categorycooldownmsec) | int | signed |  | NO | 0 |  |  |
| [SpellCategoryID](#spellcategoryid) | smallint | unsigned |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [ChrSpecializationID](#chrspecializationid) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### LegacySlotIndex
*- no description -*
&nbsp;

### TriggerType
*- no description -*
&nbsp;

### Charges
*- no description -*
&nbsp;

### CoolDownMSec
*- no description -*
&nbsp;

### CategoryCoolDownMSec
*- no description -*
&nbsp;

### SpellCategoryID
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### ChrSpecializationID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


