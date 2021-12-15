---
title: character_pet
description: 
published: true
date: 2021-09-16T11:14:51.120Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:50.131Z
---

<a href="https://dev.trinitycore.info/en/database/335/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_inventory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet_declinedname'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> This table holds the pet data for each pet summoned by anyone in the game.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [entry](#entry) | int(10) | unsigned |  | NO | 0 |  |  |
| [owner](#owner) | int(10) | unsigned | MUL | NO | 0 |  |  |
| [modelid](#modelid) | int(10) | unsigned |  | YES | 0 |  |  |
| [CreatedBySpell](#createdbyspell) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [PetType](#pettype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [level](#level) | smallint(5) | unsigned |  | NO | 1 |  |  |
| [exp](#exp) | int(10) | unsigned |  | NO | 0 |  |  |
| [Reactstate](#reactstate) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [name](#name) | varchar(21) | signed |  | NO | Pet |  |  |
| [renamed](#renamed) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [slot](#slot) | tinyint(3) | unsigned | MUL | NO | 0 |  |  |
| [curhealth](#curhealth) | int(10) | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int(10) | unsigned |  | NO | 0 |  |  |
| [curhappiness](#curhappiness) | int(10) | unsigned |  | NO | 0 |  |  |
| [savetime](#savetime) | int(10) | unsigned |  | NO | 0 |  |  |
| [abdata](#abdata) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### id
The special pet ID. This is a unique identifier among all pets.
&nbsp;

### entry
The creature entry of this pet.
See [creature_template](/database/335/world/creature_template)
&nbsp;

### owner
The GUID of the pet's owner.
See [characters](/database/335/characters/characters)
&nbsp;

### modelid
The model ID used to display the pet.
&nbsp;

### CreatedBySpell
The ID of the spell that has created this pet. For hunters, this is usually the Tame Beast spell. For warlocks or other classes (mages), it is the spell ID that summoned the creature. 
See Spell.dbc column 1
&nbsp;

### PetType
The type of pet that this is. 
- 0 = summoned pet,
- 1 = tamed pet
&nbsp;

### level
The current level of the pet.
&nbsp;

### exp
The current experience that this pet has. For summoned pets, this field is always 0.
&nbsp;

### Reactstate
The current reaction state of the pet (passive, aggressive, etc).
&nbsp;

### name
The pet's name.
&nbsp;

### renamed
Boolean 1 or 0. 1 = Pet has been renamed, 0 = Pet has never been renamed and still uses the same name as the creature that was tamed.
&nbsp;

### slot
The pet slot that the pet is in.
The slot is 0 for the active pet, which is with the player;
1-4 for pets in stable (slot 1-4)
100 for a pet which is with the player but currently dismissed.
&nbsp;

### curhealth
The current pet health at the time it was saved to DB.
&nbsp;

### curmana
The current pet mana at the time it was saved to DB.
&nbsp;

### curhappiness
The current pet happiness.
&nbsp;

### savetime
The time when the pet was last saved, in Unix time.
&nbsp;

### abdata
Pets Action Bar data.
&nbsp;

<a href="https://dev.trinitycore.info/en/database/335/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_inventory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/335/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet_declinedname'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

