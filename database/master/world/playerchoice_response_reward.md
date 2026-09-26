---
title: playerchoice_response_reward
description: 
published: true
date: 2022-11-21T21:07:10.289Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:34:07.911Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#choiceid) | int | signed | PRI | NO |  |  |  |
| [ResponseId](#responseid) | int | signed | PRI | NO |  |  |  |
| [TitleId](#titleid) | int | signed |  | NO | 0 |  |  |
| [PackageId](#packageid) | int | signed |  | NO | 0 |  |  |
| [SkillLineId](#skilllineid) | int | unsigned |  | NO | 0 |  |  |
| [SkillPointCount](#skillpointcount) | int | unsigned |  | NO | 0 |  |  |
| [ArenaPointCount](#arenapointcount) | int | unsigned |  | NO | 0 |  |  |
| [HonorPointCount](#honorpointcount) | int | unsigned |  | NO | 0 |  |  |
| [Money](#money) | bigint | unsigned |  | NO | 0 |  |  |
| [Xp](#xp) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ChoiceId
*- no description -*
&nbsp;

### ResponseId
*- no description -*
&nbsp;

### TitleId
*- no description -*
&nbsp;

### PackageId
*- no description -*
&nbsp;

### SkillLineId
*- no description -*
&nbsp;

### SkillPointCount
*- no description -*
&nbsp;

### ArenaPointCount
*- no description -*
&nbsp;

### HonorPointCount
*- no description -*
&nbsp;

### Money
*- no description -*
&nbsp;

### Xp
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


