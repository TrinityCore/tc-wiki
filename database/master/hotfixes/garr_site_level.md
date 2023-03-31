---
title: garr_site_level
description: 
published: true
date: 2022-11-21T21:14:49.309Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:54:26.729Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/garr_plot_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_plot_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/garr_site_level_plot_inst" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_site_level_plot_inst'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [TownHallUiPosX](#townhalluiposx) | float |  |  | NO | 0 |  |  |
| [TownHallUiPosY](#townhalluiposy) | float |  |  | NO | 0 |  |  |
| [GarrSiteID](#garrsiteid) | int | unsigned |  | NO | 0 |  |  |
| [GarrLevel](#garrlevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [MapID](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [UpgradeMovieID](#upgrademovieid) | smallint | unsigned |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | smallint | unsigned |  | NO | 0 |  |  |
| [MaxBuildingLevel](#maxbuildinglevel) | tinyint | unsigned |  | NO | 0 |  |  |
| [UpgradeCost](#upgradecost) | smallint | unsigned |  | NO | 0 |  |  |
| [UpgradeGoldCost](#upgradegoldcost) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### TownHallUiPosX
*- no description -*
&nbsp;

### TownHallUiPosY
*- no description -*
&nbsp;

### GarrSiteID
*- no description -*
&nbsp;

### GarrLevel
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### UpgradeMovieID
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### MaxBuildingLevel
*- no description -*
&nbsp;

### UpgradeCost
*- no description -*
&nbsp;

### UpgradeGoldCost
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/garr_plot_instance" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_plot_instance'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/garr_site_level_plot_inst" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_site_level_plot_inst'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

