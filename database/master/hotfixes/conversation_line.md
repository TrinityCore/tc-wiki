---
title: conversation_line
description: 
published: true
date: 2024-02-11T20:02:21.787Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:52:06.305Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [BroadcastTextID](#broadcasttextid) | int | unsigned |  | NO | 0 |  |  |
| [Unused1020](#unused1020) | int | unsigned |  | NO | 0 |  |  |
| [SpellVisualKitID](#spellvisualkitid) | int | unsigned |  | NO | 0 |  |  |
| [AdditionalDuration](#additionalduration) | int | signed |  | NO | 0 |  |  |
| [NextConversationLineID](#nextconversationlineid) | smallint | unsigned |  | NO | 0 |  |  |
| [AnimKitID](#animkitid) | smallint | unsigned |  | NO | 0 |  |  |
| [SpeechType](#speechtype) | tinyint | unsigned |  | NO | 0 |  |  |
| [StartAnimation](#startanimation) | tinyint | unsigned |  | NO | 0 |  |  |
| [EndAnimation](#endanimation) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### BroadcastTextID
*- no description -*
&nbsp;

### Unused1020
*- no description -*
&nbsp;

### SpellVisualKitID
*- no description -*
&nbsp;

### AdditionalDuration
*- no description -*
&nbsp;

### NextConversationLineID
*- no description -*
&nbsp;

### AnimKitID
*- no description -*
&nbsp;

### SpeechType
*- no description -*
&nbsp;

### StartAnimation
*- no description -*
&nbsp;

### EndAnimation
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

