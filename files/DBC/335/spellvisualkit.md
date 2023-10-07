---
title: SpellVisualKit.dbc
description: 
published: true
date: 2023-10-07T22:03:23.102Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:08:11.623Z
---

<a href="https://trinitycore.info/files/DBC/335/spellvisualeffectname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellVisualEffectName'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisualkitareamodel" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisualKitAreaModel'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SpellVisualKit.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=spellvisualkit&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SpellVisualKit)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [StartAnimID](#startanimid) | int32 | [AnimationData.dbc/0](/files/DBC/335/animationdata#id) |
| 2 | [AnimID](#animid) | int32 | [AnimationData.dbc/0](/files/DBC/335/animationdata#id) |
| 3 | [HeadEffect](#headeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 4 | [ChestEffect](#chesteffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 5 | [BaseEffect](#baseeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 6 | [LeftHandEffect](#lefthandeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 7 | [RightHandEffect](#righthandeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 8 | [BreathEffect](#breatheffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 9 | [LeftWeaponEffect](#leftweaponeffect) | int32 |  |
| 10 | [RightWeaponEffect](#rightweaponeffect) | int32 |  |
| 11 | [SpecialEffect_0](#specialeffect) | int32 |  |
| 12 | [SpecialEffect_1](#specialeffect) | int32 |  |
| 13 | [SpecialEffect_2](#specialeffect) | int32 |  |
| 14 | [WorldEffect](#worldeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 15 | [SoundID](#soundid) | int32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 16 | [ShakeID](#shakeid) | uint32 | [CameraShakes.dbc/0](/files/DBC/335/camerashakes#id) |
| 17 | [CharProc_0](#charproc) | int32 |  |
| 18 | [CharProc_1](#charproc) | int32 |  |
| 19 | [CharProc_2](#charproc) | int32 |  |
| 20 | [CharProc_3](#charproc) | int32 |  |
| 21 | [CharParamA_0](#charparama) | float |  |
| 22 | [CharParamA_1](#charparama) | float |  |
| 23 | [CharParamA_2](#charparama) | float |  |
| 24 | [CharParamA_3](#charparama) | float |  |
| 25 | [CharParamB_0](#charparamb) | float |  |
| 26 | [CharParamB_1](#charparamb) | float |  |
| 27 | [CharParamB_2](#charparamb) | float |  |
| 28 | [CharParamB_3](#charparamb) | float |  |
| 29 | [CharParamC_0](#charparamc) | float |  |
| 30 | [CharParamC_1](#charparamc) | float |  |
| 31 | [CharParamC_2](#charparamc) | float |  |
| 32 | [CharParamC_3](#charparamc) | float |  |
| 33 | [CharParamD_0](#charparamd) | float |  |
| 34 | [CharParamD_1](#charparamd) | float |  |
| 35 | [CharParamD_2](#charparamd) | float |  |
| 36 | [CharParamD_3](#charparamd) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### StartAnimID
:x: <code>Col: 1 (int32)</code>

Seems to be caster animation of some sort...
&nbsp;

### AnimID
:x: <code>Col: 2 (int32)</code>

Caster animation.
&nbsp;

### HeadEffect
:x: <code>Col: 3 (int32)</code>

Visual effect over the head.
&nbsp;

### ChestEffect
:x: <code>Col: 4 (int32)</code>

Visual effect at chest.
&nbsp;

### BaseEffect
:x: <code>Col: 5 (int32)</code>

Visual effect at the base/ground.
&nbsp;

### LeftHandEffect
:x: <code>Col: 6 (int32)</code>

Visual effect at left hand.
&nbsp;

### RightHandEffect
:x: <code>Col: 7 (int32)</code>

Visual effect at right hand.
&nbsp;

### BreathEffect
:x: <code>Col: 8 (int32)</code>

Visual effect of AOE spells/abilities.
&nbsp;

### LeftWeaponEffect
:x: <code>Col: 9 (int32)</code>

*- no description -*
&nbsp;

### RightWeaponEffect
:x: <code>Col: 10 (int32)</code>

*- no description -*
&nbsp;

### SpecialEffect
:x: <code>Col: 11 &ndash; 13 (int32)</code>

*- no description -*
&nbsp;

### WorldEffect
:x: <code>Col: 14 (int32)</code>

*- no description -*
&nbsp;

### SoundID
:x: <code>Col: 15 (int32)</code>

Sound effect associated with the visual effects.
&nbsp;

### ShakeID
:x: <code>Col: 16 (uint32)</code>

*- no description -*
&nbsp;

### CharProc
:x: <code>Col: 17 &ndash; 20 (int32)</code>

Known value `17` in col. 17 reference to item entry in col. 25, example spell - `58493` (Mohawk Grenade), point to item `43486` (Mohawk Mask)
&nbsp;

### CharParamA
:x: <code>Col: 21 &ndash; 24 (float)</code>

Colormask converted from HEX to DECIMAL (can be used for caster or target color)
&nbsp;

### CharParamB
:x: <code>Col: 25 &ndash; 28 (float)</code>

*- no description -*
&nbsp;

### CharParamC
:x: <code>Col: 29 &ndash; 32 (float)</code>

*- no description -*
&nbsp;

### CharParamD
:x: <code>Col: 33 &ndash; 36 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spellvisualeffectname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellVisualEffectName'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisualkitareamodel" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisualKitAreaModel'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
