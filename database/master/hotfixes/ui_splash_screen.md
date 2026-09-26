---
title: ui_splash_screen
description: 
published: true
date: 2022-11-21T21:33:02.318Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T20:02:00.749Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Header](#header) | text |  |  | YES | NULL |  |  |
| [TopLeftFeatureTitle](#topleftfeaturetitle) | text |  |  | YES | NULL |  |  |
| [TopLeftFeatureDesc](#topleftfeaturedesc) | text |  |  | YES | NULL |  |  |
| [BottomLeftFeatureTitle](#bottomleftfeaturetitle) | text |  |  | YES | NULL |  |  |
| [BottomLeftFeatureDesc](#bottomleftfeaturedesc) | text |  |  | YES | NULL |  |  |
| [RightFeatureTitle](#rightfeaturetitle) | text |  |  | YES | NULL |  |  |
| [RightFeatureDesc](#rightfeaturedesc) | text |  |  | YES | NULL |  |  |
| [AllianceQuestID](#alliancequestid) | int | signed |  | NO | 0 |  |  |
| [HordeQuestID](#hordequestid) | int | signed |  | NO | 0 |  |  |
| [ScreenType](#screentype) | tinyint | signed |  | NO | 0 |  |  |
| [TextureKitID](#texturekitid) | int | signed |  | NO | 0 |  |  |
| [SoundKitID](#soundkitid) | int | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [CharLevelConditionID](#charlevelconditionid) | int | signed |  | NO | 0 |  |  |
| [RequiredTimeEventPassed](#requiredtimeeventpassed) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Header
*- no description -*
&nbsp;

### TopLeftFeatureTitle
*- no description -*
&nbsp;

### TopLeftFeatureDesc
*- no description -*
&nbsp;

### BottomLeftFeatureTitle
*- no description -*
&nbsp;

### BottomLeftFeatureDesc
*- no description -*
&nbsp;

### RightFeatureTitle
*- no description -*
&nbsp;

### RightFeatureDesc
*- no description -*
&nbsp;

### AllianceQuestID
*- no description -*
&nbsp;

### HordeQuestID
*- no description -*
&nbsp;

### ScreenType
*- no description -*
&nbsp;

### TextureKitID
*- no description -*
&nbsp;

### SoundKitID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### CharLevelConditionID
*- no description -*
&nbsp;

### RequiredTimeEventPassed
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


