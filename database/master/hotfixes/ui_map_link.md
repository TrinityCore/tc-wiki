---
title: ui_map_link
description: 
published: true
date: 2022-12-19T18:40:36.673Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:03:35.007Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [UiMinX](#uiminx) | float |  |  | NO | 0 |  |  |
| [UiMinY](#uiminy) | float |  |  | NO | 0 |  |  |
| [UiMaxX](#uimaxx) | float |  |  | NO | 0 |  |  |
| [UiMaxY](#uimaxy) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ParentUiMapID](#parentuimapid) | int | signed |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | signed |  | NO | 0 |  |  |
| [ChildUiMapID](#childuimapid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [OverrideHighlightFileDataID](#overridehighlightfiledataid) | int | signed |  | NO | 0 |  |  |
| [OverrideHighlightAtlasID](#overridehighlightatlasid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### UiMinX
*- no description -*
&nbsp;

### UiMinY
*- no description -*
&nbsp;

### UiMaxX
*- no description -*
&nbsp;

### UiMaxY
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### ParentUiMapID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### ChildUiMapID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### OverrideHighlightFileDataID
*- no description -*
&nbsp;

### OverrideHighlightAtlasID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

