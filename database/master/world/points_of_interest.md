---
title: points_of_interest
description: 
published: true
date: 2022-11-21T21:07:30.349Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:33.819Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment | Source in sniff |
| --- | --- | --- | :---: | :---: | --- | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [PositionX](#positionx) | float |  |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [PositionY](#positiony) | float |  |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [PositionZ](#positionz) | float |  |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [Icon](#icon) | int | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [Importance](#importance) | int | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [Name](#name-alt) | mediumtext |  |  | YES | NULL |  |  | SMSG_GOSSIP_POI |
| [WMOGroupID](#wmogroupid) | int | signed |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  | generated |
&nbsp;
## Description of fields

### ID {#id-alt}
Unique id to be referenced by the scripting system to display the POI.
&nbsp;

### PositionX
X postion for the _map_ this POI gets shown on.
&nbsp;

### PositionY
Y postion for the _map_ this POI gets shown on.
&nbsp;

### PositionZ
*- no description -*
&nbsp;

### Icon
*- no description -*
&nbsp;

### Flags
*unknown / just sent to client*
&nbsp;

### Importance
*unknown / just sent to client*
&nbsp;

### Name {#name-alt}
Text of the onMouseover tooltip for the **Icon**.
&nbsp;

### WMOGroupID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


