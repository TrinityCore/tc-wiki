---
title: expected_stat_mod
description: 
published: true
date: 2022-11-21T21:14:01.282Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:23.288Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [CreatureHealthMod](#creaturehealthmod) | float |  |  | NO | 0 |  |  |
| [PlayerHealthMod](#playerhealthmod) | float |  |  | NO | 0 |  |  |
| [CreatureAutoAttackDPSMod](#creatureautoattackdpsmod) | float |  |  | NO | 0 |  |  |
| [CreatureArmorMod](#creaturearmormod) | float |  |  | NO | 0 |  |  |
| [PlayerManaMod](#playermanamod) | float |  |  | NO | 0 |  |  |
| [PlayerPrimaryStatMod](#playerprimarystatmod) | float |  |  | NO | 0 |  |  |
| [PlayerSecondaryStatMod](#playersecondarystatmod) | float |  |  | NO | 0 |  |  |
| [ArmorConstantMod](#armorconstantmod) | float |  |  | NO | 0 |  |  |
| [CreatureSpellDamageMod](#creaturespelldamagemod) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### CreatureHealthMod
*- no description -*
&nbsp;

### PlayerHealthMod
*- no description -*
&nbsp;

### CreatureAutoAttackDPSMod
*- no description -*
&nbsp;

### CreatureArmorMod
*- no description -*
&nbsp;

### PlayerManaMod
*- no description -*
&nbsp;

### PlayerPrimaryStatMod
*- no description -*
&nbsp;

### PlayerSecondaryStatMod
*- no description -*
&nbsp;

### ArmorConstantMod
*- no description -*
&nbsp;

### CreatureSpellDamageMod
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


