---
title: journal_encounter_section
description: 
published: true
date: 2022-11-21T21:32:36.357Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T19:56:26.332Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Title](#title) | text |  |  | YES | NULL |  |  |
| [BodyText](#bodytext) | text |  |  | YES | NULL |  |  |
| [JournalEncounterID](#journalencounterid) | smallint | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [ParentSectionID](#parentsectionid) | smallint | unsigned |  | NO | 0 |  |  |
| [FirstChildSectionID](#firstchildsectionid) | smallint | unsigned |  | NO | 0 |  |  |
| [NextSiblingSectionID](#nextsiblingsectionid) | smallint | unsigned |  | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [IconCreatureDisplayInfoID](#iconcreaturedisplayinfoid) | int | unsigned |  | NO | 0 |  |  |
| [UiModelSceneID](#uimodelsceneid) | int | signed |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [IconFlags](#iconflags) | int | signed |  | NO | 0 |  |  |
| [DifficultyMask](#difficultymask) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Title
*- no description -*
&nbsp;

### BodyText
*- no description -*
&nbsp;

### JournalEncounterID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### ParentSectionID
*- no description -*
&nbsp;

### FirstChildSectionID
*- no description -*
&nbsp;

### NextSiblingSectionID
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### IconCreatureDisplayInfoID
*- no description -*
&nbsp;

### UiModelSceneID
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### IconFlags
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

