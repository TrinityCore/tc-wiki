---
title: character_equipmentsets
description: 
published: true
date: 2024-04-16T18:43:00.553Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:31.038Z
---

> This table holds info about player's equipment manager settings.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | MUL | NO | 0 |  |  |
| [setguid](#setguid) | bigint | unsigned | PRI | NO |  | auto_increment |  |
| [setindex](#setindex) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [name](#name-alt) | varchar(31) |  |  | NO |  |  |  |
| [iconname](#iconname) | varchar(100) |  |  | NO |  |  |  |
| [ignore_mask](#ignore_mask) | int | unsigned |  | NO | 0 |  |  |
| [item0](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item1](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item2](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item3](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item4](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item5](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item6](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item7](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item8](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item9](#item0-18) | int | unsigned |  | NO | 0 |  |  |
| [item10](#item10-18) | int | unsigned |  | NO | 0 |  |  |
| [item11](#item10-18) | int | unsigned |  | NO | 0 |  |  |
| [item12](#item10-18) | int | unsigned |  | NO | 0 |  |  |
| [item13](#item10-18) | int | unsigned |  | NO | 0 |  |  |
| [item14](#item10-18) | int | unsigned |  | NO | 0 |  |  |
| [item15](#item10-18) | int | unsigned |  | NO | 0 |  |  |
| [item16](#item10-18) | int | unsigned |  | NO | 0 |  |  |
| [item17](#item10-18) | int | unsigned |  | NO | 0 |  |  |
| [item18](#item10-18) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### setguid
First free guid.
&nbsp;

### setindex
Set index, values from 0 to 9 are used.
&nbsp;

### name {#name-alt}
Individual. Name is set by player.
&nbsp;

### iconname
[ItemDisplayInfo InventoryIcon_0](/files/DBC/335/itemdisplayinfo#inventoryicon)
&nbsp;

### ignore_mask
Bitmask of EQUIPMENT_SLOT_* IDs not used by the equipment set.
&nbsp;

### item\[0-18]
An [item guid](../characters/item_instance#guid) to equip or 0 for an empty slot.

The fields index is an equipment slot id:
<!--@include: @/partial/335/equipment-slots.md-->

&nbsp;
