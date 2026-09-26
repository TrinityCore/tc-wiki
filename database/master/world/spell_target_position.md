---
title: spell_target_position
description:
published: true
date: 2025-01-23T20:24:03.144Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:37:21.892Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [EffectIndex](#effectindex) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [OrderIndex](#orderindex) | int | signed | PRI | NO | 0 |  |  |
| [MapID](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [PositionX](#positionx) | float |  |  | NO | 0 |  |  |
| [PositionY](#positiony) | float |  |  | NO | 0 |  |  |
| [PositionZ](#positionz) | float |  |  | NO | 0 |  |  |
| [Orientation](#orientation) | float |  |  | YES | NULL |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
references [Spell ID](https://wago.tools/db2/spell)
&nbsp;

### EffectIndex
The effect index of the spell with TARGET_DEST_DB (17) or TARGET_DEST_NEARBY_DB (106).
(0 - 31)
&nbsp;

### OrderIndex
In case of multiple positions (TARGET_DEST_NEARBY_DB (106)), index of each position linked to the spell effect.
For TARGET_DEST_DB (17) is always 0.
&nbsp;

### MapID
The [Map ID](https://wago.tools/db2/map) the player should be teleported to.
&nbsp;

### PositionX
X coordinate for the target destination of the spell.
&nbsp;

### PositionY
Y coordinate for the target destination of the spell.
&nbsp;

### PositionZ
Z coordinate for the target destination of the spell.
&nbsp;

### Orientation
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

