---
title: transmog_set
description: 
published: true
date: 2021-11-14T19:41:35.176Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/transmog_illusion" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'transmog_illusion'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/transmog_set_group" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'transmog_set_group'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [ClassMask](#classmask) | int(11) | signed |  | NO | 0 |  |  |
| [TrackingQuestID](#trackingquestid) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int(11) | signed |  | NO | 0 |  |  |
| [TransmogSetGroupID](#transmogsetgroupid) | int(10) | unsigned |  | NO | 0 |  |  |
| [ItemNameDescriptionID](#itemnamedescriptionid) | int(11) | signed |  | NO | 0 |  |  |
| [ParentTransmogSetID](#parenttransmogsetid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [Unknown810](#unknown810) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ExpansionID](#expansionid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [PatchID](#patchid) | int(11) | signed |  | NO | 0 |  |  |
| [UiOrder](#uiorder) | smallint(6) | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name
*- no description -*
&nbsp;

### ID
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

