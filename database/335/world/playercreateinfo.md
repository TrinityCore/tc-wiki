---
title: playercreateinfo
description:
published: true
date: 2024-05-16T11:19:34.400Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:28.686Z
---

This table holds the start positions of each class-race combinations for all newly created characters.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [race](#race) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [class](#class) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [map](#map) | smallint | unsigned |  | NO | 0 |  |  |
| [zone](#zone) | int | unsigned |  | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
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

### map
The [Map ID](/files/DBC/335/map#id) the player will start on. It can not be instanceable.
&nbsp;

### zone
The start zone [AreaTable ID](/files/DBC/335/areatable#id).
> unused?
{.is-info}

&nbsp;

### position_x
The X position.
&nbsp;

### position_y
The Y position.
&nbsp;

### position_z
The Z position.
&nbsp;

### orientation
The direction the new character will be facing.
|--|--|--|
| North: | `0 / 2π` | 6.28319 |
| West: | `0.5π` | 1.57080 |
| South: | `π` | 3.14159 |
| East: | `1.5π` | 4.71239 |
{.dense}

&nbsp;

