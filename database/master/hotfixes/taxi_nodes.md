---
title: taxi_nodes
description: 
published: true
date: 2023-10-06T19:24:25.271Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:02:44.893Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/talent_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'talent_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/taxi_nodes_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'taxi_nodes_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [PosX](#posx) | float |  |  | NO | 0 |  |  |
| [PosY](#posy) | float |  |  | NO | 0 |  |  |
| [PosZ](#posz) | float |  |  | NO | 0 |  |  |
| [MapOffsetX](#mapoffsetx) | float |  |  | NO | 0 |  |  |
| [MapOffsetY](#mapoffsety) | float |  |  | NO | 0 |  |  |
| [FlightMapOffsetX](#flightmapoffsetx) | float |  |  | NO | 0 |  |  |
| [FlightMapOffsetY](#flightmapoffsety) | float |  |  | NO | 0 |  |  |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  |
| [ContinentID](#continentid) | smallint | unsigned |  | NO | 0 |  |  |
| [ConditionID](#conditionid) | int | signed |  | NO | 0 |  |  |
| [CharacterBitNumber](#characterbitnumber) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | int | signed |  | NO | 0 |  |  |
| [MinimapAtlasMemberID](#minimapatlasmemberid) | int | signed |  | NO | 0 |  |  |
| [Facing](#facing) | float |  |  | NO | 0 |  |  |
| [SpecialIconConditionID](#specialiconconditionid) | int | unsigned |  | NO | 0 |  |  |
| [VisibilityConditionID](#visibilityconditionid) | int | unsigned |  | NO | 0 |  |  |
| [MountCreatureID1](#mountcreatureid1) | int | signed |  | NO | 0 |  |  |
| [MountCreatureID2](#mountcreatureid2) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Name
*- no description -*
&nbsp;

### PosX
*- no description -*
&nbsp;

### PosY
*- no description -*
&nbsp;

### PosZ
*- no description -*
&nbsp;

### MapOffsetX
*- no description -*
&nbsp;

### MapOffsetY
*- no description -*
&nbsp;

### FlightMapOffsetX
*- no description -*
&nbsp;

### FlightMapOffsetY
*- no description -*
&nbsp;

### ID
*- no description -*
&nbsp;

### ContinentID
*- no description -*
&nbsp;

### ConditionID
*- no description -*
&nbsp;

### CharacterBitNumber
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### MinimapAtlasMemberID
*- no description -*
&nbsp;

### Facing
*- no description -*
&nbsp;

### SpecialIconConditionID
*- no description -*
&nbsp;

### VisibilityConditionID
*- no description -*
&nbsp;

### MountCreatureID1
*- no description -*
&nbsp;

### MountCreatureID2
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/talent_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'talent_locale'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/taxi_nodes_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'taxi_nodes_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
