---
title: character_trait_config
description: 
published: true
date: 2023-05-11T08:55:46.522Z
tags: database, master, characters
editor: markdown
dateCreated: 2022-12-19T18:37:08.123Z
---

<a href="https://trinitycore.info/en/database/master/characters/character_talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_talent'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_trait_entry" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_trait_entry'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint | unsigned | PRI | NO |  |  |  |
| [traitConfigId](#traitconfigid) | int | signed | PRI | NO |  |  |  |
| [type](#type) | int | signed |  | NO |  |  |  |
| [chrSpecializationId](#chrspecializationid) | int | signed |  | YES | NULL |  |  |
| [combatConfigFlags](#combatconfigflags) | int | signed |  | YES | NULL |  |  |
| [localIdentifier](#localidentifier) | int | signed |  | YES | NULL |  |  |
| [skillLineId](#skilllineid) | int | signed |  | YES | NULL |  |  |
| [traitSystemId](#traitsystemid) | int | signed |  | YES | NULL |  |  |
| [name](#name) | varchar(260) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### traitConfigId
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### chrSpecializationId
*- no description -*
&nbsp;

### combatConfigFlags
*- no description -*
&nbsp;

### localIdentifier
*- no description -*
&nbsp;

### skillLineId
*- no description -*
&nbsp;

### traitSystemId
*- no description -*
&nbsp;

### name
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/characters/character_talent" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'character_talent'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to characters</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/characters/character_trait_entry" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'character_trait_entry'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
