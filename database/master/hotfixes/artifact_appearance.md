---
title: artifact_appearance
description: 
published: true
date: 2021-08-30T19:58:43.006Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/artifact" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'artifact'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/artifact_appearance_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'artifact_appearance_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ArtifactAppearanceSetID](#artifactappearancesetid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [DisplayIndex](#displayindex) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [UnlockPlayerConditionID](#unlockplayerconditionid) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemAppearanceModifierID](#itemappearancemodifierid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [UiSwatchColor](#uiswatchcolor) | int(11) | signed |  | NO | 0 |  |  |
| [UiModelSaturation](#uimodelsaturation) | float |  |  | NO | 0 |  |  |
| [UiModelOpacity](#uimodelopacity) | float |  |  | NO | 0 |  |  |
| [OverrideShapeshiftFormID](#overrideshapeshiftformid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [OverrideShapeshiftDisplayID](#overrideshapeshiftdisplayid) | int(10) | unsigned |  | NO | 0 |  |  |
| [UiItemAppearanceID](#uiitemappearanceid) | int(10) | unsigned |  | NO | 0 |  |  |
| [UiAltItemAppearanceID](#uialtitemappearanceid) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [UiCameraID](#uicameraid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [UsablePlayerConditionID](#usableplayerconditionid) | int(10) | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### ArtifactAppearanceSetID
*- no description -*
&nbsp;

### DisplayIndex
*- no description -*
&nbsp;

### UnlockPlayerConditionID
*- no description -*
&nbsp;

### ItemAppearanceModifierID
*- no description -*
&nbsp;

### UiSwatchColor
*- no description -*
&nbsp;

### UiModelSaturation
*- no description -*
&nbsp;

### UiModelOpacity
*- no description -*
&nbsp;

### OverrideShapeshiftFormID
*- no description -*
&nbsp;

### OverrideShapeshiftDisplayID
*- no description -*
&nbsp;

### UiItemAppearanceID
*- no description -*
&nbsp;

### UiAltItemAppearanceID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### UiCameraID
*- no description -*
&nbsp;

### UsablePlayerConditionID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/artifact" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'artifact'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/artifact_appearance_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'artifact_appearance_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

