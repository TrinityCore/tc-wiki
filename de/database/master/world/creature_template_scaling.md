---
title: creature_template_scaling
description: 
published: true
date: 2021-11-28T13:06:46.081Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:29.170Z
---

<a href="https://trinitycore.info/de/database/master/world/creature_template_movement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_movement'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/creature_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_text'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment | Source in sniff |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Entry](#entry) | mediumint(8) | unsigned | PRI | NO |  |  |  | SMSG_UPDATE_OBJECT |
| [DifficultyID](#difficultyid) | tinyint(3) | unsigned | PRI | NO | 0 |  |  | SMSG_WORLD_SERVER_INFO |
| [LevelScalingDeltaMin](#levelscalingdeltamin) | smallint(5) | signed |  | NO | 0 |  |  | SMSG_UPDATE_OBJECT |
| [LevelScalingDeltaMax](#levelscalingdeltamax) | smallint(5) | signed |  | NO | 0 |  |  | SMSG_UPDATE_OBJECT |
| [ContentTuningID](#contenttuningid) | int(10) | signed |  | NO | 0 |  |  | SMSG_UPDATE_OBJECT |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  | generated |
&nbsp;
## Description of fields

### Entry
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### LevelScalingDeltaMin
*- no description -*
&nbsp;

### LevelScalingDeltaMax
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/de/database/master/world/creature_template_movement" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature_template_movement'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/creature_text" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_text'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

