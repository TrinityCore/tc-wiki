---
title: DestructibleModelData.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/declinedwordcases" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DeclinedWordCases'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/dungeonencounter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DungeonEncounter'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# DestructibleModelData.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=destructiblemodeldata&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/DestructibleModelData)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [State0ImpactEffectDoodadSet](#state0impacteffectdoodadset) | uint32 |  |
| 2 | [State0AmbientDoodadSet](#state0ambientdoodadset) | uint32 |  |
| 3 | [State1Wmo](#state1wmo) | uint32 | [GameObjectDisplayInfo.dbc/0](/files/DBC/335/gameobjectdisplayinfo#id) |
| 4 | [State1DestructionDoodadSet](#state1destructiondoodadset) | uint32 |  |
| 5 | [State1ImpactEffectDoodadSet](#state1impacteffectdoodadset) | uint32 |  |
| 6 | [State1AmbientDoodadSet](#state1ambientdoodadset) | uint32 |  |
| 7 | [State2Wmo](#state2wmo) | uint32 | [GameObjectDisplayInfo.dbc/0](/files/DBC/335/gameobjectdisplayinfo#id) |
| 8 | [State2DestructionDoodadSet](#state2destructiondoodadset) | uint32 |  |
| 9 | [State2ImpactEffectDoodadSet](#state2impacteffectdoodadset) | uint32 |  |
| 10 | [State2AmbientDoodadSet](#state2ambientdoodadset) | uint32 |  |
| 11 | [State3Wmo](#state3wmo) | uint32 | [GameObjectDisplayInfo.dbc/0](/files/DBC/335/gameobjectdisplayinfo#id) |
| 12 | [State3InitDoodadSet](#state3initdoodadset) | uint32 |  |
| 13 | [State3AmbientDoodadSet](#state3ambientdoodadset) | uint32 |  |
| 14 | [EjectDirection](#ejectdirection) | uint32 |  |
| 15 | [RepairGroundFx](#repairgroundfx) | uint32 |  |
| 16 | [DoNotHighlight](#donothighlight) | uint32 |  |
| 17 | [HealEffect](#healeffect) | uint32 |  |
| 18 | [HealEffectSpeed](#healeffectspeed) | uint32 |  |
&nbsp;
## Description of fields

### ID
<code>Col: 0 (uint32)</code>

*- no description -*
&nbsp;

### State0ImpactEffectDoodadSet
:x: <code>Col: 1 (uint32)</code>

*- no description -*
&nbsp;

### State0AmbientDoodadSet
:x: <code>Col: 2 (uint32)</code>

*- no description -*
&nbsp;

### State1Wmo
<code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### State1DestructionDoodadSet
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### State1ImpactEffectDoodadSet
:x: <code>Col: 5 (uint32)</code>

*- no description -*
&nbsp;

### State1AmbientDoodadSet
:x: <code>Col: 6 (uint32)</code>

*- no description -*
&nbsp;

### State2Wmo
<code>Col: 7 (uint32)</code>

*- no description -*
&nbsp;

### State2DestructionDoodadSet
:x: <code>Col: 8 (uint32)</code>

*- no description -*
&nbsp;

### State2ImpactEffectDoodadSet
:x: <code>Col: 9 (uint32)</code>

*- no description -*
&nbsp;

### State2AmbientDoodadSet
:x: <code>Col: 10 (uint32)</code>

*- no description -*
&nbsp;

### State3Wmo
<code>Col: 11 (uint32)</code>

*- no description -*
&nbsp;

### State3InitDoodadSet
:x: <code>Col: 12 (uint32)</code>

*- no description -*
&nbsp;

### State3AmbientDoodadSet
:x: <code>Col: 13 (uint32)</code>

*- no description -*
&nbsp;

### EjectDirection
:x: <code>Col: 14 (uint32)</code>

*- no description -*
&nbsp;

### RepairGroundFx
<code>Col: 15 (uint32)</code>

*- no description -*
&nbsp;

### DoNotHighlight
:x: <code>Col: 16 (uint32)</code>

*- no description -*
&nbsp;

### HealEffect
:x: <code>Col: 17 (uint32)</code>

*- no description -*
&nbsp;

### HealEffectSpeed
:x: <code>Col: 18 (uint32)</code>

*- no description -*
&nbsp;

<a href="https://trinitycore.info/files/DBC/335/declinedwordcases" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'DeclinedWordCases'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/dungeonencounter" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'DungeonEncounter'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
