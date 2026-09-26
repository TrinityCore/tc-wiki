---
title: spell_power
description: 
published: true
date: 2022-12-19T18:39:07.759Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:01:50.953Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [ManaCost](#manacost) | int | signed |  | NO | 0 |  |  |
| [ManaCostPerLevel](#manacostperlevel) | int | signed |  | NO | 0 |  |  |
| [ManaPerSecond](#manapersecond) | int | signed |  | NO | 0 |  |  |
| [PowerDisplayID](#powerdisplayid) | int | unsigned |  | NO | 0 |  |  |
| [AltPowerBarID](#altpowerbarid) | int | signed |  | NO | 0 |  |  |
| [PowerCostPct](#powercostpct) | float |  |  | NO | 0 |  |  |
| [PowerCostMaxPct](#powercostmaxpct) | float |  |  | NO | 0 |  |  |
| [OptionalCostPct](#optionalcostpct) | float |  |  | NO | 0 |  |  |
| [PowerPctPerSecond](#powerpctpersecond) | float |  |  | NO | 0 |  |  |
| [PowerType](#powertype) | tinyint | signed |  | NO | 0 |  |  |
| [RequiredAuraSpellID](#requiredauraspellid) | int | signed |  | NO | 0 |  |  |
| [OptionalCost](#optionalcost) | int | unsigned |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### ManaCost
*- no description -*
&nbsp;

### ManaCostPerLevel
*- no description -*
&nbsp;

### ManaPerSecond
*- no description -*
&nbsp;

### PowerDisplayID
*- no description -*
&nbsp;

### AltPowerBarID
*- no description -*
&nbsp;

### PowerCostPct
*- no description -*
&nbsp;

### PowerCostMaxPct
*- no description -*
&nbsp;

### OptionalCostPct
*- no description -*
&nbsp;

### PowerPctPerSecond
*- no description -*
&nbsp;

### PowerType
*- no description -*
&nbsp;

### RequiredAuraSpellID
*- no description -*
&nbsp;

### OptionalCost
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

