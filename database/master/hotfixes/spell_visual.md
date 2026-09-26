---
title: spell_visual
description: 
published: true
date: 2022-11-21T22:45:43.344Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-12-15T19:38:47.657Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [MissileCastOffset1](#missilecastoffset1) | float |  |  | NO | 0 |  |  |
| [MissileCastOffset2](#missilecastoffset2) | float |  |  | NO | 0 |  |  |
| [MissileCastOffset3](#missilecastoffset3) | float |  |  | NO | 0 |  |  |
| [MissileImpactOffset1](#missileimpactoffset1) | float |  |  | NO | 0 |  |  |
| [MissileImpactOffset2](#missileimpactoffset2) | float |  |  | NO | 0 |  |  |
| [MissileImpactOffset3](#missileimpactoffset3) | float |  |  | NO | 0 |  |  |
| [AnimEventSoundID](#animeventsoundid) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | int | signed |  | NO | 0 |  |  |
| [MissileAttachment](#missileattachment) | tinyint | signed |  | NO | 0 |  |  |
| [MissileDestinationAttachment](#missiledestinationattachment) | tinyint | signed |  | NO | 0 |  |  |
| [MissileCastPositionerID](#missilecastpositionerid) | int | unsigned |  | NO | 0 |  |  |
| [MissileImpactPositionerID](#missileimpactpositionerid) | int | unsigned |  | NO | 0 |  |  |
| [MissileTargetingKit](#missiletargetingkit) | int | signed |  | NO | 0 |  |  |
| [HostileSpellVisualID](#hostilespellvisualid) | int | unsigned |  | NO | 0 |  |  |
| [CasterSpellVisualID](#casterspellvisualid) | int | unsigned |  | NO | 0 |  |  |
| [SpellVisualMissileSetID](#spellvisualmissilesetid) | smallint | unsigned |  | NO | 0 |  |  |
| [DamageNumberDelay](#damagenumberdelay) | smallint | unsigned |  | NO | 0 |  |  |
| [LowViolenceSpellVisualID](#lowviolencespellvisualid) | int | unsigned |  | NO | 0 |  |  |
| [RaidSpellVisualMissileSetID](#raidspellvisualmissilesetid) | int | unsigned |  | NO | 0 |  |  |
| [ReducedUnexpectedCameraMovementSpellVisualID](#reducedunexpectedcameramovementspellvisualid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### MissileCastOffset1
*- no description -*
&nbsp;

### MissileCastOffset2
*- no description -*
&nbsp;

### MissileCastOffset3
*- no description -*
&nbsp;

### MissileImpactOffset1
*- no description -*
&nbsp;

### MissileImpactOffset2
*- no description -*
&nbsp;

### MissileImpactOffset3
*- no description -*
&nbsp;

### AnimEventSoundID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### MissileAttachment
*- no description -*
&nbsp;

### MissileDestinationAttachment
*- no description -*
&nbsp;

### MissileCastPositionerID
*- no description -*
&nbsp;

### MissileImpactPositionerID
*- no description -*
&nbsp;

### MissileTargetingKit
*- no description -*
&nbsp;

### HostileSpellVisualID
*- no description -*
&nbsp;

### CasterSpellVisualID
*- no description -*
&nbsp;

### SpellVisualMissileSetID
*- no description -*
&nbsp;

### DamageNumberDelay
*- no description -*
&nbsp;

### LowViolenceSpellVisualID
*- no description -*
&nbsp;

### RaidSpellVisualMissileSetID
*- no description -*
&nbsp;

### ReducedUnexpectedCameraMovementSpellVisualID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


