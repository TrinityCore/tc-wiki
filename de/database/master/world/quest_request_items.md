---
title: quest_request_items
description: 
published: true
date: 2021-08-30T20:38:02.302Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_poi_points'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/quest_request_items_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_request_items_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [EmoteOnComplete](#emoteoncomplete) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteOnIncomplete](#emoteonincomplete) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteOnCompleteDelay](#emoteoncompletedelay) | int(10) | unsigned |  | NO | 0 |  |  |
| [EmoteOnIncompleteDelay](#emoteonincompletedelay) | int(10) | unsigned |  | NO | 0 |  |  |
| [CompletionText](#completiontext) | text |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int(10) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### EmoteOnComplete
*- no description -*
&nbsp;

### EmoteOnIncomplete
*- no description -*
&nbsp;

### EmoteOnCompleteDelay
*- no description -*
&nbsp;

### EmoteOnIncompleteDelay
*- no description -*
&nbsp;

### CompletionText
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/de/database/master/world/quest_poi_points" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'quest_poi_points'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/quest_request_items_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'quest_request_items_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

