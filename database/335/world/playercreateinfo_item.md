---
title: playercreateinfo_item
description:
published: true
date: 2024-05-16T11:19:34.415Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:36.750Z
---

This table is used for any custom items that you might want to give to characters on creation. I used to be used to hold the normal items that characters get as well, but now that info is read from [CharStartOutfit](/files/DBC/335/charstartoutfit)

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
The character's [ChrRace ID](/files/DBC/335/chrraces#id)
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
The character's [ChrClass ID](/files/DBC/335/chrclasses#id)
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
references [item_template.entry](../world/item_template#entry)
&nbsp;

### amount
* **amount** > 0: copies to add on creation
* **amount** < 0: copies to remove on creation
&nbsp;

