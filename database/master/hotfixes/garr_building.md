---
title: garr_building
description: 
published: true
date: 2021-08-30T09:44:29.527Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/garr_ability_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_ability_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/garr_building_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_building_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#ID) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [HordeName](#HordeName) | text |  |  | YES | NULL |  |  |
| [AllianceName](#AllianceName) | text |  |  | YES | NULL |  |  |
| [Description](#Description) | text |  |  | YES | NULL |  |  |
| [Tooltip](#Tooltip) | text |  |  | YES | NULL |  |  |
| [GarrTypeID](#GarrTypeID) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BuildingType](#BuildingType) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [HordeGameObjectID](#HordeGameObjectID) | int(11) | signed |  | NO | 0 |  |  |
| [AllianceGameObjectID](#AllianceGameObjectID) | int(11) | signed |  | NO | 0 |  |  |
| [GarrSiteID](#GarrSiteID) | int(11) | signed |  | NO | 0 |  |  |
| [UpgradeLevel](#UpgradeLevel) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BuildSeconds](#BuildSeconds) | int(11) | signed |  | NO | 0 |  |  |
| [CurrencyTypeID](#CurrencyTypeID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [CurrencyQty](#CurrencyQty) | int(11) | signed |  | NO | 0 |  |  |
| [HordeUiTextureKitID](#HordeUiTextureKitID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [AllianceUiTextureKitID](#AllianceUiTextureKitID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [IconFileDataID](#IconFileDataID) | int(11) | signed |  | NO | 0 |  |  |
| [AllianceSceneScriptPackageID](#AllianceSceneScriptPackageID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [HordeSceneScriptPackageID](#HordeSceneScriptPackageID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MaxAssignments](#MaxAssignments) | int(11) | signed |  | NO | 0 |  |  |
| [ShipmentCapacity](#ShipmentCapacity) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [GarrAbilityID](#GarrAbilityID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [BonusGarrAbilityID](#BonusGarrAbilityID) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [GoldCost](#GoldCost) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Flags](#Flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#VerifiedBuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### HordeName
*- no description -*
&nbsp;

### AllianceName
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### Tooltip
*- no description -*
&nbsp;

### GarrTypeID
*- no description -*
&nbsp;

### BuildingType
*- no description -*
&nbsp;

### HordeGameObjectID
*- no description -*
&nbsp;

### AllianceGameObjectID
*- no description -*
&nbsp;

### GarrSiteID
*- no description -*
&nbsp;

### UpgradeLevel
*- no description -*
&nbsp;

### BuildSeconds
*- no description -*
&nbsp;

### CurrencyTypeID
*- no description -*
&nbsp;

### CurrencyQty
*- no description -*
&nbsp;

### HordeUiTextureKitID
*- no description -*
&nbsp;

### AllianceUiTextureKitID
*- no description -*
&nbsp;

### IconFileDataID
*- no description -*
&nbsp;

### AllianceSceneScriptPackageID
*- no description -*
&nbsp;

### HordeSceneScriptPackageID
*- no description -*
&nbsp;

### MaxAssignments
*- no description -*
&nbsp;

### ShipmentCapacity
*- no description -*
&nbsp;

### GarrAbilityID
*- no description -*
&nbsp;

### BonusGarrAbilityID
*- no description -*
&nbsp;

### GoldCost
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/garr_ability_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_ability_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/garr_building_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_building_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

