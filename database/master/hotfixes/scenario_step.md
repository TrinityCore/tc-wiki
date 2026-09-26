---
title: scenario_step
description: 
published: true
date: 2024-09-05T22:46:04.595Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T10:00:09.144Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Description](#description) | text |  |  | YES | NULL |  |  |
| [Title](#title) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ScenarioID](#scenarioid) | smallint | unsigned |  | NO | 0 |  |  |
| [Criteriatreeid](#criteriatreeid) | int | unsigned |  | NO | 0 |  |  |
| [RewardQuestID](#rewardquestid) | int | signed |  | NO | 0 |  |  |
| [RelatedStep](#relatedstep) | int | signed |  | NO | 0 |  |  |
| [Supersedes](#supersedes) | smallint | unsigned |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | tinyint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [VisibilityPlayerConditionID](#visibilityplayerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [WidgetSetID](#widgetsetid) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Description
*- no description -*
&nbsp;

### Title
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### ScenarioID
*- no description -*
&nbsp;

### Criteriatreeid
*- no description -*
&nbsp;

### RewardQuestID
*- no description -*
&nbsp;

### RelatedStep
*- no description -*
&nbsp;

### Supersedes
*- no description -*
&nbsp;

### OrderIndex
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VisibilityPlayerConditionID
*- no description -*
&nbsp;

### WidgetSetID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

