---
title: holiday_dates
description:
published: true
date: 2023-07-10T20:58:31.888Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:50.321Z
---

<a href="https://trinitycore.info/en/database/335/world/graveyard_zone" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'graveyard_zone'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/instance_encounters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance_encounters'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table is used to extend the values of [Holidays](/files/DBC/335/holidays). Data of holidays in this table is sent to client to update the calendar.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO |  |  |  |
| [date_id](#date_id) | tinyint | unsigned | PRI | NO |  |  |  |
| [date_value](#date_value) | int | unsigned |  | NO |  |  |  |
| [holiday_duration](#holiday_duration) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
references [HolidayID](/files/DBC/335/holidays#id)
&nbsp;

### date_id
Unique ID. Must be consecutive from 0 to 25 (including existing values in [Holidays](/files/DBC/335/holidays))
&nbsp;

### date_value
Start date in BlizzTime. Use https://github.com/The-Cataclysm-Preservation-Project/Packet-BlizzTime-tool to get the correct value.

> From wowdev.wiki:
> Packed blizzdate (integers with bits (LSB->MSB) 6: minutes, 5: hours, 3: day of week, 6: day of month, 4: month, 5: year, 2: time zone, 1: unused)
> Epochdate=01.01.2000-00:00
{.is-info}

&nbsp;

### holiday_duration
Event duration in hours.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/graveyard_zone" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'graveyard_zone'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/instance_encounters" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'instance_encounters'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
