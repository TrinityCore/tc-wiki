---
title: dungeon_encounter
description: 
published: true
date: 2022-02-06T18:26:40.922Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/difficulty_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'difficulty_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/dungeon_encounter_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'dungeon_encounter_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [MapID](#mapid) | smallint | signed |  | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | int | signed |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | signed |  | NO | 0 |  |  |
| [CompleteWorldStateID](#completeworldstateid) | int | signed |  | NO | 0 |  |  |
| [Bit](#bit) | tinyint | signed |  | NO | 0 |  |  |
| [CreatureDisplayID](#creaturedisplayid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [SpellIconFileID](#spelliconfileid) | int | signed |  | NO | 0 |  |  |
| [Faction](#faction) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### CompleteWorldStateID
*- no description -*
&nbsp;

### Bit
*- no description -*
&nbsp;

### CreatureDisplayID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SpellIconFileID
*- no description -*
&nbsp;

### Faction
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/difficulty_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'difficulty_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/dungeon_encounter_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'dungeon_encounter_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

