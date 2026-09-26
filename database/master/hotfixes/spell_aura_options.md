---
title: spell_aura_options
description: 
published: true
date: 2022-11-21T21:19:33.280Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:46.515Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [CumulativeAura](#cumulativeaura) | smallint | unsigned |  | NO | 0 |  |  |
| [ProcCategoryRecovery](#proccategoryrecovery) | int | signed |  | NO | 0 |  |  |
| [ProcChance](#procchance) | tinyint | unsigned |  | NO | 0 |  |  |
| [ProcCharges](#proccharges) | int | signed |  | NO | 0 |  |  |
| [SpellProcsPerMinuteID](#spellprocsperminuteid) | smallint | unsigned |  | NO | 0 |  |  |
| [ProcTypeMask1](#proctypemask1) | int | signed |  | NO | 0 |  |  |
| [ProcTypeMask2](#proctypemask2) | int | signed |  | NO | 0 |  |  |
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

### CumulativeAura
*- no description -*
&nbsp;

### ProcCategoryRecovery
*- no description -*
&nbsp;

### ProcChance
*- no description -*
&nbsp;

### ProcCharges
*- no description -*
&nbsp;

### SpellProcsPerMinuteID
*- no description -*
&nbsp;

### ProcTypeMask1
*- no description -*
&nbsp;

### ProcTypeMask2
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


