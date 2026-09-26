---
title: trait_sub_tree
description: 
published: true
date: 2024-09-05T22:46:07.329Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2024-09-05T22:46:07.329Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [UiTextureAtlasElementID](#uitextureatlaselementid) | int | signed |  | NO | 0 |  |  |
| [TraitTreeID](#traittreeid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### UiTextureAtlasElementID
*- no description -*
&nbsp;

### TraitTreeID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

