---
title: waypoint_data
description: 
published: true
date: 2023-10-15T20:48:35.202Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:38:05.732Z
---

<a href="https://trinitycore.info/en/database/master/world/warden_checks" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'warden_checks'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'waypoint_scripts'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO | 0 |  | Creature GUID |
| [point](#point) | int | unsigned | PRI | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | YES | NULL |  |  |
| [delay](#delay) | int | unsigned |  | NO | 0 |  |  |
| [move_type](#move_type) | int | signed |  | NO | 0 |  |  |
| [action](#action) | int | signed |  | NO | 0 |  |  |
| [action_chance](#action_chance) | smallint | signed |  | NO | 100 |  |  |
| [wpguid](#wpguid) | bigint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
Unique ID for each path.

The TDB standard is **[`creature_template.entry`](/database/master/world/creature_template#entry) * 100 (+ path offset)**. Any waypoints submitted to TDB should follow this standard.

> **Example**: Creature with entry 1234 and two paths:
> - Path 1 &rarr; 1234 * 100 + 0 = 123400
> - Path 2 &rarr; 1234 * 100 + 1 = 123401

However, this is only a suggestion when creating your own waypoints. This ID can be anything you want as long as [`creature_addon.path_id`](/database/master/world/creature_addon#path_id) is set to the ID you pick here for the creature you are creating a waypoint for.
&nbsp;

### point
Unique point ID for each point in a path. Starts at 0 and increases with each path.
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
The orientation when waypoint is reached. 
&nbsp;

### delay
Time to wait (in ms) before running to next point.
&nbsp;

### move_type
| Name | Value |
| ---- | ----- |
| Walk | 0 |
| Run | 1 |
| Fly | 2 |
&nbsp;

### action
ID of the action to be performed. See [`waypoint_scripts.id`](/database/master/world/waypoint_scripts#id).
&nbsp;

### action_chance
Percentage of action happening (0-100%).
&nbsp;

### wpguid
This field is used by the core and is **NOT to be set by hand**.

This field holds the GUID of the waypoint visual when you enable the visual mode for waypoints.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/warden_checks" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'warden_checks'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'waypoint_scripts'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
