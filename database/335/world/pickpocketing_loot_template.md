---
title: pickpocketing_loot_template
description: 
published: true
date: 2024-05-16T11:19:34.373Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:06:58.977Z
---

<a href="https://trinitycore.info/en/database/335/world/pet_name_generation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pet_name_generation'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/player_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'player_classlevelstats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Contains items generated when using a spell with SPELL_EFFECT_PICKPOCKET(71) on a creature.

[Please refer to the generic description of the loot system for more information.](/database/335/world/loot_template)

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [Item](#item) | int | unsigned | PRI | NO | 0 |  |  |
| [Reference](#reference) | int | unsigned |  | NO | 0 |  |  |
| [Chance](#chance) | float |  |  | NO | 100 |  |  |
| [QuestRequired](#questrequired) | tinyint(1) | signed |  | NO | 0 |  |  |
| [LootMode](#lootmode) | smallint | unsigned |  | NO | 1 |  |  |
| [GroupId](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinCount](#mincount) | tinyint | unsigned |  | NO | 1 |  |  |
| [MaxCount](#maxcount) | tinyint | unsigned |  | NO | 1 |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### Entry
*- no description -*
&nbsp;

### Item
*- no description -*
&nbsp;

### Reference
*- no description -*
&nbsp;

### Chance
*- no description -*
&nbsp;

### QuestRequired
*- no description -*
&nbsp;

### LootMode
*- no description -*
&nbsp;

### GroupId
*- no description -*
&nbsp;

### MinCount
*- no description -*
&nbsp;

### MaxCount
*- no description -*
&nbsp;

### Comment
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/pet_name_generation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'pet_name_generation'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/player_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'player_classlevelstats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
