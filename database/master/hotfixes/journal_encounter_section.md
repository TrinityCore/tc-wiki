---
title: journal_encounter_section
description: 
published: true
date: 2022-07-07T11:07:37.368Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/journal_encounter_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'journal_encounter_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/journal_encounter_section_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'journal_encounter_section_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Title](#title) | text |  |  | YES | NULL |  |  |
| [BodyText](#bodytext) | text |  |  | YES | NULL |  |  |
| [JournalEncounterID](#journalencounterid) | smallint | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [ParentSectionID](#parentsectionid) | smallint | unsigned |  | NO | 0 |  |  |
| [FirstChildSectionID](#firstchildsectionid) | smallint | unsigned |  | NO | 0 |  |  |
| [NextSiblingSectionID](#nextsiblingsectionid) | smallint | unsigned |  | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [IconCreatureDisplayInfoID](#iconcreaturedisplayinfoid) | int | unsigned |  | NO | 0 |  |  |
| [UiModelSceneID](#uimodelsceneid) | int | signed |  | NO | 0 |  |  |
| [SpellID](#spellid) | int | signed |  | NO | 0 |  |  |
| [IconFileDataID](#iconfiledataid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [IconFlags](#iconflags) | int | signed |  | NO | 0 |  |  |
| [DifficultyMask](#difficultymask) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Title
*- no description -*
&nbsp;

### BodyText
*- no description -*
&nbsp;

### JournalEncounterID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### ParentSectionID
*- no description -*
&nbsp;

### FirstChildSectionID
*- no description -*
&nbsp;

### NextSiblingSectionID
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### IconCreatureDisplayInfoID
*- no description -*
&nbsp;

### UiModelSceneID
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### IconFlags
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

<a href="https://trinitycore.info/en/database/master/hotfixes/journal_encounter_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'journal_encounter_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/journal_encounter_section_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'journal_encounter_section_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
