---
title: quest_request_items_conditional
description: 
published: true
date: 2023-05-11T09:25:22.040Z
tags: database, master, world
editor: markdown
dateCreated: 2022-12-19T18:41:02.258Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [QuestId](#questid) | int | signed | PRI | NO |  |  |  |
| [PlayerConditionId](#playerconditionid) | int | signed | PRI | NO |  |  |  |
| [QuestgiverCreatureId](#questgivercreatureid) | int | signed | PRI | NO |  |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [Text](#text) | text |  |  | YES | NULL |  |  |
| [OrderIndex](#orderindex) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### QuestId
*- no description -*
&nbsp;

### PlayerConditionId
*- no description -*
&nbsp;

### QuestgiverCreatureId
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### Text
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

