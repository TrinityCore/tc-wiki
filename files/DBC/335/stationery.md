---
title: Stationery.dbc
description: 
published: true
date: 2026-06-01T14:34:37.379Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:08:24.615Z
---

# Stationery.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Stationery)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [ItemID](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 2 | [Texture](#texture) | string |  |
| 3 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ItemID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### Texture
:x: <code>Col: 2 (string)</code>

`/interface/stationery/*`
&nbsp;

### Flags
:x: <code>Col: 3 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x1 | Default |
| 2 | 0x2 | GM Mail |
{.dense}

&nbsp;

