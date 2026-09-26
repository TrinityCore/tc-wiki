---
title: garr_mission
description: 
published: true
date: 2024-09-05T22:45:58.469Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T19:53:52.569Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [Location](#location) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [MapPosX](#mapposx) | float |  |  | NO | 0 |  |  |
| [MapPosY](#mapposy) | float |  |  | NO | 0 |  |  |
| [WorldPosX](#worldposx) | float |  |  | NO | 0 |  |  |
| [WorldPosY](#worldposy) | float |  |  | NO | 0 |  |  |
| [GarrTypeID](#garrtypeid) | tinyint | signed |  | NO | 0 |  |  |
| [GarrMissionTypeID](#garrmissiontypeid) | tinyint | unsigned |  | NO | 0 |  |  |
| [GarrFollowerTypeID](#garrfollowertypeid) | tinyint | signed |  | NO | 0 |  |  |
| [MaxFollowers](#maxfollowers) | tinyint | unsigned |  | NO | 0 |  |  |
| [MissionCost](#missioncost) | int | unsigned |  | NO | 0 |  |  |
| [MissionCostCurrencyTypesID](#missioncostcurrencytypesid) | smallint | unsigned |  | NO | 0 |  |  |
| [OfferedGarrMissionTextureID](#offeredgarrmissiontextureid) | tinyint | unsigned |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | smallint | unsigned |  | NO | 0 |  |  |
| [EnvGarrMechanicID](#envgarrmechanicid) | int | unsigned |  | NO | 0 |  |  |
| [EnvGarrMechanicTypeID](#envgarrmechanictypeid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [GarrMissionSetID](#garrmissionsetid) | int | signed |  | NO | 0 |  |  |
| [TargetLevel](#targetlevel) | tinyint | signed |  | NO | 0 |  |  |
| [TargetItemLevel](#targetitemlevel) | smallint | unsigned |  | NO | 0 |  |  |
| [MissionDuration](#missionduration) | int | signed |  | NO | 0 |  |  |
| [TravelDuration](#travelduration) | int | signed |  | NO | 0 |  |  |
| [OfferDuration](#offerduration) | int | unsigned |  | NO | 0 |  |  |
| [BaseCompletionChance](#basecompletionchance) | tinyint | unsigned |  | NO | 0 |  |  |
| [BaseFollowerXP](#basefollowerxp) | int | unsigned |  | NO | 0 |  |  |
| [OvermaxRewardPackID](#overmaxrewardpackid) | int | unsigned |  | NO | 0 |  |  |
| [FollowerDeathChance](#followerdeathchance) | tinyint | unsigned |  | NO | 0 |  |  |
| [AreaID](#areaid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [AutoMissionScalar](#automissionscalar) | float |  |  | NO | 0 |  |  |
| [AutoMissionScalarCurveID](#automissionscalarcurveid) | int | signed |  | NO | 0 |  |  |
| [AutoCombatantEnvCasterID](#autocombatantenvcasterid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
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

