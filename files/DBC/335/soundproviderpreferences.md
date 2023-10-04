---
title: SoundProviderPreferences.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/soundfilterelem" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SoundFilterElem'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/soundsamplepreferences" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SoundSamplePreferences'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# SoundProviderPreferences.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=soundproviderpreferences&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/SoundProviderPreferences)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Description](#description) | string |  |
| 2 | [Flags](#flags) | uint32 |  |
| 3 | [EAXEnvironmentSelection](#eaxenvironmentselection) | uint32 |  |
| 4 | [EAXDecayTime](#eaxdecaytime) | float |  |
| 5 | [EAX2EnvironmentSize](#eax2environmentsize) | float |  |
| 6 | [EAX2EnvironmentDiffusion](#eax2environmentdiffusion) | float |  |
| 7 | [EAX2Room](#eax2room) | int32 |  |
| 8 | [EAX2RoomHF](#eax2roomhf) | int32 |  |
| 9 | [EAX2DecayHFRatio](#eax2decayhfratio) | float |  |
| 10 | [EAX2Reflections](#eax2reflections) | int32 |  |
| 11 | [EAX2ReflectionsDelay](#eax2reflectionsdelay) | float |  |
| 12 | [EAX2Reverb](#eax2reverb) | int32 |  |
| 13 | [EAX2ReverbDelay](#eax2reverbdelay) | float |  |
| 14 | [EAX2RoomRolloff](#eax2roomrolloff) | float |  |
| 15 | [EAX2AirAbsorption](#eax2airabsorption) | float |  |
| 16 | [EAX3RoomLF](#eax3roomlf) | uint32 |  |
| 17 | [EAX3DecayLFRatio](#eax3decaylfratio) | float |  |
| 18 | [EAX3EchoTime](#eax3echotime) | float |  |
| 19 | [EAX3EchoDepth](#eax3echodepth) | float |  |
| 20 | [EAX3ModulationTime](#eax3modulationtime) | float |  |
| 21 | [EAX3ModulationDepth](#eax3modulationdepth) | float |  |
| 22 | [EAX3HFReference](#eax3hfreference) | float |  |
| 23 | [EAX3LFReference](#eax3lfreference) | float |  |
&nbsp;
## Description of fields

### ID
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### Description
:x: <code>Col: 1 (string)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### EAXEnvironmentSelection
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### EAXDecayTime
:x: <code>Col: 4 (float)</code>

*- no description -*
&nbsp;

### EAX2EnvironmentSize
:x: <code>Col: 5 (float)</code>

*- no description -*
&nbsp;

### EAX2EnvironmentDiffusion
:x: <code>Col: 6 (float)</code>

*- no description -*
&nbsp;

### EAX2Room
:x: <code>Col: 7 (int32)</code>

*- no description -*
&nbsp;

### EAX2RoomHF
:x: <code>Col: 8 (int32)</code>

*- no description -*
&nbsp;

### EAX2DecayHFRatio
:x: <code>Col: 9 (float)</code>

*- no description -*
&nbsp;

### EAX2Reflections
:x: <code>Col: 10 (int32)</code>

*- no description -*
&nbsp;

### EAX2ReflectionsDelay
:x: <code>Col: 11 (float)</code>

*- no description -*
&nbsp;

### EAX2Reverb
:x: <code>Col: 12 (int32)</code>

*- no description -*
&nbsp;

### EAX2ReverbDelay
:x: <code>Col: 13 (float)</code>

*- no description -*
&nbsp;

### EAX2RoomRolloff
:x: <code>Col: 14 (float)</code>

*- no description -*
&nbsp;

### EAX2AirAbsorption
:x: <code>Col: 15 (float)</code>

*- no description -*
&nbsp;

### EAX3RoomLF
:x: <code>Col: 16 (uint32)</code>

*- no description -*
&nbsp;

### EAX3DecayLFRatio
:x: <code>Col: 17 (float)</code>

*- no description -*
&nbsp;

### EAX3EchoTime
:x: <code>Col: 18 (float)</code>

*- no description -*
&nbsp;

### EAX3EchoDepth
:x: <code>Col: 19 (float)</code>

*- no description -*
&nbsp;

### EAX3ModulationTime
:x: <code>Col: 20 (float)</code>

*- no description -*
&nbsp;

### EAX3ModulationDepth
:x: <code>Col: 21 (float)</code>

*- no description -*
&nbsp;

### EAX3HFReference
:x: <code>Col: 22 (float)</code>

*- no description -*
&nbsp;

### EAX3LFReference
:x: <code>Col: 23 (float)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/soundfilterelem" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'SoundFilterElem'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/soundsamplepreferences" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'SoundSamplePreferences'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
