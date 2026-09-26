---
title: player_classlevelstats
description: 
published: true
date: 2025-08-13T22:27:26.642Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:31.733Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [class](#class) | tinyint | unsigned | PRI | NO |  |  |  |
| [level](#level) | tinyint | unsigned | PRI | NO |  |  |  |
| [str](#str) | smallint | unsigned |  | NO |  |  | strength |
| [agi](#agi) | smallint | unsigned |  | NO |  |  | agility |
| [sta](#sta) | smallint | unsigned |  | NO |  |  | stamina |
| [inte](#inte) | smallint | unsigned |  | NO |  |  | intellect |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### class
| Class | ID |
| --- | --- |
| Warrior | 1 |
| Paladin | 2 |
| Hunter | 3 |
| Rogue | 4 |
| Priest | 5 |
| Death Knight | 6 |
| Shaman | 7 |
| Mage | 8 |
| Warlock | 9 |
| Monk | 10 |
| Druid | 11 |
| Demon Hunter | 12 |
| Evoker | 13 |
&nbsp;

### level
The level at which the stats should be applied.
&nbsp;

### str
Strength value
&nbsp;

### agi
Agility value
&nbsp;

### sta
Stamina value
&nbsp;

### inte
Intellect value
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


