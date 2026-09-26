---
title: ui_map_quest
description: 
published: true
date: 2024-09-05T22:48:28.518Z
tags: database, master, world
editor: markdown
dateCreated: 2024-09-05T22:48:28.518Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [UiMapId](#uimapid) | int | unsigned | PRI | NO |  |  |  |
| [QuestId](#questid) | int | unsigned | PRI | NO |  |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### UiMapId
*- no description -*
&nbsp;

### QuestId
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

