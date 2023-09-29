---
title: quest_poi
description:
published: true
date: 2023-07-12T12:45:38.145Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:08:14.403Z
---

<a href="https://trinitycore.info/en/database/335/world/quest_offer_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_offer_reward_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_poi_points'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Comes from sniffs.

This table manages the area and point markers for quest objectives.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [QuestID](#questid) | int | unsigned | PRI | NO | 0 |  |  |
| [id](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [ObjectiveIndex](#objectiveindex) | int | signed |  | NO | 0 |  |  |
| [MapID](#mapid) | int | unsigned |  | NO | 0 |  |  |
| [WorldMapAreaId](#worldmapareaid) | int | unsigned |  | NO | 0 |  |  |
| [Floor](#floor) | int | unsigned |  | NO | 0 |  |  |
| [Priority](#priority) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | smallint | signed |  | YES | 0 |  |  |
&nbsp;
## Description of fields

### QuestID
The Quest Id from [quest_template.ID](../world/quest_template#id)
&nbsp;

### id
Used to group multiple entries from [quest_poi_points.QuestID](../world/quest_poi_points#QuestID). It is the id of the POI.
&nbsp;

### ObjectiveIndex
If `-1`, it's the position of the npc where you can complete the quest.
&nbsp;

### MapID
The [Map ID](/files/DBC/335/map#id) to display the POI on.
&nbsp;

### WorldMapAreaId
A [WorldMapArea ID](/files/DBC/335/worldmaparea#id), matching **MapID**, to disply the POI on.
&nbsp;

### Floor
If the area is has multiple levels, the [DungeonMap FloorIndex](/files/DBC/335/dungeonmap#floorindex) with the POI.
&nbsp;

### Priority
*unknown / just sent to client*
&nbsp;

### Flags
*unknown / just sent to client*
Same as [AreaPOI Flags](/files/DBC/335/areapoi#flags)?
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/en/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/en/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/quest_offer_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_offer_reward_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_poi_points'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
