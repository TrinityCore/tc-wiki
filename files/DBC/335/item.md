---
title: Item.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# Item.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Item)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [ClassID](#classid) | uint32 | [ItemClass.dbc/0](/files/DBC/335/itemclass#id-alt); [ItemSubClass.dbc/0](/files/DBC/335/itemsubclass#classid) |
| 2 | [SubclassID](#subclassid) | uint32 | [ItemSubClass.dbc/1](/files/DBC/335/itemsubclass#subclassid) |
| 3 | [SoundOverrideSubclassID](#soundoverridesubclassid) | int32 |  |
| 4 | [Material](#material) | int32 | [Material.dbc/0](/files/DBC/335/material#id-alt) |
| 5 | [DisplayInfoID](#displayinfoid) | uint32 | [ItemDisplayInfo.dbc/0](/files/DBC/335/itemdisplayinfo#id-alt) |
| 6 | [InventoryType](#inventorytype) | uint32 |  |
| 7 | [SheatheType](#sheathetype) | uint32 |  |
&nbsp;
## Description of fields

### ID {#id-alt}
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ClassID
<code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### SubclassID
<code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SoundOverrideSubclassID
<code>Col: 3 (int32)</code>

Another WeaponSubClass to use for sound.
&nbsp;

### Material
<code>Col: 4 (int32)</code>

*- no description -*
&nbsp;

### DisplayInfoID
<code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### InventoryType
<code>Col: 6 (uint32)</code>

<!--@include: @/partial/335/inventory-type.md-->

&nbsp;

### SheatheType
<code>Col: 7 (uint32)</code>

Controls how the item is put away on the character. Press the 'Z' hotkey to sheathe and unsheathe your weapons.
<!--@include: @/partial/335/sheath.md-->

&nbsp;
