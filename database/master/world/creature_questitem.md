---
title: creature_questitem
description:
published: true
date: 2023-10-06T19:27:09.404Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:30:07.948Z
---

> This table has only cosmetic usage.
> It's used for ingame tooltip only. It does not affect which items are dropped!
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureEntry](#creatureentry) | int | unsigned | PRI | NO | 0 |  |  |
| [DifficultyID](#difficultyid) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [Idx](#idx) | int | unsigned | PRI | NO | 0 |  |  |
| [ItemId](#itemid) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### CreatureEntry
The ID of the creature. See [creature_template.entry](/database/master/world/creature_template#entry).
&nbsp;

### DifficultyID
The ID of the [Difficulty](https://wago.tools/db2/difficulty){target=_blank}.
&nbsp;

### Idx
Index in which order items are displayed.
&nbsp;

### ItemId
The ID of the [Item](https://wago.tools/db2/itemsparse){target=_blank}.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

