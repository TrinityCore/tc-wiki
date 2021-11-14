---
title: ui_map_assignment
description: 
published: true
date: 2021-11-14T19:41:35.179Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/ui_map" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ui_map'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/ui_map_link" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ui_map_link'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [UiMinX](#uiminx) | float |  |  | NO | 0 |  |  |
| [UiMinY](#uiminy) | float |  |  | NO | 0 |  |  |
| [UiMaxX](#uimaxx) | float |  |  | NO | 0 |  |  |
| [UiMaxY](#uimaxy) | float |  |  | NO | 0 |  |  |
| [Region1X](#region1x) | float |  |  | NO | 0 |  |  |
| [Region1Y](#region1y) | float |  |  | NO | 0 |  |  |
| [Region1Z](#region1z) | float |  |  | NO | 0 |  |  |
| [Region2X](#region2x) | float |  |  | NO | 0 |  |  |
| [Region2Y](#region2y) | float |  |  | NO | 0 |  |  |
| [Region2Z](#region2z) | float |  |  | NO | 0 |  |  |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [UiMapID](#uimapid) | int(11) | signed |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int(11) | signed |  | NO | 0 |  |  |
| [MapID](#mapid) | int(11) | signed |  | NO | 0 |  |  |
| [AreaID](#areaid) | int(11) | signed |  | NO | 0 |  |  |
| [WmoDoodadPlacementID](#wmodoodadplacementid) | int(11) | signed |  | NO | 0 |  |  |
| [WmoGroupID](#wmogroupid) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### UiMinX
*- no description -*
&nbsp;

### UiMinY
*- no description -*
&nbsp;

### UiMaxX
*- no description -*
&nbsp;

### UiMaxY
*- no description -*
&nbsp;

### Region1X
*- no description -*
&nbsp;

### Region1Y
*- no description -*
&nbsp;

### Region1Z
*- no description -*
&nbsp;

### Region2X
*- no description -*
&nbsp;

### Region2Y
*- no description -*
&nbsp;

### Region2Z
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### UiMapID
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### AreaID
*- no description -*
&nbsp;

### WmoDoodadPlacementID
*- no description -*
&nbsp;

### WmoGroupID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/ui_map" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ui_map'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/ui_map_link" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ui_map_link'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

