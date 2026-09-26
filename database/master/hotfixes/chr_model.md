---
title: chr_model
description: 
published: true
date: 2022-12-19T18:37:48.101Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:39.119Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [FaceCustomizationOffset1](#facecustomizationoffset1) | float |  |  | NO | 0 |  |  |
| [FaceCustomizationOffset2](#facecustomizationoffset2) | float |  |  | NO | 0 |  |  |
| [FaceCustomizationOffset3](#facecustomizationoffset3) | float |  |  | NO | 0 |  |  |
| [CustomizeOffset1](#customizeoffset1) | float |  |  | NO | 0 |  |  |
| [CustomizeOffset2](#customizeoffset2) | float |  |  | NO | 0 |  |  |
| [CustomizeOffset3](#customizeoffset3) | float |  |  | NO | 0 |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Sex](#sex) | tinyint | signed |  | NO | 0 |  |  |
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

### ID {#id-alt}
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

