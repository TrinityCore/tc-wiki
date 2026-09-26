---
title: quest_reward_display_spell
description: 
published: true
date: 2023-05-11T09:25:22.091Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:35:28.539Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [QuestID](#questid) | int | unsigned | PRI | NO |  |  |  |
| [Idx](#idx) | int | unsigned | PRI | NO |  |  |  |
| [SpellID](#spellid) | int | unsigned |  | YES | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | unsigned |  | YES | 0 |  |  |
| [Type](#type) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### QuestID
*- no description -*
&nbsp;

### Idx
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### Type
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

