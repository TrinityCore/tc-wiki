---
title: LiquidType.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/liquidmaterial" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LiquidMaterial'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/loadingscreens" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LoadingScreens'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# LiquidType.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=liquidtype&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/LiquidType)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Name](#name) | string |  |
| 2 | [Flags](#flags) | uint32 |  |
| 3 | [SoundBank](#soundbank) | uint32 |  |
| 4 | [SoundID](#soundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 5 | [SpellID](#spellid) | uint32 | [Spell.dbc/0](/files/DBC/335/spell#id) |
| 6 | [MaxDarkenDepth](#maxdarkendepth) | float |  |
| 7 | [FogDarkenIntensity](#fogdarkenintensity) | float |  |
| 8 | [AmbDarkenIntensity](#ambdarkenintensity) | float |  |
| 9 | [DirDarkenIntensity](#dirdarkenintensity) | float |  |
| 10 | [LightID](#lightid) | uint32 | [Light.dbc/0](/files/DBC/335/light#id) |
| 11 | [ParticleScale](#particlescale) | float |  |
| 12 | [ParticleMovement](#particlemovement) | uint32 |  |
| 13 | [ParticleTexSlots](#particletexslots) | uint32 |  |
| 14 | [MaterialID](#materialid) | uint32 | [LiquidMaterial.dbc/0](/files/DBC/335/liquidmaterial#id) |
| 15 | [Texture_0](#texture) | string |  |
| 16 | [Texture_1](#texture) | string |  |
| 17 | [Texture_2](#texture) | string |  |
| 18 | [Texture_3](#texture) | string |  |
| 19 | [Texture_4](#texture) | string |  |
| 20 | [Texture_5](#texture) | string |  |
| 21 | [Color_0](#color) | uint32 |  |
| 22 | [Color_1](#color) | uint32 |  |
| 23 | [Unk1_0](#unk1) | float |  |
| 24 | [Unk1_1](#unk1) | float |  |
| 25 | [Unk1_2](#unk1) | float |  |
| 26 | [Unk1_3](#unk1) | float |  |
| 27 | [Unk1_4](#unk1) | float |  |
| 28 | [Unk1_5](#unk1) | float |  |
| 29 | [Unk1_6](#unk1) | float |  |
| 30 | [Unk1_7](#unk1) | float |  |
| 31 | [Unk1_8](#unk1) | float |  |
| 32 | [Unk1_9](#unk1) | float |  |
| 33 | [Unk1_10](#unk1) | float |  |
| 34 | [Unk1_11](#unk1) | float |  |
| 35 | [Unk1_12](#unk1) | float |  |
| 36 | [Unk1_13](#unk1) | float |  |
| 37 | [Unk1_14](#unk1) | float |  |
| 38 | [Unk1_15](#unk1) | float |  |
| 39 | [Unk1_16](#unk1) | float |  |
| 40 | [Unk1_17](#unk1) | float |  |
| 41 | [Unk2_0](#unk2) | uint32 |  |
| 42 | [Unk2_1](#unk2) | uint32 |  |
| 43 | [Unk2_2](#unk2) | uint32 |  |
| 44 | [Unk2_3](#unk2) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 2 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x0001 | Ripple |
| 2 | 0x0002 | Splash |
| 4 | 0x0004 | Water Walking |
| 8 | 0x0008 | Particles |
| 16 | 0x0010 | Particle Fog |
| 32 | 0x0020 | WMO Fog Control |
| 64 | 0x0040 | No Interior Fog Blend |
| 256 | 0x0100 | WMO Fog Control (SLIME) |
| 512 | 0x0200 | Force Exterior Lighting |
{.dense}

&nbsp;

### SoundBank
<code>Col: 3 (uint32)</code>

[`enum LiquidType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/tools/map_extractor/adt.h#L27-L33)
| ID | Name |
|----|------|
| 0 | LIQUID_TYPE_WATER
| 1 | LIQUID_TYPE_OCEAN
| 2 | LIQUID_TYPE_MAGMA
| 3 | LIQUID_TYPE_SLIME
{.dense}

&nbsp;

### SoundID
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### SpellID
<code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### MaxDarkenDepth
:x: <code>Col: 6 (float)</code>

*- no description -*
&nbsp;

### FogDarkenIntensity
:x: <code>Col: 7 (float)</code>

*- no description -*
&nbsp;

### AmbDarkenIntensity
:x: <code>Col: 8 (float)</code>

*- no description -*
&nbsp;

### DirDarkenIntensity
:x: <code>Col: 9 (float)</code>

*- no description -*
&nbsp;

### LightID
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### ParticleScale
:x: <code>Col: 11 (float)</code>

*- no description -*
&nbsp;

### ParticleMovement
:x: <code>Col: 12 (uint32)</code>

*- no description -*
&nbsp;

### ParticleTexSlots
:x: <code>Col: 13 (uint32)</code>

*- no description -*
&nbsp;

### MaterialID
:x: <code>Col: 14 (uint32)</code>

*- no description -*
&nbsp;

### Texture
:x: <code>Col: 15 &ndash; 20 (string)</code>

*- no description -*
&nbsp;

### Color
:x: <code>Col: 21 &ndash; 22 (uint32)</code>

*- no description -*
&nbsp;

### Unk1
:x: <code>Col: 23 &ndash; 40 (float)</code>

*- no description -*
&nbsp;

### Unk2
:x: <code>Col: 41 &ndash; 44 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/liquidmaterial" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'LiquidMaterial'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/loadingscreens" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'LoadingScreens'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
