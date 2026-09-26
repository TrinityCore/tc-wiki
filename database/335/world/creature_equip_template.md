---
title: creature_equip_template
description: 
published: true
date: 2024-05-16T11:19:31.659Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:23.670Z
---

This table contains all the equipment combinations that can be set for each creature.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO | 0 |  |  |
| [ID](#id-alt) | tinyint | unsigned | PRI | NO | 1 |  |  |
| [ItemID1](#itemid1) | int | unsigned |  | NO | 0 |  |  |
| [ItemID2](#itemid2) | int | unsigned |  | NO | 0 |  |  |
| [ItemID3](#itemid3) | int | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### CreatureID
The immediate corresponding entryid to [creature_template](../world/creature_template#entry) table.
&nbsp;

### ID {#id-alt}
An additional identifier for each individual entry, enabling multiple equipments for one creature entry. Counter **must** start with 1 and increment accordingly.
&nbsp;

### ItemID1
This is the [Item ID](/files/DBC/335/item#id) of the equipment used in the right hand slot.
&nbsp;

### ItemID2
This is the [Item ID](/files/DBC/335/item#id) of the equipment used in the left hand slot.
&nbsp;

### ItemID3
This is the [Item ID](/files/DBC/335/item#id) of the equipment used in the ranged slot.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

