---
title: char_base_info
description: 
published: true
date: 2024-05-15T17:53:34.441Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2024-05-15T12:31:08.195Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [RaceID](#raceid) | tinyint | signed |  | NO | 0 |  |  |
| [ClassID](#classid) | tinyint | signed |  | NO | 0 |  |  |
| [OtherFactionRaceID](#otherfactionraceid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### RaceID
*- no description -*
&nbsp;

### ClassID
*- no description -*
&nbsp;

### OtherFactionRaceID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

