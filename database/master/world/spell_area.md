---
title: spell_area
description:
published: true
date: 2023-08-18T22:33:17.054Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:36:40.299Z
---

<a href="https://trinitycore.info/en/database/master/world/spawn_group_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_group_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_custom_attr" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_custom_attr'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [spell](#spell) | int | unsigned | PRI | NO | 0 |  |  |
| [area](#area) | int | unsigned | PRI | NO | 0 |  |  |
| [quest_start](#quest_start) | int | unsigned | PRI | NO | 0 |  |  |
| [quest_end](#quest_end) | int | unsigned |  | NO | 0 |  |  |
| [aura_spell](#aura_spell) | int | signed | PRI | NO | 0 |  |  |
| [racemask](#racemask) | bigint | unsigned | PRI | NO | 0 |  |  |
| [gender](#gender) | tinyint | unsigned | PRI | NO | 2 |  |  |
| [flags](#flags) | tinyint | unsigned |  | NO | 3 |  |  |
| [quest_start_status](#quest_start_status/quest_end_status) | int | signed |  | NO | 64 |  |  |
| [quest_end_status](#quest_start_status/quest_end_status) | int | signed |  | NO | 11 |  |  |
&nbsp;
## Description of fields

### spell
The spell ID of the spell to be casted on the player. See [SpellName.db2](https://wago.tools/db2/SpellName){target=_blank}).
&nbsp;

### area
The area ID. Type ".gps" in-game and find the "Area:" number to use for this cell. Also see [AreaTable.db2](https://wago.tools/db2/AreaTable){target=_blank}.
&nbsp;

### quest_start
The entry of the quest which the player must have in the state defined by quest_start_status. See [quest_template.ID](/en/database/master/world/quest_template#ID).
&nbsp;

### quest_end
The entry of the quest which the player must not have in the state defined by quest_end_status. See [quest_template.ID](/en/database/master/world/quest_template#ID). Setting both quest_start and quest_end to the same value is useless.
&nbsp;

### aura_spell
If set, this value (plus or minus aura spell ID from [SpellName.db2](https://wago.tools/db2/SpellName){target=_blank}) imposes additional condition.

The value has the following effect:
```
    < 0  (negative values) If the player has aura -aura_spell then the spell will not be activated.
      0  this column is ignored.
    > 0  (positive values) If the player has no aura aura_spell then the spell will not be activated.
```
&nbsp;

### racemask
Calculate using table below. (ordered by Race ID)
| Race | Mask |
| ---------- | --- |
| RACE_HUMAN | 0x1 |
| RACE_ORC | 0x2 |
| RACE_DWARF | 0x4 |
| RACE_NIGHTELF | 0x8 |
| RACE_UNDEAD_PLAYER | 0x10 |
| RACE_TAUREN | 0x20 |
| RACE_GNOME | 0x40 |
| RACE_TROLL | 0x80 |
| RACE_GOBLIN | 0x100 |
| RACE_BLOODELF | 0x200 |
| RACE_DRAENEI | 0x400 |
| RACE_WORGEN | 0x200000 |
| RACE_PANDAREN_NEUTRAL | 0x800000 |
| RACE_PANDAREN_ALLIANCE | 0x1000000 |
| RACE_PANDAREN_HORDE | 0x2000000 |
| RACE_NIGHTBORNE | 0x4000000 |
| RACE_HIGHMOUNTAIN_TAUREN | 0x8000000 |
| RACE_VOID_ELF | 0x10000000 |
| RACE_LIGHTFORGED_DRAENEI | 0x20000000 |
| RACE_ZANDALARI_TROLL | 0x40000000 |
| RACE_KUL_TIRAN | 0x80000000 |
| RACE_DARK_IRON_DWARF | 0x800 |
| RACE_VULPERA | 0x1000 |
| RACE_MAGHAR_ORC | 0x2000 |
| RACE_MECHAGNOME | 0x4000 |
| RACE_DRACTHYR_ALLIANCE | 0x10000 |
| RACE_DRACTHYR_HORDE | 0x8000 |


| Precalculated | Mask |
| -------- | ---- |
| RACEMASK_ALLIANCE | 0xB1214C4D |
| RACEMASK_HORDE | 0x4E00B3B2 |
| RACEMASK_ALL_PLAYABLE | 0xFFA1FFFF |
&nbsp;

### gender
The gender type this entry applies to. 0 = Male, 1 = Female, 2 = Any.
&nbsp;

### flags
| Flag | Flag (hex) | Name | Comment |
| --- | --- | --- | --- |
| 1 | 0x01 | SPELL_AREA_FLAG_AUTOCAST | If the spell should be automatically applied when the character enters the area. Also prevents the user from removing it. |
| 2 | 0x02 | SPELL_AREA_FLAG_AUTOREMOVE | If the spell should be automatically removed when the character is inside the area (only works with quest updates) |
&nbsp;

### quest_start_status/quest_end_status
| Quest Status | Flags | Explanation |
| --- | --- | --- |
| QUEST_STATUS_NONE | 1 | Player does not have or had quest at all. He could accept it, but he did not (yet). |
| QUEST_STATUS_COMPLETE | 2 | Player fulfilled objectives, but did not hand it in yet. |
| :x: QUEST_STATUS_UNAVAILABLE | 4 | (not used) |
| QUEST_STATUS_INCOMPLETE | 8 | Player did not fulfill objectives yet |
| :x: QUEST_STATUS_AVAILABLE | 16 | (not used) |
| QUEST_STATUS_FAILED | 32 | Player failed to fulfill objectives for any reason, e.g. time limit |
| QUEST_STATUS_REWARDED | 64 | Player handed quest in and this is sort of a post-quest interaction |
&nbsp;


<a href="https://trinitycore.info/en/database/master/world/spawn_group_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spawn_group_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/spell_custom_attr" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'spell_custom_attr'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
