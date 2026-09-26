---
title: adventure_map_poi
description: 
published: true
date: 2022-11-21T21:10:21.342Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:48:33.622Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Title](#title) | text |  |  | YES | NULL |  |  |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [WorldPositionX](#worldpositionx) | float |  |  | NO | 0 |  |  |
| [WorldPositionY](#worldpositiony) | float |  |  | NO | 0 |  |  |
| [Type](#type) | tinyint | signed |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [QuestID](#questid) | int | unsigned |  | NO | 0 |  |  |
| [LfgDungeonID](#lfgdungeonid) | int | unsigned |  | NO | 0 |  |  |
| [RewardItemID](#rewarditemid) | int | signed |  | NO | 0 |  |  |
| [UiTextureAtlasMemberID](#uitextureatlasmemberid) | int | unsigned |  | NO | 0 |  |  |
| [UiTextureKitID](#uitexturekitid) | int | unsigned |  | NO | 0 |  |  |
| [MapID](#mapid) | int | signed |  | NO | 0 |  |  |
| [AreaTableID](#areatableid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Title
*- no description -*
&nbsp;

### Description
*- no description -*
&nbsp;

### WorldPositionX
*- no description -*
&nbsp;

### WorldPositionY
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### QuestID
*- no description -*
&nbsp;

### LfgDungeonID
*- no description -*
&nbsp;

### RewardItemID
*- no description -*
&nbsp;

### UiTextureAtlasMemberID
*- no description -*
&nbsp;

### UiTextureKitID
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### AreaTableID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


