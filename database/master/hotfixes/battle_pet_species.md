---
title: battle_pet_species
description: 
published: true
date: 2022-12-19T18:37:32.875Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:50:30.906Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [SourceText](#sourcetext) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [CreatureID](#creatureid) | int | signed |  | NO | 0 |  |  |
| [SummonSpellID](#summonspellid) | int | signed |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int | signed |  | NO | 0 |  |  |
| [PetTypeEnum](#pettypeenum) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [SourceTypeEnum](#sourcetypeenum) | tinyint | signed |  | NO | 0 |  |  |
| [CardUIModelSceneID](#carduimodelsceneid) | int | signed |  | NO | 0 |  |  |
| [LoadoutUIModelSceneID](#loadoutuimodelsceneid) | int | signed |  | NO | 0 |  |  |
| [CovenantID](#covenantid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Description
*- no description -*
&nbsp;

### SourceText
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### CreatureID
*- no description -*
&nbsp;

### SummonSpellID
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### PetTypeEnum
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SourceTypeEnum
*- no description -*
&nbsp;

### CardUIModelSceneID
*- no description -*
&nbsp;

### LoadoutUIModelSceneID
*- no description -*
&nbsp;

### CovenantID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

