---
title: spell_cooldowns
description: 
published: true
date: 2022-12-19T18:39:04.197Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:01:07.888Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint | unsigned |  | NO | 0 |  |  |
| [CategoryRecoveryTime](#categoryrecoverytime) | int | signed |  | NO | 0 |  |  |
| [RecoveryTime](#recoverytime) | int | signed |  | NO | 0 |  |  |
| [StartRecoveryTime](#startrecoverytime) | int | signed |  | NO | 0 |  |  |
| [AuraSpellID](#auraspellid) | int | signed |  | NO | 0 |  |  |
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

### CategoryRecoveryTime
*- no description -*
&nbsp;

### RecoveryTime
*- no description -*
&nbsp;

### StartRecoveryTime
*- no description -*
&nbsp;

### AuraSpellID
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

