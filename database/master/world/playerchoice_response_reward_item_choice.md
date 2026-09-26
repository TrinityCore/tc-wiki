---
title: playerchoice_response_reward_item_choice
description: 
published: true
date: 2022-11-21T21:07:18.255Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:18.328Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#choiceid) | int | signed | PRI | NO |  |  |  |
| [ResponseId](#responseid) | int | signed | PRI | NO |  |  |  |
| [Index](#index) | int | unsigned |  | NO |  |  |  |
| [ItemId](#itemid) | int | unsigned |  | NO | 0 |  |  |
| [BonusListIDs](#bonuslistids) | mediumtext |  |  | YES | NULL |  |  |
| [Quantity](#quantity) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ChoiceId
*- no description -*
&nbsp;

### ResponseId
*- no description -*
&nbsp;

### Index
*- no description -*
&nbsp;

### ItemId
*- no description -*
&nbsp;

### BonusListIDs
*- no description -*
&nbsp;

### Quantity
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


