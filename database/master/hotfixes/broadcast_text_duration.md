---
title: broadcast_text_duration
description: 
published: true
date: 2022-11-21T21:32:22.253Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-11-14T19:50:56.576Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [BroadcastTextID](#broadcasttextid) | int | signed |  | NO | 0 |  |  |
| [Locale](#locale) | int | signed |  | NO | 0 |  |  |
| [Duration](#duration) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### BroadcastTextID
*- no description -*
&nbsp;

### Locale
*- no description -*
&nbsp;

### Duration
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


