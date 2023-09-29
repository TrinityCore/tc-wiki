---
title: trainer
description:
published: true
date: 2023-07-23T17:53:59.264Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:10.401Z
---

<a href="https://trinitycore.info/en/database/335/world/spelldifficulty_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spelldifficulty_dbc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/trainer_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'trainer_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains all the trainer entries.

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
For trainer, this field signifies a unique trainer ID. It is to this ID that all spells are tied to in [`trainer_spell`](../world/trainer_spell).
&nbsp;

### Type
### Requirement
The trainer type dictates the requirement (if any).
&nbsp;

#### Type = 0 (Trainer::Type::Class)
#### Type = 3 (Trainer::Type::Pet)
**Requirement** is a [ChrClass ID](/files/DBC/335/chrclasses#id) (or 0 for no requirement)
| Requirement | Description |
|-------------|-------------|
| 1 | Warrior |
| 2 | Paladin |
| 3 | Hunter |
| 4 | Rogue |
| 5 | Priest |
| 6 | Death Knight |
| 7 | Shaman |
| 8 | Mage |
| 9 | Warlock |
| 11 | Druid |
{.dense}

&nbsp;

#### Type = 1 (Trainer::Type::Mount)
**Requirement** is a [ChrRace ID](/files/DBC/335/chrraces#id) (or 0 for no requirement)
| Requirement | Description |
|-------------|-------------|
| 1 | Human |
| 2 | Orc |
| 3 | Dwarf |
| 4 | Night Elf |
| 5 | Undead |
| 6 | Tauren |
| 7 | Gnome |
| 8 | Troll |
| 10 | Blood Elf |
| 11 | Draenei |
{.dense}

&nbsp;

#### Type = 2 (Trainer::Type::Tradeskill)
**Requirement** is a [Spell ID](/files/DBC/335/spell#id) (or 0 for no requirement)

The player must know this spell to learn from this trainer.
&nbsp;

### Greeting
This is the text shown, once a trainer window has been opened in the top.

> Note: This is not the gossip text.
{.is-info}

&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/spelldifficulty_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'spelldifficulty_dbc'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/trainer_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'trainer_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
