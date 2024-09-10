---
title: game_weather
description:
published: true
date: 2023-04-01T23:12:18.383Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:35.583Z
---

<a href="https://trinitycore.info/en/database/master/world/game_tele" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_tele'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [zone](#zone) | int | unsigned | PRI | NO | 0 |  |  |
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
| [ScriptName](#scriptname) | varchar(64) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### zone
This field contains the zone id from the [AreaTable.ID](https://wago.tools/db2/areatable){target=blank} that you wish to change the weather for.
&nbsp;

### spring_rain_chance
Percent chance for rain in the Spring
&nbsp;

### spring_snow_chance
Percentage chance for snow to occur in the Spring
&nbsp;

### spring_storm_chance
Percent chance for a sand storm to occur in the Spring
&nbsp;

### summer_rain_chance
Percent chance for rain to occur in the Summer
&nbsp;

### summer_snow_chance
Percent chance for snow to occur in the Summer
&nbsp;

### summer_storm_chance
Percent chance for a sand storm to occur in the Summer
&nbsp;

### fall_rain_chance
Percent chance for rain to occur in the Fall
&nbsp;

### fall_snow_chance
Percent chance for snow to occur in the Fall
&nbsp;

### fall_storm_chance
Percent chance for a sand storm to occur in the Fall
&nbsp;

### winter_rain_chance
Percentage chance for rain to occur in the Winter
&nbsp;

### winter_snow_chance
Percentage chance for snow to occur in the Winter
&nbsp;

### winter_storm_chance
Percentage chance for a sand storm to occur in the Winter
&nbsp;

### ScriptName
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/game_tele" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'game_tele'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
