---
title: friendship_reputation
description: 
published: true
date: 2022-11-21T21:14:13.257Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:39.185Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [StandingModified](#standingmodified) | text |  |  | YES | NULL |  |  |
| [StandingChanged](#standingchanged) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [FactionID](#factionid) | int | signed |  | NO | 0 |  |  |
| [TextureFileID](#texturefileid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Description
*- no description -*
&nbsp;

### StandingModified
*- no description -*
&nbsp;

### StandingChanged
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### FactionID
*- no description -*
&nbsp;

### TextureFileID
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


