---
title: transmog_set
description: 
published: true
date: 2024-09-05T22:46:07.536Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:03:11.351Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/transmog_illusion" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'transmog_illusion'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/transmog_set_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'transmog_set_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ClassMask](#classmask) | int | signed |  | NO | 0 |  |  |
| [TrackingQuestID](#trackingquestid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [TransmogSetGroupID](#transmogsetgroupid) | int | signed |  | NO | 0 |  |  |
| [ItemNameDescriptionID](#itemnamedescriptionid) | int | signed |  | NO | 0 |  |  |
| [ParentTransmogSetID](#parenttransmogsetid) | int | signed |  | NO | 0 |  |  |
| [Unknown810](#unknown810) | int | signed |  | NO | 0 |  |  |
| [ExpansionID](#expansionid) | int | signed |  | NO | 0 |  |  |
| [PatchID](#patchid) | int | signed |  | NO | 0 |  |  |
| [UiOrder](#uiorder) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name <!-- {#name-alt} -->
*- no description -*
&nbsp;

### ID <!-- {#id-alt} -->
*- no description -*
&nbsp;

### ClassMask
*- no description -*
&nbsp;

### TrackingQuestID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### TransmogSetGroupID
*- no description -*
&nbsp;

### ItemNameDescriptionID
*- no description -*
&nbsp;

### ParentTransmogSetID
*- no description -*
&nbsp;

### Unknown810
*- no description -*
&nbsp;

### ExpansionID
*- no description -*
&nbsp;

### PatchID
*- no description -*
&nbsp;

### UiOrder
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/transmog_illusion" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'transmog_illusion'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/transmog_set_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'transmog_set_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
