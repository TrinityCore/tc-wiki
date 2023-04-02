---
title: waypoints
description: 
published: true
date: 2023-04-02T00:23:21.254Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:38:11.012Z
---

<a href="https://trinitycore.info/en/database/master/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/world_safe_locs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_safe_locs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

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
Entry of the creature. See [`creature_template.entry`](/database/master/world/creature_template#entry)
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
The orientation at the destination waypoint.
&nbsp;

### delay
Delay to wait when destination waypoint was reached.
&nbsp;

### point_comment
Text comment
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/world_safe_locs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_safe_locs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
