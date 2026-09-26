---
title: GameTables.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# GameTables.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/GameTables)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [Name](#name-alt) | string |  |
| 1 | [NumRows](#numrows) | uint32 |  |
| 2 | [NumColumns](#numcolumns) | uint32 |  |
&nbsp;
## Description of fields

### Name {#name-alt}
:x: <code>Col: 0 (string)</code>

The actual dbc file name is prefixed with `gt`.
Not all game tables are present in client.
&nbsp;

### NumRows
:x: <code>Col: 1 (uint32)</code>

**NumRows** \* **NumColumns** = total num rows in gt\*.dbc
&nbsp;

### NumColumns
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

