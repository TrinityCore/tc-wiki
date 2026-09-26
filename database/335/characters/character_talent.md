---
title: character_talent
description:
published: true
date: 2023-07-29T19:20:21.424Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:27.602Z
---

> Contains all the individual talent data for each character. This is only used as a storage table, values get read from here and written to [character_spell](/database/335/characters/character_spell), and vice-versa, when a player switches specs.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO |  |  |  |
| [spell](#spell) | mediumint | unsigned | PRI | NO |  |  |  |
| [talentGroup](#talentgroup) | tinyint | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### spell
The [Spell ID](/files/DBC/335/spell#id) known to the character.
&nbsp;

### talentGroup
* 0: characters fist spec
* 1: characters second spec
&nbsp;

