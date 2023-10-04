---
title: AnimationData.dbc
description:
published: true
date: 2023-09-30CEST01:03:36.000Z
tags: dbc, database client, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2023-08-09CEST00:06:01.000Z
---
<a href="https://trinitycore.info/files/DBC/335/achievement_criteria" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Achievement_Criteria'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/areagroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AreaGroup'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

# AnimationData.dbc
##### :open_book: Content on [WoW.tools](https://wow.tools/dbc/?dbc=animationdata&build=3.3.5.12340)
##### :pencil: Structure on [wowdev.wiki](https://wowdev.wiki/DB/AnimationData)
&nbsp;

> :x: denotes unused fields
{.is-info}


## Structure

| Index | Field | Type | Reference |
| :---: | --- | :---: | --- |
| 0 | [ID](#id) | uint32 |  |
| 1 | [Name](#name) | string |  |
| 2 | [Weaponflags](#weaponflags) | uint32 |  |
| 3 | [Bodyflags](#bodyflags) | uint32 |  |
| 4 | [Flags](#flags) | uint32 |  |
| 5 | [FallbackID](#fallbackid) | uint32 | [AnimationData.dbc/0](#id) |
| 6 | [BehaviorID](#behaviorid) | uint32 | [AnimationData.dbc/0](#id) |
| 7 | [BehaviorTier](#behaviortier) | uint32 |  |

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

### Weaponflags
:x: <code>Col: 2 (uint32)</code>

| Value | Flag | Comment |
|-------|------|---------|
| 0 | 0x00 | weapon untouched/non-affected |
| 4 | 0x04 | weapon puts back automatically(either somehow different ?) |
| 16 | 0x10 | weapon puts back automatically(either somehow different ?) |
| 32 | 0x20 | pull weapons out during animation. |
{.dense}

&nbsp;

### Bodyflags
:x: <code>Col: 3 (uint32)</code>

*- no description -*
&nbsp;

### Flags
:x: <code>Col: 4 (uint32)</code>

*- no description -*
&nbsp;

### FallbackID
:x: <code>Col: 5 (uint32)</code>

The animation, preceeding this one.
&nbsp;

### BehaviorID
:x: <code>Col: 6 (uint32)</code>

Same as ID for normal animations.
&nbsp;

### BehaviorTier
:x: <code>Col: 7 (uint32)</code>

[`enum class AnimTier`](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h#L84-L93)
| ID | Name | Comment |
|----|------|---------|
| 0 | Ground | plays ground tier animations |
| 1 | Swim | falls back to ground tier animations, not handled by the client, should never appear in sniffs, will prevent tier change animations from playing correctly if used |
| 2 | Hover | plays flying tier animations or falls back to ground tier animations, automatically enables hover clientside when entering visibility with this value |
| 3 | Fly | plays flying tier animations |
| 4 | Submerged |  |
{.dense}

&nbsp;

<a href="https://trinitycore.info/files/DBC/335/achievement_criteria" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'Achievement_Criteria'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/DBC" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to DBCs (3.3.5a)</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/files/DBC/335/areagroup" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'AreaGroup'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
