---
title: skill_line
description: 
published: true
date: 2024-09-05T22:46:04.718Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:25.040Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [DisplayName](#displayname) | text |  |  | YES | NULL |  |  |
| [AlternateVerb](#alternateverb) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [HordeDisplayName](#hordedisplayname) | text |  |  | YES | NULL |  |  |
| [OverrideSourceInfoDisplayName](#overridesourceinfodisplayname) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [CategoryID](#categoryid) | tinyint | signed |  | NO | 0 |  |  |
| [SpellIconFileID](#spelliconfileid) | int | signed |  | NO | 0 |  |  |
| [CanLink](#canlink) | tinyint | signed |  | NO | 0 |  |  |
| [ParentSkillLineID](#parentskilllineid) | int | unsigned |  | NO | 0 |  |  |
| [ParentTierIndex](#parenttierindex) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [SpellBookSpellID](#spellbookspellid) | int | signed |  | NO | 0 |  |  |
| [ExpansionNameSharedStringID](#expansionnamesharedstringid) | int | signed |  | NO | 0 |  |  |
| [HordeExpansionNameSharedStringID](#hordeexpansionnamesharedstringid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### DisplayName
*- no description -*
&nbsp;

### AlternateVerb
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### HordeDisplayName
*- no description -*
&nbsp;

### OverrideSourceInfoDisplayName
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### CategoryID
*- no description -*
&nbsp;

### SpellIconFileID
*- no description -*
&nbsp;

### CanLink
*- no description -*
&nbsp;

### ParentSkillLineID
*- no description -*
&nbsp;

### ParentTierIndex
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SpellBookSpellID
*- no description -*
&nbsp;

### ExpansionNameSharedStringID
*- no description -*
&nbsp;

### HordeExpansionNameSharedStringID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

