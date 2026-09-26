---
title: character_glyphs
description: 
published: true
date: 2024-04-16T18:57:47.817Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:39.563Z
---

> Contains all the individual glyph data for each character.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
| [talentGroup](#talentgroup) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [glyph1](#glyph1-6) | smallint | unsigned |  | YES | 0 |  |  |
| [glyph2](#glyph1-6) | smallint | unsigned |  | YES | 0 |  |  |
| [glyph3](#glyph1-6) | smallint | unsigned |  | YES | 0 |  |  |
| [glyph4](#glyph1-6) | smallint | unsigned |  | YES | 0 |  |  |
| [glyph5](#glyph1-6) | smallint | unsigned |  | YES | 0 |  |  |
| [glyph6](#glyph1-6) | smallint | unsigned |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### talentGroup
* 0: first talent specialization
* 1: second talent specialization.
&nbsp;

### glyph\[1-6]
Contains a [GlyphPropery ID](/files/DBC/335/glyphproperties#id). This fields index is linked to [GlyphSlot Tooltip](/files/DBC/335/glyphslot#tooltip), constraining the glyph type of this index. 
&nbsp;

