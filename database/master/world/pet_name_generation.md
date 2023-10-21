---
title: pet_name_generation
description: 
published: true
date: 2022-11-21T21:06:38.229Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:24.050Z
---

<a href="https://trinitycore.info/en/database/master/world/pet_levelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pet_levelstats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/phase_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'phase_area'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO |  |  |  |
| [word](#word) | text |  |  | NO |  |  |  |
| [entry](#entry) | int | unsigned |  | NO | 0 |  |  |
| [half](#half) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
The ID of the entry. This is an auto increment field and this is an arbitrary number. When adding entries it is best to just let the database pick the next available ID number.
&nbsp;

### word
The name part for this entry.
&nbsp;

### entry
The [creature_template.entry](../world/creature_template#entry) for the creature that you want this part of the name to be generated for.
&nbsp;

### half
This determines whether this is the first or last half of the name for this entry.
* 0: First half
* 1: Last half
    
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/pet_levelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pet_levelstats'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/phase_area" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'phase_area'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

