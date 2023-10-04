---
title: SpellVisual.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spellshapeshiftform" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellShapeshiftForm'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisualeffectname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisualEffectName'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellVisual.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spellvisual&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellVisual)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [PrecastKit](#precastkit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 2 | [CastKit](#castkit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 3 | [ImpactKit](#impactkit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 4 | [StateKit](#statekit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 5 | [StateDoneKit](#statedonekit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 6 | [ChannelKit](#channelkit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 7 | [HasMissile](#hasmissile) | uint32 |  |
| 8 | [MissileModel](#missilemodel) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 9 | [MissilePathType](#missilepathtype) | uint32 |  |
| 10 | [MissileDestinationAttachment](#missiledestinationattachment) | uint32 |  |
| 11 | [MissileSound](#missilesound) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 12 | [AnimEventSoundID](#animeventsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 13 | [Flags](#flags) | uint32 |  |
| 14 | [CasterImpactKit](#casterimpactkit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 15 | [TargetImpactKit](#targetimpactkit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 16 | [MissileAttachment](#missileattachment) | int32 |  |
| 17 | [MissileFollowGroundHeight](#missilefollowgroundheight) | uint32 |  |
| 18 | [MissileFollowGroundDropSpeed](#missilefollowgrounddropspeed) | uint32 |  |
| 19 | [MissileFollowGroundApproach](#missilefollowgroundapproach) | uint32 |  |
| 20 | [MissileFollowGroundFlags](#missilefollowgroundflags) | uint32 |  |
| 21 | [MissileMotion](#missilemotion) | uint32 |  |
| 22 | [MissileTargetingKit](#missiletargetingkit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 23 | [InstantAreaKit](#instantareakit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 24 | [ImpactAreaKit](#impactareakit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 25 | [PersistentAreaKit](#persistentareakit) | uint32 | [SpellVisualKit.dbc/0](/files/DBC/335/spellvisualkit#id) |
| 26 | [MissileCastOffset_X](#missilecastoffset) | float |  |
| 27 | [MissileCastOffset_Y](#missilecastoffset) | float |  |
| 28 | [MissileCastOffset_Z](#missilecastoffset) | float |  |
| 29 | [MissileImpactOffset_X](#missileimpactoffset) | float |  |
| 30 | [MissileImpactOffset_Y](#missileimpactoffset) | float |  |
| 31 | [MissileImpactOffset_Z](#missileimpactoffset) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### PrecastKit
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### CastKit
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### ImpactKit
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### StateKit
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### StateDoneKit
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### ChannelKit
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### HasMissile
<code>Col: 7 (bool)</code>

*- no description -*
&nbsp;

### MissileModel
<code>Col: 8 (int32)</code>

*- no description -*
&nbsp;

### MissilePathType
:x: <code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

### MissileDestinationAttachment
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### MissileSound
:x: <code>Col: 11 (uint32)</code>

*- no description -*
&nbsp;

### AnimEventSoundID
:x: <code>Col: 12 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 13 (uint32)</code>

*- no description -*
&nbsp;

### CasterImpactKit
:x: <code>Col: 14 (uint32)</code>

*- no description -*
&nbsp;

### TargetImpactKit
:x: <code>Col: 15 (uint32)</code>

*- no description -*
&nbsp;

### MissileAttachment
:x: <code>Col: 16 (int32)</code>

*- no description -*
&nbsp;

### MissileFollowGroundHeight
:x: <code>Col: 17 (uint32)</code>

*- no description -*
&nbsp;

### MissileFollowGroundDropSpeed
:x: <code>Col: 18 (uint32)</code>

*- no description -*
&nbsp;

### MissileFollowGroundApproach
:x: <code>Col: 19 (uint32)</code>

*- no description -*
&nbsp;

### MissileFollowGroundFlags
:x: <code>Col: 20 (uint32)</code>

*- no description -*
&nbsp;

### MissileMotion
:x: <code>Col: 21 (uint32)</code>

*- no description -*
&nbsp;

### MissileTargetingKit
:x: <code>Col: 22 (uint32)</code>

*- no description -*
&nbsp;

### InstantAreaKit
:x: <code>Col: 23 (uint32)</code>

*- no description -*
&nbsp;

### ImpactAreaKit
:x: <code>Col: 24 (uint32)</code>

*- no description -*
&nbsp;

### PersistentAreaKit
:x: <code>Col: 25 (uint32)</code>

*- no description -*
&nbsp;

### MissileCastOffset
:x: <code>Col: 26 &ndash; 28 ([DBCPosition3D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

### MissileImpactOffset
:x: <code>Col: 29 &ndash; 31 ([DBCPosition3D](/how-to/worldposition) offset)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spellshapeshiftform" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellShapeshiftForm'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisualeffectname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisualEffectName'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
