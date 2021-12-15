---
title: difficulty
description: 
published: true
date: 2021-11-14T19:41:35.096Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/destructible_model_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'destructible_model_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/difficulty_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'difficulty_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [InstanceType](#instancetype) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [OldEnumValue](#oldenumvalue) | tinyint(4) | signed |  | NO | 0 |  |  |
| [FallbackDifficultyID](#fallbackdifficultyid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinPlayers](#minplayers) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxPlayers](#maxplayers) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ItemContext](#itemcontext) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ToggleDifficultyID](#toggledifficultyid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [GroupSizeHealthCurveID](#groupsizehealthcurveid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [GroupSizeDmgCurveID](#groupsizedmgcurveid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [GroupSizeSpellPointsCurveID](#groupsizespellpointscurveid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### InstanceType
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### OldEnumValue
*- no description -*
&nbsp;

### FallbackDifficultyID
*- no description -*
&nbsp;

### MinPlayers
*- no description -*
&nbsp;

### MaxPlayers
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ItemContext
*- no description -*
&nbsp;

### ToggleDifficultyID
*- no description -*
&nbsp;

### GroupSizeHealthCurveID
*- no description -*
&nbsp;

### GroupSizeDmgCurveID
*- no description -*
&nbsp;

### GroupSizeSpellPointsCurveID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/destructible_model_data" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'destructible_model_data'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/difficulty_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'difficulty_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

