---
title: scenario_poi
description: 
published: true
date: 2022-11-21T21:08:24.300Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:52.802Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CriteriaTreeID](#criteriatreeid) | int | signed | PRI | NO | 0 |  |  |
| [BlobIndex](#blobindex) | int | signed | PRI | NO | 0 |  |  |
| [Idx1](#idx1) | int | signed | PRI | NO | 0 |  |  |
| [MapID](#mapid) | int | signed |  | NO | 0 |  |  |
| [UiMapID](#uimapid) | int | signed |  | NO | 0 |  |  |
| [Priority](#priority) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [WorldEffectID](#worldeffectid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [NavigationPlayerConditionID](#navigationplayerconditionid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### CriteriaTreeID
*- no description -*
&nbsp;

### BlobIndex
*- no description -*
&nbsp;

### Idx1
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### UiMapID
*- no description -*
&nbsp;

### Priority
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### WorldEffectID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### NavigationPlayerConditionID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


