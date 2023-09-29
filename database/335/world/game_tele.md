---
title: game_tele
description:
published: true
date: 2023-07-09T18:38:50.935Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:06.033Z
---

<a href="https://trinitycore.info/en/database/335/world/game_event_seasonal_questrelation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_seasonal_questrelation'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_weather'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains a list of teleport locations that can be used with the `.tele` command in-game. Entries in this table can be added/deleted manually or with the `.tele add`/`.tele delete` commands.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | mediumint | unsigned | PRI | NO |  | auto_increment |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [map](#map) | smallint | unsigned |  | NO | 0 |  |  |
| [name](#name) | varchar(100) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### id
The ID of the teleport location. This number is unique to every location added.
&nbsp;

### position_x
The x-axis coordinate of the teleport location. This can be attained by using the `.gps` command.
&nbsp;

### position_y
The y-axis coordinate of the teleport location. This can be attained by using the `.gps` command.
&nbsp;

### position_z
The z-axis coordinate of the teleport location. This can be attained by using the `.gps` command.
&nbsp;

### orientation
The direction that the player will face after arriving at the teleport location. This can be attained by using the `.gps` command.
(North = 0, South = 3.14159)
&nbsp;

### map
The [Map ID](/files/DBC/335/map#id) of the location.
&nbsp;

### name
The name given to the location. The name must not have a space as this will be read in from the `.tele` command.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/game_event_seasonal_questrelation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_event_seasonal_questrelation'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/game_weather" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'game_weather'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
