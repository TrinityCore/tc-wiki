---
title: CreatureModelData.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/creaturefamily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureFamily'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturemovementinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureMovementInfo'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CreatureModelData.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=creaturemodeldata&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CreatureModelData)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Flags](#flags) | uint32 |  |
| 2 | [ModelName](#modelname) | string |  |
| 3 | [SizeClass](#sizeclass) | uint32 |  |
| 4 | [ModelScale](#modelscale) | float |  |
| 5 | [BloodID](#bloodid) | int32 | [UnitBloodLevels.dbc/0](/files/DBC/335/unitbloodlevels#id) |
| 6 | [FootprintTextureID](#footprinttextureid) | int32 | [FootprintTextures.dbc/0](/files/DBC/335/footprinttextures#id) |
| 7 | [FootprintTextureLength](#footprinttexturelength) | uint32 |  |
| 8 | [FootprintTextureWidth](#footprinttexturewidth) | uint32 |  |
| 9 | [FootprintParticleScale](#footprintparticlescale) | float |  |
| 10 | [FoleyMaterialID](#foleymaterialid) | uint32 | [Material.dbc/0](/files/DBC/335/material#id) |
| 11 | [FootstepShakeSize](#footstepshakesize) | float |  |
| 12 | [DeathThudShakeSize](#deaththudshakesize) | uint32 |  |
| 13 | [SoundID](#soundid) | uint32 | [CreatureSoundData.dbc/0](/files/DBC/335/creaturesounddata#id) |
| 14 | [CollisionWidth](#collisionwidth) | float |  |
| 15 | [CollisionHeight](#collisionheight) | float |  |
| 16 | [MountHeight](#mountheight) | float |  |
| 17 | [GeoBoxMin_X](#geoboxmin) | float |  |
| 18 | [GeoBoxMin_Y](#geoboxmin) | float |  |
| 19 | [GeoBoxMin_Z](#geoboxmin) | float |  |
| 20 | [GeoBoxMax_X](#geoboxmax) | float |  |
| 21 | [GeoBoxMax_Y](#geoboxmax) | float |  |
| 22 | [GeoBoxMax_Z](#geoboxmax) | float |  |
| 23 | [WorldEffectScale](#worldeffectscale) | float |  |
| 24 | [AttachedEffectScale](#attachedeffectscale) | float |  |
| 25 | [MissileCollisionRadius](#missilecollisionradius) | float |  |
| 26 | [MissileCollisionPush](#missilecollisionpush) | float |  |
| 27 | [MissileCollisionRaise](#missilecollisionraise) | float |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Flags
<code>Col: 1 (uint32)</code>

[`enum CreatureModelDataFlags`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/shared/DataStores/DBCStructure.h#L509-L512)
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x0001 |  | No Footprint Particles |
| 2 | 0x0002 |  | No Breath Particles |
| 4 | 0x0004 |  | Is Player Model |
| 8 | 0x0008 |  | *- unknown -* |
| 16 | 0x0010 |  | No Attached Weapons |
| 32 | 0x0020 |  | No Footprint Trail Texture |
| 64 | 0x0040 |  | Disable Highlight |
| 128 | 0x0080 | CREATURE_MODEL_DATA_FLAGS_CAN_MOUNT | Can mount while transformed as this |
| 256 | 0x0100 |  | Disable Scale interpolation |
| 512 | 0x0200 |  | Force Projected Tex. |
| 1024 | 0x0400 |  | Can jump in playce as mount |
| 2048 | 0x0800 |  | AI can't use walk backwards anim. |
{.dense}

&nbsp;

### ModelName
<code>Col: 2 (string)</code>

*- no description -*
&nbsp;

### SizeClass
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### ModelScale
<code>Col: 4 (float)</code>

Used in calculation of unit collision data.
&nbsp;

### BloodID
:x: <code>Col: 5 (int32)</code>

*- no description -*
&nbsp;

### FootprintTextureID
:x: <code>Col: 6 (int32)</code>

*- no description -*
&nbsp;

### FootprintTextureLength
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### FootprintTextureWidth
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### FootprintParticleScale
:x: <code>Col: 9 (float)</code>

*- no description -*
&nbsp;

### FoleyMaterialID
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### FootstepShakeSize
:x: <code>Col: 11 (float)</code>

*- no description -*
&nbsp;

### DeathThudShakeSize
:x: <code>Col: 12 (uint32)</code>

*- no description -*
&nbsp;

### SoundID
:x: <code>Col: 13 (uint32)</code>

*- no description -*
&nbsp;

### CollisionWidth
:x: <code>Col: 14 (float)</code>

Size of collision for the model. Has to be bigger than 0.41670012920929, else "collision width is too small.".
&nbsp;

### CollisionHeight
<code>Col: 15 (float)</code>

*- no description -*
&nbsp;

### MountHeight
<code>Col: 16 (float)</code>

Used in calculation of unit collision data when mounted.
&nbsp;

### GeoBoxMin
:x: <code>Col: 17 &ndash; 19 (Vector3D)</code>

These values are the actually maximum and minimum coordinates of the vertices.
&nbsp;

### GeoBoxMax
:x: <code>Col: 20 &ndash; 22 (Vector3D)</code>

*- no description -*
&nbsp;

### WorldEffectScale
:x: <code>Col: 23 (float)</code>

*- no description -*
&nbsp;

### AttachedEffectScale
:x: <code>Col: 24 (float)</code>

*- no description -*
&nbsp;

### MissileCollisionRadius
:x: <code>Col: 25 (float)</code>

*- no description -*
&nbsp;

### MissileCollisionPush
:x: <code>Col: 26 (float)</code>

*- no description -*
&nbsp;

### MissileCollisionRaise
:x: <code>Col: 27 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/creaturefamily" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureFamily'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturemovementinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureMovementInfo'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
