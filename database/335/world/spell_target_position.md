---
title: spell_target_position
description: 
published: true
date: 2026-01-12T22:48:03.738Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:10:02.280Z
---

This table holds coordinate information on where the player should be teleported to by a spell with target type: TARGET_DEST_DB (17).

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  | Identifier |
| [EffectIndex](#effectindex) | tinyint | unsigned | PRI | NO | 0 |  |  |
| [MapID](#mapid) | smallint | unsigned |  | NO | 0 |  |  |
| [PositionX](#positionx) | float |  |  | NO | 0 |  |  |
| [PositionY](#positiony) | float |  |  | NO | 0 |  |  |
| [PositionZ](#positionz) | float |  |  | NO | 0 |  |  |
| [Orientation](#orientation) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
references [Spell ID](/files/DBC/335/spell#id)
&nbsp;

### EffectIndex
The effect index of the spell with TARGET_DEST_DB.
(0 – 2)
&nbsp;

### MapID
The [Map ID](/files/DBC/335/map#id) the player should be teleported to.
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
Orientation the player will get when appearing at this location
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

