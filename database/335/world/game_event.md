---
title: game_event
description:
published: true
date: 2023-07-09T17:31:14.034Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:04:25.689Z
---

<a href="https://trinitycore.info/en/database/335/world/fishing_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'fishing_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_arena_seasons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_arena_seasons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds definitions for all game events that are activated or deactivated automatically by the Game Event System in the core.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [eventEntry](#evententry) | tinyint | unsigned | PRI | NO |  |  | Entry of the game event |
| [start_time](#start_time) | timestamp |  |  | YES | NULL |  | Absolute start date, the event will never start before |
| [end_time](#end_time) | timestamp |  |  | YES | NULL |  | Absolute end date, the event will never start after |
| [occurence](#occurence) | bigint | unsigned |  | NO | 5184000 |  | Delay in minutes between occurences of the event |
| [length](#length) | bigint | unsigned |  | NO | 2592000 |  | Length in minutes of the event |
| [holiday](#holiday) | mediumint | unsigned |  | NO | 0 |  | Client side holiday id |
| [holidayStage](#holidaystage) | tinyint | unsigned |  | NO | 0 |  |  |
| [description](#description) | varchar(255) |  |  | YES | NULL |  | Description of the event displayed in console |
| [world_event](#world_event) | tinyint | unsigned |  | NO | 0 |  | 0 if normal event, 1 if world event |
| [announce](#announce) | tinyint | unsigned |  | YES | 2 |  | 0 dont announce, 1 announce, 2 value from config |
&nbsp;
## Description of fields

### eventEntry
Entry of the event. Keep it as low as possible and prevent making holes in the list. Higher the max id is, the more memory will be used to store the event data.
&nbsp;

### start_time
Absolute start date of the event. The event will start occurring only if the local time at the server is after the one set here.
&nbsp;

### end_time
Absolute end date of the event. The event will stop occurring if the local time at the server is after the one set here.
&nbsp;

### occurence
Number of minutes between 2 occurrences of the event. (2880 = 2 days, 1440 = 1 day, etc).
> Note: Setting this to 0 will crash the server.
{.is-warning}

&nbsp;

### length
Number of minutes the event will last after the start of the occurrence. (2880 = 2 days, 1440 = 1 day, etc)
This value must be lower than occurrence one or the event will never stop.
&nbsp;

### holiday
[Holiday ID](/files/DBC/335/holidays#id). This is sent to the client to update the calender.
&nbsp;

### holidayStage
Index of the main event stage. (see [HolidayDuration](/files/DBC/335/holidays#duration))

(e.g.: Darkmoon Faire has a preparation stage where it sets up.)

min.: 1 - max.: MAX_HOLIDAY_DURATIONS (10)
&nbsp;

### description
String containing the name of the event displayed in console each time it starts or stops.
&nbsp;

### world_event
This is a boolean field that determines if this game event is a world event or not. 0 = normal event, 1 = world event. If you want conditions for the event, you ***need*** to choose world event. For the world event to work, you need to at a minimum, populate [game_event_condition](../world/game_event_condition) and [game_event_quest_condition](../world/game_event_quest_condition).
&nbsp;

### announce
* 0: don't announce
* 1: announce **description** to world
* 2: use `Event.Announce` setting from config
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/fishing_loot_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'fishing_loot_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_event_arena_seasons" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_event_arena_seasons'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
