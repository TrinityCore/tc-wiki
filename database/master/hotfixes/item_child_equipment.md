---
title: item_child_equipment
description: 
published: true
date: 2022-11-21T21:15:51.239Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:55:48.616Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ParentItemID](#parentitemid) | int | signed |  | NO | 0 |  |  |
| [ChildItemID](#childitemid) | int | signed |  | NO | 0 |  |  |
| [ChildItemEquipSlot](#childitemequipslot) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ParentItemID
*- no description -*
&nbsp;

### ChildItemID
*- no description -*
&nbsp;

### ChildItemEquipSlot
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


