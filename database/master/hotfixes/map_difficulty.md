---
title: map_difficulty
description: 
published: true
date: 2024-09-05T22:46:01.931Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:57:52.109Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Message](#message) | text |  |  | YES | NULL |  |  |
| [DifficultyID](#difficultyid) | int | signed |  | NO | 0 |  |  |
| [LockID](#lockid) | int | signed |  | NO | 0 |  |  |
| [ResetInterval](#resetinterval) | tinyint | signed |  | NO | 0 |  |  |
| [MaxPlayers](#maxplayers) | int | signed |  | NO | 0 |  |  |
| [ItemContext](#itemcontext) | tinyint | unsigned |  | NO | 0 |  |  |
| [ItemContextPickerID](#itemcontextpickerid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [ContentTuningID](#contenttuningid) | int | signed |  | NO | 0 |  |  |
| [WorldStateExpressionID](#worldstateexpressionid) | int | signed |  | NO | 0 |  |  |
| [MapID](#mapid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Message
*- no description -*
&nbsp;

### DifficultyID
*- no description -*
&nbsp;

### LockID
*- no description -*
&nbsp;

### ResetInterval
*- no description -*
&nbsp;

### MaxPlayers
*- no description -*
&nbsp;

### ItemContext
*- no description -*
&nbsp;

### ItemContextPickerID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ContentTuningID
*- no description -*
&nbsp;

### WorldStateExpressionID
*- no description -*
&nbsp;

### MapID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

