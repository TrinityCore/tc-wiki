---
title: quest_template_locale
description: 
published: true
date: 2024-09-05T22:48:27.024Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:37.173Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [locale](#locale) | varchar(4) |  | PRI | NO |  |  |  |
| [LogTitle](#logtitle) | mediumtext |  |  | YES | NULL |  |  |
| [LogDescription](#logdescription) | mediumtext |  |  | YES | NULL |  |  |
| [QuestDescription](#questdescription) | mediumtext |  |  | YES | NULL |  |  |
| [AreaDescription](#areadescription) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitGiverText](#portraitgivertext) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitGiverName](#portraitgivername) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitTurnInText](#portraitturnintext) | mediumtext |  |  | YES | NULL |  |  |
| [PortraitTurnInName](#portraitturninname) | mediumtext |  |  | YES | NULL |  |  |
| [QuestCompletionLog](#questcompletionlog) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### locale
*- no description -*
&nbsp;

### LogTitle
*- no description -*
&nbsp;

### LogDescription
*- no description -*
&nbsp;

### QuestDescription
*- no description -*
&nbsp;

### AreaDescription
*- no description -*
&nbsp;

### PortraitGiverText
*- no description -*
&nbsp;

### PortraitGiverName
*- no description -*
&nbsp;

### PortraitTurnInText
*- no description -*
&nbsp;

### PortraitTurnInName
*- no description -*
&nbsp;

### QuestCompletionLog
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

