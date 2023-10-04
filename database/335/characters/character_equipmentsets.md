---
title: character_equipmentsets
description:
published: true
date: 2023-07-27T17:33:03.006Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:31.038Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_declinedname'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_fishingsteps" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_fishingsteps'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds info about player's equipment manager settings.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | MUL | NO | 0 |  |  |
| [setguid](#setguid) | bigint | unsigned | PRI | NO |  | auto_increment |  |
| [setindex](#setindex) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [name](#name) | varchar(31) |  |  | NO |  |  |  |
| [iconname](#iconname) | varchar(100) |  |  | NO |  |  |  |
| [ignore_mask](#ignore_mask) | int | unsigned |  | NO | 0 |  |  |
| [item0](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item1](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item2](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item3](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item4](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item5](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item6](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item7](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item8](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item9](#item[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item10](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item11](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item12](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item13](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item14](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item15](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item16](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item17](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
| [item18](#item1[0-18]) | int | unsigned |  | NO | 0 |  |  |
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

### name
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

<a href="https://trinitycore.info/en/database/335/characters/character_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_declinedname'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_fishingsteps" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_fishingsteps'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
