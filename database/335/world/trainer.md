---
title: trainer
description: 
published: true
date: 2023-04-02T01:42:55.815Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:10.401Z
---

<a href="https://trinitycore.info/en/database/335/world/spelldifficulty_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spelldifficulty_dbc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/trainer_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'trainer_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 2 |  |  |
| [Requirement](#requirement) | mediumint | unsigned |  | NO | 0 |  |  |
| [Greeting](#greeting) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### Id
For trainer, this field signifies a unique trainer ID. It is to this ID that all spells are tied to in [`trainer_spell`](/database/master/world/trainer_spell).
&nbsp;

### Type
| Type ID | Description | Requirements Type |
| ---- | ---- | ---- |
| 0 | Class trainer | ID from ChrClasses.dbc |
| 1 | Mount trainer | ID from ChrRaces.dbc |
| 2 | Tradeskill trainer | ID for the spell from Spell.dbc |
| 3 | Pet trainer | Unknown |

&nbsp;

### Requirement
| Type ID | Requirement ID | Description |
| ---- | ---- | ---- |
| 0 | 1 | Warrior |
| 0 | 2 | Paladin |
| 0 | 3 | Hunter |
| 0 | 4 | Rogue |
| 0 | 5 | Priest |
| 0 | 6 | Death Knight |
| 0 | 7 | Shaman |
| 0 | 8 | Mage |
| 0 | 9 | Warlock |
| 0 | 11 | Druid |
| 1 | 1 | Human |
| 1 | 2 | Orc |
| 1 | 3 | Dwarf |
| 1 | 4 | Night Elf |
| 1 | 5 | Undead |
| 1 | 6 | Tauren |
| 1 | 7 | Gnome |
| 1 | 8 | Troll |
| 1 | 9 | Goblin |
| 1 | 10 | Blood Elf |
| 1 | 11 | Draenei |
| 1 | 12 | Fel Orc |
| 1 | 13 | Naga |
| 1 | 14 | Broken |
| 1 | 15 | Skeleton |
| 1 | 16 | Vrykul |
| 1 | 17 | Tuskarr |
| 1 | 18 | Forest Troll |
| 1 | 19 | Taunka |
| 1 | 20 | Northrend Skeleton |
| 1 | 21 | Ice Troll |
| 2 | Spell ID |  |
&nbsp;

### Greeting
This is the text shown, once a trainer window has been opened in the top. **This is not the gossip text**.
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/spelldifficulty_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spelldifficulty_dbc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/trainer_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'trainer_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
