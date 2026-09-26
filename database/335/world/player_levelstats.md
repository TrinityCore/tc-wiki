---
title: player_levelstats
description: 
published: true
date: 2026-09-15T13:50:59.929Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:20.624Z
---

This table holds information on what stats are gained by characters when they level up. Each race-class combination has different level stats. All of the values in this table signify only the base stats of the race-class combination at a specific level.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [race](#race) | tinyint | unsigned | PRI | NO |  |  |  |
| [class](#class) | tinyint | unsigned | PRI | NO |  |  |  |
| [level](#level) | tinyint | unsigned | PRI | NO |  |  |  |
| [str](#str) | smallint | unsigned |  | NO |  |  | strength |
| [agi](#agi) | smallint | unsigned |  | NO |  |  | agility |
| [sta](#sta) | smallint | unsigned |  | NO |  |  | stamina |
| [inte](#inte) | smallint | unsigned |  | NO |  |  | intellect |
| [spi](#spi) | smallint | unsigned |  | NO |  |  | spirit |
&nbsp;
## Description of fields

### race
The characters [ChrRace ID](/files/DBC/335/chrraces#id). This field along with **class** defines what stats to be applied on the character.
| ID | Name      |
|----|-----------|
|  1 | Human     |
|  2 | Orc       |
|  3 | Dwarf     |
|  4 | Night Elf |
|  5 | Undead    |
|  6 | Tauren    |
|  7 | Gnome     |
|  8 | Troll     |
| 10 | Blood Elf |
| 11 | Draenei   |
{.dense}

&nbsp;

### class
The characters [ChrClass ID](/files/DBC/335/chrclasses#id). This field along with **race** defines what stats to be applied on the character.
| ID | Name         |
|----|--------------|
|  1 | Warrior      |
|  2 | Paladin      |
|  3 | Hunter       |
|  4 | Rogue        |
|  5 | Priest       |
|  6 | Death Knight |
|  7 | Shaman       |
|  8 | Mage         |
|  9 | Warlock      |
| 11 | Druid        |
{.dense}

&nbsp;

### level
The level at which the stats should be applied.
&nbsp;

### str
The base strength of the character.
&nbsp;

### agi
The base agility of the character.
&nbsp;

### sta
The base stamina of the character.
&nbsp;

### inte
The base intellect of the character.
&nbsp;

### spi
The base spirit of the character.
&nbsp;

