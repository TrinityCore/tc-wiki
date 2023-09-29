---
title: game_weather
description:
published: true
date: 2023-07-09T18:51:33.455Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:08.754Z
---

<a href="https://trinitycore.info/en/database/335/world/game_tele" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_tele'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gameobject" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds the percentages for weather changes in various zones. Not all zones can have their weather changed. For any given zone the percentage of all weather types for each season should total, and not exceed 100%.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [zone](#zone) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [spring_rain_chance](#spring_rain_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [spring_snow_chance](#spring_snow_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [spring_storm_chance](#spring_storm_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [summer_rain_chance](#summer_rain_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [summer_snow_chance](#summer_snow_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [summer_storm_chance](#summer_storm_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [fall_rain_chance](#fall_rain_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [fall_snow_chance](#fall_snow_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [fall_storm_chance](#fall_storm_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [winter_rain_chance](#winter_rain_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [winter_snow_chance](#winter_snow_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [winter_storm_chance](#winter_storm_chance) | tinyint | unsigned |  | NO | 25 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### zone
This field contains the [AreaTable ID](/files/DBC/335/areatable#id) of the zone that you wish to change the weather for.
&nbsp;

### spring_rain_chance
Percentage chance for rain in the spring.
&nbsp;

### spring_snow_chance
Percentage chance for snow in the spring.
&nbsp;

### spring_storm_chance
Percentage chance for sand storm in the spring.
&nbsp;

### summer_rain_chance
Percentage chance for rain in the summer.
&nbsp;

### summer_snow_chance
Percentage chance for snow in the summer.
&nbsp;

### summer_storm_chance
Percentage chance for sand storm in the summer.
&nbsp;

### fall_rain_chance
Percentage chance for rain in the fall.
&nbsp;

### fall_snow_chance
Percentage chance for snow in the fall.
&nbsp;

### fall_storm_chance
Percentage chance for sand storm in the fall.
&nbsp;

### winter_rain_chance
Percentage chance for rain in the winter.
&nbsp;

### winter_snow_chance
Percentage chance for snow in the winter.
&nbsp;

### winter_storm_chance
Percentage chance for sand storm in the winter.
&nbsp;

### ScriptName
The name of the script that modifies weather in this zone, if any. This ties a script from a scripting engine to this weather definition.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/game_tele" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_tele'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/gameobject" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
