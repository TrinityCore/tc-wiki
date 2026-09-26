---
title: SpellIcon.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# SpellIcon.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellIcon)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [Filename](#filename) | string |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Filename
:x: <code>Col: 1 (string)</code>

The location for the Spell Icon image, stored in the client MPQs without file extension.
`Interface\Icons\*`
`Interface\Spellbook\*`
&nbsp;

