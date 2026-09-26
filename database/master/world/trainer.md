---
title: trainer
description: 
published: true
date: 2023-04-02T01:41:24.379Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:34.783Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Type](#type) | tinyint | unsigned |  | NO | 2 |  |  |
| [Greeting](#greeting) | mediumtext |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### Id {#id-alt}
For trainer, this field signifies a unique trainer ID. It is to this ID that all spells are tied to in [`trainer_spell`](/database/master/world/trainer_spell) table.
&nbsp;

### Type
| Name | Value |
| ---- | ----- |
| None | 0 |
| Talent | 1 |
| Tradeskill | 2 |
| Pet | 3 |
&nbsp;

### Greeting
This is the text shown, once a trainer window has been opened. **This is not the gossip text**.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


