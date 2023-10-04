---
title: SpellChainEffects.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spellcategory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellCategory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spelldescriptionvariables" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellDescriptionVariables'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellChainEffects.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spellchaineffects&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellChainEffects)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [AvgSegLen](#avgseglen) | float |  |
| 2 | [Width](#width) | float |  |
| 3 | [NoiseScale](#noisescale) | float |  |
| 4 | [TexCoordScale](#texcoordscale) | float |  |
| 5 | [SegDuration](#segduration) | uint32 |  |
| 6 | [SegDelay](#segdelay) | uint32 |  |
| 7 | [Texture](#texture) | string |  |
| 8 | [Flags](#flags) | uint32 |  |
| 9 | [JointCount](#jointcount) | uint32 |  |
| 10 | [JointOffsetRadius](#jointoffsetradius) | float |  |
| 11 | [JointsPerMinorJoint](#jointsperminorjoint) | uint32 |  |
| 12 | [MinorJointsPerMajorJoint](#minorjointspermajorjoint) | uint32 |  |
| 13 | [MinorJointScale](#minorjointscale) | float |  |
| 14 | [MajorJointScale](#majorjointscale) | float |  |
| 15 | [JointMoveSpeed](#jointmovespeed) | float |  |
| 16 | [JointSmoothness](#jointsmoothness) | float |  |
| 17 | [MinDurationBetweenJointJumps](#mindurationbetweenjointjumps) | float |  |
| 18 | [MaxDurationBetweenJointJumps](#maxdurationbetweenjointjumps) | float |  |
| 19 | [WaveHeight](#waveheight) | float |  |
| 20 | [WaveFreq](#wavefreq) | float |  |
| 21 | [WaveSpeed](#wavespeed) | float |  |
| 22 | [MinWaveAngle](#minwaveangle) | float |  |
| 23 | [MaxWaveAngle](#maxwaveangle) | float |  |
| 24 | [MinWaveSpin](#minwavespin) | float |  |
| 25 | [MaxWaveSpin](#maxwavespin) | float |  |
| 26 | [ArcHeight](#archeight) | float |  |
| 27 | [MinArcAngle](#minarcangle) | float |  |
| 28 | [MaxArcAngle](#maxarcangle) | float |  |
| 29 | [MinArcSpin](#minarcspin) | float |  |
| 30 | [MaxArcSpin](#maxarcspin) | float |  |
| 31 | [DelayBetweenEffects](#delaybetweeneffects) | float |  |
| 32 | [MinFlickerOnDuration](#minflickeronduration) | float |  |
| 33 | [MaxFlickerOnDuration](#maxflickeronduration) | float |  |
| 34 | [MinFlickerOffDuration](#minflickeroffduration) | float |  |
| 35 | [MaxFlickerOffDuration](#maxflickeroffduration) | float |  |
| 36 | [PulseSpeed](#pulsespeed) | float |  |
| 37 | [PulseOnLength](#pulseonlength) | float |  |
| 38 | [PulseFadeLength](#pulsefadelength) | float |  |
| 39 | [Alpha](#alpha) | uint8 |  |
| 40 | [Red](#red) | int8 |  |
| 41 | [Green](#green) | int8 |  |
| 42 | [Blue](#blue) | int8 |  |
| 43 | [BlendMode](#blendmode) | uint8 |  |
|    | PADDING | 3:uint8 |  |
| 44 | [Combo](#combo) | string |  |
| 45 | [RenderLayer](#renderlayer) | uint32 |  |
| 46 | [TextureLength](#texturelength) | float |  |
| 47 | [WavePhase](#wavephase) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### AvgSegLen
:x: <code>Col: 1 (float)</code>

*- no description -*
&nbsp;

### Width
:x: <code>Col: 2 (float)</code>

*- no description -*
&nbsp;

### NoiseScale
:x: <code>Col: 3 (float)</code>

*- no description -*
&nbsp;

### TexCoordScale
:x: <code>Col: 4 (float)</code>

*- no description -*
&nbsp;

### SegDuration
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### SegDelay
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### Texture
:x: <code>Col: 7 (string)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### JointCount
:x: <code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

### JointOffsetRadius
:x: <code>Col: 10 (float)</code>

*- no description -*
&nbsp;

### JointsPerMinorJoint
:x: <code>Col: 11 (uint32)</code>

*- no description -*
&nbsp;

### MinorJointsPerMajorJoint
:x: <code>Col: 12 (uint32)</code>

*- no description -*
&nbsp;

### MinorJointScale
:x: <code>Col: 13 (float)</code>

*- no description -*
&nbsp;

### MajorJointScale
:x: <code>Col: 14 (float)</code>

*- no description -*
&nbsp;

### JointMoveSpeed
:x: <code>Col: 15 (float)</code>

*- no description -*
&nbsp;

### JointSmoothness
:x: <code>Col: 16 (float)</code>

*- no description -*
&nbsp;

### MinDurationBetweenJointJumps
:x: <code>Col: 17 (float)</code>

*- no description -*
&nbsp;

### MaxDurationBetweenJointJumps
:x: <code>Col: 18 (float)</code>

*- no description -*
&nbsp;

### WaveHeight
:x: <code>Col: 19 (float)</code>

*- no description -*
&nbsp;

### WaveFreq
:x: <code>Col: 20 (float)</code>

*- no description -*
&nbsp;

### WaveSpeed
:x: <code>Col: 21 (float)</code>

*- no description -*
&nbsp;

### MinWaveAngle
:x: <code>Col: 22 (float)</code>

*- no description -*
&nbsp;

### MaxWaveAngle
:x: <code>Col: 23 (float)</code>

*- no description -*
&nbsp;

### MinWaveSpin
:x: <code>Col: 24 (float)</code>

*- no description -*
&nbsp;

### MaxWaveSpin
:x: <code>Col: 25 (float)</code>

*- no description -*
&nbsp;

### ArcHeight
:x: <code>Col: 26 (float)</code>

*- no description -*
&nbsp;

### MinArcAngle
:x: <code>Col: 27 (float)</code>

*- no description -*
&nbsp;

### MaxArcAngle
:x: <code>Col: 28 (float)</code>

*- no description -*
&nbsp;

### MinArcSpin
:x: <code>Col: 29 (float)</code>

*- no description -*
&nbsp;

### MaxArcSpin
:x: <code>Col: 30 (float)</code>

*- no description -*
&nbsp;

### DelayBetweenEffects
:x: <code>Col: 31 (float)</code>

*- no description -*
&nbsp;

### MinFlickerOnDuration
:x: <code>Col: 32 (float)</code>

*- no description -*
&nbsp;

### MaxFlickerOnDuration
:x: <code>Col: 33 (float)</code>

*- no description -*
&nbsp;

### MinFlickerOffDuration
:x: <code>Col: 34 (float)</code>

*- no description -*
&nbsp;

### MaxFlickerOffDuration
:x: <code>Col: 35 (float)</code>

*- no description -*
&nbsp;

### PulseSpeed
:x: <code>Col: 36 (float)</code>

*- no description -*
&nbsp;

### PulseOnLength
:x: <code>Col: 37 (float)</code>

*- no description -*
&nbsp;

### PulseFadeLength
:x: <code>Col: 38 (float)</code>

*- no description -*
&nbsp;

### Alpha
:x: <code>Col: 39 (uint8)</code>

*- no description -*
&nbsp;

### Red
:x: <code>Col: 40 (int8)</code>

*- no description -*
&nbsp;

### Green
:x: <code>Col: 41 (int8)</code>

*- no description -*
&nbsp;

### Blue
:x: <code>Col: 42 (int8)</code>

*- no description -*
&nbsp;

### BlendMode
:x: <code>Col: 43 (uint8)</code>

*- no description -*
&nbsp;

### Combo
:x: <code>Col: 44 (string)</code>

*- no description -*
&nbsp;

### RenderLayer
:x: <code>Col: 45 (uint32)</code>

*- no description -*
&nbsp;

### TextureLength
:x: <code>Col: 46 (float)</code>

*- no description -*
&nbsp;

### WavePhase
:x: <code>Col: 47 (float)</code>

*- no description -*
&nbsp;


<a href="https://trinitycore.info/files/DBC/335/spellcategory" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellCategory'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spelldescriptionvariables" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellDescriptionVariables'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
