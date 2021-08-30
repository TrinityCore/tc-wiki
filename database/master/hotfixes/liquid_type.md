---
title: liquid_type
description: 
published: true
date: 2021-08-30T19:58:43.073Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T06:00:00.000Z
---

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/light" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'light'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/lock" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'lock'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | int(10) | unsigned | PRI | NO | 0 |  |  |
| [Name](#name) | text |  |  | YES | NULL |  |  |
| [Texture1](#texture1) | text |  |  | YES | NULL |  |  |
| [Texture2](#texture2) | text |  |  | YES | NULL |  |  |
| [Texture3](#texture3) | text |  |  | YES | NULL |  |  |
| [Texture4](#texture4) | text |  |  | YES | NULL |  |  |
| [Texture5](#texture5) | text |  |  | YES | NULL |  |  |
| [Texture6](#texture6) | text |  |  | YES | NULL |  |  |
| [Flags](#flags) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [SoundBank](#soundbank) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [SoundID](#soundid) | int(10) | unsigned |  | NO | 0 |  |  |
| [SpellID](#spellid) | int(10) | unsigned |  | NO | 0 |  |  |
| [MaxDarkenDepth](#maxdarkendepth) | float |  |  | NO | 0 |  |  |
| [FogDarkenIntensity](#fogdarkenintensity) | float |  |  | NO | 0 |  |  |
| [AmbDarkenIntensity](#ambdarkenintensity) | float |  |  | NO | 0 |  |  |
| [DirDarkenIntensity](#dirdarkenintensity) | float |  |  | NO | 0 |  |  |
| [LightID](#lightid) | smallint(5) | unsigned |  | NO | 0 |  |  |
| [ParticleScale](#particlescale) | float |  |  | NO | 0 |  |  |
| [ParticleMovement](#particlemovement) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [ParticleTexSlots](#particletexslots) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MaterialID](#materialid) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [MinimapStaticCol](#minimapstaticcol) | int(11) | signed |  | NO | 0 |  |  |
| [FrameCountTexture1](#framecounttexture1) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [FrameCountTexture2](#framecounttexture2) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [FrameCountTexture3](#framecounttexture3) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [FrameCountTexture4](#framecounttexture4) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [FrameCountTexture5](#framecounttexture5) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [FrameCountTexture6](#framecounttexture6) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [Color1](#color1) | int(11) | signed |  | NO | 0 |  |  |
| [Color2](#color2) | int(11) | signed |  | NO | 0 |  |  |
| [Float1](#float1) | float |  |  | NO | 0 |  |  |
| [Float2](#float2) | float |  |  | NO | 0 |  |  |
| [Float3](#float3) | float |  |  | NO | 0 |  |  |
| [Float4](#float4) | float |  |  | NO | 0 |  |  |
| [Float5](#float5) | float |  |  | NO | 0 |  |  |
| [Float6](#float6) | float |  |  | NO | 0 |  |  |
| [Float7](#float7) | float |  |  | NO | 0 |  |  |
| [Float8](#float8) | float |  |  | NO | 0 |  |  |
| [Float9](#float9) | float |  |  | NO | 0 |  |  |
| [Float10](#float10) | float |  |  | NO | 0 |  |  |
| [Float11](#float11) | float |  |  | NO | 0 |  |  |
| [Float12](#float12) | float |  |  | NO | 0 |  |  |
| [Float13](#float13) | float |  |  | NO | 0 |  |  |
| [Float14](#float14) | float |  |  | NO | 0 |  |  |
| [Float15](#float15) | float |  |  | NO | 0 |  |  |
| [Float16](#float16) | float |  |  | NO | 0 |  |  |
| [Float17](#float17) | float |  |  | NO | 0 |  |  |
| [Float18](#float18) | float |  |  | NO | 0 |  |  |
| [Int1](#int1) | int(10) | unsigned |  | NO | 0 |  |  |
| [Int2](#int2) | int(10) | unsigned |  | NO | 0 |  |  |
| [Int3](#int3) | int(10) | unsigned |  | NO | 0 |  |  |
| [Int4](#int4) | int(10) | unsigned |  | NO | 0 |  |  |
| [Coefficient1](#coefficient1) | float |  |  | NO | 0 |  |  |
| [Coefficient2](#coefficient2) | float |  |  | NO | 0 |  |  |
| [Coefficient3](#coefficient3) | float |  |  | NO | 0 |  |  |
| [Coefficient4](#coefficient4) | float |  |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int(11) | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID
*- no description -*
&nbsp;

### Name
*- no description -*
&nbsp;

### Texture1
*- no description -*
&nbsp;

### Texture2
*- no description -*
&nbsp;

### Texture3
*- no description -*
&nbsp;

### Texture4
*- no description -*
&nbsp;

### Texture5
*- no description -*
&nbsp;

### Texture6
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### SoundBank
*- no description -*
&nbsp;

### SoundID
*- no description -*
&nbsp;

### SpellID
*- no description -*
&nbsp;

### MaxDarkenDepth
*- no description -*
&nbsp;

### FogDarkenIntensity
*- no description -*
&nbsp;

### AmbDarkenIntensity
*- no description -*
&nbsp;

### DirDarkenIntensity
*- no description -*
&nbsp;

### LightID
*- no description -*
&nbsp;

### ParticleScale
*- no description -*
&nbsp;

### ParticleMovement
*- no description -*
&nbsp;

### ParticleTexSlots
*- no description -*
&nbsp;

### MaterialID
*- no description -*
&nbsp;

### MinimapStaticCol
*- no description -*
&nbsp;

### FrameCountTexture1
*- no description -*
&nbsp;

### FrameCountTexture2
*- no description -*
&nbsp;

### FrameCountTexture3
*- no description -*
&nbsp;

### FrameCountTexture4
*- no description -*
&nbsp;

### FrameCountTexture5
*- no description -*
&nbsp;

### FrameCountTexture6
*- no description -*
&nbsp;

### Color1
*- no description -*
&nbsp;

### Color2
*- no description -*
&nbsp;

### Float1
*- no description -*
&nbsp;

### Float2
*- no description -*
&nbsp;

### Float3
*- no description -*
&nbsp;

### Float4
*- no description -*
&nbsp;

### Float5
*- no description -*
&nbsp;

### Float6
*- no description -*
&nbsp;

### Float7
*- no description -*
&nbsp;

### Float8
*- no description -*
&nbsp;

### Float9
*- no description -*
&nbsp;

### Float10
*- no description -*
&nbsp;

### Float11
*- no description -*
&nbsp;

### Float12
*- no description -*
&nbsp;

### Float13
*- no description -*
&nbsp;

### Float14
*- no description -*
&nbsp;

### Float15
*- no description -*
&nbsp;

### Float16
*- no description -*
&nbsp;

### Float17
*- no description -*
&nbsp;

### Float18
*- no description -*
&nbsp;

### Int1
*- no description -*
&nbsp;

### Int2
*- no description -*
&nbsp;

### Int3
*- no description -*
&nbsp;

### Int4
*- no description -*
&nbsp;

### Coefficient1
*- no description -*
&nbsp;

### Coefficient2
*- no description -*
&nbsp;

### Coefficient3
*- no description -*
&nbsp;

### Coefficient4
*- no description -*
&nbsp;

### VerifiedBuild
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/hotfixes/light" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'light'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to hotfixes</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://dev.trinitycore.info/en/database/master/hotfixes/lock" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'lock'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

