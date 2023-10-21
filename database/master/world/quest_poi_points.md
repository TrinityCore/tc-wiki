---
title: quest_poi_points
description: 
published: true
date: 2022-11-21T21:07:58.426Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:18.209Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_poi" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_poi'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_pool_members" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_pool_members'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [QuestID](#questid) | int | signed | PRI | NO | 0 |  |  |
| [Idx1](#idx1) | int | signed | PRI | NO | 0 |  |  |
| [Idx2](#idx2) | int | signed | PRI | NO | 0 |  |  |
| [X](#x) | int | signed |  | NO | 0 |  |  |
| [Y](#y) | int | signed |  | NO | 0 |  |  |
| [Z](#z) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### QuestID
references [quest_template.ID](../world/quest_template#id) and [quest_poi.QuestID](../world/quest_poi#questid)
&nbsp;

### Idx1
Used to group multiple entries from [quest_poi.id](../world/quest_poi#id). You must manually increment this value by 1 for each new row in quest_poi_point with the same questId (0, 1, 2, 3...).
&nbsp;

### Idx2
Used to group multiple entries in the quest poi points to draw the polygon for that point of interest. The actual points are the corners of each polygon.

Example quest: [Secret Communication](https://aowow.trinitycore.info/?quest=8318).
| QuestID | Idx1 | Idx2 | X     | Y   | VerifiedBuild |
|---------|------|------|-------|-----|---------------|
|    8318 |    3 |    0 | -6231 | -51 |             0 |
|    8318 |    3 |    1 | -6236 |  19 |             0 |
|    8318 |    3 |    2 | -6241 |  52 |             0 |
|    8318 |    3 |    3 | -6316 | 282 |             0 |
|    8318 |    3 |    4 | -6413 | 282 |             0 |
|    8318 |    3 |    5 | -6483 | 250 |             0 |
|    8318 |    3 |    6 | -6483 | 217 |             0 |
|    8318 |    3 |    7 | -6326 |  -7 |             0 |
{.dense}

These points are all the little corners on the blue box. idx1 represents an area defined by the points of idx2 to draw the shape.
![quest_poi.png](/quest_poi.png)
&nbsp;

### X
The X position of the question mark on the [MapID](../world/quest_poi#mapid).
&nbsp;

### Y
The Y position of the question mark on the [MapID](../world/quest_poi#mapid).
&nbsp;

### Z
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_poi" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_poi'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_pool_members" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_pool_members'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

