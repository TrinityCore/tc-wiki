---
title: content_tuning_x_expected
description: 
published: true
date: 2023-10-06T19:24:22.848Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:03.705Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ExpectedStatModID](#expectedstatmodid) | int | signed |  | NO | 0 |  |  |
| [MinMythicPlusSeasonID](#minmythicplusseasonid) | int | signed |  | NO | 0 |  |  |
| [MaxMythicPlusSeasonID](#maxmythicplusseasonid) | int | signed |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ExpectedStatModID
*- no description -*
&nbsp;

### MinMythicPlusSeasonID
*- no description -*
&nbsp;

### MaxMythicPlusSeasonID
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


