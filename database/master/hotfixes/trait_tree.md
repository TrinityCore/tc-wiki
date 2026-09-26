---
title: trait_tree
description: 
published: true
date: 2024-09-05T22:46:07.356Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-12-19T18:40:17.337Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [TraitSystemID](#traitsystemid) | int | signed |  | NO | 0 |  |  |
| [Unused1000_1](#unused1000_1) | int | signed |  | NO | 0 |  |  |
| [FirstTraitNodeID](#firsttraitnodeid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [Unused1000_2](#unused1000_2) | float |  |  | NO | 0 |  |  |
| [Unused1000_3](#unused1000_3) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### TraitSystemID
*- no description -*
&nbsp;

### Unused1000_1
*- no description -*
&nbsp;

### FirstTraitNodeID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Unused1000_2
*- no description -*
&nbsp;

### Unused1000_3
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

