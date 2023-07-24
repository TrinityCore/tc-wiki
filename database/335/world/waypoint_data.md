---
title: waypoint_data
description: 
published: true
date: 2023-07-24T18:50:38.401Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:55.030Z
---

<a href="https://trinitycore.info/en/database/335/world/warden_checks" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'warden_checks'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'waypoint_scripts'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

This table contains all the path data for creatures that use waypoints.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int | unsigned | PRI | NO | 0 |  | Creature GUID |
| [point](#point) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [position_x](#position_x) | float |  |  | NO | 0 |  |  |
| [position_y](#position_y) | float |  |  | NO | 0 |  |  |
| [position_z](#position_z) | float |  |  | NO | 0 |  |  |
| [orientation](#orientation) | float |  |  | YES | NULL |  |  |
| [delay](#delay) | int | unsigned |  | NO | 0 |  |  |
| [move_type](#move_type) | int | signed |  | NO | 0 |  |  |
| [action](#action) | int | signed |  | NO | 0 |  |  |
| [action_chance](#action_chance) | smallint | signed |  | NO | 100 |  |  |
| [wpguid](#wpguid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id
Unique ID for each path.

The TDB standard way of assigning an ID is to multiply [creature guid](../world/creature#guid) by 10.

So for a creature with a GUID of 1234 the path ID would be 12340. Any waypoints submitted to TDB should follow this standard.

However, this is only a suggestion when creating your own waypoints. This ID can be anything you want as long as [path_id](../world/creature_addon#path_id) is set to the **id** you pick here for the creature you are creating a waypoint for.
&nbsp;

### point
Unique point ID for each point in a path. Starts at 1 and increases with each path node.
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

### move_type
| ID | Name |
|----|------|
| 0 | WAYPOINT_MOVE_TYPE_WALK |
| 1 | WAYPOINT_MOVE_TYPE_RUN |
| 2 | WAYPOINT_MOVE_TYPE_LAND |
| 3 | WAYPOINT_MOVE_TYPE_TAKEOFF |
{.dense}

&nbsp;

### action
[Script ID](../world/waypoint_scripts#id) of the action to be performed.
&nbsp;

### action_chance
Percentage of action happening (0 – 100%).
&nbsp;

### wpguid
This field is used by the core and is _NOT_ to be set by hand.

This field holds the GUID of the waypoint visual when you enable the visual mode for waypoints.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/warden_checks" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'warden_checks'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'waypoint_scripts'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
