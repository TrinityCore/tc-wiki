---
title: dungeon_encounter
description: 
published: true
date: 2022-12-19T18:38:00.420Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:02.098Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [MapID](#mapid) | smallint | signed |  | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | int | signed |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | signed |  | NO | 0 |  |  |
| [CompleteWorldStateID](#completeworldstateid) | int | signed |  | NO | 0 |  |  |
| [Bit](#bit) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [SpellIconFileID](#spelliconfileid) | int | signed |  | NO | 0 |  |  |
| [Faction](#faction) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### CompleteWorldStateID
*- no description -*
&nbsp;

### Bit
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SpellIconFileID
*- no description -*
&nbsp;

### Faction
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

