---
title: ui_map
description: 
published: true
date: 2023-10-06T19:24:25.689Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:03:29.616Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/transport_rotation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'transport_rotation'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/ui_map_assignment" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ui_map_assignment'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [ParentUiMapID](#parentuimapid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [System](#system) | tinyint | unsigned |  | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 0 |  |  |
| [BountySetID](#bountysetid) | int | signed |  | NO | 0 |  |  |
| [BountyDisplayLocation](#bountydisplaylocation) | int | unsigned |  | NO | 0 |  |  |
| [VisibilityPlayerConditionID2](#visibilityplayerconditionid2) | int | signed |  | NO | 0 |  |  |
| [VisibilityPlayerConditionID](#visibilityplayerconditionid) | int | signed |  | NO | 0 |  |  |
| [HelpTextPosition](#helptextposition) | tinyint | signed |  | NO | 0 |  |  |
| [BkgAtlasID](#bkgatlasid) | int | signed |  | NO | 0 |  |  |
| [AlternateUiMapGroup](#alternateuimapgroup) | int | signed |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### ParentUiMapID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### System
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### BountySetID
*- no description -*
&nbsp;

### BountyDisplayLocation
*- no description -*
&nbsp;

### VisibilityPlayerConditionID2
*- no description -*
&nbsp;

### VisibilityPlayerConditionID
*- no description -*
&nbsp;

### HelpTextPosition
*- no description -*
&nbsp;

### BkgAtlasID
*- no description -*
&nbsp;

### AlternateUiMapGroup
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/transport_rotation" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'transport_rotation'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/ui_map_assignment" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ui_map_assignment'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
