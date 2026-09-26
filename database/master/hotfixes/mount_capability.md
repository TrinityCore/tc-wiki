---
title: mount_capability
description: 
published: true
date: 2024-02-11T20:02:23.418Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:58:10.715Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ReqRidingSkill](#reqridingskill) | smallint | unsigned |  | NO | 0 |  |  |
| [ReqAreaID](#reqareaid) | smallint | unsigned |  | NO | 0 |  |  |
| [ReqSpellAuraID](#reqspellauraid) | int | unsigned |  | NO | 0 |  |  |
| [ReqSpellKnownID](#reqspellknownid) | int | signed |  | NO | 0 |  |  |
| [ModSpellAuraID](#modspellauraid) | int | signed |  | NO | 0 |  |  |
| [ReqMapID](#reqmapid) | smallint | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [FlightCapabilityID](#flightcapabilityid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ReqRidingSkill
*- no description -*
&nbsp;

### ReqAreaID
*- no description -*
&nbsp;

### ReqSpellAuraID
*- no description -*
&nbsp;

### ReqSpellKnownID
*- no description -*
&nbsp;

### ModSpellAuraID
*- no description -*
&nbsp;

### ReqMapID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### FlightCapabilityID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

