---
title: creature_classlevelstats
description: 
published: true
date: 2022-01-10T03:39:03.436Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:29:47.087Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_equip_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_equip_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [level](#level) | tinyint(4) | signed | PRI | NO |  |  |  |
| [class](#class) | tinyint(4) | signed | PRI | NO |  |  |  |
| [basemana](#basemana) | int(10) | unsigned |  | NO | 1 |  |  |
| [attackpower](#attackpower) | smallint(6) | signed |  | NO | 0 |  |  |
| [rangedattackpower](#rangedattackpower) | smallint(6) | signed |  | NO | 0 |  |  |
| [comment](#comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### level
Level of the creature.
&nbsp;

### class
Class of the creature. This is a reference to the [unit_class](/en/database/master/world/creature_template#unit_class) field in the [creature_template](/en/database/master/world/creature_template) table.
&nbsp;

### basemana
Base mana for the creature. This value is multiplied by [creature_template.mana_mod](/en/database/master/world/creature_template#mana_mod) to determine the creature's final mana.
&nbsp;

### attackpower
*- no description -*
&nbsp;

### rangedattackpower
*- no description -*
&nbsp;

### comment
A comment describing the purpose of the record (entry).
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/creature_addon" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_addon'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_equip_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_equip_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

