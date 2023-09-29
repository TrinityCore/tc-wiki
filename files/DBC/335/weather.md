---
title: Weather.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/weaponswingsounds2" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WeaponSwingSounds2'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/wmoareatable" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WMOAreaTable'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Weather.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=weather&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Weather)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [AmbiecenSoundID](#ambiecensoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
| 2 | [EffectType](#effecttype) | uint32 |  |
| 3 | [TransitionSkyBox](#transitionskybox) | uint32 |  |
| 4 | [EffectColor_R](#effectcolor) | float |  |
| 5 | [EffectColor_G](#effectcolor) | float |  |
| 6 | [EffectColor_B](#effectcolor) | float |  |
| 7 | [EffectTexture](#effecttexture) | string |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### AmbiecenSoundID
:x: <code>Col: 1 (uint32)</code>

The sound played when the weather is taking place.
&nbsp;

### EffectType
:x: <code>Col: 2 (uint32)</code>

* 1: Rain
* 2: Snow
* 3: Sand
&nbsp;

### TransitionSkyBox
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### EffectColor
:x: <code>Col: 4 &ndash; 6 (float)</code>

0 … 1.0
&nbsp;

### EffectTexture
:x: <code>Col: 7 (string)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/weaponswingsounds2" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'WeaponSwingSounds2'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/wmoareatable" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'WMOAreaTable'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
