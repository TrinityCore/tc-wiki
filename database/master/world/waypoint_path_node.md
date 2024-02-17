---
title: waypoint_path_node
description: 
published: true
date: 2024-02-17T07:27:20.592Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:38:08.386Z
---

<a href="https://trinitycore.info/en/database/master/world/waypoint_path" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_path'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/world_safe_locs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_safe_locs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [PathId](#pathid) | int | unsigned | PRI | NO | 0 |  |  |
| [NodeId](#nodeid) | int | unsigned | PRI | NO | 0 |  |  |
| [PositionX](#positionx) | float |  |  | NO | 0 |  |  |
| [PositionY](#positiony) | float |  |  | NO | 0 |  |  |
| [PositionZ](#positionz) | float |  |  | NO | 0 |  |  |
| [Orientation](#orientation) | float |  |  | YES | NULL |  |  |
| [Delay](#delay) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### PathId
References unique path id from [`waypoint_path.PathId`](/database/master/world/waypoint_path#PathId)
&nbsp;

### NodeId
Unique node id for each node in a path. Starts at 0 and increases with each node.
&nbsp;

### PositionX
The X coordinate of the destination node.
&nbsp;

### PositionY
The Y coordinate of the destination node.
&nbsp;

### PositionZ
The Z coordinate of the destination node.
&nbsp;

### Orientation
The orientation when node is reached. 
&nbsp;

### Delay
Time to wait (in ms) before running to next node.
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/waypoint_path" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'waypoint_path'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/world_safe_locs" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'world_safe_locs'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
