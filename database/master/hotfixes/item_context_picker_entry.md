---
title: item_context_picker_entry
description: 
published: true
date: 2024-09-05T22:45:59.272Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ItemCreationContext](#itemcreationcontext) | tinyint | signed |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [PVal](#pval) | int | signed |  | NO | 0 |  |  |
| [LabelID](#labelid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [ItemContextPickerID](#itemcontextpickerid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ItemCreationContext
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### PVal
*- no description -*
&nbsp;

### LabelID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### ItemContextPickerID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

