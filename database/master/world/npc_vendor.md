---
title: npc_vendor
description: 
published: true
date: 2021-08-30T09:24:17.500Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/npc_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_text'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/outdoorpvp_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'outdoorpvp_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [slot](#slot) | smallint(6) | signed | MUL | NO | 0 |  |  |
| [item](#item) | mediumint(8) | signed | PRI | NO | 0 |  |  |
| [maxcount](#maxcount) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [incrtime](#incrtime) | int(10) | unsigned |  | NO | 0 |  |  |
| [ExtendedCost](#ExtendedCost) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [type](#type) | tinyint(3) | unsigned | PRI | NO | 1 |  |  |
| [BonusListIDs](#BonusListIDs) | text |  |  | YES | NULL |  |  |
| [PlayerConditionID](#PlayerConditionID) | int(10) | unsigned |  | NO | 0 |  |  |
| [IgnoreFiltering](#IgnoreFiltering) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### entry
*- no description -*
&nbsp;

### slot
*- no description -*
&nbsp;

### item
*- no description -*
&nbsp;

### maxcount
*- no description -*
&nbsp;

### incrtime
*- no description -*
&nbsp;

### ExtendedCost
*- no description -*
&nbsp;

### type
*- no description -*
&nbsp;

### BonusListIDs
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### IgnoreFiltering
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/npc_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'npc_text'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/outdoorpvp_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'outdoorpvp_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

