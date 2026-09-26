---
title: challenge_mode_item_bonus_override
description: 
published: true
date: 2024-09-05T22:45:55.124Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ItemBonusTreeGroupID](#itembonustreegroupid) | int | signed |  | NO | 0 |  |  |
| [DstItemBonusTreeID](#dstitembonustreeid) | int | signed |  | NO | 0 |  |  |
| [Value](#value) | int | signed |  | NO | 0 |  |  |
| [RequiredTimeEventPassed](#requiredtimeeventpassed) | int | signed |  | NO | 0 |  |  |
| [SrcItemBonusTreeID](#srcitembonustreeid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ItemBonusTreeGroupID
*- no description -*
&nbsp;

### DstItemBonusTreeID
*- no description -*
&nbsp;

### Value
*- no description -*
&nbsp;

### RequiredTimeEventPassed
*- no description -*
&nbsp;

### SrcItemBonusTreeID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

