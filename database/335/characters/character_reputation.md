---
title: character_reputation
description:
published: true
date: 2023-07-29T18:43:37.897Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:11.525Z
---

> This table holds the reputation information for each character.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [faction](#faction) | smallint | unsigned | PRI | NO | 0 |  |  |
| [standing](#standing) | int | signed |  | NO | 0 |  |  |
| [flags](#flags) | smallint | unsigned |  | NO | 0 |  |  |

&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### faction
The [Faction ID](/files/DBC/335/faction#id-alt) that the character has the given reputation in.
&nbsp;

### standing
The current reputation value that the character has.
&nbsp;

### flags
This field is a bitmask containing flags that apply to the faction and how it's displayed to the character. Just like any flag field, you can combine flags by adding them together. If this field is 0, then it is not shown in the reputation list in-game.

<!--@include: @/partial/335/reputation-flags.md-->

&nbsp;
