---
title: TaxiPath.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# TaxiPath.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/TaxiPath)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [FromTaxiNode](#fromtaxinode) | uint32 | [TaxiNodes.dbc/0](/files/DBC/335/taxinodes#id-alt) |
| 2 | [ToTaxiNode](#totaxinode) | uint32 | [TaxiNodes.dbc/0](/files/DBC/335/taxinodes#id-alt) |
| 3 | [Cost](#cost) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### FromTaxiNode
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### ToTaxiNode
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### Cost
<code>Col: 3 (uint32)</code>

in copper
&nbsp;

