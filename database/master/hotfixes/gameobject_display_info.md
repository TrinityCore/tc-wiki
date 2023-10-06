---
title: gameobject_display_info
description: 
published: true
date: 2023-10-06T19:24:23.881Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:44.412Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/gameobject_art_kit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_art_kit'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/gameobjects" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobjects'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [GeoBoxMinX](#geoboxminx) | float |  |  | NO | 0 |  |  |
| [GeoBoxMinY](#geoboxminy) | float |  |  | NO | 0 |  |  |
| [GeoBoxMinZ](#geoboxminz) | float |  |  | NO | 0 |  |  |
| [GeoBoxMaxX](#geoboxmaxx) | float |  |  | NO | 0 |  |  |
| [GeoBoxMaxY](#geoboxmaxy) | float |  |  | NO | 0 |  |  |
| [GeoBoxMaxZ](#geoboxmaxz) | float |  |  | NO | 0 |  |  |
| [FileDataID](#filedataid) | int | signed |  | NO | 0 |  |  |
| [ObjectEffectPackageID](#objecteffectpackageid) | smallint | signed |  | NO | 0 |  |  |
| [OverrideLootEffectScale](#overridelooteffectscale) | float |  |  | NO | 0 |  |  |
| [OverrideNameScale](#overridenamescale) | float |  |  | NO | 0 |  |  |
| [AlternateDisplayType](#alternatedisplaytype) | int | signed |  | NO | 0 |  |  |
| [ClientCreatureDisplayInfoID](#clientcreaturedisplayinfoid) | int | signed |  | NO | 0 |  |  |
| [ClientItemID](#clientitemid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### GeoBoxMinX
*- no description -*
&nbsp;

### GeoBoxMinY
*- no description -*
&nbsp;

### GeoBoxMinZ
*- no description -*
&nbsp;

### GeoBoxMaxX
*- no description -*
&nbsp;

### GeoBoxMaxY
*- no description -*
&nbsp;

### GeoBoxMaxZ
*- no description -*
&nbsp;

### FileDataID
*- no description -*
&nbsp;

### ObjectEffectPackageID
*- no description -*
&nbsp;

### OverrideLootEffectScale
*- no description -*
&nbsp;

### OverrideNameScale
*- no description -*
&nbsp;

### AlternateDisplayType
*- no description -*
&nbsp;

### ClientCreatureDisplayInfoID
*- no description -*
&nbsp;

### ClientItemID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/gameobject_art_kit" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_art_kit'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/gameobjects" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobjects'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
