---
title: area_trigger
description: 
published: true
date: 2024-02-11T20:02:20.675Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:48:51.972Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/area_table_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'area_table_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/armor_location" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'armor_location'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [PosX](#posx) | float |  |  | NO | 0 |  |  |
| [PosY](#posy) | float |  |  | NO | 0 |  |  |
| [PosZ](#posz) | float |  |  | NO | 0 |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [ContinentID](#continentid) | smallint | signed |  | NO | 0 |  |  |
| [PhaseUseFlags](#phaseuseflags) | int | signed |  | NO | 0 |  |  |
| [PhaseID](#phaseid) | smallint | signed |  | NO | 0 |  |  |
| [PhaseGroupID](#phasegroupid) | smallint | signed |  | NO | 0 |  |  |
| [Radius](#radius) | float |  |  | NO | 0 |  |  |
| [BoxLength](#boxlength) | float |  |  | NO | 0 |  |  |
| [BoxWidth](#boxwidth) | float |  |  | NO | 0 |  |  |
| [BoxHeight](#boxheight) | float |  |  | NO | 0 |  |  |
| [BoxYaw](#boxyaw) | float |  |  | NO | 0 |  |  |
| [ShapeType](#shapetype) | tinyint | signed |  | NO | 0 |  |  |
| [ShapeID](#shapeid) | smallint | signed |  | NO | 0 |  |  |
| [AreaTriggerActionSetID](#areatriggeractionsetid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### PosX
*- no description -*
&nbsp;

### PosY
*- no description -*
&nbsp;

### PosZ
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### ContinentID
*- no description -*
&nbsp;

### PhaseUseFlags
*- no description -*
&nbsp;

### PhaseID
*- no description -*
&nbsp;

### PhaseGroupID
*- no description -*
&nbsp;

### Radius
*- no description -*
&nbsp;

### BoxLength
*- no description -*
&nbsp;

### BoxWidth
*- no description -*
&nbsp;

### BoxHeight
*- no description -*
&nbsp;

### BoxYaw
*- no description -*
&nbsp;

### ShapeType
*- no description -*
&nbsp;

### ShapeID
*- no description -*
&nbsp;

### AreaTriggerActionSetID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/area_table_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'area_table_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/armor_location" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'armor_location'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
