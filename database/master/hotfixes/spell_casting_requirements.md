---
title: spell_casting_requirements
description: 
published: true
date: 2022-12-19T18:39:02.534Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:54.553Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [FacingCasterFlags](#facingcasterflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinFactionID](#minfactionid) | smallint | unsigned |  | NO | 0 |  |  |
| [MinReputation](#minreputation) | int | signed |  | NO | 0 |  |  |
| [RequiredAreasID](#requiredareasid) | smallint | unsigned |  | NO | 0 |  |  |
| [RequiredAuraVision](#requiredauravision) | tinyint | unsigned |  | NO | 0 |  |  |
| [RequiresSpellFocus](#requiresspellfocus) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### FacingCasterFlags
*- no description -*
&nbsp;

### MinFactionID
*- no description -*
&nbsp;

### MinReputation
*- no description -*
&nbsp;

### RequiredAreasID
*- no description -*
&nbsp;

### RequiredAuraVision
*- no description -*
&nbsp;

### RequiresSpellFocus
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

