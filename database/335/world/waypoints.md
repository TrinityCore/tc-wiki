---
title: waypoints
description: 
published: true
date: 2024-05-16T11:19:36.131Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:11:00.802Z
---

<a href="https://trinitycore.info/en/database/335/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/access_requirement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'access_requirement'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Contains waypoint data, allowing Creatures to move to certain X, Y, and Z coordinates.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [pointid](#pointid) | int | unsigned | PRI | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | YES | NULL |  |  |
| [delay](#delay) | int | unsigned |  | NO | 0 |  |  |
| [point_comment](#point_comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
[creature entry](..world/creature_template#entry) to use waypoints.
&nbsp;

### pointid
Unique ID for each waypoint. Starts at 1 and increases with each waypoint.
&nbsp;

### position_x
The X coordinate of the destination waypoint.
&nbsp;

### position_y
The Y coordinate of the destination waypoint.
&nbsp;

### position_z
The Z coordinate of the destination waypoint.
&nbsp;

### orientation
The orientation of the creature. (North = 0.0; South = π (3.14159))
&nbsp;

### delay
Time to wait (in ms) before moving to the next point.
&nbsp;

### point_comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/access_requirement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'access_requirement'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
