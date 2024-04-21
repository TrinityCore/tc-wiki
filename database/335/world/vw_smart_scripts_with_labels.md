---
title: vw_smart_scripts_with_labels
description: 
published: true
date: 2022-11-21T21:32:02.398Z
tags: database, 3.3.5, 3.3.5a, 335, 335a, wotlk, world
editor: markdown
dateCreated: 2021-08-30T22:10:49.063Z
---

<a href="https://trinitycore.info/en/database/335/world/vw_disables_with_labels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_disables_with_labels'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/warden_checks" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'warden_checks'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entryorguid](#entryorguid) | int | signed |  | NO |  |  |  |
| [source_type](#source_type) | tinyint | unsigned |  | NO | 0 |  |  |
| [id](#id-alt) | smallint | unsigned |  | NO | 0 |  |  |
| [link](#link) | smallint | unsigned |  | NO | 0 |  |  |
| [event_type](#event_type) | varchar(35) |  |  | NO | '' |  |  |
| [event_phase_mask](#event_phase_mask) | smallint | unsigned |  | NO | 0 |  |  |
| [event_chance](#event_chance) | tinyint | unsigned |  | NO | 100 |  |  |
| [event_flags](#event_flags) | smallint | unsigned |  | NO | 0 |  |  |
| [event_param1](#event_param1) | int | unsigned |  | NO | 0 |  |  |
| [event_param2](#event_param2) | int | unsigned |  | NO | 0 |  |  |
| [event_param3](#event_param3) | int | unsigned |  | NO | 0 |  |  |
| [event_param4](#event_param4) | int | unsigned |  | NO | 0 |  |  |
| [event_param5](#event_param5) | int | unsigned |  | NO | 0 |  |  |
| [action_type](#action_type) | varchar(47) |  |  | NO | '' |  |  |
| [action_param1](#action_param1) | int | unsigned |  | NO | 0 |  |  |
| [action_param2](#action_param2) | int | unsigned |  | NO | 0 |  |  |
| [action_param3](#action_param3) | int | unsigned |  | NO | 0 |  |  |
| [action_param4](#action_param4) | int | unsigned |  | NO | 0 |  |  |
| [action_param5](#action_param5) | int | unsigned |  | NO | 0 |  |  |
| [action_param6](#action_param6) | int | unsigned |  | NO | 0 |  |  |
| [target_type](#target_type) | varchar(41) |  |  | NO | '' |  |  |
| [target_param1](#target_param1) | int | unsigned |  | NO | 0 |  |  |
| [target_param2](#target_param2) | int | unsigned |  | NO | 0 |  |  |
| [target_param3](#target_param3) | int | unsigned |  | NO | 0 |  |  |
| [target_param4](#target_param4) | int | unsigned |  | NO | 0 |  |  |
| [target_x](#target_x) | float |  |  | NO | 0 |  |  |
| [target_y](#target_y) | float |  |  | NO | 0 |  |  |
| [target_z](#target_z) | float |  |  | NO | 0 |  |  |
| [target_o](#target_o) | float |  |  | NO | 0 |  |  |
| [comment](#comment) | text |  |  | NO |  |  | Event Comment |
&nbsp;
## Description of fields

### entryorguid
*- no description -*
&nbsp;

### source_type
*- no description -*
&nbsp;

### id <!-- {#id-alt} -->
*- no description -*
&nbsp;

### link
*- no description -*
&nbsp;

### event_type
*- no description -*
&nbsp;

### event_phase_mask
*- no description -*
&nbsp;

### event_chance
*- no description -*
&nbsp;

### event_flags
*- no description -*
&nbsp;

### event_param1
*- no description -*
&nbsp;

### event_param2
*- no description -*
&nbsp;

### event_param3
*- no description -*
&nbsp;

### event_param4
*- no description -*
&nbsp;

### event_param5
*- no description -*
&nbsp;

### action_type
*- no description -*
&nbsp;

### action_param1
*- no description -*
&nbsp;

### action_param2
*- no description -*
&nbsp;

### action_param3
*- no description -*
&nbsp;

### action_param4
*- no description -*
&nbsp;

### action_param5
*- no description -*
&nbsp;

### action_param6
*- no description -*
&nbsp;

### target_type
*- no description -*
&nbsp;

### target_param1
*- no description -*
&nbsp;

### target_param2
*- no description -*
&nbsp;

### target_param3
*- no description -*
&nbsp;

### target_param4
*- no description -*
&nbsp;

### target_x
*- no description -*
&nbsp;

### target_y
*- no description -*
&nbsp;

### target_z
*- no description -*
&nbsp;

### target_o
*- no description -*
&nbsp;

### comment
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/vw_disables_with_labels" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'vw_disables_with_labels'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/warden_checks" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'warden_checks'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
