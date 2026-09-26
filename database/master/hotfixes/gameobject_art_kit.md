---
title: gameobject_art_kit
description: 
published: true
date: 2022-11-21T22:46:31.222Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-02-06T20:19:54.449Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [AttachModelFileID](#attachmodelfileid) | int | signed |  | NO | 0 |  |  |
| [TextureVariationFileID1](#texturevariationfileid1) | int | signed |  | NO | 0 |  |  |
| [TextureVariationFileID2](#texturevariationfileid2) | int | signed |  | NO | 0 |  |  |
| [TextureVariationFileID3](#texturevariationfileid3) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### AttachModelFileID
*- no description -*
&nbsp;

### TextureVariationFileID1
*- no description -*
&nbsp;

### TextureVariationFileID2
*- no description -*
&nbsp;

### TextureVariationFileID3
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


