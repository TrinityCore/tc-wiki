---
title: playercreateinfo_spell_custom
description:
published: true
date: 2024-05-16T11:19:34.425Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:42.105Z
---

This table holds information on what spells newly created characters should start out with if the `PlayerStart.AllSpells` setting in enabled in TrinityCore.conf. A character in this table is defined by his/her race and class combination.

Please note you'll have to set `PlayerStart.AllSpells = 1` in config, else this table will not have any effect.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [racemask](#racemask) | int | unsigned | PRI | NO | 0 |  |  |
| [classmask](#classmask) | int | unsigned | PRI | NO | 0 |  |  |
| [Spell](#spell) | int | unsigned | PRI | NO | 0 |  |  |
| [Note](#note) | varchar(255) |  |  | YES | NULL |  |  |

&nbsp;
## Description of fields

### racemask
Race mask of [ChrRace IDs](/files/DBC/335/chrraces#id). `0` is all races.
<!--@include: @/partial/335/chrraces.md{13,}-->

&nbsp;

### classmask
Class mask of [ChrClass IDs](/files/DBC/335/chrclasses#id). `0` is all classes.
<!--@include: @/partial/335/chrclasses.md{13,}-->

&nbsp;

### Spell
A [Spell ID](/files/DBC/335/spell#id) to start with.
&nbsp;

### Note
This field is for any comment you want to make. It is arbitrary text.
&nbsp;
