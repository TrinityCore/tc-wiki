---
title: chr_customization_element
description: 
published: true
date: 2022-01-03T11:26:23.146Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_display_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_customization_display_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_option" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_customization_option'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ChrCustomizationChoiceID](#chrcustomizationchoiceid) | int(11) | signed |  | NO | 0 |  |  |
| [RelatedChrCustomizationChoiceID](#relatedchrcustomizationchoiceid) | int(11) | signed |  | NO | 0 |  |  |
| [ChrCustomizationGeosetID](#chrcustomizationgeosetid) | int(11) | signed |  | NO | 0 |  |  |
| [ChrCustomizationSkinnedModelID](#chrcustomizationskinnedmodelid) | int(11) | signed |  | NO | 0 |  |  |
| [ChrCustomizationMaterialID](#chrcustomizationmaterialid) | int(11) | signed |  | NO | 0 |  |  |
| [ChrCustomizationBoneSetID](#chrcustomizationbonesetid) | int(11) | signed |  | NO | 0 |  |  |
| [ChrCustomizationCondModelID](#chrcustomizationcondmodelid) | int(11) | signed |  | NO | 0 |  |  |
| [ChrCustomizationDisplayInfoID](#chrcustomizationdisplayinfoid) | int(11) | signed |  | NO | 0 |  |  |
| [ChrCustItemGeoModifyID](#chrcustitemgeomodifyid) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### ChrCustomizationChoiceID
*- no description -*
&nbsp;

### RelatedChrCustomizationChoiceID
*- no description -*
&nbsp;

### ChrCustomizationGeosetID
*- no description -*
&nbsp;

### ChrCustomizationSkinnedModelID
*- no description -*
&nbsp;

### ChrCustomizationMaterialID
*- no description -*
&nbsp;

### ChrCustomizationBoneSetID
*- no description -*
&nbsp;

### ChrCustomizationCondModelID
*- no description -*
&nbsp;

### ChrCustomizationDisplayInfoID
*- no description -*
&nbsp;

### ChrCustItemGeoModifyID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_display_info" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_customization_display_info'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_option" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_customization_option'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

