---
title: warden_checks
description: 
published: true
date: 2022-11-21T21:09:59.270Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:38:03.122Z
---

<a href="https://trinitycore.info/en/database/master/world/vw_smart_scripts_with_labels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_smart_scripts_with_labels'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/waypoint_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'waypoint_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | smallint | unsigned | PRI | NO |  | auto_increment |  |
| [type](#type) | tinyint | unsigned |  | YES | NULL |  |  |
| [str](#str) | varchar(170) |  |  | YES | NULL |  |  |
| [address](#address) | int | unsigned |  | YES | NULL |  |  |
| [length](#length) | tinyint | unsigned |  | YES | NULL |  |  |
| [comment](#comment) | varchar(50) |  |  | YES | NULL |  |  |
| [data](#data) | binary(24) |  |  | YES | NULL |  |  |
| [result](#result) | varbinary(24) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### id
Unique ID, automatically incremented by 1
&nbsp;

### type
| ID | Name | Comment |
|----|------|---------|
| 0 |  NONE_CHECK | SKIP |
| 87 |  TIMING_CHECK | nyi |
| 113 |  DRIVER_CHECK | uint Seed + byte[20] SHA1 + byte driverNameIndex (check to ensure driver isn't loaded) |
| 126 |  PROC_CHECK | nyi |
| 139 |  LUA_EVAL_CHECK | evaluate arbitrary Lua check |
| 152 |  MPQ_CHECK | get hash of MPQ file (to check it is not modified) |
| 178 |  PAGE_CHECK_A | scans all pages for specified SHA1 hash |
| 191 |  PAGE_CHECK_B | scans only pages starts with MZ+PE headers for specified hash |
| 217 |  MODULE_CHECK | check to make sure module isn't injected |
| 243 |  MEM_CHECK | retrieve specific memory |
{.dense}

&nbsp;

### str
*- no description -*
&nbsp;

### address
*- no description -*
&nbsp;

### length
*- no description -*
&nbsp;

### comment
*- no description -*
&nbsp;

### data
*- no description -*
&nbsp;

### result
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/vw_smart_scripts_with_labels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_smart_scripts_with_labels'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/waypoint_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'waypoint_data'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
