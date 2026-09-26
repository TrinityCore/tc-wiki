---
title: playerchoice
description: 
published: true
date: 2022-11-21T21:07:00.276Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:54.745Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ChoiceId](#choiceid) | int | signed | PRI | NO |  |  |  |
| [UiTextureKitId](#uitexturekitid) | int | signed |  | NO | 0 |  |  |
| [SoundKitId](#soundkitid) | int | unsigned |  | NO | 0 |  |  |
| [CloseSoundKitId](#closesoundkitid) | int | unsigned |  | NO | 0 |  |  |
| [Duration](#duration) | bigint | signed |  | NO | 0 |  |  |
| [PendingChoiceText](#pendingchoicetext) | varchar(255) |  |  | NO | '' |  |  |
| [Question](#question) | varchar(255) |  |  | YES | NULL |  |  |
| [HideWarboardHeader](#hidewarboardheader) | tinyint(1) | signed |  | NO | 0 |  |  |
| [KeepOpenAfterChoice](#keepopenafterchoice) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ChoiceId
*- no description -*
&nbsp;

### UiTextureKitId
*- no description -*
&nbsp;

### SoundKitId
*- no description -*
&nbsp;

### CloseSoundKitId
*- no description -*
&nbsp;

### Duration
*- no description -*
&nbsp;

### PendingChoiceText
*- no description -*
&nbsp;

### Question
*- no description -*
&nbsp;

### HideWarboardHeader
*- no description -*
&nbsp;

### KeepOpenAfterChoice
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

