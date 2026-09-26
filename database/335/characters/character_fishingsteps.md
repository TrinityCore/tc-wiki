---
title: character_fishingsteps
description: 
published: true
date: 2023-07-27T17:59:04.452Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:34.167Z
---

> This table holds the number of fishing attempts since last skill up per player. Fishing requires a fixed amount of attempts per skill level to rank up.
> (see [Issue #17528](https://github.com/TrinityCore/TrinityCore/pull/17528))
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Global Unique Identifier |
| [fishingSteps](#fishingsteps) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### fishingSteps
Fishing attempts since last skill up.
&nbsp;

