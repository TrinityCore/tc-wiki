---
title: playercreateinfo_item
description: 
published: true
date: 2022-11-21T21:07:26.266Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:28.684Z
---

<a href="https://trinitycore.info/en/database/master/world/playercreateinfo_cast_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playercreateinfo_cast_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playercreateinfo_spell_custom" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playercreateinfo_spell_custom'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [race](#race) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [class](#class) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [itemid](#itemid) | int | unsigned | PRI | NO | 0 |  |  |
| [amount](#amount) | tinyint | signed |  | NO | 1 |  |  |
&nbsp;
## Description of fields

### race
The character's [ChrRace ID](https://wow.tools/dbc/?dbc=chrraces)
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

### class
The character's [ChrClass ID](https://wow.tools/dbc/?dbc=chrclasses)
| ID | Name         |
|----|--------------|
|  1 | Warrior      |
|  2 | Paladin      |
|  3 | Hunter       |
|  4 | Rogue        |
|  5 | Priest       |
|  6 | Death Knight |
|  7 | Shaman       |
|  8 | Mage         |
|  9 | Warlock      |
| 11 | Druid        |
{.dense}

&nbsp;

### itemid
references [ItemID](https://wow.tools/dbc/?dbc=itemsparse)
&nbsp;

### amount
* **amount** > 0: copies to add on creation
* **amount** < 0: copies to remove on creation
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/playercreateinfo_cast_spell" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playercreateinfo_cast_spell'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/playercreateinfo_spell_custom" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'playercreateinfo_spell_custom'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

