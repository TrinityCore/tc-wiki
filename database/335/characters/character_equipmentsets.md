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
| slot ID | ignore_mask flag |Name | Comment |
|---------|------------------|-----|---------|
| 0 | 0x00000001 | EQUIPMENT_SLOT_HEAD |  |
| 1 | 0x00000002 | EQUIPMENT_SLOT_NECK |  |
| 2 | 0x00000004 | EQUIPMENT_SLOT_SHOULDERS |  |
| 3 | 0x00000008 | EQUIPMENT_SLOT_BODY | shirt |
| 4 | 0x00000010 | EQUIPMENT_SLOT_CHEST |  |
| 5 | 0x00000020 | EQUIPMENT_SLOT_WAIST |  |
| 6 | 0x00000040 | EQUIPMENT_SLOT_LEGS |  |
| 7 | 0x00000080 | EQUIPMENT_SLOT_FEET |  |
| 8 | 0x00000100 | EQUIPMENT_SLOT_WRISTS |  |
| 9 | 0x00000200 | EQUIPMENT_SLOT_HANDS |  |
| 10 | 0x00000400 | EQUIPMENT_SLOT_FINGER1 |  |
| 11 | 0x00000800 | EQUIPMENT_SLOT_FINGER2 |  |
| 12 | 0x00001000 | EQUIPMENT_SLOT_TRINKET1 |  |
| 13 | 0x00002000 | EQUIPMENT_SLOT_TRINKET2 |  |
| 14 | 0x00004000 | EQUIPMENT_SLOT_BACK |  |
| 15 | 0x00008000 | EQUIPMENT_SLOT_MAINHAND |  |
| 16 | 0x00010000 | EQUIPMENT_SLOT_OFFHAND |  |
| 17 | 0x00020000 | EQUIPMENT_SLOT_RANGED | ranged or relic |
| 18 | 0x00040000 | EQUIPMENT_SLOT_TABARD |  |
{.dense}

&nbsp;

