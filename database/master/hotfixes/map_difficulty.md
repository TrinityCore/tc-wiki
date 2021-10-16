---
title: map_difficulty
description: 
published: true
date: 2021-08-30T19:58:43.074Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/map" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'map'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/map_difficulty_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'map_difficulty_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Message](#message) | text |  |  | YES | NULL |  |  |
| [DifficultyID](#difficultyid) | int(11) | signed |  | NO | 0 |  |  |
| [LockID](#lockid) | int(11) | signed |  | NO | 0 |  |  |
| [ResetInterval](#resetinterval) | tinyint(4) | signed |  | NO | 0 |  |  |
| [MaxPlayers](#maxplayers) | int(11) | signed |  | NO | 0 |  |  |
| [ItemContext](#itemcontext) | int(11) | signed |  | NO | 0 |  |  |
| [ItemContextPickerID](#itemcontextpickerid) | int(11) | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int(11) | signed |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int(11) | signed |  | NO | 0 |  |  |
| [MapID](#mapid) | int(10) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Message
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### LockID
*- no description -*
&nbsp;

### ResetInterval
*- no description -*
&nbsp;

### MaxPlayers
*- no description -*
&nbsp;

### ItemContext
*- no description -*
&nbsp;

### ItemContextPickerID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/map" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'map'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/map_difficulty_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'map_difficulty_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

