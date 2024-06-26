---
title: garr_talent_tree
description: 
published: true
date: 2023-05-11T09:04:22.697Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-12-19T18:38:05.749Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/garr_site_level_plot_inst" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_site_level_plot_inst'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/garr_talent_tree_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_talent_tree_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [GarrTypeID](#garrtypeid) | tinyint | signed |  | NO | 0 |  |  |
| [ClassID](#classid) | int | signed |  | NO | 0 |  |  |
| [MaxTiers](#maxtiers) | tinyint | signed |  | NO | 0 |  |  |
| [UiOrder](#uiorder) | tinyint | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | smallint | unsigned |  | NO | 0 |  |  |
| [GarrTalentTreeType](#garrtalenttreetype) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [FeatureTypeIndex](#featuretypeindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [FeatureSubtypeIndex](#featuresubtypeindex) | tinyint | signed |  | NO | 0 |  |  |
| [CurrencyID](#currencyid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### GarrTypeID
*- no description -*
&nbsp;

### ClassID
*- no description -*
&nbsp;

### MaxTiers
*- no description -*
&nbsp;

### UiOrder
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### GarrTalentTreeType
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### FeatureTypeIndex
*- no description -*
&nbsp;

### FeatureSubtypeIndex
*- no description -*
&nbsp;

### CurrencyID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/garr_site_level_plot_inst" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_site_level_plot_inst'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/garr_talent_tree_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_talent_tree_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
