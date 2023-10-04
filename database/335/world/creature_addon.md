---
title: creature_addon
description:
published: true
date: 2023-07-08T22:34:41.562Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:03:15.869Z
---

<a href="https://trinitycore.info/en/database/335/world/creature" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'creature'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/creature_classlevelstats" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'creature_classlevelstats'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

The [creature_addon](../world/creature_addon) and [creature_template_addon](../world/creature_template_addon)  tables define different things that are applied on creatures when they are loaded. These "different things" can be for example to have the creature be mounted, to have it emote something, to have it display an aura effect, etc. Through the use of the fields in this table, many things can be changed about the outward visual appearance of the creature. The creature_template_addon table affects all creatures with that creature template ID while the creature_addon table affects individually spawned creatures (so that two creatures using the same template can look different).

> Note: A [creature_addon](../world/creature_addon) record will override a [creature_template_addon](../world/creature_template_addon) record should they overlap on the same creature.
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned | PRI | NO | 0 |  |  |
| [path_id](#path_id) | int | unsigned |  | NO | 0 |  |  |
| [mount](#mount) | mediumint | unsigned |  | NO | 0 |  |  |
| [MountCreatureID](#mountcreatureid) | int | unsigned |  | NO | 0 |  |  |
| [StandState](#standstate) | tinyint | unsigned |  | NO | 0 |  |  |
| [AnimTier](#animtier) | tinyint | unsigned |  | NO | 0 |  |  |
| [VisFlags](#visflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [SheathState](#sheathstate) | tinyint | unsigned |  | NO | 1 |  |  |
| [PvPFlags](#pvpflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [emote](#emote) | mediumint | unsigned |  | NO | 0 |  |  |
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
The [CreatureDisplayInfo ID](/files/DBC/335/creaturedisplayinfo#id) of the mount to be used to make the creature appear mounted. The value here overrides the value for the creature's unit field UNIT_FIELD_MOUNTDISPLAYID.
&nbsp;

### MountCreatureID
The [creature entry](../world/creature_template#entry) this creature is mounted on.
> Note: This field is currently not in use.
{.is-info}

&nbsp;

### StandState
The value here overrides the `UnitStandStateType` for the creature's unit field UNIT_FIELD_BYTES_1 (see [UnitDefines.h](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h) for complete list)
| Value | Name | Description |
|-------|------|-------------|
| 1 | UNIT_STAND_STATE_SIT | Sitting |
| 3 | UNIT_STAND_STATE_SLEEP | Sleep |
| 7 | UNIT_STAND_STATE_DEAD | Shows health bar as empty (combine with the state dead emote to make a creature look dead) |
| 8 | UNIT_STAND_STATE_KNEEL | Makes the mob kneel |
| 9 | UNIT_STAND_STATE_SUBMERGED | Submerges the creature below the ground |
{.dense}

&nbsp;

### AnimTier
The value here overrides the `AnimTier` for the creature's unit field UNIT_FIELD_BYTES_1 (see [UnitDefines.h](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h) for complete list)
| Value | Name | Description |
|-------|------|-------------|
| 0 | Ground | plays ground tier animations |
| 1 | Swim | falls back to ground tier animations, not handled by the client, should never appear in sniffs, will prevent tier change animations from playing correctly if used |
| 2 | Hover | plays flying tier animations or falls back to ground tier animations, automatically enables hover clientside when entering visibility with this value |
| 3 | Fly | plays flying tier animations |
| 4 | Submerged |   |
{.dense}

&nbsp;

### VisFlags
The value here overrides the `UnitVisFlags` for the creature's unit field UNIT_FIELD_BYTES_1 (see [UnitDefines.h](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h) for complete list)
| Value | Name |
|-------|------|
| 2 | UNIT_VIS_FLAGS_CREEP |
| 4 | UNIT_VIS_FLAGS_UNTRACKABLE |
{.dense}

&nbsp;

### SheathState
The value here overrides the `SheathState` for the creature's unit field UNIT_FIELD_BYTES_2 (see [UnitDefines.h](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h) for complete list)
| Value | Name | Description |
|-------|------|-------------|
| 0 | SHEATH_STATE_UNARMED | non prepared weapon |
| 1 | SHEATH_STATE_MELEE | prepared melee weapon |
| 2 | SHEATH_STATE_RANGED | prepared ranged weapon |
{.dense}

&nbsp;

### PvPFlags
The value here overrides the `UnitPVPStateFlags` for the creature's unit field UNIT_FIELD_BYTES_2 (see [UnitDefines.h](https://github.com/TrinityCore/TrinityCore/blob/3.3.5/src/server/game/Entities/Unit/UnitDefines.h) for complete list)
| Value | Name |
|-------|------|
| 0x01 | UNIT_BYTE2_FLAG_PVP |
| 0x04 | UNIT_BYTE2_FLAG_FFA_PVP |
| 0x08 | UNIT_BYTE2_FLAG_SANCTUARY |
{.dense}

&nbsp;

### emote
[Emote ID](/files/DBC/335/emotes#id) that the creature should continually perform.
&nbsp;

### visibilityDistanceType
Adjusts the distance from which the creature is visible.
| # | Range | Comment |
|---|-------|---------|
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
