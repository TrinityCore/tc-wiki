---
title: garr_mission
description: 
published: true
date: 2022-01-03T11:26:23.167Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://trinitycore.info/en/database/master/hotfixes/garr_follower_x_ability" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_follower_x_ability'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/garr_mission_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_mission_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [Location](#location) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [MapPosX](#mapposx) | float |  |  | NO | 0 |  |  |
| [MapPosY](#mapposy) | float |  |  | NO | 0 |  |  |
| [WorldPosX](#worldposx) | float |  |  | NO | 0 |  |  |
| [WorldPosY](#worldposy) | float |  |  | NO | 0 |  |  |
| [GarrTypeID](#garrtypeid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [GarrMissionTypeID](#garrmissiontypeid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [GarrFollowerTypeID](#garrfollowertypeid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaxFollowers](#maxfollowers) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MissionCost](#missioncost) | int(10) | unsigned |  | NO | 0 |  |  |
| [MissionCostCurrencyTypesID](#missioncostcurrencytypesid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [OfferedGarrMissionTextureID](#offeredgarrmissiontextureid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [EnvGarrMechanicID](#envgarrmechanicid) | int(10) | unsigned |  | NO | 0 |  |  |
| [EnvGarrMechanicTypeID](#envgarrmechanictypeid) | int(11) | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int(10) | unsigned |  | NO | 0 |  |  |
| [GarrMissionSetID](#garrmissionsetid) | int(11) | signed |  | NO | 0 |  |  |
| [TargetLevel](#targetlevel) | tinyint(4) | signed |  | NO | 0 |  |  |
| [TargetItemLevel](#targetitemlevel) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [MissionDuration](#missionduration) | int(11) | signed |  | NO | 0 |  |  |
| [TravelDuration](#travelduration) | int(11) | signed |  | NO | 0 |  |  |
| [OfferDuration](#offerduration) | int(10) | unsigned |  | NO | 0 |  |  |
| [BaseCompletionChance](#basecompletionchance) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [BaseFollowerXP](#basefollowerxp) | int(10) | unsigned |  | NO | 0 |  |  |
| [OvermaxRewardPackID](#overmaxrewardpackid) | int(10) | unsigned |  | NO | 0 |  |  |
| [FollowerDeathChance](#followerdeathchance) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [AreaID](#areaid) | int(10) | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int(11) | signed |  | NO | 0 |  |  |
| [AutoMissionScalar](#automissionscalar) | float |  |  | NO | 0 |  |  |
| [AutoMissionScalarCurveID](#automissionscalarcurveid) | int(11) | signed |  | NO | 0 |  |  |
| [AutoCombatantEnvCasterID](#autocombatantenvcasterid) | int(11) | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### Location
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### MapPosX
*- no description -*
&nbsp;

### MapPosY
*- no description -*
&nbsp;

### WorldPosX
*- no description -*
&nbsp;

### WorldPosY
*- no description -*
&nbsp;

### GarrTypeID
*- no description -*
&nbsp;

### GarrMissionTypeID
*- no description -*
&nbsp;

### GarrFollowerTypeID
*- no description -*
&nbsp;

### MaxFollowers
*- no description -*
&nbsp;

### MissionCost
*- no description -*
&nbsp;

### MissionCostCurrencyTypesID
*- no description -*
&nbsp;

### OfferedGarrMissionTextureID
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### EnvGarrMechanicID
*- no description -*
&nbsp;

### EnvGarrMechanicTypeID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### GarrMissionSetID
*- no description -*
&nbsp;

### TargetLevel
*- no description -*
&nbsp;

### TargetItemLevel
*- no description -*
&nbsp;

### MissionDuration
*- no description -*
&nbsp;

### TravelDuration
*- no description -*
&nbsp;

### OfferDuration
*- no description -*
&nbsp;

### BaseCompletionChance
*- no description -*
&nbsp;

### BaseFollowerXP
*- no description -*
&nbsp;

### OvermaxRewardPackID
*- no description -*
&nbsp;

### FollowerDeathChance
*- no description -*
&nbsp;

### AreaID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### AutoMissionScalar
*- no description -*
&nbsp;

### AutoMissionScalarCurveID
*- no description -*
&nbsp;

### AutoCombatantEnvCasterID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

<a href="https://trinitycore.info/en/database/master/hotfixes/garr_follower_x_ability" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'garr_follower_x_ability'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/hotfixes/garr_mission_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'garr_mission_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

