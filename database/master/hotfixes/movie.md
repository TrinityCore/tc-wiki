---
title: movie
description: 
published: true
date: 2024-02-11T20:02:23.468Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:58:21.511Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Volume](#volume) | tinyint | unsigned |  | NO | 0 |  |  |
| [KeyID](#keyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [AudioFileDataID](#audiofiledataid) | int | unsigned |  | NO | 0 |  |  |
| [SubtitleFileDataID](#subtitlefiledataid) | int | unsigned |  | NO | 0 |  |  |
| [SubtitleFileFormat](#subtitlefileformat) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Volume
*- no description -*
&nbsp;

### KeyID
*- no description -*
&nbsp;

### AudioFileDataID
*- no description -*
&nbsp;

### SubtitleFileDataID
*- no description -*
&nbsp;

### SubtitleFileFormat
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

