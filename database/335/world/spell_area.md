---
title: spell_area
description:
published: true
date: 2024-05-16T11:19:35.757Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:18.065Z
---

This table is used to apply a specific spell aura to the player within an area in the game. When any player enters this area or somehow interacts with a quest, this aura will be handled accordingly.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell](#spell) | int | unsigned | PRI | NO | 0 |  |  |
| [area](#area) | int | unsigned | PRI | NO | 0 |  |  |
| [quest_start](#quest_start) | int | unsigned | PRI | NO | 0 |  |  |
| [quest_end](#quest_end) | int | unsigned |  | NO | 0 |  |  |
| [aura_spell](#aura_spell) | int | signed | PRI | NO | 0 |  |  |
| [racemask](#racemask) | int | unsigned | PRI | NO | 0 |  |  |
| [gender](#gender) | tinyint | unsigned | PRI | NO | 2 |  |  |
| [autocast](#autocast) | tinyint | unsigned |  | NO | 0 |  |  |
| [quest_start_status](#quest_start_status) | int | signed |  | NO | 64 |  |  |
| [quest_end_status](#quest_end_status) | int | signed |  | NO | 11 |  |  |

&nbsp;
## Description of fields

### spell
The [Spell ID](/files/DBC/335/spell#id) to be casted on the player.
&nbsp;

### area
The [AreaTable ID](/files/DBC/335/areatable#id) where **spell** should be applied.
&nbsp;

### quest_start
The [Quest ID](../world/quest_template#id) which the player must have in the state defined by **quest_start_status** for the spell to apply.
&nbsp;

### quest_end
The [Quest ID](../world/quest_template#id) which the player must not have in the state defined by **quest_end_status** for the spell to apply.
Setting both quest_start and quest_end to the same value is useless.
&nbsp;

### aura_spell
If set, this value (plus or minus aura [Spell ID](/files/DBC/335/spell#id)) imposes additional condition.
* **aura_spell** < 0: If the player has aura **-aura_spell** then **spell** will not be activated.
* **aura_spell** = 0: This column is ignored.
* **aura_spell** > 0: If the player has no aura **aura_spell** then **spell** will not be activated.
&nbsp;

### racemask
Race mask of [ChrRace IDs](/files/DBC/335/chrraces#id) **spell** applies to. (0: any race)
<!--@include: @/partial/335/chrraces.md{13,}-->

&nbsp;

### gender
The player gender this entry applies to.

<!--@include: @/partial/335/gender.md-->

&nbsp;

### autocast
The spell will be automatically applied when the character enters the area. Also prevents the user from removing it.
&nbsp;

### quest_start_status
### quest_end_status
Bitmask of different quest statuses.  
<!--@include: @/partial/335/quest-status.md-->

&nbsp;

## Examples
* All players are [pacified](https://aowow.trinitycore.info/?spell=64373) on the [Argent Tournament Grounds](https://aowow.trinitycore.info/?zone=4658).
* Factions-specific buffs, e.g. in Icecrown Citadel: H [Hellscream's Warsong](https://aowow.trinitycore.info/?spell=73822) / A [Strength of Wrynn](https://aowow.trinitycore.info/?spell=73828)
* A [ghost flying mount](https://aowow.trinitycore.info/?spell=55164) in zones where the player may be required to fly to reach his [corpse](https://aowow.trinitycore.info/?spell=8326).
* A [permanent disguise](https://aowow.trinitycore.info/?spell=40214) after the player completes an [attunement quest](https://aowow.trinitycore.info/?quest=11013).
