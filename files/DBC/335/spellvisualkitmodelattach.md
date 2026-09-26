---
title: SpellVisualKitModelAttach.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---

# SpellVisualKitModelAttach.dbc
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellVisualKitModelAttach)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [ParentSpellVisualKitID](#parentspellvisualkitid) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id-alt) |
| 2 | [SpellVisualEffectNameID](#spellvisualeffectnameid) | uint32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id-alt) |
| 3 | [AttachmentID](#attachmentid) | int32 |  |
| 4 | [Offset_X](#offset_x) | float |  |
| 5 | [Offset_Y](#offset_y) | float |  |
| 6 | [Offset_Z](#offset_z) | float |  |
| 7 | [Yaw](#yaw) | float |  |
| 8 | [Pitch](#pitch) | float |  |
| 9 | [Roll](#roll) | float |  |
&nbsp;
## Description of fields

### ID {#id-alt}
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### ParentSpellVisualKitID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### SpellVisualEffectNameID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### AttachmentID
:x: <code>Col: 3 (int32)</code>

M2-Attachment
&nbsp;

### Offset
:x: <code>Col: 4 &ndash; 6 ([DBCPosition3D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### Yaw
:x: <code>Col: 7 (float)</code>

in radians
&nbsp;

### Pitch
:x: <code>Col: 8 (float)</code>

*- no description -*
&nbsp;

### Roll
:x: <code>Col: 9 (float)</code>

*- no description -*
&nbsp;

