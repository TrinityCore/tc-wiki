---
title: access_requirement
description:
published: true
date: 2023-07-07T20:06:33.633Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:30.676Z
---

<a href="https://trinitycore.info/en/database/335/world/waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoints'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_criteria_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_criteria_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains the access requirements to enter an instance.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [mapId](#mapid) | mediumint | unsigned | PRI | NO |  |  |  |
| [difficulty](#difficulty) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [level_min](#level_min) | tinyint | unsigned |  | NO | 0 |  |  |
| [level_max](#level_max) | tinyint | unsigned |  | NO | 0 |  |  |
| [item_level](#item_level) | smallint | unsigned |  | NO | 0 |  |  |
| [item](#item) | mediumint | unsigned |  | NO | 0 |  |  |
| [item2](#item2) | mediumint | unsigned |  | NO | 0 |  |  |
| [quest_done_A](#quest_done_a) | mediumint | unsigned |  | NO | 0 |  |  |
| [quest_done_H](#quest_done_h) | mediumint | unsigned |  | NO | 0 |  |  |
| [completed_achievement](#completed_achievement) | mediumint | unsigned |  | NO | 0 |  |  |
| [quest_failed_text](#quest_failed_text) | text |  |  | YES | NULL |  |  |
| [comment](#comment) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### mapId
The [Map ID](/files/DBC/335/map#id) of the instance.
&nbsp;

### difficulty
5 man dungeons - 0 for normal, 1 for heroic, 2 for epic (not used yet)
10 man dungeons - 0 for normal, 2 for heroic
25 man dungeons - 1 for normal, 3 for heroic
&nbsp;

### level_min
The minimum level that you must be in order to enter the instance.
&nbsp;

### level_max
The maximum level that you can be in order to enter the instance.
&nbsp;

### item_level
The at least required item level for a instance.
 * All WotLK Heroics require at least an average item level of 180.
 * Trial of the Champion, Pit of Saron, and the Forge of Souls require an average item level of 200.
 * Halls of Reflection requires an average item level of 219.
&nbsp;

### item
An [item](../world/item_template#entry) that you must have in your inventory to enter the instance. This item can not be in the bank.
&nbsp;

### item2
A second [item](../world/item_template#entry) that you must have in your inventory. This item can not be in the bank.
&nbsp;

### quest_done_A
A [quest](../world/quest_template#id) that you must have completed. This field is only for alliance.
&nbsp;

### quest_done_H
A [quest](../world/quest_template#id) that you must have completed. This field is only for horde.
&nbsp;

### completed_achievement
An [Achievement ID](/files/DBC/335/achievement#id) that must be completed by the player to enter an instance.
&nbsp;

### quest_failed_text
The text that is shown if you try and enter the instance without having completed the quest.
&nbsp;

### comment
This field is for any comment you want to make about the requirements. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoints'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/achievement_criteria_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'achievement_criteria_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
