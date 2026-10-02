---
title: playercreateinfo_skills
description:
published: true
date: 2023-07-12T09:40:43.110Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:39.414Z
---

This table holds information on what skills newly created characters should start out with. A character in this table is defined by his/her race and class combination.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [raceMask](#racemask) | int | unsigned | PRI | NO |  |  |  |
| [classMask](#classmask) | int | unsigned | PRI | NO |  |  |  |
| [skill](#skill) | smallint | unsigned | PRI | NO |  |  |  |
| [rank](#rank) | smallint | unsigned |  | NO | 0 |  |  |
| [comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |

&nbsp;
## Description of fields

### raceMask
Race id mask from [ChrRace ID](/files/DBC/335/chrraces#id). `0` is all races.
<!--@include: @/partial/335/chrraces.md{13,}-->

&nbsp;

### classMask
Class id mask from [ChrClass ID](/files/DBC/335/chrclasses#id). `0` is all classes.
<!--@include: @/partial/335/chrclasses.md{13,}-->

&nbsp;

### skill
A [SkillLine ID](/files/DBC/335/skillline#id) to start with.
&nbsp;

### rank
If the skill has ranks set in [SkillTiers](/files/DBC/335/skilltiers) the desired starting rank (and thus starting skill value) can be specified here as [SkillTiers Value](/files/DBC/335/skilltiers#value) index.
&nbsp;

### comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;
