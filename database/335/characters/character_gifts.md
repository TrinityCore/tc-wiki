---
title: character_gifts
description: 
published: true
date: 2023-07-27T18:12:58.518Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:36.947Z
---

> This table holds data about wrapped/gift items.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | MUL | NO | 0 |  |  |
| [item_guid](#item_guid) | int | unsigned | PRI | NO | 0 |  |  |
| [entry](#entry) | int | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### item_guid
The [item guid](../characters/item_instance#guid) of the wrapped item.
&nbsp;

### entry
The [item entry](../world/item_template#entry) of the wrapped item.
&nbsp;

### flags
ITEM_FIELD_FLAGS of the wrapped item.

<!--@include: @/partial/335/item-field-flags.md-->

&nbsp;
