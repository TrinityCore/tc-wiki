---
title: SpellVisualKit.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/spellvisualeffectname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellVisualEffectName'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisualkitareamodel" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisualKitAreaModel'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

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
| 1 | [StartAnimID](#startanimid) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |      Seems to be caster animation of some sort...
| 2 | [AnimID](#animid) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |      Caster animation.
| 3 | [HeadEffect](#headeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |      Visual effect over the head.
| 4 | [ChestEffect](#chesteffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |      Visual effect at chest.
| 5 | [BaseEffect](#baseeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |      Visual effect at the base/ground.
| 6 | [LeftHandEffect](#lefthandeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |      Visual effect at right hand.
| 7 | [RightHandEffect](#righthandeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |      Visual effect at left hand.
| 8 | [BreathEffect](#breatheffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |      Visual effect of AOE spells/abilities.
| 9 | [LeftWeaponEffect](#leftweaponeffect) | int32 |  |
| 10 | [RightWeaponEffect](#rightweaponeffect) | int32 |  |
| 11 | [SpecialEffect_0](#specialeffect) | int32 |  |
| 12 | [SpecialEffect_1](#specialeffect) | int32 |  |
| 13 | [SpecialEffect_2](#specialeffect) | int32 |  |
| 14 | [WorldEffect](#worldeffect) | int32 | [SpellVisualEffectName.dbc/0](/files/DBC/335/spellvisualeffectname#id) |
| 15 | [SoundID](#soundid) | int32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |      Sound effect associated with the visual effects.
| 16 | [ShakeID](#shakeid) | uint32 | [CameraShakes.dbc/0](/files/DBC/335/camerashakes#id) |
| 17 | [CharProc](#charproc) | int32 |  |   Known value "17" reference to item_entry in column 26, example spell - 58493(mohawk grenade), point to item 43486 (Mohawk Mask)
| 18 | [CharParamA_0](#charparama) | float |  |     Colormask converted from HEX to DECIMAL (can be used for caster or target color)
| 19 | [CharParamA_1](#charparama) | float |  |
| 20 | [CharParamA_2](#charparama) | float |  |
| 21 | [CharParamA_3](#charparama) | float |  |
| 22 | [CharParamB_0](#charparamb) | float |  |
| 23 | [CharParamB_1](#charparamb) | float |  |
| 24 | [CharParamB_2](#charparamb) | float |  |
| 25 | [CharParamB_3](#charparamb) | float |  |
| 26 | [CharParamC_0](#charparamc) | float |  |
| 27 | [CharParamC_1](#charparamc) | float |  |
| 28 | [CharParamC_2](#charparamc) | float |  |
| 29 | [CharParamC_3](#charparamc) | float |  |
| 30 | [CharParamD_0](#charparamd) | float |  |
| 31 | [CharParamD_1](#charparamd) | float |  |
| 32 | [CharParamD_2](#charparamd) | float |  |
| 33 | [CharParamD_3](#charparamd) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### StartAnimID
:x: <code>Col: 1 (int32)</code>

*- no description -*
&nbsp;

### AnimID
:x: <code>Col: 2 (int32)</code>

*- no description -*
&nbsp;

### HeadEffect
:x: <code>Col: 3 (int32)</code>

*- no description -*
&nbsp;

### ChestEffect
:x: <code>Col: 4 (int32)</code>

*- no description -*
&nbsp;

### BaseEffect
:x: <code>Col: 5 (int32)</code>

*- no description -*
&nbsp;

### LeftHandEffect
:x: <code>Col: 6 (int32)</code>

*- no description -*
&nbsp;

### RightHandEffect
:x: <code>Col: 7 (int32)</code>

*- no description -*
&nbsp;

### BreathEffect
:x: <code>Col: 8 (int32)</code>

*- no description -*
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

*- no description -*
&nbsp;

### ShakeID
:x: <code>Col: 16 (uint32)</code>

*- no description -*
&nbsp;

### CharProc
:x: <code>Col: 17 (int32)</code>

*- no description -*
&nbsp;

### CharParamA
:x: <code>Col: 18 &ndash; 21 (float)</code>

*- no description -*
&nbsp;

### CharParamB
:x: <code>Col: 22 &ndash; 25 (float)</code>

*- no description -*
&nbsp;

### CharParamC
:x: <code>Col: 26 &ndash; 29 (float)</code>

*- no description -*
&nbsp;

### CharParamD
:x: <code>Col: 30 &ndash; 33 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/spellvisualeffectname" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SpellVisualEffectName'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/spellvisualkitareamodel" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SpellVisualKitAreaModel'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
