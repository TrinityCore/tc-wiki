---
title: player_totem_model
description:
published: true
date: 2023-07-11T21:54:01.463Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:07:23.355Z
---

This table enables shamans to have visually distinct totems on a per race basis.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [TotemSlot](#totemslot) | tinyint | unsigned | PRI | NO |  |  |  |
| [RaceId](#raceid) | tinyint | unsigned | PRI | NO |  |  |  |
| [DisplayId](#displayid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### TotemSlot
slot from [`enum SummonSlots`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h)

excerpt:
| ID | Name |
|----|------|
| 1 | SUMMON_SLOT_TOTEM_FIRE |
| 2 | SUMMON_SLOT_TOTEM_EARTH |
| 3 | SUMMON_SLOT_TOTEM_WATER |
| 4 | SUMMON_SLOT_TOTEM_AIR |
{.dense}

&nbsp;

### RaceId
A [ChrRace ID](/files/DBC/335/chrraces#id) that should use the given **DisplayId** for this **TotemSlot**.
| ID | Name      |
|----|-----------|
|  1 | Human     |
|  2 | Orc       |
|  3 | Dwarf     |
|  4 | Night Elf |
|  5 | Undead    |
|  6 | Tauren    |
|  7 | Gnome     |
|  8 | Troll     |
| 10 | Blood Elf |
| 11 | Draenei   |
{.dense}

&nbsp;

### DisplayId
references [CreatureDisplayInfo ID](/files/DBC/335/creaturedisplayinfo#id)
&nbsp;

