---
title: game_event
description: 
published: true
date: 2021-08-30T20:38:02.271Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/world/fishing_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'fishing_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/game_event_arena_seasons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_arena_seasons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint(3) | unsigned | PRI | NO |  |  | Entry of the game event |
| [start_time](#start_time) | timestamp | signed |  | YES | NULL |  | Absolute start date, the event will never start before |
| [end_time](#end_time) | timestamp | signed |  | YES | NULL |  | Absolute end date, the event will never start after |
| [occurence](#occurence) | bigint(20) | unsigned |  | NO | 5184000 |  | Delay in minutes between occurences of the event |
| [length](#length) | bigint(20) | unsigned |  | NO | 2592000 |  | Length in minutes of the event |
| [holiday](#holiday) | mediumint(8) | unsigned |  | NO | 0 |  | Client side holiday id |
| [holidayStage](#holidaystage) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [description](#description) | varchar(255) | signed |  | YES | NULL |  | Description of the event displayed in console |
| [world_event](#world_event) | tinyint(3) | unsigned |  | NO | 0 |  | 0 if normal event, 1 if world event |
| [announce](#announce) | tinyint(3) | unsigned |  | YES | 2 |  | 0 dont announce, 1 announce, 2 value from config |
&nbsp;
## Description of fields

### eventEntry
*- no description -*
&nbsp;

### start_time
*- no description -*
&nbsp;

### end_time
*- no description -*
&nbsp;

### occurence
*- no description -*
&nbsp;

### length
*- no description -*
&nbsp;

### holiday
*- no description -*
&nbsp;

### holidayStage
*- no description -*
&nbsp;

### description
*- no description -*
&nbsp;

### world_event
*- no description -*
&nbsp;

### announce
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/world/fishing_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'fishing_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/world/game_event_arena_seasons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_arena_seasons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

