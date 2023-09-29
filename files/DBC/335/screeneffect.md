---
title: ScreenEffect.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/scalingstatvalues" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ScalingStatValues'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/servermessages" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ServerMessages'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# ScreenEffect.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=screeneffect&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/ScreenEffect)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Name](#name) | string |  |
| 2 | [Type](#type) | uint32 |  |
| 3 | [Color](#color) | int32 |  |
| 4 | [Edge](#edge) | uint32 |  |
| 5 | [BW](#bw) | uint32 |  |
| 6 | [UnkParam](#unkparam) | uint32 |  |
| 7 | [LightParamsID](#lightparamsid) | int32 | [LightParams.dbc/0](/files/DBC/335/lightparams#id) |
| 8 | [SoundAmbienceID](#soundambienceid) | uint32 | [SoundAmbience.dbc/0](/files/DBC/335/soundambience#id) |
| 9 | [ZoneMusicID](#zonemusicid) | uint32 | [ZoneMusic.dbc/0](/files/DBC/335/zonemusic#id) |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Name
:x: <code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### Type
:x: <code>Col: 2 (uint32)</code>

* 0: Glow
* 1: Death
* 2: NetherWorld
* 3: SwirlingFog
&nbsp;

### Color
:x: <code>Col: 3 (int32)</code>

*- no description -*
&nbsp;

### Edge
<code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### BW
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### UnkParam
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### LightParamsID
:x: <code>Col: 7 (int32)</code>

*- no description -*
&nbsp;

### SoundAmbienceID
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### ZoneMusicID
:x: <code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/scalingstatvalues" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'ScalingStatValues'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/servermessages" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'ServerMessages'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
