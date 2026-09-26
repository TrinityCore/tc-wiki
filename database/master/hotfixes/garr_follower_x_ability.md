---
title: garr_follower_x_ability
description: 
published: true
date: 2022-11-21T21:14:41.275Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:54:16.250Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [FactionIndex](#factionindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [GarrAbilityID](#garrabilityid) | smallint | unsigned |  | NO | 0 |  |  |
| [GarrFollowerID](#garrfollowerid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### FactionIndex
*- no description -*
&nbsp;

### GarrAbilityID
*- no description -*
&nbsp;

### GarrFollowerID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


