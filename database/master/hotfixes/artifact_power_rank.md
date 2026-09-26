---
title: artifact_power_rank
description: 
published: true
date: 2022-11-21T21:10:59.256Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:49:23.258Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [RankIndex](#rankindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [ItemBonusListID](#itembonuslistid) | smallint | unsigned |  | NO | 0 |  |  |
| [AuraPointsOverride](#aurapointsoverride) | float |  |  | NO | 0 |  |  |
| [ArtifactPowerID](#artifactpowerid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### RankIndex
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### ItemBonusListID
*- no description -*
&nbsp;

### AuraPointsOverride
*- no description -*
&nbsp;

### ArtifactPowerID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


