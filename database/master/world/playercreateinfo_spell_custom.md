---
title: playercreateinfo_spell_custom
description:
published: true
date: 2022-11-21T21:07:28.235Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:31.272Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [racemask](#racemask) | bigint | unsigned | PRI | NO |  |  |  |
| [classmask](#classmask) | int | unsigned | PRI | NO | 0 |  |  |
| [Spell](#spell) | int | unsigned | PRI | NO | 0 |  |  |
| [Note](#note) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### racemask
Race mask of [ChrRace IDs](https://wago.tools/db2/chrraces). `0` is all races.
| Value | Flag   | Name      |
|-------|--------|-----------|
|     1 | 0x0001 | Human     |
|     2 | 0x0002 | Orc       |
|     4 | 0x0004 | Dwarf     |
|     8 | 0x0008 | Night Elf |
|    16 | 0x0010 | Undead    |
|    32 | 0x0020 | Tauren    |
|    64 | 0x0040 | Gnome     |
|   128 | 0x0080 | Troll     |
|   512 | 0x0200 | Blood Elf |
|  1024 | 0x0400 | Draenei   |
{.dense}

&nbsp;

### classmask
Class mask of [ChrClass IDs](https://wago.tools/db2/chrclasses). `0` is all classes.
| Value | Flag   | Name         |
|-------|--------|--------------|
|     1 | 0x0001 | Warrior      |
|     2 | 0x0002 | Paladin      |
|     4 | 0x0004 | Hunter       |
|     8 | 0x0008 | Rogue        |
|    16 | 0x0010 | Priest       |
|    32 | 0x0020 | Death Knight |
|    64 | 0x0040 | Shaman       |
|   128 | 0x0080 | Mage         |
|   256 | 0x0100 | Warlock      |
|  1024 | 0x0400 | Druid        |
{.dense}

&nbsp;

### Spell
A [Spell ID](https://wago.tools/db2/spell) to start with.
&nbsp;

### Note
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

