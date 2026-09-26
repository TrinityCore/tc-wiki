---
title: item_bonus_tree_node
description: 
published: true
date: 2023-10-06T19:24:24.189Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:55:45.979Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ItemContext](#itemcontext) | tinyint | unsigned |  | NO | 0 |  |  |
| [ChildItemBonusTreeID](#childitembonustreeid) | smallint | unsigned |  | NO | 0 |  |  |
| [ChildItemBonusListID](#childitembonuslistid) | smallint | unsigned |  | NO | 0 |  |  |
| [ChildItemLevelSelectorID](#childitemlevelselectorid) | smallint | unsigned |  | NO | 0 |  |  |
| [ChildItemBonusListGroupID](#childitembonuslistgroupid) | int | signed |  | NO | 0 |  |  |
| [IblGroupPointsModSetID](#iblgrouppointsmodsetid) | int | signed |  | NO | 0 |  |  |
| [MinMythicPlusLevel](#minmythicpluslevel) | int | signed |  | NO | 0 |  |  |
| [MaxMythicPlusLevel](#maxmythicpluslevel) | int | signed |  | NO | 0 |  |  |
| [ParentItemBonusTreeID](#parentitembonustreeid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ItemContext
*- no description -*
&nbsp;

### ChildItemBonusTreeID
*- no description -*
&nbsp;

### ChildItemBonusListID
*- no description -*
&nbsp;

### ChildItemLevelSelectorID
*- no description -*
&nbsp;

### ChildItemBonusListGroupID
*- no description -*
&nbsp;

### IblGroupPointsModSetID
*- no description -*
&nbsp;

### MinMythicPlusLevel
*- no description -*
&nbsp;

### MaxMythicPlusLevel
*- no description -*
&nbsp;

### ParentItemBonusTreeID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

