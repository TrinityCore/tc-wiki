---
title: broadcast_text
description: 
published: true
date: 2021-11-14T19:41:35.078Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/battlemaster_list_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battlemaster_list_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/broadcast_text_duration" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'broadcast_text_duration'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Text](#text) | text |  |  | YES | NULL |  |  |
| [Text1](#text1) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [LanguageID](#languageid) | int(11) | signed |  | NO | 0 |  |  |
| [ConditionID](#conditionid) | int(11) | signed |  | NO | 0 |  |  |
| [EmotesID](#emotesid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ChatBubbleDurationMs](#chatbubbledurationms) | int(10) | unsigned |  | NO | 0 |  |  |
| [SoundKitID1](#soundkitid1) | int(10) | unsigned |  | NO | 0 |  |  |
| [SoundKitID2](#soundkitid2) | int(10) | unsigned |  | NO | 0 |  |  |
| [EmoteID1](#emoteid1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteID2](#emoteid2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteID3](#emoteid3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1](#emotedelay1) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2](#emotedelay2) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3](#emotedelay3) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Text
*- no description -*
&nbsp;

### Text1
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### LanguageID
*- no description -*
&nbsp;

### ConditionID
*- no description -*
&nbsp;

### EmotesID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ChatBubbleDurationMs
*- no description -*
&nbsp;

### SoundKitID1
*- no description -*
&nbsp;

### SoundKitID2
*- no description -*
&nbsp;

### EmoteID1
*- no description -*
&nbsp;

### EmoteID2
*- no description -*
&nbsp;

### EmoteID3
*- no description -*
&nbsp;

### EmoteDelay1
*- no description -*
&nbsp;

### EmoteDelay2
*- no description -*
&nbsp;

### EmoteDelay3
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/battlemaster_list_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battlemaster_list_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/broadcast_text_duration" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'broadcast_text_duration'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

