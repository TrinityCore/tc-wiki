---
title: points_of_interest
description: 
published: true
date: 2021-08-30T20:38:02.296Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/de/database/master/world/playercreateinfo_spell_custom" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playercreateinfo_spell_custom'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/points_of_interest_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'points_of_interest_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint(8) | unsigned | PRI | NO | 0 |  |  |
| [PositionX](#positionx) | float |  |  | NO | 0 |  |  |
| [PositionY](#positiony) | float |  |  | NO | 0 |  |  |
| [PositionZ](#positionz) | float |  |  | NO | 0 |  |  |
| [Icon](#icon) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [Importance](#importance) | mediumint(8) | unsigned |  | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [Unknown905](#unknown905) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### PositionX
*- no description -*
&nbsp;

### PositionY
*- no description -*
&nbsp;

### PositionZ
*- no description -*
&nbsp;

### Icon
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### Importance
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### Unknown905
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/de/database/master/world/playercreateinfo_spell_custom" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playercreateinfo_spell_custom'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/de/database/master/world/points_of_interest_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'points_of_interest_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

