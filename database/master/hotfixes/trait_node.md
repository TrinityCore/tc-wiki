---
title: trait_node
description: 
published: true
date: 2024-09-05T22:46:07.094Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-12-19T18:39:42.128Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [TraitTreeID](#traittreeid) | int | signed |  | NO | 0 |  |  |
| [PosX](#posx) | int | signed |  | NO | 0 |  |  |
| [PosY](#posy) | int | signed |  | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [TraitSubTreeID](#traitsubtreeid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### TraitTreeID
*- no description -*
&nbsp;

### PosX
*- no description -*
&nbsp;

### PosY
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### TraitSubTreeID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

