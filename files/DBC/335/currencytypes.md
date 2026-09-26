---
title: CurrencyTypes.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# CurrencyTypes.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CurrencyTypes)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [ItemID](#itemid) | uint32 | [Item.dbc/0](/files/DBC/335/item#id-alt); [item entry](/database/335/world/item_template#id-alt) |
| 2 | [CategoryID](#categoryid) | uint32 | [CurrencyCategory.dbc/0](/files/DBC/335/currencycategory#id-alt) |
| 3 | [BitIndex](#bitindex) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ItemID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### CategoryID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### BitIndex
<code>Col: 3 (uint32)</code>

Bit index in PLAYER_FIELD_KNOWN_CURRENCIES
`knownMask |= (1 << (BitIndex - 1))`
&nbsp;

