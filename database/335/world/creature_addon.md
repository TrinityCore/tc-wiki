---
title: creature_addon
description: 
published: true
date: 2023-07-07T22:25:06.040Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:15.869Z
---

<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_classlevelstats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

The creature_addon and creature_template_addon tables define different things that are applied on creatures when they are loaded. These "different things" can be for example to have the creature be mounted, to have it emote something, to have it display an aura effect, etc. Through the use of the fields in this table, many things can be changed about the outward visual appearance of the creature. The creature_template_addon table affects all creatures with that creature template ID while the creature_addon table affects individually spawned creatures (so that two creatures using the same template can look different).

NOTE: A creature_addon record will override a creature_template_addon record should they overlap on the same creature.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [path_id](#path_id) | int | unsigned |  | NO | 0 |  |  |
| [mount](#mount) | mediumint | unsigned |  | NO | 0 |  |  |
| [MountCreatureID](#mountcreatureid) | int | unsigned |  | NO | 0 |  |  |
| [bytes1](#bytes1) | int | unsigned |  | NO | 0 |  |  |
| [bytes2](#bytes2) | int | unsigned |  | NO | 1 |  |  |
| [emote](#emote) | int | unsigned |  | NO | 0 |  |  |
| [visibilityDistanceType](#visibilitydistancetype) | tinyint | unsigned |  | NO | 0 |  |  |
| [auras](#auras) | text |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### guid
Signifies a unique [creature guid](../world/creature#guid). It will affect just that creature whose GUID matches the one specified here.
&nbsp;

### path_id
If a creature has waypoint pathed movement, this field hold the [waypoint_data.id](../world/waypoint_data#id) for the path the creature is to follow.
&nbsp;

### mount
The model ID of the mount to be used to make the creature appear mounted. The value here overrides the value for the creature's unit field UNIT_FIELD_MOUNTDISPLAYID.
&nbsp;

### MountCreatureID
*- no description -*
&nbsp;

### bytes1
The value here overrides the value for the creature's unit field UNIT_FIELD_BYTES_1.

List of known values and what their visual effects on the creature (see [UnitDefines.h](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h) for complete list)
|---|---|
| 1 | Sitting |
| 3 | Sleep |
| 7 | Shows health bar as empty (combine with the state dead emote to make a creature look dead) |
| 8 | Makes the mob kneel |
| 9 | Submerges the creature below the ground |
| 33554432  | Hover mode |
{.dense}

&nbsp;

### bytes2
The value here overrides the value for the creature's unit field UNIT_FIELD_BYTES_2.

NOTE: creatures always have melee weapon ready if equipped, unless specified otherwise

List of few known values and what their visual effects on the creature (see [UnitDefines.h](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h) for complete list)
|---|---|
| 0 | STATE_UNARMED (not prepared weapon) |
| 1 | STATE_MELEE (prepared melee weapon) |
| 2 | STATE_RANGED (prepared ranged weapon) |
{.dense}

&nbsp;

### emote
Emote ID that the creature should continually perform. (see Emotes.dbc)

&nbsp;

### visibilityDistanceType
| # | Range | effective Value |
|---|---|---|
| 0 | Normal | 100m |
| 1 | Tiny | 25m |
| 2 | Small | 50m |
| 3 | Large | 200m |
| 4 | Gigantic | 400m |
| 5 | Infinite | ∞ | 
{.dense}

&nbsp;
### auras
This field controls any auras to be applied on the creature (both in effect and visually). To apply multiple auras, you can add more aura entries, separating each entry by a space. Remember that if a spell applies multiple auras.

List of useful aura entries (examples):
* `16380` - Makes the creature invisible.
* `18950` - Makes the creature detect other invisible units (players or creatures).
* `16380 18950` - Both auras above
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_classlevelstats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
