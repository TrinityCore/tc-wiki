---
title: waypoint_scripts
description: 
published: true
date: 2023-07-09T17:00:26.251Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:57.897Z
---

<a href="https://trinitycore.info/en/database/335/world/waypoint_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'waypoints'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Holds scripts used in the [waypoint_data](../world/waypoint_data) table.

[Please refer to the generic description of the script system for more information.](/database/335/world/scripts)

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned |  | NO | 0 |  |  |
| [delay](#delay) | int | unsigned |  | NO | 0 |  |  |
| [command](#command) | int | unsigned |  | NO | 0 |  |  |
| [datalong](#datalong) | int | unsigned |  | NO | 0 |  |  |
| [datalong2](#datalong2) | int | unsigned |  | NO | 0 |  |  |
| [dataint](#dataint) | int | unsigned |  | NO | 0 |  |  |
| [x](#x) | float |  |  | NO | 0 |  |  |
| [y](#y) | float |  |  | NO | 0 |  |  |
| [z](#z) | float |  |  | NO | 0 |  |  |
| [o](#o) | float |  |  | NO | 0 |  |  |
| [guid](#guid) | int | signed | PRI | NO | 0 |  |  |
| [Comment](#comment) | varchar(255) |  |  | NO | '' |  |  |
&nbsp;
## Description of fields

### id <!-- {#id-alt} -->
*- no description -*
&nbsp;

### delay
*- no description -*
&nbsp;

### command
*- no description -*
&nbsp;

### datalong
*- no description -*
&nbsp;

### datalong2
*- no description -*
&nbsp;

### dataint
*- no description -*
&nbsp;

### x
*- no description -*
&nbsp;

### y
*- no description -*
&nbsp;

### z
*- no description -*
&nbsp;

### o
*- no description -*
&nbsp;

### guid
*- no description -*
&nbsp;

### Comment
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/waypoint_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'waypoints'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
