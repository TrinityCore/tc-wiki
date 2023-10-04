---
title: Holidays.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/holidaynames" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'HolidayNames'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/item" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Item'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Holidays.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=holidays&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Holidays)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Duration_0](#duration) | uint32 |  |
| 2 | [Duration_1](#duration) | uint32 |  |
| 3 | [Duration_2](#duration) | uint32 |  |
| 4 | [Duration_3](#duration) | uint32 |  |
| 5 | [Duration_4](#duration) | uint32 |  |
| 6 | [Duration_5](#duration) | uint32 |  |
| 7 | [Duration_6](#duration) | uint32 |  |
| 8 | [Duration_7](#duration) | uint32 |  |
| 9 | [Duration_8](#duration) | uint32 |  |
| 10 | [Duration_9](#duration) | uint32 |  |
| 11 | [Date_0](#date) | uint32 |  |
| 12 | [Date_1](#date) | uint32 |  |
| 13 | [Date_2](#date) | uint32 |  |
| 14 | [Date_3](#date) | uint32 |  |
| 15 | [Date_4](#date) | uint32 |  |
| 16 | [Date_5](#date) | uint32 |  |
| 17 | [Date_6](#date) | uint32 |  |
| 18 | [Date_7](#date) | uint32 |  |
| 19 | [Date_8](#date) | uint32 |  |
| 20 | [Date_9](#date) | uint32 |  |
| 21 | [Date_10](#date) | uint32 |  |
| 22 | [Date_11](#date) | uint32 |  |
| 23 | [Date_12](#date) | uint32 |  |
| 24 | [Date_13](#date) | uint32 |  |
| 25 | [Date_14](#date) | uint32 |  |
| 26 | [Date_15](#date) | uint32 |  |
| 27 | [Date_16](#date) | uint32 |  |
| 28 | [Date_17](#date) | uint32 |  |
| 29 | [Date_18](#date) | uint32 |  |
| 30 | [Date_19](#date) | uint32 |  |
| 31 | [Date_20](#date) | uint32 |  |
| 32 | [Date_21](#date) | uint32 |  |
| 33 | [Date_22](#date) | uint32 |  |
| 34 | [Date_23](#date) | uint32 |  |
| 35 | [Date_24](#date) | uint32 |  |
| 36 | [Date_25](#date) | uint32 |  |
| 37 | [Region](#region) | uint32 |  |
| 38 | [Looping](#looping) | uint32 |  |
| 39 | [CalendarFlags_0](#calendarflags) | uint32 |  |
| 40 | [CalendarFlags_1](#calendarflags) | uint32 |  |
| 41 | [CalendarFlags_2](#calendarflags) | uint32 |  |
| 42 | [CalendarFlags_3](#calendarflags) | uint32 |  |
| 43 | [CalendarFlags_4](#calendarflags) | uint32 |  |
| 44 | [CalendarFlags_5](#calendarflags) | uint32 |  |
| 45 | [CalendarFlags_6](#calendarflags) | uint32 |  |
| 46 | [CalendarFlags_7](#calendarflags) | uint32 |  |
| 47 | [CalendarFlags_8](#calendarflags) | uint32 |  |
| 48 | [CalendarFlags_9](#calendarflags) | uint32 |  |
| 49 | [HolidayNameID](#holidaynameid) | uint32 | [HolidayNames.dbc/0](/files/DBC/335/holidaynames#id) |
| 50 | [HolidayDescriptionID](#holidaydescriptionid) | uint32 | [HolidayDescriptions.dbc/0](/files/DBC/335/holidaydescriptions#id) |
| 51 | [TextureFilename](#texturefilename) | string |  |
| 52 | [Priority](#priority) | uint32 |  |
| 53 | [CalendarFilterType](#calendarfiltertype) | int32 |  |
| 54 | [Flags](#flags) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Duration
<code>Col: 1 &ndash; 10 (uint32)</code>

Stage duration in hours.
&nbsp;

### Date
<code>Col: 11 &ndash; 36 (uint32)</code>
> From wowdev.wiki:
> Packed blizzdate (integers with bits (LSB->MSB) 6: minutes, 5: hours, 3: day of week, 6: day of month, 4: month, 5: year, 2: time zone, 1: unused)
> Epochdate=01.01.2000-00:00
{.is-info}

**Example**
Startdate for Darkmoon Faire - Mulgore (first occurence; id: 375):
```
blizzdate = 126957568;                    // 0b0000 0111 1001 0001 0011 1000 0000 0000

minutes    =  blizzdate        & 0x3F;    // 00 0000 -> 0
hours      = (blizzdate >>  6) & 0x1F;    //  0 0000 -> 0
dayOfWeek  = (blizzdate >> 11) & 0x07;    //     111 -> 7
dayOfMonth = (blizzdate >> 14) & 0x3F;    // 00 0100 -> 4
month      = (blizzdate >> 20) & 0x0F;    //    1001 -> 9
year       = (blizzdate >> 24) & 0x1F;    //  0 0111 -> 7
timeZone   = (blizzdate >> 29) & 0x03;    //      00 -> 0
padding    = (blizzdate >> 31) & 0x01;    //       0

decoded: 0007-09-04T00:00:00+00:00
apply epoch date offset
realdate: 2007-10-05T00:00:00
```
&nbsp;

### Region
<code>Col: 37 (uint32)</code>

WoW region
&nbsp;

### Looping
<code>Col: 38 (uint32)</code>

*- no description -*
&nbsp;

### CalendarFlags
<code>Col: 39 &ndash; 48 (uint32)</code>

* 0x1: Alliance
* 0x2: Horde
* 0x3: Both
&nbsp;

### HolidayNameID
:x: <code>Col: 49 (uint32)</code>

*- no description -*
&nbsp;

### HolidayDescriptionID
:x: <code>Col: 50 (uint32)</code>

*- no description -*
&nbsp;

### TextureFilename
<code>Col: 51 (string)</code>

*- no description -*
&nbsp;

### Priority
<code>Col: 52 (uint32)</code>

*- no description -*
&nbsp;

### CalendarFilterType
<code>Col: 53 (int32)</code>

* -1: repeat, yearly
* 0: repeat, weekly
* 1: repeat, use defined dates
* 2: repeat, hourly
&nbsp;

### Flags
:x: <code>Col: 54 (uint32)</code>

0 = Darkmoon Faire, Fishing Contest and Wotlk Launch, rest is 1
IsRegionwide?
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/holidaynames" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'HolidayNames'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/item" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'Item'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
