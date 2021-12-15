---
title: vehicle_accessory
description: 
published: true
date: 2021-08-30T20:38:02.321Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/world/updates_include" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'updates_include'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/vehicle_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | bigint(20) | unsigned | PRI | NO | 0 |  |  |
| [accessory_entry](#accessory_entry) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [seat_id](#seat_id) | tinyint(4) | signed | PRI | NO | 0 |  |  |
| [minion](#minion) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [description](#description) | text |  |  | NO |  |  |  |
| [summontype](#summontype) | tinyint(3) | unsigned |  | NO | 6 |  | see enum TempSummonType |
| [summontimer](#summontimer) | int(10) | unsigned |  | NO | 30000 |  | timer, only relevant for certain summontypes |
&nbsp;
## Description of fields

### guid
*- no description -*
&nbsp;

### accessory_entry
*- no description -*
&nbsp;

### seat_id
*- no description -*
&nbsp;

### minion
*- no description -*
&nbsp;

### description
*- no description -*
&nbsp;

### summontype
*- no description -*
&nbsp;

### summontimer
*- no description -*
&nbsp;

<a href="https://trinitycore.info/de/database/master/world/updates_include" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'updates_include'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/vehicle_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'vehicle_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

