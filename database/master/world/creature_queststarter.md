---
title: creature_queststarter
description: 
published: true
date: 2024-05-15T17:59:51.554Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:10.521Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  | Identifier |
| [quest](#quest) | int | unsigned | PRI | NO | 0 |  | Quest Identifier |
| [VerifiedBuild](#verifiedbuild) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
The ID of the creature. See [creature_template.entry](/database/master/world/creature_template#entry)
&nbsp;

### quest
The quest ID that the creature finishes. See [quest_template.id](/database/master/world/quest_template#id)
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

