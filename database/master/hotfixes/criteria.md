---
title: criteria
description: 
published: true
date: 2023-10-06T19:24:23.538Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:35.601Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Type](#type) | smallint | signed |  | NO | 0 |  |  |
| [Asset](#asset) | int | signed |  | NO | 0 |  |  |
| [ModifierTreeId](#modifiertreeid) | int | unsigned |  | NO | 0 |  |  |
| [StartEvent](#startevent) | int | signed |  | NO | 0 |  |  |
| [StartAsset](#startasset) | int | signed |  | NO | 0 |  |  |
| [StartTimer](#starttimer) | smallint | unsigned |  | NO | 0 |  |  |
| [FailEvent](#failevent) | int | signed |  | NO | 0 |  |  |
| [FailAsset](#failasset) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [EligibilityWorldStateID](#eligibilityworldstateid) | smallint | signed |  | NO | 0 |  |  |
| [EligibilityWorldStateValue](#eligibilityworldstatevalue) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Asset
*- no description -*
&nbsp;

### ModifierTreeId
*- no description -*
&nbsp;

### StartEvent
*- no description -*
&nbsp;

### StartAsset
*- no description -*
&nbsp;

### StartTimer
*- no description -*
&nbsp;

### FailEvent
*- no description -*
&nbsp;

### FailAsset
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### EligibilityWorldStateID
*- no description -*
&nbsp;

### EligibilityWorldStateValue
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

