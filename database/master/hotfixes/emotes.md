---
title: emotes
description: 
published: true
date: 2024-09-05T22:45:57.505Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:12.730Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [RaceMask](#racemask) | bigint | signed |  | NO | 0 |  |  |
| [EmoteSlashCommand](#emoteslashcommand) | text |  |  | YES | NULL |  |  |
| [AnimID](#animid) | smallint | signed |  | NO | 0 |  |  |
| [EmoteFlags](#emoteflags) | int | signed |  | NO | 0 |  |  |
| [EmoteSpecProc](#emotespecproc) | int | signed |  | NO | 0 |  |  |
| [EmoteSpecProcParam](#emotespecprocparam) | int | unsigned |  | NO | 0 |  |  |
| [EventSoundID](#eventsoundid) | int | unsigned |  | NO | 0 |  |  |
| [SpellVisualKitID](#spellvisualkitid) | int | unsigned |  | NO | 0 |  |  |
| [ClassMask](#classmask) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### RaceMask
*- no description -*
&nbsp;

### EmoteSlashCommand
*- no description -*
&nbsp;

### AnimID
*- no description -*
&nbsp;

### EmoteFlags
*- no description -*
&nbsp;

### EmoteSpecProc
*- no description -*
&nbsp;

### EmoteSpecProcParam
*- no description -*
&nbsp;

### EventSoundID
*- no description -*
&nbsp;

### SpellVisualKitID
*- no description -*
&nbsp;

### ClassMask
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

