---
title: chr_customization_option
description: 
published: true
date: 2024-09-05T22:45:55.794Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:28.659Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_element" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_customization_element'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_option_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_customization_option_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [SecondaryID](#secondaryid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ChrRacesID](#chrracesid) | int | signed |  | NO | 0 |  |  |
| [Sex](#sex) | int | signed |  | NO | 0 |  |  |
| [ChrModelID](#chrmodelid) | int | signed |  | NO | 0 |  |  |
| [SortIndex](#sortindex) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationCategoryID](#chrcustomizationcategoryid) | int | signed |  | NO | 0 |  |  |
| [OptionType](#optiontype) | int | signed |  | NO | 0 |  |  |
| [BarberShopCostModifier](#barbershopcostmodifier) | float |  |  | NO | 0 |  |  |
| [ChrCustomizationID](#chrcustomizationid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationReqID](#chrcustomizationreqid) | int | signed |  | NO | 0 |  |  |
| [UiOrderIndex](#uiorderindex) | int | signed |  | NO | 0 |  |  |
| [AddedInPatch](#addedinpatch) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### SecondaryID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ChrRacesID
*- no description -*
&nbsp;

### Sex
*- no description -*
&nbsp;

### ChrModelID
*- no description -*
&nbsp;

### SortIndex
*- no description -*
&nbsp;

### ChrCustomizationCategoryID
*- no description -*
&nbsp;

### OptionType
*- no description -*
&nbsp;

### BarberShopCostModifier
*- no description -*
&nbsp;

### ChrCustomizationID
*- no description -*
&nbsp;

### ChrCustomizationReqID
*- no description -*
&nbsp;

### UiOrderIndex
*- no description -*
&nbsp;

### AddedInPatch
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_element" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_customization_element'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_option_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_customization_option_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
