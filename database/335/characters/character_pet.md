---
title: character_pet
description:
published: true
date: 2023-07-27T21:32:41.093Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:50.131Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_inventory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet_declinedname'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds the pet data for each pet summoned by anyone in the game.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [entry](#entry) | int | unsigned |  | NO | 0 |  |  |
| [owner](#owner) | int | unsigned | MUL | NO | 0 |  |  |
| [modelid](#modelid) | int | unsigned |  | YES | 0 |  |  |
| [CreatedBySpell](#createdbyspell) | mediumint | unsigned |  | NO | 0 |  |  |
| [PetType](#pettype) | tinyint | unsigned |  | NO | 0 |  |  |
| [level](#level) | smallint | unsigned |  | NO | 1 |  |  |
| [exp](#exp) | int | unsigned |  | NO | 0 |  |  |
| [Reactstate](#reactstate) | tinyint | unsigned |  | NO | 0 |  |  |
| [name](#name) | varchar(21) |  |  | NO | Pet |  |  |
| [renamed](#renamed) | tinyint | unsigned |  | NO | 0 |  |  |
| [slot](#slot) | tinyint | unsigned | MUL | NO | 0 |  |  |
| [curhealth](#curhealth) | int | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int | unsigned |  | NO | 0 |  |  |
| [curhappiness](#curhappiness) | int | unsigned |  | NO | 0 |  |  |
| [savetime](#savetime) | int | unsigned |  | NO | 0 |  |  |
| [abdata](#abdata) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### id
The special pet ID. This is a unique identifier among all pets.
&nbsp;

### entry
The [creature entry](../world/creature_template#entry) of this pet.
See
&nbsp;

### owner
The [character guid](../characters/characters#guid) of the pet's owner.
&nbsp;

### modelid
The [model id](../world/creature_template#modelid1) used to display the pet.
&nbsp;

### CreatedBySpell
The [Spell ID](/files/DBC/335/spell#id) that has created this pet. May be 0 if pet was tamed via command `.pet create`
For hunters, this is [Tame Beast](https://aowow.trinitycore.info/?spell=13481) or [Call Pet](https://aowow.trinitycore.info/?spell=883). For warlocks, mages or death knight, it is the spell that summoned the creature.
&nbsp;

### PetType
The type of pet that this is.
| ID | Name | Comment |
|----|------|---------|
| 0 | SUMMON_PET | Warlock, Mage, Death Knight |
| 1 | HUNTER_PET | Hunter tamed |
{.dense}

&nbsp;

### level
The current level of the pet.
&nbsp;

### exp
The current experience that this pet has. For summoned pets, this field is always 0.
&nbsp;

### Reactstate
The current reaction state of the pet.
| ID | Name | Comment |
|----|------|---------|
| 0 | REACT_PASSIVE | attack when ordered |
| 1 | REACT_DEFENSIVE | attack when attacked |
| 2 | REACT_AGGRESSIVE | attack on sight |
{.dense}

&nbsp;

### name
The pet's name.
&nbsp;

### renamed
* 0: Pet has never been renamed and still uses the same name as the creature that was tamed.
* 1: Pet has been renamed.
&nbsp;

### slot
The pet slot that the pet is in.
* 0: pet is with the player and active
* 1 – 4: for pets in stable (slot 1 – 4)
* 100: pet is with the player but currently dismissed
&nbsp;

### curhealth
The current pet health at the time it was saved to DB.
&nbsp;

### curmana
The current pet mana at the time it was saved to DB.
&nbsp;

### curhappiness
The current pet happiness of tamed pets. Otherwise 0.
&nbsp;

### savetime
The time when the pet was last saved, in Unix time.
&nbsp;

### abdata
Pets Action Bar data.

10 space separated type-action pairs `type1 action1 typeN actionN`
| type | Name | Comment | action |
|------|------|---------|--------|
| 0x01 | ACT_PASSIVE | 0x01 - passive | [Spell ID](/files/DBC/335/spell#id) or 0 |
| 0x81 | ACT_DISABLED | 0x80 - castable | [Spell ID](/files/DBC/335/spell#id) |
| 0xC1 | ACT_ENABLED | 0x40 \| 0x80 - auto cast + castable | [Spell ID](/files/DBC/335/spell#id) |
| 0x07 | ACT_COMMAND | 0x01 \| 0x02 \| 0x04 | COMMAND_&nbsp;\[STAY, FOLLOW, ATTACK\] |
| 0x06 | ACT_REACTION | 0x02 \| 0x04 | REACT_&nbsp;\[PASSIVE, DEFENSIVE, AGGRESSIVE\] |
{.dense}

&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_inventory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet_declinedname'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
