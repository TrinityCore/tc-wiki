---
title: points_of_interest
description: 
published: true
date: 2022-11-21T21:07:30.349Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:33.819Z
---

<a href="https://trinitycore.info/en/database/master/world/playercreateinfo_spell_custom" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playercreateinfo_spell_custom'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/points_of_interest_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'points_of_interest_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment | Source in sniff |
| --- | --- | --- | :---: | :---: | --- | --- | --- | --- |
| [ID](#id) | int | unsigned | PRI | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [PositionX](#positionx) | float |  |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [PositionY](#positiony) | float |  |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [PositionZ](#positionz) | float |  |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [Icon](#icon) | int | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [Flags](#flags) | int | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [Importance](#importance) | int | unsigned |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [Name](#name) | mediumtext |  |  | YES | NULL |  |  | SMSG_GOSSIP_POI |
| [WMOGroupID](#wmogroupid) | int | signed |  | NO | 0 |  |  | SMSG_GOSSIP_POI |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  | generated |
&nbsp;
## Description of fields

### ID
Unique id to be referenced by the scripting system to display the POI.
&nbsp;

### PositionX
X postion for the _map_ this POI gets shown on.
&nbsp;

### PositionY
Y postion for the _map_ this POI gets shown on.
&nbsp;

### PositionZ
*- no description -*
&nbsp;

### Icon
*- no description -*
&nbsp;

### Flags
*unknown / just sent to client*
&nbsp;

### Importance
*unknown / just sent to client*
&nbsp;

### Name
Text of the onMouseover tooltip for the **Icon**.
&nbsp;

### WMOGroupID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/world/playercreateinfo_spell_custom" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'playercreateinfo_spell_custom'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/points_of_interest_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'points_of_interest_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

