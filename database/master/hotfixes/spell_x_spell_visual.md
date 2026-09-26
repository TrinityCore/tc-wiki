---
title: spell_x_spell_visual
description: 
published: true
date: 2022-12-19T18:39:11.299Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:31.254Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [SpellVisualID](#spellvisualid) | int | unsigned |  | NO | 0 |  |  |
| [Probability](#probability) | float |  |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [Priority](#priority) | int | signed |  | NO | 0 |  |  |
| [SpellIconFileID](#spelliconfileid) | int | signed |  | NO | 0 |  |  |
| [ActiveIconFileID](#activeiconfileid) | int | signed |  | NO | 0 |  |  |
| [ViewerUnitConditionID](#viewerunitconditionid) | smallint | unsigned |  | NO | 0 |  |  |
| [ViewerPlayerConditionID](#viewerplayerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [CasterUnitConditionID](#casterunitconditionid) | smallint | unsigned |  | NO | 0 |  |  |
| [CasterPlayerConditionID](#casterplayerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### SpellVisualID
*- no description -*
&nbsp;

### Probability
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Priority
*- no description -*
&nbsp;

### SpellIconFileID
*- no description -*
&nbsp;

### ActiveIconFileID
*- no description -*
&nbsp;

### ViewerUnitConditionID
*- no description -*
&nbsp;

### ViewerPlayerConditionID
*- no description -*
&nbsp;

### CasterUnitConditionID
*- no description -*
&nbsp;

### CasterPlayerConditionID
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

