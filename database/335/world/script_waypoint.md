---
title: script_waypoint
description: 
published: false
date: 2025-12-23T19:03:21.594Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:53.470Z
---

<a href="https://trinitycore.info/en/database/335/world/script_spline_chain_waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'script_spline_chain_waypoints'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/skill_discovery_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_discovery_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table holds creature waypoints for use by the scripting system.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  | creature_template entry |
| [pointid](#pointid) | int | unsigned | PRI | NO | 0 |  |  |
| [location_x](#location_x) | float |  |  | NO | 0 |  |  |
| [location_y](#location_y) | float |  |  | NO | 0 |  |  |
| [location_z](#location_z) | float |  |  | NO | 0 |  |  |
| [waittime](#waittime) | int | unsigned |  | NO | 0 |  | waittime in millisecs |
| [point_comment](#point_comment) | mediumtext |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### entry
A [creature_template.entry](../world/creature_template#entry). This creature must have a [ScriptName](../world/creature_template#scriptname) assigned.
&nbsp;

### pointid
Unique ID for each waypoint. Starts at 1 and increases with each waypoint.
&nbsp;

### location_x
The X coordinate of the destination waypoint.
&nbsp;

### location_y
The Y coordinate of the destination waypoint.
&nbsp;

### location_z
The Z coordinate of the destination waypoint.
&nbsp;

### waittime
Time in milliseconds to wait at waypoint.
&nbsp;

### point_comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/script_spline_chain_waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'script_spline_chain_waypoints'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/skill_discovery_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'skill_discovery_template'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
