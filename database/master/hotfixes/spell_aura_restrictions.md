---
title: spell_aura_restrictions
description: 
published: true
date: 2022-12-19T18:39:00.853Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:49.225Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | int | signed |  | NO | 0 |  |  |
| [CasterAuraState](#casteraurastate) | int | signed |  | NO | 0 |  |  |
| [TargetAuraState](#targetaurastate) | int | signed |  | NO | 0 |  |  |
| [ExcludeCasterAuraState](#excludecasteraurastate) | int | signed |  | NO | 0 |  |  |
| [ExcludeTargetAuraState](#excludetargetaurastate) | int | signed |  | NO | 0 |  |  |
| [CasterAuraSpell](#casterauraspell) | int | signed |  | NO | 0 |  |  |
| [TargetAuraSpell](#targetauraspell) | int | signed |  | NO | 0 |  |  |
| [ExcludeCasterAuraSpell](#excludecasterauraspell) | int | signed |  | NO | 0 |  |  |
| [ExcludeTargetAuraSpell](#excludetargetauraspell) | int | signed |  | NO | 0 |  |  |
| [CasterAuraType](#casterauratype) | int | signed |  | NO | 0 |  |  |
| [TargetAuraType](#targetauratype) | int | signed |  | NO | 0 |  |  |
| [ExcludeCasterAuraType](#excludecasterauratype) | int | signed |  | NO | 0 |  |  |
| [ExcludeTargetAuraType](#excludetargetauratype) | int | signed |  | NO | 0 |  |  |
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

### CasterAuraState
*- no description -*
&nbsp;

### TargetAuraState
*- no description -*
&nbsp;

### ExcludeCasterAuraState
*- no description -*
&nbsp;

### ExcludeTargetAuraState
*- no description -*
&nbsp;

### CasterAuraSpell
*- no description -*
&nbsp;

### TargetAuraSpell
*- no description -*
&nbsp;

### ExcludeCasterAuraSpell
*- no description -*
&nbsp;

### ExcludeTargetAuraSpell
*- no description -*
&nbsp;

### CasterAuraType
*- no description -*
&nbsp;

### TargetAuraType
*- no description -*
&nbsp;

### ExcludeCasterAuraType
*- no description -*
&nbsp;

### ExcludeTargetAuraType
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

