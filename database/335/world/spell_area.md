---
title: spell_area
description:
published: true
date: 2023-08-31T07:50:10.771Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:09:18.065Z
---

<a href="https://trinitycore.info/en/database/335/world/spawn_group_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_group_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_bonus_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_bonus_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table is used to apply a specific spell aura to the player within an area in the game. When any player enters this area or somehow interacts with a quest, this aura will be handled accordingly.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell](#spell) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [area](#area) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [quest_start](#quest_start) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [quest_end](#quest_end) | mediumint | unsigned |  | NO | 0 |  |  |
| [aura_spell](#aura_spell) | mediumint | signed | PRI | NO | 0 |  |  |
| [racemask](#racemask) | mediumint | unsigned | PRI | NO | 0 |  |  |
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
| Value | Flag   | Name      |  | Value | Flag   | Name      |
|-------|--------|-----------|--|-------|--------|-----------|
|     1 | 0x0001 | Human     |  |     2 | 0x0002 | Orc       |
|     4 | 0x0004 | Dwarf     |  |    16 | 0x0010 | Undead    |
|     8 | 0x0008 | Night Elf |  |    32 | 0x0020 | Tauren    |
|    64 | 0x0040 | Gnome     |  |   128 | 0x0080 | Troll     |
|  1024 | 0x0400 | Draenei   |  |   512 | 0x0200 | Blood Elf |
|  1101 | 0x044D | *_Alliance_* |  |   690 | 0x02B2 | *_Horde_* |
{.dense}

&nbsp;

### gender
The player gender this entry applies to.

[`enum Gender`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/SharedDefines.h#L75-L80)
| ID | Name | Comment |
|----|------|---------|
| 0 | GENDER_MALE | Male |
| 1 | GENDER_FEMALE | Female |
| 2 | GENDER_NONE | Any |
{.dense}

&nbsp;

### autocast
The spell will be automatically applied when the character enters the area. Also prevents the user from removing it.
&nbsp;

### quest_start_status
### quest_end_status
Bitmask of different quest statuses.

[`enum QuestStatus`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Quests/QuestDef.h#L101-L111)
| Value | Flag   | Name | Comment |
|-------|--------|------|---------|
| 1 | 0x01 | QUEST_STATUS_NONE  | Player does not have or had quest at all. He could accept it, but he did not (yet). |
| 2 | 0x02 | QUEST_STATUS_COMPLETE | Player fulfilled objectives, but did not hand it in yet. |
| 8 | 0x08 | QUEST_STATUS_INCOMPLETE | Player did not fulfill objectives yet. |
| 32 | 0x20 | QUEST_STATUS_FAILED | Player failed to fulfill objectives for any reason, e.g. time limit. |
| 64 | 0x40 | QUEST_STATUS_REWARDED | Player handed quest in and this is sort of a post-quest interaction. |
{.dense}

&nbsp;

## Examples
* All players are [pacified](https://aowow.trinitycore.info/?spell=64373) on the [Argent Tournament Grounds](https://aowow.trinitycore.info/?zone=4658).
* Factions-specific buffs, e.g. in Icecrown Citadel: H [Hellscream's Warsong](https://aowow.trinitycore.info/?spell=73822) / A [Strength of Wrynn](https://aowow.trinitycore.info/?spell=73828)
* A [ghost flying mount](https://aowow.trinitycore.info/?spell=55164) in zones where the player may be required to fly to reach his [corpse](https://aowow.trinitycore.info/?spell=8326).
* A [permanent disguise](https://aowow.trinitycore.info/?spell=40214) after the player completes an [attunement quest](https://aowow.trinitycore.info/?quest=11013).

<a href="https://trinitycore.info/en/database/335/world/spawn_group_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_group_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/spell_bonus_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_bonus_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
