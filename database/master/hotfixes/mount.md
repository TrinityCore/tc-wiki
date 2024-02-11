---
title: mount
description: 
published: true
date: 2024-02-11T20:02:23.384Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:58:07.982Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/modifier_tree" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'modifier_tree'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/mount_capability" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mount_capability'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [SourceText](#sourcetext) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [MountTypeID](#mounttypeid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [SourceTypeEnum](#sourcetypeenum) | tinyint | signed |  | NO | 0 |  |  |
| [SourceSpellID](#sourcespellid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [MountFlyRideHeight](#mountflyrideheight) | float |  |  | NO | 0 |  |  |
| [UiModelSceneID](#uimodelsceneid) | int | signed |  | NO | 0 |  |  |
| [MountSpecialRiderAnimKitID](#mountspecialrideranimkitid) | int | signed |  | NO | 0 |  |  |
| [MountSpecialSpellVisualKitID](#mountspecialspellvisualkitid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name
*- no description -*
&nbsp;

### SourceText
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### MountTypeID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SourceTypeEnum
*- no description -*
&nbsp;

### SourceSpellID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### MountFlyRideHeight
*- no description -*
&nbsp;

### UiModelSceneID
*- no description -*
&nbsp;

### MountSpecialRiderAnimKitID
*- no description -*
&nbsp;

### MountSpecialSpellVisualKitID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/modifier_tree" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'modifier_tree'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/mount_capability" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'mount_capability'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
