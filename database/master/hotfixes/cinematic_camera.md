---
title: cinematic_camera
description: 
published: true
date: 2022-12-19T18:37:53.447Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:55.534Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [OriginX](#originx) | float |  |  | NO | 0 |  |  |
| [OriginY](#originy) | float |  |  | NO | 0 |  |  |
| [OriginZ](#originz) | float |  |  | NO | 0 |  |  |
| [SoundID](#soundid) | int | unsigned |  | NO | 0 |  |  |
| [OriginFacing](#originfacing) | float |  |  | NO | 0 |  |  |
| [FileDataID](#filedataid) | int | unsigned |  | NO | 0 |  |  |
| [ConversationID](#conversationid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### OriginX
*- no description -*
&nbsp;

### OriginY
*- no description -*
&nbsp;

### OriginZ
*- no description -*
&nbsp;

### SoundID
*- no description -*
&nbsp;

### OriginFacing
*- no description -*
&nbsp;

### FileDataID
*- no description -*
&nbsp;

### ConversationID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

