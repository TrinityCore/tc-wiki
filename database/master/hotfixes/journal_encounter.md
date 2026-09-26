---
title: journal_encounter
description: 
published: true
date: 2022-11-21T21:32:32.305Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T19:56:20.170Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [MapX](#mapx) | float |  |  | NO | 0 |  |  |
| [MapY](#mapy) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [JournalInstanceID](#journalinstanceid) | smallint | unsigned |  | NO | 0 |  |  |
| [DungeonEncounterID](#dungeonencounterid) | smallint | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | unsigned |  | NO | 0 |  |  |
| [FirstSectionID](#firstsectionid) | smallint | unsigned |  | NO | 0 |  |  |
| [UiMapID](#uimapid) | smallint | unsigned |  | NO | 0 |  |  |
| [MapDisplayConditionID](#mapdisplayconditionid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [DifficultyMask](#difficultymask) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name {#name-alt}
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### MapX
*- no description -*
&nbsp;

### MapY
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### JournalInstanceID
*- no description -*
&nbsp;

### DungeonEncounterID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### FirstSectionID
*- no description -*
&nbsp;

### UiMapID
*- no description -*
&nbsp;

### MapDisplayConditionID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### DifficultyMask
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

