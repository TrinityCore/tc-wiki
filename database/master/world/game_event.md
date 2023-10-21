---
title: game_event
description: 
published: true
date: 2023-03-27T15:08:46.515Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:54.869Z
---

<a href="https://trinitycore.info/en/database/master/world/fishing_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'fishing_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/game_event_arena_seasons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_arena_seasons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | Entry of the game event |
| [start_time](#start_time) | timestamp |  |  | YES | NULL |  | Absolute start date, the event will never start before |
| [end_time](#end_time) | timestamp |  |  | YES | NULL |  | Absolute end date, the event will never start after |
| [occurence](#occurence) | bigint | unsigned |  | NO | 5184000 |  | Delay in minutes between occurences of the event |
| [length](#length) | bigint | unsigned |  | NO | 2592000 |  | Length in minutes of the event |
| [holiday](#holiday) | int | unsigned |  | NO | 0 |  | Client side holiday id |
| [holidayStage](#holidaystage) | tinyint | unsigned |  | NO | 0 |  |  |
| [description](#description) | varchar(255) |  |  | YES | NULL |  | Description of the event displayed in console |
| [world_event](#world_event) | tinyint | unsigned |  | NO | 0 |  | 0 if normal event, 1 if world event |
| [announce](#announce) | tinyint | unsigned |  | YES | 2 |  | 0 dont announce, 1 announce, 2 value from config |
&nbsp;
## Description of fields

### eventEntry
Entry of the event. Keep it as low as possible and prevent making holes in the list.
&nbsp;

### start_time
Absolute start date of the event. The event will start occurring only if the local time at the server is after the one set here.
&nbsp;

### end_time
Absolute end date of the event. The event will stop occurring if the local time at the server is after the one set here.
&nbsp;

### occurence
Number of minutes between 2 occurrences of the event. (2880 = 2 days, 1440 = 1 day, etc).
&nbsp;

### length
Number of minutes the event will last after the start of the occurrence. (2880 = 2 days, 1440 = 1 day, etc)
This value must be lower than occurrence one or the event will never stop.
&nbsp;

### holiday
HolidayID from [Holidays.db2](https://wow.tools/dbc/?dbc=holidays){target=_blank}
&nbsp;

### holidayStage
Index of the main event stage. (see [HolidayDuration](https://wow.tools/dbc/?dbc=holidays))

(e.g.: Darkmoon Faire has a preparation stage where it sets up.)

min.: 1 - max.: MAX_HOLIDAY_DURATIONS (10)
&nbsp;

### description
String containing the name of the event displayed in console each time it starts or stops.
&nbsp;

### world_event
This is a boolean field that determines if this game event is a world event or not. 0 = normal event, 1 = world event. If you want conditions for the event, you need to choose world event. For the world event to work, you need to at a minimum, populate [`game_event_condition`](/database/master/world/game_event_condition) and [`game_event_quest_condition`](/database/master/world/game_event_quest_condition).
&nbsp;

### announce
| Value |                                       Description |
| ----- | ------------------------------------------------- |
|     0 |                                    Don't announce |
|     1 |                                          Announce |
|     2 | Use value of `Event.Announce` in worldserver.conf |
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/fishing_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'fishing_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/game_event_arena_seasons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_arena_seasons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
