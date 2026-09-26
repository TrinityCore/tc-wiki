---
title: mount
description: 
published: true
date: 2024-02-11T20:02:23.384Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:58:07.982Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [SourceText](#sourcetext) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [MountTypeID](#mounttypeid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [SourceTypeEnum](#sourcetypeenum) | tinyint | signed |  | NO | 0 |  |  |
| [SourceSpellID](#sourcespellid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [MountFlyRideHeight](#mountflyrideheight) | float |  |  | NO | 0 |  |  |
| [UiModelSceneID](#uimodelsceneid) | int | signed |  | NO | 0 |  |  |
| [MountSpecialRiderAnimKitID](#mountspecialrideranimkitid) | int | signed |  | NO | 0 |  |  |
| [MountSpecialSpellVisualKitID](#mountspecialspellvisualkitid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### SourceText
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### MountTypeID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SourceTypeEnum
*- no description -*
&nbsp;

### SourceSpellID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### MountFlyRideHeight
*- no description -*
&nbsp;

### UiModelSceneID
*- no description -*
&nbsp;

### MountSpecialRiderAnimKitID
*- no description -*
&nbsp;

### MountSpecialSpellVisualKitID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

