---
title: reward_pack
description: 
published: true
date: 2022-11-21T21:18:55.255Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:59:55.809Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [CharTitleID](#chartitleid) | int | signed |  | NO | 0 |  |  |
| [Money](#money) | int | unsigned |  | NO | 0 |  |  |
| [ArtifactXPDifficulty](#artifactxpdifficulty) | tinyint | signed |  | NO | 0 |  |  |
| [ArtifactXPMultiplier](#artifactxpmultiplier) | float |  |  | NO | 0 |  |  |
| [ArtifactXPCategoryID](#artifactxpcategoryid) | tinyint | unsigned |  | NO | 0 |  |  |
| [TreasurePickerID](#treasurepickerid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### CharTitleID
*- no description -*
&nbsp;

### Money
*- no description -*
&nbsp;

### ArtifactXPDifficulty
*- no description -*
&nbsp;

### ArtifactXPMultiplier
*- no description -*
&nbsp;

### ArtifactXPCategoryID
*- no description -*
&nbsp;

### TreasurePickerID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


