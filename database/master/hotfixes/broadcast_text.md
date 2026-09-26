---
title: broadcast_text
description: 
published: true
date: 2024-09-05T22:45:54.939Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:50:44.144Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Text](#text) | text |  |  | YES | NULL |  |  |
| [Text1](#text1) | text |  |  | YES | NULL |  |  |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [LanguageID](#languageid) | int | signed |  | NO | 0 |  |  |
| [ConditionID](#conditionid) | int | signed |  | NO | 0 |  |  |
| [EmotesID](#emotesid) | smallint | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [ChatBubbleDurationMs](#chatbubbledurationms) | int | unsigned |  | NO | 0 |  |  |
| [VoiceOverPriorityID](#voiceoverpriorityid) | int | signed |  | NO | 0 |  |  |
| [SoundKitID1](#soundkitid1) | int | unsigned |  | NO | 0 |  |  |
| [SoundKitID2](#soundkitid2) | int | unsigned |  | NO | 0 |  |  |
| [EmoteID1](#emoteid1) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteID2](#emoteid2) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteID3](#emoteid3) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay1](#emotedelay1) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay2](#emotedelay2) | smallint | unsigned |  | NO | 0 |  |  |
| [EmoteDelay3](#emotedelay3) | smallint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### Text
*- no description -*
&nbsp;

### Text1
*- no description -*
&nbsp;

### ID {#id-alt}
*- no description -*
&nbsp;

### LanguageID
*- no description -*
&nbsp;

### ConditionID
*- no description -*
&nbsp;

### EmotesID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### ChatBubbleDurationMs
*- no description -*
&nbsp;

### VoiceOverPriorityID
*- no description -*
&nbsp;

### SoundKitID1
*- no description -*
&nbsp;

### SoundKitID2
*- no description -*
&nbsp;

### EmoteID1
*- no description -*
&nbsp;

### EmoteID2
*- no description -*
&nbsp;

### EmoteID3
*- no description -*
&nbsp;

### EmoteDelay1
*- no description -*
&nbsp;

### EmoteDelay2
*- no description -*
&nbsp;

### EmoteDelay3
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


