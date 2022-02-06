---
title: chr_model
description: 
published: true
date: 2022-02-06T18:26:40.912Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_req_choice" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_customization_req_choice'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_race_x_chr_model" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_race_x_chr_model'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [FaceCustomizationOffset1](#facecustomizationoffset1) | float |  |  | NO | 0 |  |  |
| [FaceCustomizationOffset2](#facecustomizationoffset2) | float |  |  | NO | 0 |  |  |
| [FaceCustomizationOffset3](#facecustomizationoffset3) | float |  |  | NO | 0 |  |  |
| [CustomizeOffset1](#customizeoffset1) | float |  |  | NO | 0 |  |  |
| [CustomizeOffset2](#customizeoffset2) | float |  |  | NO | 0 |  |  |
| [CustomizeOffset3](#customizeoffset3) | float |  |  | NO | 0 |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [Sex](#sex) | int | signed |  | NO | 0 |  |  |
| [DisplayID](#displayid) | int | signed |  | NO | 0 |  |  |
| [CharComponentTextureLayoutID](#charcomponenttexturelayoutid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [SkeletonFileDataID](#skeletonfiledataid) | int | signed |  | NO | 0 |  |  |
| [ModelFallbackChrModelID](#modelfallbackchrmodelid) | int | signed |  | NO | 0 |  |  |
| [TextureFallbackChrModelID](#texturefallbackchrmodelid) | int | signed |  | NO | 0 |  |  |
| [HelmVisFallbackChrModelID](#helmvisfallbackchrmodelid) | int | signed |  | NO | 0 |  |  |
| [CustomizeScale](#customizescale) | float |  |  | NO | 0 |  |  |
| [CustomizeFacing](#customizefacing) | float |  |  | NO | 0 |  |  |
| [CameraDistanceOffset](#cameradistanceoffset) | float |  |  | NO | 0 |  |  |
| [BarberShopCameraOffsetScale](#barbershopcameraoffsetscale) | float |  |  | NO | 0 |  |  |
| [BarberShopCameraHeightOffsetScale](#barbershopcameraheightoffsetscale) | float |  |  | NO | 0 |  |  |
| [BarberShopCameraRotationOffset](#barbershopcamerarotationoffset) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### FaceCustomizationOffset1
*- no description -*
&nbsp;

### FaceCustomizationOffset2
*- no description -*
&nbsp;

### FaceCustomizationOffset3
*- no description -*
&nbsp;

### CustomizeOffset1
*- no description -*
&nbsp;

### CustomizeOffset2
*- no description -*
&nbsp;

### CustomizeOffset3
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### Sex
*- no description -*
&nbsp;

### DisplayID
*- no description -*
&nbsp;

### CharComponentTextureLayoutID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SkeletonFileDataID
*- no description -*
&nbsp;

### ModelFallbackChrModelID
*- no description -*
&nbsp;

### TextureFallbackChrModelID
*- no description -*
&nbsp;

### HelmVisFallbackChrModelID
*- no description -*
&nbsp;

### CustomizeScale
*- no description -*
&nbsp;

### CustomizeFacing
*- no description -*
&nbsp;

### CameraDistanceOffset
*- no description -*
&nbsp;

### BarberShopCameraOffsetScale
*- no description -*
&nbsp;

### BarberShopCameraHeightOffsetScale
*- no description -*
&nbsp;

### BarberShopCameraRotationOffset
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/chr_customization_req_choice" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'chr_customization_req_choice'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/chr_race_x_chr_model" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'chr_race_x_chr_model'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

