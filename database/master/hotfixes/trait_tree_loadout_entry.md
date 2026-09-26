---
title: trait_tree_loadout_entry
description: 
published: true
date: 2023-05-11T09:04:24.236Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-12-19T18:40:23.756Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [TraitTreeLoadoutID](#traittreeloadoutid) | int | signed |  | NO | 0 |  |  |
| [SelectedTraitNodeID](#selectedtraitnodeid) | int | signed |  | NO | 0 |  |  |
| [SelectedTraitNodeEntryID](#selectedtraitnodeentryid) | int | signed |  | NO | 0 |  |  |
| [NumPoints](#numpoints) | int | signed |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### TraitTreeLoadoutID
*- no description -*
&nbsp;

### SelectedTraitNodeID
*- no description -*
&nbsp;

### SelectedTraitNodeEntryID
*- no description -*
&nbsp;

### NumPoints
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

