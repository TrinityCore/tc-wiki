---
title: character_instance
description: 
published: true
date: 2023-07-27T19:23:35.101Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:44.864Z
---

> Contains the instance data for characters.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [instance](#instance) | int | unsigned | PRI | NO | 0 |  |  |
| [permanent](#permanent) | tinyint | unsigned |  | NO | 0 |  |  |
| [extendState](#extendstate) | tinyint | unsigned |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### instance
The [instance id](/database/335/characters/instance) of the dungeon or raid.
&nbsp;

### permanent
A player is bound to the instance only when he (or his party/raid) kills a creature with the CREATURE_FLAG_EXTRA_INSTANCE_BIND flag set in the flags_extras field.
* 0: instance can be reset
* 1: bound to instance
&nbsp;

### extendState
| ID | Name | Comment |
|----|------|---------|
| 0 | EXTEND_STATE_EXPIRED | doesn't affect anything unless manually re-extended by player |
| 1 | EXTEND_STATE_NORMAL | standard state |
| 2 | EXTEND_STATE_EXTENDED | lockout period extended by player. Won't be promoted to EXPIRED at next reset period, will instead be promoted to NORMAL. |
| 255 | EXTEND_STATE_KEEP | special state: keep current save type |
{.dense}

&nbsp;

