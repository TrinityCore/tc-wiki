---
title: gameobject_questender
description: 
published: true
date: 2023-04-01T23:31:32.440Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:48.625Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  | Quest Identifier |
| [VerifiedBuild](#verifiedbuild) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
The template ID of the game object. See [`gameobject_template.entry`](/database/master/world/gameobject_template#entry)
&nbsp;

### quest
The quest ID that this game object finishes. See [`quest_template.ID`](/database/master/world/quest_template#ID)
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

