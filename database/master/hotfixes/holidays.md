---
title: holidays
description: 
published: true
date: 2022-02-06T18:26:40.936Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/heirloom_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'heirloom_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/hotfix_blob" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'hotfix_blob'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Region](#region) | smallint | unsigned |  | NO | 0 |  |  |
| [Looping](#looping) | tinyint | unsigned |  | NO | 0 |  |  |
| [HolidayNameID](#holidaynameid) | int | unsigned |  | NO | 0 |  |  |
| [HolidayDescriptionID](#holidaydescriptionid) | int | unsigned |  | NO | 0 |  |  |
| [Priority](#priority) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFilterType](#calendarfiltertype) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [Duration1](#duration1) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration2](#duration2) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration3](#duration3) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration4](#duration4) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration5](#duration5) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration6](#duration6) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration7](#duration7) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration8](#duration8) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration9](#duration9) | smallint | unsigned |  | NO | 0 |  |  |
| [Duration10](#duration10) | smallint | unsigned |  | NO | 0 |  |  |
| [Date1](#date1) | int | unsigned |  | NO | 0 |  |  |
| [Date2](#date2) | int | unsigned |  | NO | 0 |  |  |
| [Date3](#date3) | int | unsigned |  | NO | 0 |  |  |
| [Date4](#date4) | int | unsigned |  | NO | 0 |  |  |
| [Date5](#date5) | int | unsigned |  | NO | 0 |  |  |
| [Date6](#date6) | int | unsigned |  | NO | 0 |  |  |
| [Date7](#date7) | int | unsigned |  | NO | 0 |  |  |
| [Date8](#date8) | int | unsigned |  | NO | 0 |  |  |
| [Date9](#date9) | int | unsigned |  | NO | 0 |  |  |
| [Date10](#date10) | int | unsigned |  | NO | 0 |  |  |
| [Date11](#date11) | int | unsigned |  | NO | 0 |  |  |
| [Date12](#date12) | int | unsigned |  | NO | 0 |  |  |
| [Date13](#date13) | int | unsigned |  | NO | 0 |  |  |
| [Date14](#date14) | int | unsigned |  | NO | 0 |  |  |
| [Date15](#date15) | int | unsigned |  | NO | 0 |  |  |
| [Date16](#date16) | int | unsigned |  | NO | 0 |  |  |
| [Date17](#date17) | int | unsigned |  | NO | 0 |  |  |
| [Date18](#date18) | int | unsigned |  | NO | 0 |  |  |
| [Date19](#date19) | int | unsigned |  | NO | 0 |  |  |
| [Date20](#date20) | int | unsigned |  | NO | 0 |  |  |
| [Date21](#date21) | int | unsigned |  | NO | 0 |  |  |
| [Date22](#date22) | int | unsigned |  | NO | 0 |  |  |
| [Date23](#date23) | int | unsigned |  | NO | 0 |  |  |
| [Date24](#date24) | int | unsigned |  | NO | 0 |  |  |
| [Date25](#date25) | int | unsigned |  | NO | 0 |  |  |
| [Date26](#date26) | int | unsigned |  | NO | 0 |  |  |
| [CalendarFlags1](#calendarflags1) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags2](#calendarflags2) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags3](#calendarflags3) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags4](#calendarflags4) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags5](#calendarflags5) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags6](#calendarflags6) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags7](#calendarflags7) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags8](#calendarflags8) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags9](#calendarflags9) | tinyint | unsigned |  | NO | 0 |  |  |
| [CalendarFlags10](#calendarflags10) | tinyint | unsigned |  | NO | 0 |  |  |
| [TextureFileDataID1](#texturefiledataid1) | int | signed |  | NO | 0 |  |  |
| [TextureFileDataID2](#texturefiledataid2) | int | signed |  | NO | 0 |  |  |
| [TextureFileDataID3](#texturefiledataid3) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Region
*- no description -*
&nbsp;

### Looping
*- no description -*
&nbsp;

### HolidayNameID
*- no description -*
&nbsp;

### HolidayDescriptionID
*- no description -*
&nbsp;

### Priority
*- no description -*
&nbsp;

### CalendarFilterType
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Duration1
*- no description -*
&nbsp;

### Duration2
*- no description -*
&nbsp;

### Duration3
*- no description -*
&nbsp;

### Duration4
*- no description -*
&nbsp;

### Duration5
*- no description -*
&nbsp;

### Duration6
*- no description -*
&nbsp;

### Duration7
*- no description -*
&nbsp;

### Duration8
*- no description -*
&nbsp;

### Duration9
*- no description -*
&nbsp;

### Duration10
*- no description -*
&nbsp;

### Date1
*- no description -*
&nbsp;

### Date2
*- no description -*
&nbsp;

### Date3
*- no description -*
&nbsp;

### Date4
*- no description -*
&nbsp;

### Date5
*- no description -*
&nbsp;

### Date6
*- no description -*
&nbsp;

### Date7
*- no description -*
&nbsp;

### Date8
*- no description -*
&nbsp;

### Date9
*- no description -*
&nbsp;

### Date10
*- no description -*
&nbsp;

### Date11
*- no description -*
&nbsp;

### Date12
*- no description -*
&nbsp;

### Date13
*- no description -*
&nbsp;

### Date14
*- no description -*
&nbsp;

### Date15
*- no description -*
&nbsp;

### Date16
*- no description -*
&nbsp;

### Date17
*- no description -*
&nbsp;

### Date18
*- no description -*
&nbsp;

### Date19
*- no description -*
&nbsp;

### Date20
*- no description -*
&nbsp;

### Date21
*- no description -*
&nbsp;

### Date22
*- no description -*
&nbsp;

### Date23
*- no description -*
&nbsp;

### Date24
*- no description -*
&nbsp;

### Date25
*- no description -*
&nbsp;

### Date26
*- no description -*
&nbsp;

### CalendarFlags1
*- no description -*
&nbsp;

### CalendarFlags2
*- no description -*
&nbsp;

### CalendarFlags3
*- no description -*
&nbsp;

### CalendarFlags4
*- no description -*
&nbsp;

### CalendarFlags5
*- no description -*
&nbsp;

### CalendarFlags6
*- no description -*
&nbsp;

### CalendarFlags7
*- no description -*
&nbsp;

### CalendarFlags8
*- no description -*
&nbsp;

### CalendarFlags9
*- no description -*
&nbsp;

### CalendarFlags10
*- no description -*
&nbsp;

### TextureFileDataID1
*- no description -*
&nbsp;

### TextureFileDataID2
*- no description -*
&nbsp;

### TextureFileDataID3
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/heirloom_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'heirloom_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/hotfix_blob" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'hotfix_blob'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

