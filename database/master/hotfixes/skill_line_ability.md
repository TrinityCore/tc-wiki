---
title: skill_line_ability
description: 
published: true
date: 2024-09-05T22:46:04.765Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:27.762Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [RaceMask](#racemask) | bigint | signed |  | NO | 0 |  |  |
| [AbilityVerb](#abilityverb) | text |  |  | YES | NULL |  |  |
| [AbilityAllVerb](#abilityallverb) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SkillLine](#skillline) | smallint | signed |  | NO | 0 |  |  |
| [Spell](#spell) | int | signed |  | NO | 0 |  |  |
| [MinSkillLineRank](#minskilllinerank) | smallint | signed |  | NO | 0 |  |  |
| [ClassMask](#classmask) | int | signed |  | NO | 0 |  |  |
| [SupercedesSpell](#supercedesspell) | int | signed |  | NO | 0 |  |  |
| [AcquireMethod](#acquiremethod) | int | signed |  | NO | 0 |  |  |
| [TrivialSkillLineRankHigh](#trivialskilllinerankhigh) | smallint | signed |  | NO | 0 |  |  |
| [TrivialSkillLineRankLow](#trivialskilllineranklow) | smallint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [NumSkillUps](#numskillups) | tinyint | signed |  | NO | 0 |  |  |
| [UniqueBit](#uniquebit) | smallint | signed |  | NO | 0 |  |  |
| [TradeSkillCategoryID](#tradeskillcategoryid) | smallint | signed |  | NO | 0 |  |  |
| [SkillupSkillLineID](#skillupskilllineid) | smallint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### RaceMask
*- no description -*
&nbsp;

### AbilityVerb
*- no description -*
&nbsp;

### AbilityAllVerb
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### SkillLine
*- no description -*
&nbsp;

### Spell
*- no description -*
&nbsp;

### MinSkillLineRank
*- no description -*
&nbsp;

### ClassMask
*- no description -*
&nbsp;

### SupercedesSpell
*- no description -*
&nbsp;

### AcquireMethod
*- no description -*
&nbsp;

### TrivialSkillLineRankHigh
*- no description -*
&nbsp;

### TrivialSkillLineRankLow
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### NumSkillUps
*- no description -*
&nbsp;

### UniqueBit
*- no description -*
&nbsp;

### TradeSkillCategoryID
*- no description -*
&nbsp;

### SkillupSkillLineID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

