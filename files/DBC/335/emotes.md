---
title: Emotes.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/durabilityquality" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DurabilityQuality'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/emotestext" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'EmotesText'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# Emotes.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=emotes&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/Emotes)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [EmoteSlashCommand](#emoteslashcommand) | string |  |
| 2 | [AnimID](#animid) | uint32 | [AnimationData.dbc/0](/files/DBC/335/animationdata#id) |
| 3 | [EmoteFlags](#emoteflags) | uint32 |  |
| 4 | [EmoteSpecProc](#emotespecproc) | uint32 |  |
| 5 | [EmoteSpecProcParam](#emotespecprocparam) | uint32 |  |
| 6 | [EventSoundID](#eventsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id) |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### EmoteSlashCommand
:x: <code>Col: 1 (string)</code>

Internal name
&nbsp;

### AnimID
:x: <code>Col: 2 (uint32)</code>

Ref to animationData
&nbsp;

### EmoteFlags
<code>Col: 3 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 1 | 0x0001 | Only while standig |
| 2 | 0x0002 | Emote applies to mount |
| 4 | 0x0004 | Not while channeling |
| 8 | 0x0008 | Talk anim - talk |
| 16 | 0x0010 | Talk anim - question |
| 32 | 0x0020 | Talk anim - exclamation |
| 64 | 0x0040 | Talk anim - shout |
| 128 | 0x0080 | Not while swimming |
| 256 | 0x0100 | Talk anim - laugh |
| 512 | 0x0200 | Ok while sleeping or dead |
| 1024 | 0x0400 | Disallow from client |
| 2048 | 0x0800 | not while casting |
| 4096 | 0x1000 | Movement ends |
| 8192 | 0x2000 | Interrupt on interact |
| 16384 | 0x4000 | Only while still |
| 32768 | 0x8000 | Not while flying |
{.dense}

&nbsp;

### EmoteSpecProc
<code>Col: 4 (uint32)</code>

* 0: Oneshot emote
* 1: change unit stand state
* 2: continuous emote state
&nbsp;

### EmoteSpecProcParam
<code>Col: 5 (uint32)</code>

if **EmoteSpecProc** = 1 then this contains:
[`enum UnitStandStateType`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h#L32-L46)
| ID | Name |
|----|------|
| 0 | UNIT_STAND_STATE_STAND |
| 1 | UNIT_STAND_STATE_SIT |
| 2 | UNIT_STAND_STATE_SIT_CHAIR |
| 3 | UNIT_STAND_STATE_SLEEP |
| 4 | UNIT_STAND_STATE_SIT_LOW_CHAIR |
| 5 | UNIT_STAND_STATE_SIT_MEDIUM_CHAIR |
| 6 | UNIT_STAND_STATE_SIT_HIGH_CHAIR |
| 7 | UNIT_STAND_STATE_DEAD |
| 8 | UNIT_STAND_STATE_KNEEL |
| 9 | UNIT_STAND_STATE_SUBMERGED |
{.dense}

&nbsp;

### EventSoundID
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/durabilityquality" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DurabilityQuality'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/emotestext" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'EmotesText'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
