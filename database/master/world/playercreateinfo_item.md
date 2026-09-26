---
title: playercreateinfo_item
description:
published: true
date: 2022-11-21T21:07:26.266Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:28.684Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [race](#race) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [class](#class) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [itemid](#itemid) | int | unsigned | PRI | NO | 0 |  |  |
| [amount](#amount) | tinyint | signed |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### race
The character's [ChrRace ID](https://wago.tools/db2/chrraces)
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
The character's [ChrClass ID](https://wago.tools/db2/chrclasses)
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

### itemid
references [ItemID](https://wago.tools/db2/itemsparse)
&nbsp;

### amount
* **amount** > 0: copies to add on creation
* **amount** < 0: copies to remove on creation
&nbsp;

