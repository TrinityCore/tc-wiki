---
title: areatrigger_template
description: This table contains the description of areatrigger.
published: true
date: 2025-05-25T20:22:36.254Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:28:59.429Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id-alt) | int | unsigned | PRI | NO |  |  |  |
| [IsCustom](#iscustom) | tinyint | unsigned | PRI | NO |  |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [ActionSetId](#actionsetid) | int | unsigned |  | NO | 0 |  |  |
| [ActionSetFlags](#actionsetflags) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id {#id-alt}
Unique identifier
&nbsp;

### IsCustom
Describes whether `Id` of this row is a custom id or not.
&nbsp;

### Flags
| Name | Flag |
| --- | --- |
| IsServerSide | 0x00001|
&nbsp;

### ActionSetId
*- no description -*
&nbsp;

### ActionSetFlags
| Name | Flag |
| --- | --- |
| None | 0x0000 |
| OnlyTriggeredByCaster | 0x0001 |		
| :x: ResurrectIfConditionFails | 0x0002 |
| Obsolete | 0x0004 |
| AllowWhileGhost | 0x0008 |
| AllowWhileDead | 0x0010 |
| :x: UnifyAllInstances | 0x0020 |
| :x: SuppressConditionError | 0x0040 |
| NotTriggeredbyCaster | 0x0080 |
| CreatorsPartyOnly | 0x0100 |
| :x: DontRunOnLeaveWhenExpiring | 0x0200 |
| CanAffectUninteractible | 0x0400 |
| DontDespawnWithCreator | 0x0800 |
| CanAffectBeastmaster | 0x1000 |
| :x: RequiresLineOfSight | 0x2000 |
{.dense}

>Please note :x:means that the ActionSetFlag is not (yet) implemented.
{.is-danger}

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

