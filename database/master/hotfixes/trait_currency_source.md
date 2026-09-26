---
title: trait_currency_source
description: 
published: true
date: 2023-05-11T09:04:23.982Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2022-12-19T18:39:22.681Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Requirement](#requirement) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [TraitCurrencyID](#traitcurrencyid) | int | signed |  | NO | 0 |  |  |
| [Amount](#amount) | int | signed |  | NO | 0 |  |  |
| [QuestID](#questid) | int | signed |  | NO | 0 |  |  |
| [AchievementID](#achievementid) | int | signed |  | NO | 0 |  |  |
| [PlayerLevel](#playerlevel) | int | signed |  | NO | 0 |  |  |
| [TraitNodeEntryID](#traitnodeentryid) | int | signed |  | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Requirement
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### TraitCurrencyID
*- no description -*
&nbsp;

### Amount
*- no description -*
&nbsp;

### QuestID
*- no description -*
&nbsp;

### AchievementID
*- no description -*
&nbsp;

### PlayerLevel
*- no description -*
&nbsp;

### TraitNodeEntryID
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

