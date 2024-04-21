---
title: CreatureSoundData.dbc
description: 
published: true
date: 2023-10-08T14:05:05.117Z
tags: 3.3.5, 3.3.5a, 335, 335a, wotlk, dbc, database client
editor: markdown
dateCreated: 2023-10-04T08:02:11.651Z
---

<a href="https://trinitycore.info/files/DBC/335/creaturemovementinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureMovementInfo'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturespelldata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureSpellData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# CreatureSoundData.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=creaturesounddata&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/CreatureSoundData)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id-alt) | uint32 |  |
| 1 | [SoundExertionID](#soundexertionid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 2 | [SoundExertionCriticalID](#soundexertioncriticalid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 3 | [SoundInjuryID](#soundinjuryid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 4 | [SoundInjuryCriticalID](#soundinjurycriticalid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 5 | [SoundInjuryCrushingBlowID](#soundinjurycrushingblowid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 6 | [SoundDeathID](#sounddeathid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 7 | [SoundStunID](#soundstunid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 8 | [SoundStandID](#soundstandid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 9 | [SoundFootstepID](#soundfootstepid) | uint32 | [FootstepTerrainLookup.dbc/0](/files/DBC/335/footstepterrainlookup#id-alt) |
| 10 | [SoundAggroID](#soundaggroid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 11 | [SoundWingFlapID](#soundwingflapid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 12 | [SoundWingGlideID](#soundwingglideid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 13 | [SoundAlertID](#soundalertid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 14 | [SoundFidget_0](#soundfidget) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 15 | [SoundFidget_1](#soundfidget) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 16 | [SoundFidget_2](#soundfidget) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 17 | [SoundFidget_3](#soundfidget) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 18 | [SoundFidget_4](#soundfidget) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 19 | [CustomAttack_0](#customattack) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 20 | [CustomAttack_1](#customattack) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 21 | [CustomAttack_2](#customattack) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 22 | [CustomAttack_3](#customattack) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 23 | [NPCSoundID](#npcsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 24 | [LoopSoundID](#loopsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 25 | [CreatureImpactType](#creatureimpacttype) | uint32 |  |
| 26 | [SoundJumpStartID](#soundjumpstartid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 27 | [SoundJumpEndID](#soundjumpendid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 28 | [SoundPetAttackID](#soundpetattackid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 29 | [SoundPetOrderID](#soundpetorderid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 30 | [SoundPetDismissID](#soundpetdismissid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 31 | [FidgetDelaySecondsMin](#fidgetdelaysecondsmin) | float |  |
| 32 | [FidgetDelaySecondsMax](#fidgetdelaysecondsmax) | float |  |
| 33 | [BirthSoundID](#birthsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 34 | [SpellCastDirectedSoundID](#spellcastdirectedsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 35 | [SubmergeSoundID](#submergesoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 36 | [SubmergedSoundID](#submergedsoundid) | uint32 | [SoundEntries.dbc/0](/files/DBC/335/soundentries#id-alt) |
| 37 | [CreatureSoundDataIDPet](#creaturesounddataidpet) | uint32 | [CreatureSoundData.dbc/0](#id-alt) |
&nbsp;
## Description of fields

### ID <!-- {#id-alt} -->
:x: <code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### SoundExertionID
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### SoundExertionCriticalID
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### SoundInjuryID
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### SoundInjuryCriticalID
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### SoundInjuryCrushingBlowID
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### SoundDeathID
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### SoundStunID
:x: <code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### SoundStandID
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### SoundFootstepID
:x: <code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

### SoundAggroID
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### SoundWingFlapID
:x: <code>Col: 11 (uint32)</code>

*- no description -*
&nbsp;

### SoundWingGlideID
:x: <code>Col: 12 (uint32)</code>

*- no description -*
&nbsp;

### SoundAlertID
:x: <code>Col: 13 (uint32)</code>

*- no description -*
&nbsp;

### SoundFidget
:x: <code>Col: 14 &ndash; 18 (uint32)</code>

*- no description -*
&nbsp;

### CustomAttack
:x: <code>Col: 19 &ndash; 22 (uint32)</code>

*- no description -*
&nbsp;

### NPCSoundID
:x: <code>Col: 23 (uint32)</code>

*- no description -*
&nbsp;

### LoopSoundID
:x: <code>Col: 24 (uint32)</code>

*- no description -*
&nbsp;

### CreatureImpactType
:x: <code>Col: 25 (uint32)</code>

*- no description -*
&nbsp;

### SoundJumpStartID
:x: <code>Col: 26 (uint32)</code>

*- no description -*
&nbsp;

### SoundJumpEndID
:x: <code>Col: 27 (uint32)</code>

*- no description -*
&nbsp;

### SoundPetAttackID
:x: <code>Col: 28 (uint32)</code>

*- no description -*
&nbsp;

### SoundPetOrderID
:x: <code>Col: 29 (uint32)</code>

*- no description -*
&nbsp;

### SoundPetDismissID
:x: <code>Col: 30 (uint32)</code>

Used by SMSG_PET_DISMISS_SOUND.
&nbsp;

### FidgetDelaySecondsMin
:x: <code>Col: 31 (flaot)</code>

Time / Interval? 30 seconds?
&nbsp;

### FidgetDelaySecondsMax
:x: <code>Col: 32 (flaot)</code>

Time / Interval? 30 seconds?
&nbsp;

### BirthSoundID
:x: <code>Col: 33 (uint32)</code>

*- no description -*
&nbsp;

### SpellCastDirectedSoundID
:x: <code>Col: 34 (uint32)</code>

*- no description -*
&nbsp;

### SubmergeSoundID
:x: <code>Col: 35 (uint32)</code>

*- no description -*
&nbsp;

### SubmergedSoundID
:x: <code>Col: 36 (uint32)</code>

*- no description -*
&nbsp;

### CreatureSoundDataIDPet
:x: <code>Col: 37 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/creaturemovementinfo" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'CreatureMovementInfo'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/creaturespelldata" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'CreatureSpellData'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
