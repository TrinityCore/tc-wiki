---
title: character_pet_declinedname
description: 
published: true
date: 2023-07-27T17:35:09.903Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:59:52.882Z
---

<a href="https://trinitycore.info/en/database/335/characters/character_pet" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_pet'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_queststatus" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_queststatus'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> When connected to a server on [timezone 12](../auth/realmlist#timezone) or by setting [`DeclinedNames = 1`](https://trinitycore.info/en/files/configuration/home) the client generates declinated versions of a cyrillic pet name.
> These are stored here.
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [owner](#owner) | int | unsigned | MUL | NO | 0 |  |  |
| [genitive](#genitive) | varchar(12) |  |  | NO | '' |  |  |
| [dative](#dative) | varchar(12) |  |  | NO | '' |  |  |
| [accusative](#accusative) | varchar(12) |  |  | NO | '' |  |  |
| [instrumental](#instrumental) | varchar(12) |  |  | NO | '' |  |  |
| [prepositional](#prepositional) | varchar(12) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### id
The [id](../characters/character_pet#id) of the pet.
&nbsp;

### owner
The [guid](../characters/characters#guid) of the pet's owner.
&nbsp;

### genitive
Name in genetive casus.
&nbsp;

### dative
Name in dative casus.
&nbsp;

### accusative
Name in accusative casus.
&nbsp;

### instrumental
Name in instrumental casus.
&nbsp;

### prepositional
Name in prepositional casus.
&nbsp;

<a href="https://trinitycore.info/en/database/335/characters/character_pet" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_pet'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/characters/character_queststatus" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_queststatus'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
