---
title: item_bonus_list_group_entry
description: 
published: true
date: 2023-10-06T19:36:30.407Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ItemBonusListGroupID](#itembonuslistgroupid) | int | signed |  | NO | 0 |  |  |
| [ItemBonusListID](#itembonuslistid) | int | signed |  | NO | 0 |  |  |
| [ItemLevelSelectorID](#itemlevelselectorid) | int | signed |  | NO | 0 |  |  |
| [SequenceValue](#sequencevalue) | int | signed |  | NO | 0 |  |  |
| [ItemExtendedCostID](#itemextendedcostid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ItemLogicalCostGroupID](#itemlogicalcostgroupid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ItemBonusListGroupID
*- no description -*
&nbsp;

### ItemBonusListID
*- no description -*
&nbsp;

### ItemLevelSelectorID
*- no description -*
&nbsp;

### SequenceValue
*- no description -*
&nbsp;

### ItemExtendedCostID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ItemLogicalCostGroupID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

