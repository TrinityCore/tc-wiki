---
title: creature_loot_template
description: 
published: true
date: 2022-04-17T18:35:08.577Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/world/creature_formations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_formations'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_model_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_model_info'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

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

<a href="https://trinitycore.info/en/database/master/world/creature_formations" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_formations'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/creature_model_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_model_info'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
