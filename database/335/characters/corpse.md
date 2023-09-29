---
title: corpse
description:
published: true
date: 2023-07-30T01:21:18.687Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:33.428Z
---

<a href="https://trinitycore.info/en/database/335/characters/characters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'characters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/game_event_condition_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_condition_save'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table hold info about character's corpse.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  | Character Global Unique Identifier |
| [posX](#posx) | float |  |  | NO | 0 |  |  |
| [posY](#posy) | float |  |  | NO | 0 |  |  |
| [posZ](#posz) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [mapId](#mapid) | smallint | unsigned |  | NO | 0 |  | Map Identifier |
| [phaseMask](#phasemask) | int | unsigned |  | NO | 1 |  |  |
| [displayId](#displayid) | int | unsigned |  | NO | 0 |  |  |
| [itemCache](#itemcache) | text |  |  | NO |  |  |  |
| [bytes1](#bytes1) | int | unsigned |  | NO | 0 |  |  |
| [bytes2](#bytes2) | int | unsigned |  | NO | 0 |  |  |
| [guildId](#guildid) | int | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [dynFlags](#dynflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [time](#time) | int | unsigned | MUL | NO | 0 |  |  |
| [corpseType](#corpsetype) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [instanceId](#instanceid) | int | unsigned | MUL | NO | 0 |  | Instance Identifier |
&nbsp;
## Description of fields

### guid
The [guid](../characters/characters#guid) of the character.
&nbsp;

### posX
The X position of the corpse.
&nbsp;

### posY
The Y position of the corpse.
&nbsp;

### posZ
The Z position of the corpse.
&nbsp;

### orientation
The orientation of the corpse. (North = 0.0; South = pi (3.14159))
&nbsp;

### mapId
The [Map ID](/files/DBC/335/map#id) the corpse resides on.

### phaseMask
This is a bitmask field that describes all the phases the corpse is visible in.
&nbsp;

### displayId
A [ChrRace DisplayID](/files/DBC/335/chrraces#maledisplayid), where race dictates the row and gender the column.
* [gender](../characters/characters#gender) = 0: MaleModel
* [gender](../characters/characters#gender) = 1: FemaleModel
&nbsp;

### itemCache
Space separated list of byte fields describing the equipped items, ordered by EQUIPMENT_SLOT.
<code>byteField = [displayid](../world/item_template#displayid) | ([InventoryType](../world/item_template#inventorytype) << 24);</code>

| Index | Name |
|-------|------|
| 0 | EQUIPMENT_SLOT_HEAD |
| 1 | EQUIPMENT_SLOT_NECK |
| 2 | EQUIPMENT_SLOT_SHOULDERS |
| 3 | EQUIPMENT_SLOT_BODY |
| 4 | EQUIPMENT_SLOT_CHEST |
| 5 | EQUIPMENT_SLOT_WAIST |
| 6 | EQUIPMENT_SLOT_LEGS |
| 7 | EQUIPMENT_SLOT_FEET |
| 8 | EQUIPMENT_SLOT_WRISTS |
| 9 | EQUIPMENT_SLOT_HANDS |
| 10 | EQUIPMENT_SLOT_FINGER1 |
| 11 | EQUIPMENT_SLOT_FINGER2 |
| 12 | EQUIPMENT_SLOT_TRINKET1 |
| 13 | EQUIPMENT_SLOT_TRINKET2 |
| 14 | EQUIPMENT_SLOT_BACK |
| 15 | EQUIPMENT_SLOT_MAINHAND |
| 16 | EQUIPMENT_SLOT_OFFHAND |
| 17 | EQUIPMENT_SLOT_RANGED |
| 18 | EQUIPMENT_SLOT_TABARD |
{.dense}

&nbsp;

### bytes1
Byte encoded integers. Shift each value left by 8 * byteIndex.
| byteIndex | Value |
|-----------|-------|
| 0 | 0 |
| 1 | [race](../characters/characters#race) |
| 2 | [gender](../characters/characters#gender) |
| 3 | [skin](../characters/characters#skin) |
{.dense}

&nbsp;

### bytes2
Byte encoded integers. Shift each value left by 8 * byteIndex.
| byteIndex | Value |
|-----------|-------|
| 1 | [face](../characters/characters#face) |
| 2 | [hairStyle](../characters/characters#hairstyle) |
| 3 | [hairColor](../characters/characters#haircolor) |
| 3 | [facialStyle](../characters/characters#facialstyle) |
{.dense}

&nbsp;

### guildId
The corpses [guildid](../characters/guild#guildid).
&nbsp;

### flags
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x01 | CORPSE_FLAG_BONES | Leaves bones, not the body. |
| 4 | 0x04 | CORPSE_FLAG_UNK2 | always set |
| 8 | 0x08 | CORPSE_FLAG_HIDE_HELM | inherited from PLAYER_FLAGS_HIDE_HELM |
| 16 | 0x10 | CORPSE_FLAG_HIDE_CLOAK | inherited from PLAYER_FLAGS_HIDE_CLOAK |
| 32 | 0x20 | CORPSE_FLAG_LOOTABLE | can collect insignia in BGs |
{.dense}

&nbsp;

### dynFlags
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x1 | CORPSE_DYNFLAG_LOOTABLE |
{.dense}

&nbsp;

### time
Unix timestamp when the corpse was created.
&nbsp;

### corpseType
| ID | Name |
|----|------|
| 0 | CORPSE_BONES |
| 1 | CORPSE_RESURRECTABLE_PVE |
| 2 | CORPSE_RESURRECTABLE_PVP |
{.dense}

&nbsp;

### instanceId
The [instance id](../characters/instance#id) this corpse belongs to.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/characters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'characters'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/game_event_condition_save" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_condition_save'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
