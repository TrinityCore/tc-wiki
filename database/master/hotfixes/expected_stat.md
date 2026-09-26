---
title: expected_stat
description: 
published: true
date: 2022-11-21T21:13:59.286Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:20.605Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ExpansionID](#expansionid) | int | signed |  | NO | 0 |  |  |
| [CreatureHealth](#creaturehealth) | float |  |  | NO | 0 |  |  |
| [PlayerHealth](#playerhealth) | float |  |  | NO | 0 |  |  |
| [CreatureAutoAttackDps](#creatureautoattackdps) | float |  |  | NO | 0 |  |  |
| [CreatureArmor](#creaturearmor) | float |  |  | NO | 0 |  |  |
| [PlayerMana](#playermana) | float |  |  | NO | 0 |  |  |
| [PlayerPrimaryStat](#playerprimarystat) | float |  |  | NO | 0 |  |  |
| [PlayerSecondaryStat](#playersecondarystat) | float |  |  | NO | 0 |  |  |
| [ArmorConstant](#armorconstant) | float |  |  | NO | 0 |  |  |
| [CreatureSpellDamage](#creaturespelldamage) | float |  |  | NO | 0 |  |  |
| [Lvl](#lvl) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ExpansionID
*- no description -*
&nbsp;

### CreatureHealth
*- no description -*
&nbsp;

### PlayerHealth
*- no description -*
&nbsp;

### CreatureAutoAttackDps
*- no description -*
&nbsp;

### CreatureArmor
*- no description -*
&nbsp;

### PlayerMana
*- no description -*
&nbsp;

### PlayerPrimaryStat
*- no description -*
&nbsp;

### PlayerSecondaryStat
*- no description -*
&nbsp;

### ArmorConstant
*- no description -*
&nbsp;

### CreatureSpellDamage
*- no description -*
&nbsp;

### Lvl
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


