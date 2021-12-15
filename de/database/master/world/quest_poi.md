---
title: quest_poi
description: 
published: true
date: 2021-08-30T20:38:02.302Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/world/quest_offer_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_offer_reward_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_poi_points'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [QuestID](#questid) | int(11) | signed | PRI | NO | 0 |  |  |
| [BlobIndex](#blobindex) | int(11) | signed | PRI | NO | 0 |  |  |
| [Idx1](#idx1) | int(11) | signed | PRI | NO | 0 |  |  |
| [ObjectiveIndex](#objectiveindex) | int(11) | signed |  | NO | 0 |  |  |
| [QuestObjectiveID](#questobjectiveid) | int(11) | signed |  | NO | 0 |  |  |
| [QuestObjectID](#questobjectid) | int(11) | signed |  | NO | 0 |  |  |
| [MapID](#mapid) | int(11) | signed |  | NO | 0 |  |  |
| [UiMapID](#uimapid) | int(11) | signed |  | NO | 0 |  |  |
| [Priority](#priority) | int(11) | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int(11) | signed |  | NO | 0 |  |  |
| [WorldEffectID](#worldeffectid) | int(11) | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int(11) | signed |  | NO | 0 |  |  |
| [NavigationPlayerConditionID](#navigationplayerconditionid) | int(11) | signed |  | NO | 0 |  |  |
| [SpawnTrackingID](#spawntrackingid) | int(11) | signed |  | NO | 0 |  |  |
| [AlwaysAllowMergingBlobs](#alwaysallowmergingblobs) | tinyint(1) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### QuestID
*- no description -*
&nbsp;

### BlobIndex
*- no description -*
&nbsp;

### Idx1
*- no description -*
&nbsp;

### ObjectiveIndex
*- no description -*
&nbsp;

### QuestObjectiveID
*- no description -*
&nbsp;

### QuestObjectID
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### UiMapID
*- no description -*
&nbsp;

### Priority
*- no description -*
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

<a href="https://trinitycore.info/de/database/master/world/quest_offer_reward_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_offer_reward_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_poi_points'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

