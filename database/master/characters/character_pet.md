---
title: character_pet
description: 
published: true
date: 2021-08-30T21:22:03.984Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_inventory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet_declinedname'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [entry](#entry) | int(10) | unsigned |  | NO | 0 |  |  |
| [owner](#owner) | bigint(10) | unsigned | MUL | NO | 0 |  |  |
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
| [savetime](#savetime) | int(10) | unsigned |  | NO | 0 |  |  |
| [abdata](#abdata) | text |  |  | YES | NULL |  |  |
| [specialization](#specialization) | smallint(5) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
*- no description -*
&nbsp;

### entry
*- no description -*
&nbsp;

### owner
*- no description -*
&nbsp;

### modelid
*- no description -*
&nbsp;

### CreatedBySpell
*- no description -*
&nbsp;

### PetType
*- no description -*
&nbsp;

### level
*- no description -*
&nbsp;

### exp
*- no description -*
&nbsp;

### Reactstate
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

### renamed
*- no description -*
&nbsp;

### slot
*- no description -*
&nbsp;

### curhealth
*- no description -*
&nbsp;

### curmana
*- no description -*
&nbsp;

### savetime
*- no description -*
&nbsp;

### abdata
*- no description -*
&nbsp;

### specialization
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/character_inventory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_inventory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_pet_declinedname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_pet_declinedname'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

