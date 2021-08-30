---
title: holidays
description: 
published: true
date: 2021-08-30T09:44:29.535Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/heirloom_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'heirloom_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/hotfix_blob" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'hotfix_blob'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Region](#Region) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Looping](#Looping) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [HolidayNameID](#HolidayNameID) | int(10) | unsigned |  | NO | 0 |  |  |
| [HolidayDescriptionID](#HolidayDescriptionID) | int(10) | unsigned |  | NO | 0 |  |  |
| [Priority](#Priority) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFilterType](#CalendarFilterType) | tinyint(4) | signed |  | NO | 0 |  |  |
| [Flags](#Flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Duration1](#Duration1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration2](#Duration2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration3](#Duration3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration4](#Duration4) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration5](#Duration5) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration6](#Duration6) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration7](#Duration7) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration8](#Duration8) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration9](#Duration9) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Duration10](#Duration10) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Date1](#Date1) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date2](#Date2) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date3](#Date3) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date4](#Date4) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date5](#Date5) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date6](#Date6) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date7](#Date7) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date8](#Date8) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date9](#Date9) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date10](#Date10) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date11](#Date11) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date12](#Date12) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date13](#Date13) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date14](#Date14) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date15](#Date15) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date16](#Date16) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date17](#Date17) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date18](#Date18) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date19](#Date19) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date20](#Date20) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date21](#Date21) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date22](#Date22) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date23](#Date23) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date24](#Date24) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date25](#Date25) | int(10) | unsigned |  | NO | 0 |  |  |
| [Date26](#Date26) | int(10) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags1](#CalendarFlags1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags2](#CalendarFlags2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags3](#CalendarFlags3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags4](#CalendarFlags4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags5](#CalendarFlags5) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags6](#CalendarFlags6) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags7](#CalendarFlags7) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags8](#CalendarFlags8) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags9](#CalendarFlags9) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [CalendarFlags10](#CalendarFlags10) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [TextureFileDataID1](#TextureFileDataID1) | int(11) | signed |  | NO | 0 |  |  |
| [TextureFileDataID2](#TextureFileDataID2) | int(11) | signed |  | NO | 0 |  |  |
| [TextureFileDataID3](#TextureFileDataID3) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
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
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/heirloom_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'heirloom_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/hotfix_blob" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'hotfix_blob'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

