---
title: journal_encounter
description: 
published: true
date: 2022-07-07T11:07:37.347Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/item_x_item_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_x_item_effect'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/journal_encounter_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'journal_encounter_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [MapX](#mapx) | float |  |  | NO | 0 |  |  |
| [MapY](#mapy) | float |  |  | NO | 0 |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [JournalInstanceID](#journalinstanceid) | smallint | unsigned |  | NO | 0 |  |  |
| [DungeonEncounterID](#dungeonencounterid) | smallint | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | unsigned |  | NO | 0 |  |  |
| [FirstSectionID](#firstsectionid) | smallint | unsigned |  | NO | 0 |  |  |
| [UiMapID](#uimapid) | smallint | unsigned |  | NO | 0 |  |  |
| [MapDisplayConditionID](#mapdisplayconditionid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [DifficultyMask](#difficultymask) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### MapX
*- no description -*
&nbsp;

### MapY
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### JournalInstanceID
*- no description -*
&nbsp;

### DungeonEncounterID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### FirstSectionID
*- no description -*
&nbsp;

### UiMapID
*- no description -*
&nbsp;

### MapDisplayConditionID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### DifficultyMask
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/item_x_item_effect" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'item_x_item_effect'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/journal_encounter_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'journal_encounter_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
