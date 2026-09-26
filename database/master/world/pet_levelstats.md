---
title: pet_levelstats
description: 
published: true
date: 2022-11-21T21:06:36.266Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:21.406Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [creature_entry](#creature_entry) | int | unsigned | PRI | NO |  |  |  |
| [level](#level) | tinyint | unsigned | PRI | NO |  |  |  |
| [hp](#hp) | smallint | unsigned |  | NO |  |  |  |
| [mana](#mana) | smallint | unsigned |  | NO |  |  |  |
| [armor](#armor) | int | unsigned |  | NO | 0 |  |  |
| [str](#str) | smallint | unsigned |  | NO |  |  |  |
| [agi](#agi) | smallint | unsigned |  | NO |  |  |  |
| [sta](#sta) | smallint | unsigned |  | NO |  |  |  |
| [inte](#inte) | smallint | unsigned |  | NO |  |  |  |
| [spi](#spi) | smallint | unsigned |  | NO |  |  |  |
&nbsp;
## Description of fields

### creature_entry
The pet's [creature_template.entry](../world/creature_template#entry). 
&nbsp;

### level
The pet level.
&nbsp;

### hp
The base health of the pet at currently selected **level**.
&nbsp;

### mana
The base mana of the pet at currently selected **level**.
&nbsp;

### armor
The base armor of the pet at currently selected **level**.
&nbsp;

### str
The base strength of the pet at currently selected **level**.
&nbsp;

### agi
The base agility of the pet at currently selected **level**.
&nbsp;

### sta
The base stamina of the pet at currently selected **level**.
&nbsp;

### inte
The base intellect of the pet at currently selected **level**.
&nbsp;

### spi
The base sprit of the pet at currently selected **level**.
&nbsp;


