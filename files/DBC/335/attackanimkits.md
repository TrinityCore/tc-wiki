---
title: AttackAnimKits.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# AttackAnimKits.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/AttackAnimKits)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [AnimationData](#animationdata) | uint32 | [AnimationData.dbc/0](/files/DBC/335/animationdata#id-alt) |
| 2 | [AttackAnimTypes](#attackanimtypes) | uint32 | [AttackAnimTypes.dbc/0](/files/DBC/335/attackanimtypes#id-alt) |
| 3 | [Flags](#Flags) | uint32  |
| 4 | [WhichHand](#whichhand) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### AnimationData
:x: <code>Col: 1 (uint32)</code>

Non-combat animid most of the time.

Maybe this is ItemSubClassID?
&nbsp;

### AttackAnimTypes
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 3 (uint32)</code>

Maybe this is AnimFrequency?
&nbsp;

### WhichHand
:x: <code>Col: 4 (bool)</code>

* 0: Mainhand
* 1: Offhand
&nbsp;

