---
title: world_safe_locs
description: 
published: true
date: 2023-04-07T23:48:01.006Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:38:13.594Z
---

<a href="https://trinitycore.info/en/database/master/world/waypoint_scripts" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_scripts'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/world_state" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_state'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO |  |  |  |
| [MapID](#mapid) | int | unsigned |  | YES | NULL |  |  |
| [LocX](#locx) | float |  |  | YES | NULL |  |  |
| [LocY](#locy) | float |  |  | YES | NULL |  |  |
| [LocZ](#locz) | float |  |  | YES | NULL |  |  |
| [Facing](#facing) | float |  |  | YES | NULL |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID
Unique identifier, as of today ID 7582 is last (leaked) entry since this used to be a shipped DB2 file. 
New (custom) IDs should be used per expansion as followed:
| Expansion                | ID range start | ID range end |
| ------------------------ | -------------- | ------------ |
| Battle for Azeroth (8.x) |          80000 |        89999 |
| Shadowlands (9.x)        |          90000 |        99999 |
| Dragonflight (10.x)      |         100000 |       109999 | 
&nbsp;

### MapID
MapID of the location
&nbsp;

### LocX
X coordinate of the location
&nbsp;

### LocY
Y coordinate of the location
&nbsp;

### LocZ
Z coordinate of the location
&nbsp;

### Facing
Facing coordinate of the location **<u>in degrees</u>**

Note:
Radians to degrees: `Radians / (2 * PI() / 360)` (you can use this snippet in SQL)
&nbsp;

### Comment
The usage of the location and where it is (as in zone/map name)
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/waypoints" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoints'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/world_state" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_state'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
