---
title: vignette
description: 
published: true
date: 2024-05-15T17:53:36.381Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2024-05-15T12:31:08.883Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Name](#name-alt) | text |  |  | YES | NULL |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | NO | 0 |  |  |
| [VisibleTrackingQuestID](#visibletrackingquestid) | int | unsigned |  | NO | 0 |  |  |
| [QuestFeedbackEffectID](#questfeedbackeffectid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [MaxHeight](#maxheight) | float |  |  | NO | 0 |  |  |
| [MinHeight](#minheight) | float |  |  | NO | 0 |  |  |
| [VignetteType](#vignettetype) | tinyint | signed |  | NO | 0 |  |  |
| [RewardQuestID](#rewardquestid) | int | signed |  | NO | 0 |  |  |
| [UiWidgetSetID](#uiwidgetsetid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Name {#name-alt}
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### VisibleTrackingQuestID
*- no description -*
&nbsp;

### QuestFeedbackEffectID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### MaxHeight
*- no description -*
&nbsp;

### MinHeight
*- no description -*
&nbsp;

### VignetteType
*- no description -*
&nbsp;

### RewardQuestID
*- no description -*
&nbsp;

### UiWidgetSetID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

