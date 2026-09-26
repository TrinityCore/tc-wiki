---
title: GlyphProperties.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# GlyphProperties.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GlyphProperties)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SpellID](#spellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id-alt) |
| 2 | [GlyphSlotFlags](#glyphslotflags) | uint32 |  |
| 3 | [SpellIconID](#spelliconid) | uint32 | [SpellIcon.dbc/0](/files/DBC/335/spellicon#id-alt) |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SpellID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### GlyphSlotFlags
<code>Col: 2 (uint32)</code>

* 0: Minor
* 1: Major
&nbsp;

### SpellIconID
<code>Col: 3 (uint32)</code>

Rune displayed in glyphs tab.
&nbsp;

