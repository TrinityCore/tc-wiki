---
title: pet_levelstats
description: 
published: true
date: 2023-07-11T20:27:43.911Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:53.572Z
---

<a href="https://trinitycore.info/en/database/335/world/page_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'page_text_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/pet_name_generation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pet_name_generation'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds information on individual pet base stats based on level.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [creature_entry](#creature_entry) | mediumint | unsigned | PRI | NO |  |  |  |
| [level](#level) | tinyint | unsigned | PRI | NO |  |  |  |
| [hp](#hp) | smallint | unsigned |  | NO |  |  |  |
| [mana](#mana) | smallint | unsigned |  | NO |  |  |  |
| [armor](#armor) | int | unsigned |  | NO | 0 |  |  |
| [str](#str) | smallint | unsigned |  | NO |  |  |  |
| [agi](#agi) | smallint | unsigned |  | NO |  |  |  |
| [sta](#sta) | smallint | unsigned |  | NO |  |  |  |
| [inte](#inte) | smallint | unsigned |  | NO |  |  |  |
| [spi](#spi) | smallint | unsigned |  | NO |  |  |  |
| [min_dmg](#min_dmg) | smallint | unsigned |  | NO | 0 |  |  |
| [max_dmg](#max_dmg) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### creature_entry
The pet's [creature_template.entry](../world/creature_template#entry). 
&nbsp;

### level
The pet level.
&nbsp;

### hp
The base health of the pet at currently selected **level**.
&nbsp;

### mana
The base mana of the pet at currently selected **level**.
&nbsp;

### armor
The base armor of the pet at currently selected **level**.
&nbsp;

### str
The base strength of the pet at currently selected **level**.
&nbsp;

### agi
The base agility of the pet at currently selected **level**.
&nbsp;

### sta
The base stamina of the pet at currently selected **level**.
&nbsp;

### inte
The base intellect of the pet at currently selected **level**.
&nbsp;

### spi
The base sprit of the pet at currently selected **level**.
&nbsp;

### min_dmg
The base minimum damage of the pet at currently selected **level**.
&nbsp;

### max_dmg
The base maximum damage of the pet at currently selected **level**.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/page_text_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'page_text_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/pet_name_generation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'pet_name_generation'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
