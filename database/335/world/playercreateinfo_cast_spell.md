---
title: playercreateinfo_cast_spell
description:
published: true
date: 2024-05-16T11:19:34.406Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:34.088Z
---

This table holds information on spells a new character casts when he logs in for the first time. Each race-class combination can have a different set of spells to cast.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [raceMask](#racemask) | int | unsigned |  | NO | 0 |  |  |
| [classMask](#classmask) | int | unsigned |  | NO | 0 |  |  |
| [spell](#spell) | int | unsigned |  | NO | 0 |  |  |
| [note](#note) | varchar(255) |  |  | YES | NULL |  |  |

&nbsp;
## Description of fields

### raceMask
Race mask of [ChrRace IDs](/files/DBC/335/chrraces#id-alt). `0` is all races.

<!--@include: @/partial/335/chrraces.md{13,}-->

&nbsp;

### classMask
Class mask of [ChrClass IDs](/files/DBC/335/chrclasses#id-alt). `0` is all classes.
<!--@include: @/partial/335/chrclasses.md{13,}-->

&nbsp;

### spell
[Spell ID](/files/DBC/335/spell#id-alt) to cast on first log in.
&nbsp;

### note
This field is for any comment you want to make. It is arbitrary text.
&nbsp;
