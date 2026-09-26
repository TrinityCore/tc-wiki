---
title: artifact
description: 
published: true
date: 2022-11-21T21:10:39.332Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:48:57.249Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | smallint | unsigned |  | NO | 0 |  |  |
| [UiNameColor](#uinamecolor) | int | signed |  | NO | 0 |  |  |
| [UiBarOverlayColor](#uibaroverlaycolor) | int | signed |  | NO | 0 |  |  |
| [UiBarBackgroundColor](#uibarbackgroundcolor) | int | signed |  | NO | 0 |  |  |
| [ChrSpecializationID](#chrspecializationid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [ArtifactCategoryID](#artifactcategoryid) | tinyint | unsigned |  | NO | 0 |  |  |
| [UiModelSceneID](#uimodelsceneid) | int | unsigned |  | NO | 0 |  |  |
| [SpellVisualKitID](#spellvisualkitid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### UiNameColor
*- no description -*
&nbsp;

### UiBarOverlayColor
*- no description -*
&nbsp;

### UiBarBackgroundColor
*- no description -*
&nbsp;

### ChrSpecializationID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ArtifactCategoryID
*- no description -*
&nbsp;

### UiModelSceneID
*- no description -*
&nbsp;

### SpellVisualKitID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


