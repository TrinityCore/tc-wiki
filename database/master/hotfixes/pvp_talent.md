---
title: pvp_talent
description: 
published: true
date: 2024-02-11T20:02:25.010Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:59:10.499Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SpecID](#specid) | int | signed |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [OverridesSpellID](#overridesspellid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ActionBarSpellID](#actionbarspellid) | int | signed |  | NO | 0 |  |  |
| [PvpTalentCategoryID](#pvptalentcategoryid) | int | signed |  | NO | 0 |  |  |
| [LevelRequired](#levelrequired) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Description
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### SpecID
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### OverridesSpellID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ActionBarSpellID
*- no description -*
&nbsp;

### PvpTalentCategoryID
*- no description -*
&nbsp;

### LevelRequired
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

