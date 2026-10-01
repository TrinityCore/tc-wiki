---
title: TalentTab.dbc
description:
published: true
date: 2023-10-07T22:12:20.541Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:08:33.366Z
---

# TalentTab.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/TalentTab)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Name_0](#name-alt) | string |  |
| 2 | [Name_1](#name-alt) | string |  |
| 3 | [Name_2](#name-alt) | string |  |
| 4 | [Name_3](#name-alt) | string |  |
| 5 | [Name_4](#name-alt) | string |  |
| 6 | [Name_5](#name-alt) | string |  |
| 7 | [Name_6](#name-alt) | string |  |
| 8 | [Name_7](#name-alt) | string |  |
| 9 | [Name_8](#name-alt) | string |  |
| 10 | [Name_9](#name-alt) | string |  |
| 11 | [Name_10](#name-alt) | string |  |
| 12 | [Name_11](#name-alt) | string |  |
| 13 | [Name_12](#name-alt) | string |  |
| 14 | [Name_13](#name-alt) | string |  |
| 15 | [Name_14](#name-alt) | string |  |
| 16 | [Name_15](#name-alt) | string |  |
| 17 | [Name_lang_mask](#name-alt) | uint32 |  |
| 18 | [SpellIconID](#spelliconid) | unit32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id-alt) |
| 19 | [RaceMask](#racemask) | uint32 | [ChrRaces.dbc/0](/files/DBC/335/chrraces#id-alt) |
| 20 | [ClassMask](#classmask) | uint32 | [ChrClasses.dbc/0](/files/DBC/335/chrclasses#id-alt) |
| 21 | [PetTalentMask](#pettalentmask) | uint32 | [CreatureFamily.dbc/8](/files/DBC/335/creaturefamily#pettalenttype) |
| 22 | [OrderIndex](#orderindex) | uint32 |  |
| 23 | [BackgroundFile](#backgroundfile) | string |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name {#name-alt}
:x: <code>Col: 1 &ndash; 17 ([Loc](/how-to/localization))</code>

*- no description -*
&nbsp;

### SpellIconID
:x: <code>Col: 18 (unit32)</code>

*- no description -*
&nbsp;

### RaceMask
:x: <code>Col: 19 (uint32)</code>

<!--@include: @/partial/335/chrraces.md{13,}-->

0 for pets
&nbsp;

### ClassMask
<code>Col: 20 (uint32)</code>

<!--@include: @/partial/335/chrclasses.md{13,}-->

0 for pets
&nbsp;

### PetTalentMask
<code>Col: 21 (uint32)</code>

Its a bit mask: `1 << PetTalentType`

0 for player chars
&nbsp;

### OrderIndex
<code>Col: 22 (uint32)</code>

*- no description -*
&nbsp;

### BackgroundFile
:x: <code>Col: 23 (string)</code>

`interface\talentframe\*`
&nbsp;
