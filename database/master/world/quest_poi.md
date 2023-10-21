---
title: quest_poi
description: 
published: true
date: 2022-11-21T21:07:56.807Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:15.540Z
---

<a href="https://trinitycore.info/en/database/master/world/quest_offer_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_offer_reward_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_poi_points'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [QuestID](#questid) | int | signed | PRI | NO | 0 |  |  |
| [BlobIndex](#blobindex) | int | signed | PRI | NO | 0 |  |  |
| [Idx1](#idx1) | int | signed | PRI | NO | 0 |  |  |
| [ObjectiveIndex](#objectiveindex) | int | signed |  | NO | 0 |  |  |
| [QuestObjectiveID](#questobjectiveid) | int | signed |  | NO | 0 |  |  |
| [QuestObjectID](#questobjectid) | int | signed |  | NO | 0 |  |  |
| [MapID](#mapid) | int | signed |  | NO | 0 |  |  |
| [UiMapID](#uimapid) | int | signed |  | NO | 0 |  |  |
| [Priority](#priority) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [WorldEffectID](#worldeffectid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [NavigationPlayerConditionID](#navigationplayerconditionid) | int | signed |  | NO | 0 |  |  |
| [SpawnTrackingID](#spawntrackingid) | int | signed |  | NO | 0 |  |  |
| [AlwaysAllowMergingBlobs](#alwaysallowmergingblobs) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### QuestID
The Quest Id from [quest_template.ID](../world/quest_template#id)
&nbsp;

### BlobIndex
*- no description -*
&nbsp;

### Idx1
*- no description -*
&nbsp;

### ObjectiveIndex
If `-1`, it's the position of the npc where you can complete the quest.
&nbsp;

### QuestObjectiveID
*- no description -*
&nbsp;

### QuestObjectID
*- no description -*
&nbsp;

### MapID
The [Map ID](https://wow.tools/dbc/?dbc=map) to display the POI on.
&nbsp;

### UiMapID
*- no description -*
&nbsp;

### Priority
*unknown / just sent to client*
&nbsp;

### Flags
*- no description -*
&nbsp;

### WorldEffectID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### NavigationPlayerConditionID
*- no description -*
&nbsp;

### SpawnTrackingID
*- no description -*
&nbsp;

### AlwaysAllowMergingBlobs
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/quest_offer_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_offer_reward_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_poi_points'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

