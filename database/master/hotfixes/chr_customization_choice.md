---
title: chr_customization_choice
description: 
published: true
date: 2023-05-11T09:04:21.972Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:18.184Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_classes_x_power_types" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_classes_x_power_types'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_choice_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_customization_choice_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ChrCustomizationOptionID](#chrcustomizationoptionid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationReqID](#chrcustomizationreqid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationVisReqID](#chrcustomizationvisreqid) | int | signed |  | NO | 0 |  |  |
| [SortOrder](#sortorder) | smallint | unsigned |  | NO | 0 |  |  |
| [UiOrderIndex](#uiorderindex) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [AddedInPatch](#addedinpatch) | int | signed |  | NO | 0 |  |  |
| [SoundKitID](#soundkitid) | int | signed |  | NO | 0 |  |  |
| [SwatchColor1](#swatchcolor1) | int | signed |  | NO | 0 |  |  |
| [SwatchColor2](#swatchcolor2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### ChrCustomizationOptionID
*- no description -*
&nbsp;

### ChrCustomizationReqID
*- no description -*
&nbsp;

### ChrCustomizationVisReqID
*- no description -*
&nbsp;

### SortOrder
*- no description -*
&nbsp;

### UiOrderIndex
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### AddedInPatch
*- no description -*
&nbsp;

### SoundKitID
*- no description -*
&nbsp;

### SwatchColor1
*- no description -*
&nbsp;

### SwatchColor2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_classes_x_power_types" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_classes_x_power_types'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_choice_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_customization_choice_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
