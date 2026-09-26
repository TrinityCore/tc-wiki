---
title: artifact_appearance_set
description: 
published: true
date: 2022-11-21T21:10:45.299Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:49:05.167Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DisplayIndex](#displayindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [UiCameraID](#uicameraid) | smallint | unsigned |  | NO | 0 |  |  |
| [AltHandUICameraID](#althanduicameraid) | smallint | unsigned |  | NO | 0 |  |  |
| [ForgeAttachmentOverride](#forgeattachmentoverride) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [ArtifactID](#artifactid) | int | unsigned |  | NO | 0 |  |  |
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

### DisplayIndex
*- no description -*
&nbsp;

### UiCameraID
*- no description -*
&nbsp;

### AltHandUICameraID
*- no description -*
&nbsp;

### ForgeAttachmentOverride
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ArtifactID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


