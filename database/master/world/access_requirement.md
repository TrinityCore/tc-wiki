---
title: access_requirement
description: 
published: true
date: 2021-11-13T19:57:48.825Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-29T20:43:51.863Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/world_safe_locs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'world_safe_locs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_dbc'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [mapId](#mapid) | mediumint(8) | unsigned | PRI | NO |  |  |  |
| [difficulty](#difficulty) | tinyint(3) | unsigned | PRI | NO | 0 |  |  |
| [level_min](#level_min) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [level_max](#level_max) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [item](#item) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [item2](#item2) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [quest_done_A](#quest_done_a) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [quest_done_H](#quest_done_h) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [completed_achievement](#completed_achievement) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [quest_failed_text](#quest_failed_text) | text |  |  | YES | NULL |  |  |
| [comment](#comment) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### mapId
*- no description -*
&nbsp;

### difficulty
*- no description -*
&nbsp;

### level_min
The minimum level that you must be in order to enter the instance.
&nbsp;

### level_max
The maximum level that you can be in order to enter the instance.
&nbsp;

### item
An item that you must have in your inventory to enter the instance. This item can not be in the bank.
&nbsp;

### item2
A second item that you must have in your inventory. This item can not be in the bank.
&nbsp;

### quest_done_A
A [quest](/database/master/world/quest_template#id) that you must have completed. This field is only for alliance.
&nbsp;

### quest_done_H
A [quest](/database/master/world/quest_template#id) that you must have completed. This field is only for horde.
&nbsp;

### completed_achievement
An achievement that must be completed by the player to enter an instance.
&nbsp;

### quest_failed_text
The text that is shown if you try and enter the instance without having completed the quest.
&nbsp;

### comment
This field is for any comment you want to make about the requirements. It is arbitrary text.
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/world_safe_locs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'world_safe_locs'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/achievement_dbc" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_dbc'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

